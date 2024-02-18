interface SimulateReactInputTargetState {
  _valueTracker?: {
    getValue(): string;
    setValue(value: string): void;
    stopTracking(): void;
  };
}

/** @see https://github.com/facebook/react/issues/11488#issuecomment-347775628 */
export const simulateReactInput = (
  target: HTMLInputElement & SimulateReactInputTargetState,
  nextValue = '',
) => {
  try {
    const simulateTarget = target;
    const prevValue = simulateTarget.value;
    simulateTarget.value = nextValue;

    // eslint-disable-next-line no-underscore-dangle
    const tracker = simulateTarget._valueTracker;
    tracker?.setValue(prevValue);

    const event = new Event('input', { bubbles: true });
    target.dispatchEvent(event);
  } catch (error) {
    if (process.env.NODE_ENV === 'development') {
      throw error;
    }
  }
};
