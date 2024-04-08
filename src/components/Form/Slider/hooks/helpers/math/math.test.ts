import {
  getDecimalPrecision,
  offsetXToScaledValue,
  roundedClampWithStep,
  roundValueToStep,
  scaleAndClampValue,
  toPercent,
} from './index';

describe('getDecimalPrecision', () => {
  it('returns correct precision for fractional numbers', () => {
    expect(getDecimalPrecision(0.00000001)).toBe(8);
    expect(getDecimalPrecision(1.234)).toBe(3);
  });

  it('returns 0 for whole numbers', () => {
    expect(getDecimalPrecision(10)).toBe(0);
  });

  it('handles negative numbers', () => {
    expect(getDecimalPrecision(-0.001)).toBe(3);
  });
});

describe('roundValueToStep', () => {
  it('rounds value to nearest step', () => {
    expect(roundValueToStep(5.5, 1, 0)).toBe(6);
    expect(roundValueToStep(2.3, 0.5, 0)).toBe(2.5);
  });
});

describe('roundedClampWithStep', () => {
  it('clamps and rounds value with step', () => {
    expect(roundedClampWithStep(2, 0, 5, 1)).toBe(2);
    expect(roundedClampWithStep(-1, 0, 5, 0.5)).toBe(0);
    expect(roundedClampWithStep(6, 0, 5, 1)).toBe(5);
  });

  it('handles null step by clamping value', () => {
    expect(roundedClampWithStep(6, 0, 5)).toBe(5);
  });
});

describe('scaleAndClampValue', () => {
  it('scales and clamps value', () => {
    expect(scaleAndClampValue(50, [0, 100], [0, 200])).toBe(100);
    expect(scaleAndClampValue(110, [0, 100], [0, 200], { step: 25 })).toBe(200);
  });
});

describe('toPercent', () => {
  it('converts a value to a percentage of a range', () => {
    expect(toPercent(50, 0, 100)).toBe(50);
    expect(toPercent(25, 0, 200)).toBe(12.5);
  });

  it('handles values outside the range', () => {
    expect(toPercent(150, 0, 100)).toBe(150);
    expect(toPercent(-50, 0, 100)).toBe(-50);
  });

  it('works with negative ranges', () => {
    expect(toPercent(-150, -200, 0)).toBe(25);
  });
});

describe('offsetXToScaledValue', () => {
  it('converts a startX position to a value within a specified range', () => {
    expect(offsetXToScaledValue(50, 100, 0, 200)).toBe(100);
    expect(offsetXToScaledValue(75, 100, 0, 200, 50)).toBe(150);
  });

  it('clamps values to the specified min and max', () => {
    expect(offsetXToScaledValue(110, 100, 0, 200)).toBe(200);
    expect(offsetXToScaledValue(-10, 100, 0, 200)).toBe(0);
  });

  it('handles step values correctly', () => {
    expect(offsetXToScaledValue(50, 100, 0, 200, 25)).toBe(100);
    expect(offsetXToScaledValue(65, 100, 0, 200, 25)).toBe(125);
  });
});
