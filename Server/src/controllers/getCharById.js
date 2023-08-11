const axios = require('axios')

const URL = "https://rickandmortyapi.com/api/character/"

const getCharById = async (req, res) => {//se crea una fn con los parametros (objetos) request y response, req YA VIENE con el id pasado por parametro
    try {
        const { id } = req.params //solo tenemos que hacer el destructuring del objeto req en su propiedad params para sacar el id 

        const { data } = await axios(`${URL}/${id}`) //se hace la peticion con el id pasado por parametro
    
        if(!data.name) throw Error (`ID: ${id} not found`) //se hace un condicional que indica que si el id coincide con el nombre del personaje se crea un objeto con las propiedades. NO ENTIENDO POR QUE NO SE PUEDE USAR EL ID

            const character = { // se crea el objeto con las propiedades de la peticion a la api 
                id: data.id,
                status: data.status,
                name: data.name,
                species: data.species,
                origin: data.origin,
                image: data.image,
                gender: data.gender
            }
            return res.status(200).json(character) //se devuelve en formato json para que el servidor lo pueda leer y se lanza un status 200 para indicar que salio todo bien. NO ENTIENDO POR QUE EL RETURN           
    
    }
    catch (error) {
        return error.message.includes('ID')
        ? res.status(404).send(error.message)
        : res.status(500).send(error.response.data.error) //si todo sale mal se devuelve un mensaje de error 
    }
    
    
}

module.exports = {
getCharById
}