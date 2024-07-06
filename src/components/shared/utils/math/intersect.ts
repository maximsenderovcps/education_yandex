
interface Shift{
  x: number
  y: number
}

interface RectShift{
  r1:Shift
  r2:Shift
}
export const defaultRectShift = {
      r1:{x:0, y:0},
      r2:{x:0, y:0}
    }
export function intersectRect(
    r1:DOMRect, r2:DOMRect,
    shift:RectShift=defaultRectShift
) {
  return !(
      r2.left + shift.r2.x >= r1.right + shift.r1.x ||
      r2.right + shift.r2.x <= r1.left + shift.r1.x ||
      r2.top + shift.r2.y >= r1.bottom + shift.r1.y ||
      r2.bottom + shift.r2.y <= r1.top + shift.r1.y
  );
}