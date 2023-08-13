
let myFavorites = []

const postFav = (req, res) => {

    const character = req.body

    myFavorites.push(character)

    return res.status(200).json(myFavorites)

}

const deleteFav = (req, res) => { // fijate que este todo igual escrito en client y server, en las rutas del localhost 

    const { id } = req.params

    myFavorites = myFavorites.filter((favorite) => favorite.id !== +id)

    return res.status(200).json(myFavorites)

}

module.exports = {
    postFav,
    deleteFav
}

