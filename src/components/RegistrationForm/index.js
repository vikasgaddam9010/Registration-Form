import {Component} from 'react'
import './index.css'

class RegistrationForm extends Component {
  state = {
    username: '',
    lastname: '',
    isUsernameRight: true,
    isLastnameRight: true,
    isInputWrong: false,
  }

  onClickSubmit = event => {
    event.preventDefault()
    const {username, lastname, isInputWrong} = this.state

    if (username === '') {
      this.setState({isUsernameRight: false})
    } else if (lastname === '') {
      this.setState({isLastnameRight: false})
    } else {
      this.setState({isInputWrong: true})
    }
  }

  onChangeUserName = event => {
    let inputUsername = event.target.value
    this.setState({username: inputUsername})
    if (inputUsername.length === 0) {
      this.setState({isUsernameRight: false})
    } else {
      this.setState({isUsernameRight: true})
    }
  }
  onChangeLastName = event => {
    let lastNameInput = event.target.value
    this.setState({lastname: lastNameInput})
    if (lastNameInput.length === 0) {
      this.setState({isLastnameRight: false})
    } else {
      this.setState({isLastnameRight: true})
    }
  }
  onClickToSubmit = () => {
    this.setState({isInputWrong: false})
  }
  formFuntion = () => {
    const {isInputWrong, username, lastname, isUsernameRight, isLastnameRight} =
      this.state
    console.log(isInputWrong)
    const usernameCss = isUsernameRight ? '' : 'border-red'
    const lastnameCss = isLastnameRight ? '' : 'border-red'
    return (
      <form onSubmit={this.onClickSubmit} className="form-container">
        <label className="label" htmlFor="username">
          FIRST NAME
        </label>
        <input
          onBlur={this.onChangeUserName}
          className={`input ${usernameCss}`}
          id="username"
          placeHolder="First name"
        />
        {isUsernameRight === false && (
          <p className="error-message hidden-para">Required</p>
        )}
        <label className="label" htmlFor="label">
          LAST NAME
        </label>
        <input
          onBlur={this.onChangeLastName}
          className={`input ${lastnameCss}`}
          id="label"
          placeHolder="Last name"
        />
        {isLastnameRight === false && (
          <p className="error-message hidden-para">Required</p>
        )}
        <button className="btn" type="submit">
          Submit
        </button>
      </form>
    )
  }

  sucessFunction = () => {
    return (
      <div className="sucess-container">
        <img
          className="sucess"
          src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
          alt="success"
        />
        <p>Submitted Successfully</p>
        <button
          onClick={this.onClickToSubmit}
          className="btn sucess-btn "
          type="submit"
        >
          Submit Another Response
        </button>
      </div>
    )
  }

  render() {
    const {isInputWrong, username, lastname, isUsernameRight, isLastnameRight} =
      this.state
    console.log(isInputWrong)
    const usernameCss = isUsernameRight ? '' : 'border-red'
    const lastnameCss = isLastnameRight ? '' : 'border-red'
    return (
      <div className="bg-container">
        <h1 className="h">Registration</h1>
        {isInputWrong ? (
          <>{this.sucessFunction()}</>
        ) : (
          <>{this.formFuntion()}</>
        )}
      </div>
    )
  }
}
export default RegistrationForm
