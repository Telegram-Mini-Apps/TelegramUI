type ControlTypes = 'text' | null;

type ControlArgTypes = Record<string, { control: { type: ControlTypes } }>;

export const setControlsTypes = (
  controls: string[],
  type: ControlTypes
): ControlArgTypes => {
  const result: ControlArgTypes = {};

  for (const control of controls) {
    result[control] = {
      control: { type },
    };
  }

  return result;
};

export const hideControls = (...controls: string[]): ControlArgTypes => {
  return setControlsTypes(controls, null);
};

export const textControl = {
  type: 'text',
};

export const hiddenControl = {
  type: null,
};
