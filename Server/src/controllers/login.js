const users = require('../utils/users.js')


const login = (req, res) => {
    const { email, password } = req.query //extrae el email y la password que le llega por query

    const userFound = users.find((user) => {user.email === email && user.password === password} )

    
    //guarda en una variable userFound el usuario que coincida tanto el email y la password con el arreglo que requerimos

    if(userFound){
        return res.status(200).json({access: true})
    } else {
        return res.status(404).json({access: false})
    }

}



module.exports = {
    login
}
