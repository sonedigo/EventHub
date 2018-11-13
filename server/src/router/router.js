const QueryController = require('../controller/queryController');
const RegisterController = require('../controller/registerController');
const CRUDController = require('../controller/CRUDController');
const LoginController = require('../controller/loginController');
const EventController = require('../controller/eventController');


module.exports = (app) => {
  app.post('/register/user', RegisterController.registerUser);
  app.post('/register/group', RegisterController.registerGroup);

  app.post('/user/create_event', EventController.userCreateEvent);
  app.post('/group/create_event', EventController.groupCreateEvent);
  app.post('/group/registeruserbygroup',RegisterController.registerUserByGroup)

  app.get('/admin/getuser', QueryController.getUserInfo); //
  app.get('/admin/getgroup', QueryController.getGroup);

  app.get('/user/getuserinfo', CRUDController.getUserInfo);
  app.get('/user/getuserid', CRUDController.getUserId);
  
  app.get('/login', LoginController.login);
  app.get('/check/email_duplicate', RegisterController.checkDuplicateEmail);
  app.get('/check/username_duplicate', RegisterController.checkDuplicateUsername);
  app.get('/event/getevent', EventController.getEvent)

  app.get('/group/getgroupmember',QueryController.getGroupMember)


  app.patch('/patch/userinfo', CRUDController.updateUserInfo); //
  app.patch('/patch/eventinfo',EventController.updateEvent);
  app.patch('/user/updateuserinfo', CRUDController.updateUserInfo);

  app.delete('/event/group/delete', EventController.groupDeleteEvent); //
  app.delete('/event/user/delete', EventController.userDeleteEvent);
 
}