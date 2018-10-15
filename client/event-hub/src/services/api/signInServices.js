import Api from "../api";
import axios from "axios";

export default {
  start: function(credentials) {
    return axios
      .post("https://jsonplaceholder.typicode.com/posts", credentials)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }
};
