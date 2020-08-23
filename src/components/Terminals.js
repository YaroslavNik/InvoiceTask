import React, {useState} from 'react';
import TerminalsTable from './TerminalsTable'
import Context from '../context'

const Terminals = () => {

    const [terminals, setTerminals] = useState([
        {id: 1, name: 'Yaroslav', desc: 'Hello'},
        {id: 2, name: 'Greg', desc: 'Why'}
    ])
    const [valueName, setValueName] = useState([])
    const [valueDesc, setValueDesc] = useState([])
    
    const submitHandler = (event) => {
        event.preventDefault()
        setTerminals(terminals.concat([{
            name: valueName,
            id: Date.now(),
            desc: valueDesc
        }]))
        setValueName('')
        setValueDesc('')
    }

    const removeTableItem = id => {
        setTerminals(terminals.filter(terminal => terminal.id !== id))
    }

    return(
        <Context.Provider value = {{removeTableItem}}>
            <div className = "terminals">
                <div className = "terminals-content">
                    <h2>Терминалы</h2>
                    <form className = "form terminals-form" onSubmit = {submitHandler}>
                        <input className = 'form-field' name = 'nameTerminal' type = "text" placeholder = "Название терминала" value = {valueName} onChange = {event => setValueName(event.target.value)}/>
                        <textarea className = 'form-field' id = "descTerminal" placeholder = "Описание" value = {valueDesc} onChange = {event => setValueDesc(event.target.value)}/>
                        <button type = "submit">Добавить</button>
                    </form>
                    <TerminalsTable terminals = {terminals}/>
                </div>
            </div>
        </Context.Provider>
    )
}

export default Terminals