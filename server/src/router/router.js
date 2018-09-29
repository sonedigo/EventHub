const QueryController = require('../controller/queryController');

module.exports = (app) => {
  //app.post('/order', OrderController.post); //

  app.get('/getuser', QueryController.getuser); //

  //app.patch('/order/:id', OrderController.patchById); //

  //app.delete('/user/:id', UserController.deleteById); //
}