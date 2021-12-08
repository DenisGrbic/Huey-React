import { formatArray } from "lib/arrayObject";

export const formatCSV = ({ value = [], columns = [] }) => {
  const formatedColumns = columns.map((column) => {
    return {
      name: column,
      index: formatArray(value?.[0]).findIndex((c) => c === column),
    };
  });
  return formatArray(value)
    .map((row = []) => {
      return formatedColumns.reduce((ret, cur) => {
        return { ...(ret ?? {}), [cur?.name]: row?.[cur?.index] };
      }, {});
    })
    .filter((row = {}) => {
      if (
        Object.keys(row).length ===
        Object.values(row).filter((item) => item).length
      ) {
        return true;
      }
      return false;
    });
};
