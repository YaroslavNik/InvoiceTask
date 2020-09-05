import React, {Component, useState} from 'react';
import './App.sass'
import ReactPaginate from 'react-paginate'
import {BrowserRouter as Router, Switch, Route, Link, Redirect} from 'react-router-dom'
import Form from './Components/Form/Form'
import Sidebar from './Components/Sidebar/Sidebar'
import Table from './Components/Table/Table'
import Terminals from './Components/Terminals/Terminals'
import TableModes from './Components/TableModes/TableModes'
import _ from 'lodash'

class App extends Component {

  state = {
    data: [
      {id: 0, name: 'Yaroslav', check: 2000, count: 10, profit: 3000},
      {id: 1, name: 'Sveta', check: 700, count: 20, profit: 10000},
      {id: 2, name: 'Kirill', check: 456, count: 12, profit: 13516},
      {id: 3, name: 'Lola', check: 1100, count: 13, profit: 7000},
      {id: 4, name: 'Valeria', check: 2300, count: 14, profit: 17200},
      {id: 5, name: 'Nikita', check: 2500, count: 21, profit: 9541},
      {id: 6, name: 'Sergey', check: 1300, count: 32, profit: 1541},
      {id: 7, name: 'Evgeny', check: 900, count: 25, profit: 9057},
      {id: 8, name: 'Kostya', check: 500, count: 28, profit: 4410},
      {id: 9, name: 'Yaroslav', check: 400, count: 25, profit: 4325},
      {id: 10, name: 'Greta', check: 900, count: 31, profit: 4531},
      {id: 11, name: 'Sveta', check: 4300, count: 11, profit: 5435},
      {id: 12, name: 'Yaroslav', check: 2200, count: 14, profit: 6735},
      {id: 13, name: 'Nikita', check: 1100, count: 17, profit: 5422},
      {id: 14, name: 'Yaroslav', check: 2200, count: 27, profit: 8543}
    ],
    sort: 'asc',
    sortField: 'id', 
    row: null,
    currentPage: 0,
    mode: 5, 
    user: '',
    pass: '', 
    userImg: '',
    flag: false,
    terminalName: '',
    terminalDesc: '',
    terminals: [{}],
    index: 0,
    obj: {
      id: 0,
      name: 'Yaroslav',
      desc: 'hello'
    }
  }


  async componentDidMount() {
  

  }

  onSort = sortField => {
    const clonedData = this.state.data.concat()
    const sortType = this.state.sort === 'asc' ? 'desc' : 'asc'
    const orderedData = _.orderBy(clonedData, sortField, sortType)

    this.setState({
      data: orderedData,
      sort: sortType,
      sortField
    })
  }

  pageChangeHandler = ({selected}) => {
    this.setState({currentPage: selected})
  }

  onClickBtn = btn => {
    this.setState({mode: btn})
  }

  onChangeLogin = e => {
    this.setState(({user: e.target.value}))
  }

  onChangePass = e => {
    this.setState(({pass: e.target.value}))
  }

  submitHandler = async e => {
    e.preventDefault()
    const response = await fetch(`https://api.github.com/users/${this.state.user}`)
    .then(response => {
      if (response.status !== 200) alert('User is not found')
      else {
          return response.json()

          .then(response => {
            const password = this.state.pass
            const upperCaseLetters = /[A-Z]/
            const lowerCaseLetters = /[a-z]/
            const numbers = /[0-9]/

            if(password.match(numbers) && password.match(lowerCaseLetters) && password.match(upperCaseLetters) && password.length >= 8 ){
              this.setState({userImg: response.avatar_url})
              this.setState({flag: true})
            } else {
                alert('incorrect password')
            }
          })
      }
    })
  }

  onClickDropdown = () => {
    document.querySelector('.sidebar-content').classList.toggle('active')
  }

  onChangeName = e => {
    this.setState( {terminalName: e.target.value})
  }

  onChangeDesc = e => {
    this.setState( {terminalDesc: e.target.value})
  }

  onSubmitAdd = e => {
    e.preventDefault()
    this.setState( {index: this.state.index + 1})
    const obj = {
      id: this.state.index,
      name: this.state.terminalName,
      desc: this.state.terminalDesc
    }
    console.log(this.state.obj)
    this.setState(this.state.terminals.concat(obj))


    console.log( this.state.terminals)
  }


  render() { 
    
    const pageRows = this.state.mode
    const displayData = _.chunk(this.state.data, pageRows)
    [this.state.currentPage]
    const pageCount = this.state.data.length / pageRows
    const sort = this.state.sort

    return (

      <div className = "container">
        <Router>
          <Route 
                exact path = "/" 
                render = { props => 
                  this.state.flag ? (<Redirect to = "/sidebar"/>)
                  : 
                    <Form {...props} 
                      onChangeLogin = {this.onChangeLogin} 
                      onChangePass = {this.onChangePass} 
                      submitHandler = {this.submitHandler} 
                    />}
              />
            <Route path="/sidebar" render = {props => <Sidebar {...props} userImg = {this.state.userImg} onClickDropdown = {this.onClickDropdown} user = {this.state.user}/>} />          
            <Route path = "/sidebar/table" render = {props => <Table {...props} data={displayData} onSort = {this.onSort} sort = {sort} />}
            />
            <Route exact path = "/sidebar/table" render = {props =>   
              <ReactPaginate
                    previousLabel={'<'}
                    nextLabel={'>'}
                    breakLabel={'...'}
                    breakClassName={'break-me'}
                    pageCount={pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={this.pageChangeHandler}
                    containerClassName={'pagination'}
                    subContainerClassName={'pages pagination'}
                    activeClassName={'active'}
                    forcePage = {this.state.currentPage}
                  />}
            />
            <Route exact path = "/sidebar/table" render = {props => <TableModes onClickBtn = {this.onClickBtn} />} />
            <Route exact path = "/sidebar/terminals" render = {props => <Terminals onChangeName = {this.onChangeName} onChangeDesc = {this.onChangeDesc} onSubmitAdd = {this.onSubmitAdd}/>} />
        </Router>

      </div>
    );
  }
}

export default App;
