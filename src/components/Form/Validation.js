export default function validation(inputs) {
    const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    const regexPassword = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,10}$/
    
    let errors = {};
    
    (!inputs.email) ? errors.email = 'Ingrese un Email' : errors.email = '';
    (inputs.email.length > 35) ? errors.email = 'El Email no puede tener mas de 35 caracteres' : errors.email = '';
    (!regexEmail.test(inputs.email)) ? errors.email = 'El email es inválido' : errors.email = '';
    (!regexPassword.test(inputs.password)) ? errors.password = 'La contraseña es inválida' : errors.email = '';
    return errors
}