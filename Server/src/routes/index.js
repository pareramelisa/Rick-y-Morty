const getCharById = require('../controllers/getCharById')
const login = require('../controllers/login')
const postFav = require('../controllers/postFav')
const postUser = require('../controllers/postUser')
const deleteFav = require('../controllers/deleteFav')

const router = require('express').Router() //junta las rutas, paquete de rutas 


router.get('/character/:id', (req, res) => { // /rickandmorty
    getCharById(req, res)

})

/* Es lo mismo que pasarle req y res express lo hace solo */
router.get('/login', login)

router.post('/login', postUser)


router.post('/fav', (req, res) => {
    postFav(req, res)
})

router.delete('/fav/:id', (req, res) => { // ES LO MISMO HACER (RUTA + DELETEFAV (NOMBRE DEL CONTROLLER) porque desde la ruta nosotros le estamos pasando al controlador los parametros que espera (req y res) el req y res que estan aca son los que se le envia al controller en su archivo)
    deleteFav(req, res)
})

module.exports = router



// //GET **`getCharById`**: "/character/:id"
// -  GET **`login`**: "/login"
// -  POST **`postFav`**: "/fav"
// -  DELETE **`deleteFav`**: "/fav/:id"


