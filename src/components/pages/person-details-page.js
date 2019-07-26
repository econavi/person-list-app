import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { withAppService } from '../hoc'
import { openModal, personLoaded, personUpdate, peopleLoaded } from '../../actions'

import EditModal from '../edit-modal'

import { getFormData } from '../../utils'

class PersonDetailsPage extends Component {
  
  state = {
    name: null,
    surname: null,
    position: null,
  }
  
  updatePerson() {
    const { appService, personLoaded, personId } = this.props
    if (!personId) return
    const person = appService.getPerson(+personId)
    this.setState({
      name: person.name,
      surname: person.surname,
      position: person.position,
    })
    personLoaded(person)
  }
  
  componentDidMount() {
    const { appService, peopleLoaded } = this.props
    const data = appService.getAllPeople()
    peopleLoaded(data)
    this.updatePerson()
  }
  
  componentWillUnmount() {
    localStorage.setItem('people-storage', JSON.stringify(this.props.people))
  }
  
  onClickSave = (target) => {
    const { id, name, surname, position } = getFormData(target)
    console.log('onClickSave', this.props.people);
    this.setState({
      name,
      surname,
      position,
    })
    this.props.personUpdate({
      id, name, surname, position,
    })
  }
  
  onClickEdit = () => {
    const { openModal, person } = this.props;
    openModal({
      modalTitle: "Редактировать данные сотрудника",
      modalContent: <EditModal data={person} onChangeData={this.onClickSave} />,
    });
  }

  render() {
    return (
      <div>
        <Link to="/">Назад</Link>
        <h2>Детальная страница</h2>
        <div>
          <span>{this.state.name}</span>
          <span>{this.state.surname}</span>
          <span>{this.state.position}</span>
        </div>
        <button onClick={this.onClickEdit}>Редактировать</button>
      </div>
    )
  }
}

const mapStateToProps = ({ people, selectedPersonData }) => {
  return {
    people,
    person: selectedPersonData,
  }
}

const mapDispatchToProps = {
  openModal,
  personLoaded,
  personUpdate,
  peopleLoaded,
}

export default withAppService()(connect(mapStateToProps, mapDispatchToProps)(PersonDetailsPage))
