import React from 'react'
import './table.sass'

export default props => (
    <table className = "table">
        <thead>
            <tr>
                <th onClick = {props.onSort.bind(null, 'id')}>ID покупателя</th>
                <th onClick = {props.onSort.bind(null, 'name')}>Имя покупателя</th>
                <th onClick = {props.onSort.bind(null, 'check')}>Средний чек</th>
                <th onClick = {props.onSort.bind(null, 'count')}>Количество покупок</th>
                <th onClick = {props.onSort.bind(null, 'profit')}>Общая выручка</th>
            </tr>
        </thead>
        <tbody>
            {props.data.map(item => (
                <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.check}</td>
                    <td>{item.count}</td>
                    <td>{item.profit}</td>
                </tr>
            ))

            }
        </tbody>
    </table>
)