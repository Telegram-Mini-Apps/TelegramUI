import { clamp } from 'helpers/math';

/**
 * These functions are copied from material-ui
 * https://github.com/mui/material-ui/blob/v5.13.7/packages/mui-base/src/useSlider/useSlider.ts#L89-L105
 */
export const getDecimalPrecision = (num: number) => {
  // This handles the case when num is very small (0.00000001), js will turn this into 1e-8.
  // When num is bigger than 1 or less than -1 it won't get converted to this notation so it's fine.
  if (Math.abs(num) < 1) {
    const parts = num.toExponential().split('e-');
    const matissaDecimalPart = parts[0].split('.')[1];
    return (matissaDecimalPart ? matissaDecimalPart.length : 0) + parseInt(parts[1], 10);
  }

  const decimalPart = num.toString().split('.')[1];
  return decimalPart ? decimalPart.length : 0;
};

export const roundValueToStep = (value: number, step: number, min: number) => {
  const nearest = Math.round((value - min) / step) * step + min;
  return Number(nearest.toFixed(getDecimalPrecision(step)));
};

export const roundedClampWithStep = (val: number, min: number, max: number, step?: number) => {
  if (step == null || step <= 0) {
    return clamp(val, min, max);
  }

  const roundedValue = roundValueToStep(val, step, min);
  return clamp(roundedValue, min, max);
};

export const scaleAndClampValue = (
  value: number,
  from: [number, number],
  to: [number, number],
  options: { step?: number } = {},
) => {
  const scaled = ((value - from[0]) / (from[1] - from[0])) * (to[1] - to[0]) + to[0];
  return roundedClampWithStep(scaled, to[0], to[1], options.step);
};

export const toPercent = (v: number, min: number, max: number) => ((v - min) / (max - min)) * 100;

export const offsetXToScaledValue = (
  startX: number,
  width: number,
  min: number,
  max: number,
  step?: number,
) => {
  return scaleAndClampValue(startX, [0, width], [min, max], { step });
};
