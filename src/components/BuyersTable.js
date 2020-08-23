import React, {useState} from 'react';
import BuyersTableRow from './BuyersTableRow'

const BuyersTable = () => {

    function getRandomIntFromRange(min, max) {
        min = Math.ceil(min) 
        max = Math.floor(max)
        return Math.floor(Math.random() * (max - min)) + min 
    }

    const getRandomCheck = getRandomIntFromRange(100, 10000)

    const [arrBuyers, setArrBuyers] = useState([
        {id: 0, name: 'Yaroslav', check: 2000, amount: 10, money: 3000},
        {id: 1, name: 'Sveta', check: 700, amount: 20, money: 10000},
        {id: 3, name: 'Lola', check: 1100, amount: 13, money: 7000},
        {id: 4, name: 'Valeria', check: 2300, amount: 14, money: 17200},
        {id: 5, name: 'Nikita', check: 2500, amount: 21, money: 9541},
        {id: 6, name: 'Sergey', check: 1300, amount: 32, money: 1541},
        {id: 7, name: 'Evgeny', check: 900, amount: 25, money: 9057},
        {id: 8, name: 'Kostya', check: 500, amount: 28, money: 4410},
        {id: 9, name: 'Yaroslav', check: 400, amount: 25, money: 4325},
        {id: 10, name: 'Greta', check: 900, amount: 31, money: 4531},
        {id: 11, name: 'Sveta', check: 4300, amount: 11, money: 5435},
        {id: 12, name: 'Yaroslav', check: 2200, amount: 14, money: 6735},
        {id: 13, name: 'Nikita', check: 1100, amount: 17, money: 5422},
        {id: 14, name: 'Yaroslav', check: 2200, amount: 27, money: 8543}
    ])

    const sortArrCheck = () => {
        setArrBuyers(arrBuyers.slice().sort((prev, next) => { {return prev.check - next.check}}))
    }

    const sortArrAmount = () => {
        setArrBuyers(arrBuyers.slice().sort((prev, next) => {
            return prev.amount - next.amount
        }))
    }

    const sortArrMoney = () => {
        setArrBuyers(arrBuyers.slice().sort((prev, next) => {
            return prev.money - next.money
        }))
    }

    function renderTable () { 
        return arrBuyers.map((buyersObj) => {
            return <BuyersTableRow id = {buyersObj.id} name = {buyersObj.name} check = {buyersObj.check} amount = {buyersObj.amount} money = {buyersObj.money} key = {buyersObj.id}/>
        })
    }
    
    return (
        <table cellSpacing = "0">
            <thead>
                <tr>
                    <th>ID покупателя</th>
                    <th>Имя покупателя</th>
                    <th onClick = {sortArrCheck}>Средний чек</th>
                    <th onClick = {sortArrAmount}>Количество покупок</th>
                    <th onClick = {sortArrMoney}>Общая выручка</th>
                </tr>
            </thead>
            <tbody>{renderTable()}</tbody>
            <tfoot>

            </tfoot>
        </table>
    )
}

export default BuyersTable