import { formatArray } from "lib/arrayObject";

export default function formatCSV({
  value = [],
  columns = [],
  airtableData = {},
}) {
  const formatedColumns = columns.map((column) => {
    return {
      name: column,
      index: formatArray(columns)
        .findIndex((c) => c === column)
        .toString(),
    };
  });
  return formatArray(value)
    .map((row = []) => {
      return formatedColumns.reduce((ret, cur) => {
        var itemVal = row?.[cur?.index];
        if (cur?.name === "ISBN" && typeof itemVal === "number")
          itemVal = `${itemVal}`;
        return { ...(ret ?? {}), [cur?.name]: itemVal };
      }, {});
    })
    .filter((row = {}, index) => {
      if (
        Object.keys(row).length ===
          Object.values(row).filter((item) => item).length &&
        !airtableData.filter((item) => item.fields.ISBN.includes(row.ISBN))
          ?.length &&
        index !== 0
      ) {
        // console.log(
        //   "row ISBN >> " +
        //     row.ISBN +
        //     " >> " +
        //     airtableData.filter((item) => item.fields.ISBN.includes(row.ISBN))
        //       ?.length
        // );
        return true;
      }
      return false;
    });
}

export const checkCSVColumns = ({ csvColumns = [], dbColumns = [] } = {}) => {
  const isSame =
    dbColumns.length === csvColumns.length &&
    dbColumns.every(
      (o, i) =>
        Object.keys(o).length === Object.keys(csvColumns[i]).length &&
        Object.keys(o).every((k) => o[k] === csvColumns[i][k])
    );
  return isSame;
};
