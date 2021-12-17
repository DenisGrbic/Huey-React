import { formatArray } from "lib/arrayObject";

export const wrapFields = (data = []) =>
  formatArray(data).map((item) => ({ fields: item }));
