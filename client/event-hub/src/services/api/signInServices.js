import api from "../api";
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
  },
  login: function(username, password){
    //will return whether user can login in: true or false;
    return api().get('/login',{
      params:{username, password}
    });
  }

};
