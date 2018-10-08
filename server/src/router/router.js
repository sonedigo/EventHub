const QueryController = require('../controller/queryController');
const RegisterController = require('../controller/registerController');
const CRUDController = require('../controller/CRUDController');
const LoginController = require('../controller/loginController');


module.exports = (app) => {
  app.post('/register', RegisterController.registerUser); //
  //app.post('./postevent')

  app.get('/getuser', QueryController.getuser); //
  //app.get('/login', LoginController.login);

  app.patch('/', CRUDController.updateUserInfo); //

  //app.delete('/user/:id', UserController.deleteById); //
}