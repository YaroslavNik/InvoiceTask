import React from 'react';

const BuyersTableRow = (buyersObj) => {

    return (
        <tr>
            <td>{buyersObj.id}</td>
            <td>{buyersObj.name}</td>
            <td>{buyersObj.check}</td>
            <td>{buyersObj.amount}</td>
            <td>{buyersObj.money}</td>
        </tr>
    )
}

export default BuyersTableRow