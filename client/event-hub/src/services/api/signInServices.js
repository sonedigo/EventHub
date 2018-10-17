import Api from "../api";
import axios from "axios";

export default {
  start: async function(credentials) {
     axios
      .post("https://jsonplaceholder.typicode.com/posts", credentials)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  },
  logIn: async function(credentials) {
     axios
      .post("https://jsonplaceholder.typicode.com/posts", credentials)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  },
  signUp: async function(credentials) {
     axios
      .post("https://jsonplaceholder.typicode.com/posts", credentials)
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.log(err);
      });
  }
};
