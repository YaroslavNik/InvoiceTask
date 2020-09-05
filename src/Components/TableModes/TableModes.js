import React from 'react'
import './TableModes.sass'

export default props => (

    <div className = "table-modes">
        <button onClick={props.onClickBtn.bind(null, 5)}>5</button>
        <button onClick={props.onClickBtn.bind(null, 10)}>10</button>
        <button onClick={props.onClickBtn.bind(null, 15)}>15</button>
    </div>
)