export function countLinesOfText(elementRef) {
  if (elementRef.current) {
    const element = elementRef.current;
    const lineHeight = parseFloat(window.getComputedStyle(element).lineHeight);
    const totalHeight = element.clientHeight;
    const lines = Math.round(totalHeight / lineHeight);
    return lines;
  }
  return 0;
}
