import React from 'react';

export default function Form({submitHandler, onChangeHandler, user}) {
    console.log(user)


    return (

            <form className = 'form' id = "#form-main" onSubmit = {submitHandler} >
                <h2 className = 'form-header'>Вход</h2>
                <input className = 'form-field' type = 'text' name = 'login' placeholder = 'Логин' value = {user} onChange = {onChangeHandler}/>
                <input className = 'form-field' type = 'password' placeholder = 'Пароль' />
                <button type = 'submit'>Авторизоваться</button>
            </form>
    )
}