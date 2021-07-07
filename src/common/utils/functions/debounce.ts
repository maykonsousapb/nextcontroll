

export function debounce(func:any, wait: number) {
  let timer = null;
  return function() {
      clearTimeout(timer);
      timer = setTimeout(func, wait);
  }
}
