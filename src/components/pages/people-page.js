import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { withAppService } from '../hoc'
import { peopleLoaded, addNewPerson } from '../../actions'
import { getFormData } from '../../utils'

import PersonList from '../person-list'

class PeoplePage extends Component {
  componentDidMount() {
    const { appService, peopleLoaded } = this.props
    const data = appService.getAllPeople()
    peopleLoaded(data)
  }
  
  componentWillUnmount() {
    localStorage.setItem('people-storage', JSON.stringify(this.props.people))
  }

  onPersonSelected = (id) => {
    const { history } = this.props;
    history.push(`/people/${id}`)
  }
  
  onAddNewPerson = (e) => {
    e.preventDefault()
    const form = e.target
    const { name, surname, position } = getFormData(form)
    
    const newPerson = {
      name, surname, position
    }

    this.props.addNewPerson(newPerson)
    form.reset()
  }
  
  onClickAddBtn = () => {
    
  }

  render() {
    const { people } = this.props
    
    if (!people) return null
    
    return (
      <div>
        <h2>Список сотрудников</h2>
        <PersonList 
          people={people}
          onPersonSelected={this.onPersonSelected} />

        <form onSubmit={this.onAddNewPerson}>
          <input name="name" />
          <input name="surname" />
          <input name="position" />
          <button onClick={this.onClickAddBtn}>Добавить</button>
        </form>
      </div>
    )
  }
}

const mapStateToProps = ({ people, modalIsOpen }) => {
  return {
    people,
    modalIsOpen,
  }
}

const mapDispatchToProps = {
  peopleLoaded,
  addNewPerson,
}

export default withRouter(withAppService()(connect(mapStateToProps, mapDispatchToProps)(PeoplePage)))
