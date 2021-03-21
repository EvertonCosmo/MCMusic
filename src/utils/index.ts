export function stringToType<T>(data: string) {
  const c: T = JSON.parse(data);
  return c as T;
}
