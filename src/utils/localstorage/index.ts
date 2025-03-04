export const setDataToLS = <T extends Record<string, unknown>>(data: T) =>
  Object.keys(data).map((name) =>
    localStorage.setItem(name, JSON.stringify(data[name]))
  );

export const getDataFromLS = <T>(key: string): T | null => {
  const value = localStorage.getItem(key);
  return value ? JSON.parse(value) : null;
};

export const removeDataFromLS = (...args: string[]) =>
  args.forEach((i) => localStorage.removeItem(i));
