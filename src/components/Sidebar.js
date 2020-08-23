import React from 'react';
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Terminals from './Terminals'
import Buyers from './Buyers'

const Sidebar = ({user, img}) => {

    const onClickHandler = () => {
        document.querySelector('.sidebar-content').classList.toggle('active')
    }

    return (
        <Router>
            <div className = "sidebar">
                <div className = 'dropdown' onClick={onClickHandler}>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <div className = 'sidebar-content'>
                    <div className = "sidebar-header header">
                        <img className = "sidebar-img" src = {img.avatar_url} alt = {img.avatar_url}/>
                        <div className = "sidebar-user">{user}</div>
                    </div>

                        <ul className = "sidebar-list list">
                            <li className = "list__item"><Link to = "/terminals" className = "list__link">Терминалы</Link></li>
                            <li className = "list__item"><Link to = "/buyers" className = "list__link" >Покупатели</Link></li>
                        </ul>

                    <div className = "sidebar-footer"> Copyright &copy; 2020</div>
                </div>
            </div>

            <Switch>
                <Route exact path = "/terminals" component = {Terminals}/>
                <Route exact path = "/buyers" component = {Buyers}/>
            </Switch>
        </Router>
    )
}
export default Sidebar