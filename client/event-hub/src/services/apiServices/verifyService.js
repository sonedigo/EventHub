import api from "./api";

export default {
  checkEmailDuplicate: function(email) {
    //will return true or false
    return api().get("/check/email_duplicate", {
      params: { email: email }
    });
  },
  checkUsernameDuplicate: function(username) {
    //will return true or false
    return api().get("/check/username_duplicate", {
      params: { username: username }
    });
  }
};
