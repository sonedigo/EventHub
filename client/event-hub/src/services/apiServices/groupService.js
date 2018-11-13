import api from "./api";

export default {
  getGroupMember: function(groupId) {
    //will return a list of member in this group
    return api().get("/group/getgroupmember", {
      params: { groupId: groupId }
    });
  },
  createUserByGroup: function(userInfo, groupId) {
    api().post("/group/registeruserbygroup",{
        userInfo: userInfo,
        groupId : groupId
      }
    )
    .then((response)=>{
      console.log(response);
    }).catch((error)=>{
      console.log(error);
    })
  },
  getGroupInfo: function(groupId) {
    return api().get("", {
      params: { groupId }
    });
  },
  getGroupId: function(groupName) {
    return api().get("", {
      params: { groupName }
    });
  },
  enrollMemberInGroup: function(userId, groupId) {
    api().post("", {
      userId: userId,
      groupId: groupId
    }).then((response)=>{
      console.log(response);
    }).catch((error)=>{
      console.log(error);
    });
  },
  deleteGroupMember: function(userId, GroupId) {
    return api().get("/group/delete/getgroupmember",{
      params:{userId, GroupId};
    });
  }
};
