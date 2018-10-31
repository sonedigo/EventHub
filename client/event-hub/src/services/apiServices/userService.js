import api from "./api";

export default {
  getUserInfo: function(userId) {
    return api().get("/user/getuserid", {
      params: { userId }
    });
  },
  updateUserInfo: function(userInfo) {
    //will return updated result
    api()
      .patch("/user/updateuserinfo", {
        userInfo
      })
      .then(function(response) {})
      .then(function(error) {});
  },
  getUserId: function(username) {
    return api().get("/user/getuserid", {
      params: { username }
    });
  }
};
