import React from 'react';
import TableItem from './TableItem'

const TerminalsTable = (props) => {

    return(
        <table>
            <thead>
                <tr>
                    <th>№</th>
                    <th>Название терминала</th>
                    <th>Описание</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {props.terminals.map((terminalsObj, index) => {
                    return <TableItem terminalsObj = {terminalsObj} key = {terminalsObj.id} index = {index}/>
                })}
            </tbody>
            <tfoot>

            </tfoot>
        </table>
    )
}

export default TerminalsTable