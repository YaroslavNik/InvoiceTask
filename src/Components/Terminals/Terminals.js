import React from 'react'
import './Terminals.sass'

export default props => (
    <form className = "terminals form"  onSubmit = {props.onSubmitAdd}>
        <h2>Менеджер Терминалов</h2>
        <input type = "text" name = "name" placeholder = "Название терминала" onChange = {props.onChangeName}></input>
        <input type = "text" name = "desc" placeholder = "Описание терминала" onChange = {props.onChangeDesc}></input>
        <button type = "submit">Добавить</button>
    </form>
)