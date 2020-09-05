import React from 'react'
import './Sidebar.sass'
import {Link} from 'react-router-dom'

export default props => (
    <div className = "sidebar">
        <div className = 'dropdown' onClick = {props.onClickDropdown}>
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div className = 'sidebar-content'>
            <div className = "sidebar-header header">
                <img className = "sidebar-img" src = {props.userImg} alt = {props.userImg}/>
                <p>{props.user}</p>
            </div>

                <ul className = "sidebar-list list">
                    <li className = "list__item"><Link to = "/sidebar/terminals">Терминалы</Link></li>
                    <li className = "list__item"><Link to = "/sidebar/table">Покупатели</Link></li>
                </ul>

            <div className = "sidebar-footer"> Copyright &copy; 2020</div>
        </div>

    </div>

)