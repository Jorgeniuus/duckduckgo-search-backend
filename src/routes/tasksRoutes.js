const {Router} = require('express')
const router = Router()
const TaskController = require('../controllers/controllerTasksRoutes')

router.get('/', TaskController.getShowTask)
router.post('/', TaskController.postShowTask)

module.exports = router
