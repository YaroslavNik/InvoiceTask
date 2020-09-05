import React from 'react'
import './Form.sass'

export default props => (

    <form className = 'form' id = "#form-main" onSubmit = {props.submitHandler}>
        <h2 className = 'form-header'>Вход</h2>
        <input className = 'form-field' type = 'text' name = 'login' placeholder = 'Логин' onChange = {props.onChangeLogin}/>
        <input className = 'form-field' type = 'password' placeholder = 'Пароль' onChange = {props.onChangePass}/>
        <button type = 'submit'>Авторизоваться</button>
    </form>
)