import axios from "axios";

const getData = () => {
  return axios.get("http://localhost:8850/data").then((response) => {
    console.log(response.data);
  });
};



const createDate = (): string => {
  const date = new Date();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  const year = date.getFullYear();
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const seconds = date.getSeconds().toString().padStart(2, '0');

  return `${month}/${day}/${year} ${hours}:${minutes}:${seconds}`;

}
const createDateForXaxis = (): string => {
  const date = new Date();
  const month = (date.getMonth() + 1).toString().padStart(2, '0');
  const day = date.getDate().toString().padStart(2, '0');
  const year = date.getFullYear();
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');
  const seconds = date.getSeconds().toString().padStart(2, '0');

  return `${month}/${day}/${year} ${parseInt(hours) + 1}:${minutes}:${seconds}`;

}

module.exports = { getData, createDate, createDateForXaxis }