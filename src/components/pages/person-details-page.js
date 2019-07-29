import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { withAppService } from '../hoc'
import { openModal, personLoaded, personUpdate, peopleLoaded } from '../../actions'
import LocalStorageManager from '../../services/localstorage'

import EditForm from '../edit-form'

import './person-details-page.css'

class PersonDetailsPage extends Component {
  
  state = {
    name: '',
    surname: '',
    position: '',
    info: '',
  }
  
  updatePerson() {
    const { appService, personLoaded, personId } = this.props
    if (!personId) return
    const person = appService.getPerson(+personId)
    this.setState({
      name: person.name,
      surname: person.surname,
      position: person.position,
      info: person.info,
    })
    personLoaded(person)
  }
  
  componentDidMount() {
    const { appService, peopleLoaded } = this.props
    const data = appService.getAllPeople()
    peopleLoaded(data)
    this.updatePerson()
  }
  
  componentDidUpdate() {
    LocalStorageManager.set(this.props.people)
  }
  
  onClickSave = (data) => {
    const { id, name, surname, position, info } = data
    this.setState({
      name,
      surname,
      position,
      info,
    })
    this.props.personUpdate({
      id, name, surname, position, info,
    })
    const { personLoaded } = this.props
    personLoaded(data)
  }
  
  onClickEdit = () => {
    const { openModal, person } = this.props;
    openModal({
      modalTitle: "Изменить данные",
      modalContent: <EditForm data={person} onChangeData={this.onClickSave} />,
    });
  }

  render() {
    return (
      <div>
        <h2 className="mb-4">Детальная страница</h2>
        
        <Link 
          to="/"
          className="btn btn-secondary mb-4"
        >
          К списку
        </Link>

        <div className="table-responsive person-details mb-3">
          <table className="table table-borderless person-details__table">
            <tbody>
              <tr>
                <td>Имя:</td>
                <td>{this.state.name}</td>
              </tr>
              <tr>
                <td>Фамилия:</td>
                <td>{this.state.surname}</td>
              </tr>
              <tr>
                <td>Должность:</td>
                <td>{this.state.position}</td>
              </tr>
              <tr>
                <td>Описание:</td>
                <td>{this.state.info}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <button 
          onClick={this.onClickEdit}
          className="btn btn-primary"
        >Редактировать</button>
      </div>
    )
  }
}

PersonDetailsPage.propTypes = {
  people: PropTypes.array,
  person: PropTypes.object,
  openModal: PropTypes.func.isRequired,
  personLoaded: PropTypes.func.isRequired,
  personUpdate: PropTypes.func.isRequired,
  peopleLoaded: PropTypes.func.isRequired,
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
