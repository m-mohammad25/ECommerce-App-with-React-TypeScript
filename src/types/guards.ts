// value is string: if return value is true, return string as a type, dont return true/false.
const isString = (value: unknown): value is string => typeof value === "string";

export { isString };
