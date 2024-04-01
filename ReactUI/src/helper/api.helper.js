import axios from "axios"
import { message } from "antd"
const baseUrl = "http://localhost:8090/"


export const request = (method = "", url = "", data = {}) => {
   return axios({
     url: baseUrl + url,
     method: method,
     data: data,
   })
     .then((res) => {
       return res;
     })
     .catch((err) => {
       if (axios.isAxiosError(err)) {
         message.error("Can not connect to server. Please contact administration!");
       } else {
         console.log("Error occurred:", err);
       }
       return false;
     });
 };
 