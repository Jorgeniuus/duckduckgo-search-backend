const {Router} = require('express')
const router = Router()
const TaskController = require('../controllers/ControllerTasksRoutes')

router.get('/', TaskController.getShowTask)
router.post('/', TaskController.postShowTask)

module.exports = router
