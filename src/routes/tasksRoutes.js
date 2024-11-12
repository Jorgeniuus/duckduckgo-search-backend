const {Router} = require('express')
const router = Router()
const TaskController = require('../controllers/ControllerTasksRoutes')

router.get('/suggestion', TaskController.getSuggestionData)
router.get('/search', TaskController.getSearchData)
router.post('/search', TaskController.postSearchData)

module.exports = router
