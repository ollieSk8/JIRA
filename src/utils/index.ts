import { useEffect, useState } from 'react';

//是否是真 0 值是真
export const isFalsy = (value: unknown): boolean =>
  value === 0 ? false : !value;
export const isVoid = (value: unknown): boolean =>
  value === undefined || value === null || value === '';

//清理对象上的空值
export const cleanObject = (object: { [key: string]: unknown }) => {
  const result = { ...object };
  Object.keys(result).forEach((key: string) => {
    const value = result[key];
    if (isVoid(value)) {
      delete result[key];
    }
  });
  return result;
};

export const useMount = (callback: () => void) => {
  useEffect(() => {
    callback();
    // eslint-disable-next-line
  }, []);
};

export const useDebounce = <T>(value: T, delay?: number): T => {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const timer = setTimeout(() => setDebouncedValue(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);
  return debouncedValue;
};

export const useArray = <T>(args: T[]) => {
  const [value, setValue] = useState(args);
  const add = (item: T): void => {
    setValue((state) => {
      let arr = [...state];
      arr.push(item);
      return arr;
    });
  };
  const clear = (): void => {
    setValue([]);
  };
  const removeIndex = (index: number): void => {
    setValue((state) => {
      let arr = [...state];
      arr.splice(index, 1);
      return arr;
    });
  };

  return { value, clear, removeIndex, add };
};
export const useToggle = (initialValue: boolean): [boolean, () => void] => {
  const [value, setValue] = useState(initialValue);
  const toggleValue = () => setValue(!value);
  return [value, toggleValue];
};
