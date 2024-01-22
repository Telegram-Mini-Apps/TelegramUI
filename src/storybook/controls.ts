type ControlTypes = 'text' | null;

export const setControlsTypes = (controls: string[], type: ControlTypes) => {
  return controls.reduce<Record<string, {
    control: { type: ControlTypes },
  }>>((acc, control) => {
    acc[control] = {
      control: { type },
    };

    return acc;
  }, {});
};

export const hideControls = (...controls: string[]) => {
  return setControlsTypes(controls, null);
};

export const textControl = {
  type: 'text',
};

export const hiddenControl = {
  type: null,
};
