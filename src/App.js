import React, {useState} from 'react';
import Sidebar from './components/Sidebar'
import Form from './components/Form'

export default function App() {

    const [user, setUser] = useState("")
    const [img, setImg] = useState([])

    const onChangeHandler = event => {
        setUser(event.target.value)
    }

    const submitHandler = async event => {
        event.preventDefault()
        fetch(`https://api.github.com/users/${user}`)
            .then(git => {
                if(git.status !== 200) alert('User is not found')
                else {
                    return git.json()
                    .then(git => {
                        const password = document.querySelector('input[type="password"]').value
                        const upperCaseLetters = /[A-Z]/
                        const lowerCaseLetters = /[a-z]/
                        const numbers = /[0-9]/
                        if(password.match(numbers) && password.match(lowerCaseLetters) && password.match(upperCaseLetters) && password.length >= 8 ){
                            setImg(git)
                            document.querySelector('.form').style.display = 'none'
                            document.querySelector('.sidebar-content').classList.add('active')
                            console.log('here')
                        } else {
                            alert('incorrect password')
                        }
                    })
                }
            })
    }
    //<Form submitHandler = {submitHandler} onChangeHandler = {onChangeHandler} user = {user}/>
    return (
        <div className = 'container'>
            <Sidebar user = {user} img = {img} onChangeHandler = {onChangeHandler} submitHandler = {submitHandler}/>

        </div>

    )
}