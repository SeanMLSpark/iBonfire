const controllers = require('../controllers/bonfireCtrl.js');
const router = require('express').Router();

for (var route in controllers) {
	router.route(route)
		.get(controllers[route].get)
		.post(controllers[route].post)
		.put(controllers[route].put)
		.delete(controllers[route].delete);
}

module.exports = router;