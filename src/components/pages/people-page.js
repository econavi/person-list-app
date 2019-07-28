import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

import { withAppService } from '../hoc'
import { peopleLoaded, addNewPerson, openModal } from '../../actions'
import LocalStorageManager from '../../services/localstorage'

import PersonList from '../person-list'
import AddForm from '../add-form'

class PeoplePage extends Component {
  
  componentDidMount() {
    const { appService, peopleLoaded } = this.props
    const data = appService.getAllPeople()
    peopleLoaded(data)
  }
  
  componentWillUnmount() {
    LocalStorageManager.set(this.props.people)
  }
  
  componentDidUpdate() {
    LocalStorageManager.set(this.props.people)
  }

  onPersonSelected = (id) => {
    const { history } = this.props;
    history.push(`/people/${id}`)
  }
  
  addNewPerson = (data) => {
    const { name, surname, position, info } = data
    this.props.addNewPerson({
      name, surname, position, info
    })
  }
  
  onClickAddPerson = (e) => {
    e.preventDefault()
    this.props.openModal({
      modalTitle: "Новый сотрудник",
      modalContent: <AddForm addNewData={this.addNewPerson} />,
    });
  }

  render() {
    const { people } = this.props
    if (!people) return null
    
    return (
      <div className="people-page">
        <h2 className="mb-4">Список сотрудников</h2>
        <div className="mb-2">
          <PersonList 
            people={people}
            onPersonSelected={this.onPersonSelected}
          />
        </div>
        <button 
          type="button"
          className="btn btn-dark"
          onClick={this.onClickAddPerson}
        >Добавить</button>
      </div>
    )
  }
}

const mapStateToProps = ({ people }) => {
  return {
    people,
  }
}

const mapDispatchToProps = {
  peopleLoaded,
  addNewPerson,
  openModal,
}

export default withRouter(withAppService()(connect(mapStateToProps, mapDispatchToProps)(PeoplePage)))
