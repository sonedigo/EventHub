const QueryController = require('../controller/queryController');
const RegisterController = require('../controller/registerController');
const CRUDController = require('../controller/CRUDController');
const LoginController = require('../controller/loginController');


module.exports = (app) => {
  app.post('/register/user', RegisterController.registerUser);
  app.post('/register/group', RegisterController.registerGroup); //
  //app.post('./postevent')

  app.get('/getuser', QueryController.getUser); //
  app.get('/getgroup', QueryController.getGroup);
  app.get('/login', LoginController.login);
  app.get('/check/emailDuplicate',RegisterController.checkDuplicate);

  //app.patch('/', CRUDController.updateUserInfo); //

  //app.delete('/user/:id', UserController.deleteById); //
}