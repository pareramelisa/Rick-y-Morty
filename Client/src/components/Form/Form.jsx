import { useState } from "react"
import validation from "./Validation"
import style from "./form.module.css"

export default function Form({ login }) {

    const [userData, setUserData] = useState({
        email: "",
        password: ""
    })

    const [errors, setErrors] = useState({
        email: "",
        password: ""
    })

    function handleChange(event) {
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })

        setErrors(validation({
            ...userData,
            [event.target.name]: event.target.value
        }))
    }

    const handleBlur = (event) => {
        let property = event.target.name
        let value = event.target.value
        setErrors(validation({
            ...userData,
            [property]: value
        }))
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        login(userData)
    }

    return (
        <div className={style.contenedor}>
            <form className={style.form} onSubmit={handleSubmit}>
                <div className={style.contentLogin}><h1 className={style.textLogin}>Login</h1></div>
                <label>Email</label>
                <input className={style.inputs} type="text" name="email" value={userData.email} placeholder="Example@gmail.com" onChange={handleChange} onBlur={handleBlur} />
                <p>{errors.email}</p>

                <label>Password</label>
                <input className={style.inputs} type="password" name="password" value={userData.password} placeholder="Password" onChange={handleChange} onBlur={handleBlur} />
                <p>{errors.password}</p>

                <button className={style.myButton} type="submit">Submit</button>
            </form>
        </div>
    )
}