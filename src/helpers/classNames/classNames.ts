type Mods = Record<string, boolean | string>

export function classNames(...classes: (string | Mods)[]): string {
  return classes.reduce<string>((acc, cls) => {
    if (typeof cls === 'string') {
      acc += `${acc ? ' ' : ''}${cls}`;
    } else {
      Object.keys(cls).forEach((key) => {
        if (cls[key]) {
          acc += `${acc ? ' ' : ''}${key}`;
        }
      })
    }
    
    return acc;
  }, '')
}