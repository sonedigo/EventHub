const QueryController = require('../controller/queryController');
const RegisterController = require('../controller/registerController');
const CRUDController = require('../controller/CRUDController');
const loginController = require('../controller/loginController');


module.exports = (app) => {
  app.post('/register', RegisterController.registerUser); //

  app.get('/getuser', QueryController.getuser); //

  //app.patch('/', CRUDController.updateUserInfo); //

  //app.delete('/user/:id', UserController.deleteById); //
}