import Airtable from "airtable";
import { AIR_TABLE } from "lib/global";

export const getTableList = ({ onFinish = () => {} } = {}) => {
  if (typeof onFinish !== "function") {
    onFinish = () => {};
  }
  fetch(
    `${AIR_TABLE.BASE_URL}/${AIR_TABLE.BASE_ID}/TableList?api_key=${AIR_TABLE.API_KEY}`
  )
    .then((resp) => resp.json())
    .then((data) => {
      onFinish(data?.records ?? []);
    })
    .catch((err) => {
      console.log("Error getTableList");
      onFinish(false);
      // Error :(
    });
};

export const setTableList = ({ data = [], onFinish = () => {} } = {}) => {
  const base = new Airtable({ apiKey: AIR_TABLE.API_KEY }).base(
    AIR_TABLE.BASE_ID
  );

  base("TableList").create(data, function (err, records) {
    if (err) {
      console.error(err);
      onFinish(false, err);
      return;
    }
    records.forEach(function (record) {
      console.log(record);
      onFinish(record);
    });
  });
};
