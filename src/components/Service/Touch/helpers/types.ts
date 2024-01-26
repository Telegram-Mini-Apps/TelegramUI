export interface CustomTouchEvent extends MouseEvent, TouchEvent {}

export interface Gesture {
  startX: number;
  startY: number;
  startT: Date;
  duration: number;
  isPressed: boolean;
  isY: boolean;
  isX: boolean;
  isSlideX: boolean;
  isSlideY: boolean;
  isSlide: boolean;
  clientX: number;
  clientY: number;
  shiftX: number;
  shiftY: number;
  shiftXAbs: number;
  shiftYAbs: number;
}
