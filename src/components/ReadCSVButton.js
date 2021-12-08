import React from "react";
import CSVReader from "react-csv-reader";

export const CSVReadOptions = {
  header: false,
  dynamicTyping: true,
  skipEmptyLines: false,
  transformHeader: (header) => header.toLowerCase().replace(/\W/g, "_"),
};

export default function ReadCSVButton({ children = "", onLoaded = () => {} }) {
  return (
    <div>
      <CSVReader
        inputStyle={{ display: "none" }}
        onFileLoaded={onLoaded}
        parserOptions={CSVReadOptions}
        label={children}
      />
    </div>
  );
}
