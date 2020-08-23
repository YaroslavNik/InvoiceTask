import React, {useContext} from 'react';
import Context from '../context'

const TableItem = ({terminalsObj, index}) => {

    const {removeTableItem} = useContext(Context)

    return(
        <tr>
            <td>{index+1}</td>
            <td>{terminalsObj.name}</td>
            <td>{terminalsObj.desc}</td>
            <td className="td-button" onClick = {() => removeTableItem(terminalsObj.id)}>&times;</td>
        </tr>
    )
}

export default TableItem