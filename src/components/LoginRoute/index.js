import {Component} from 'react'
import Cookies from 'js-cookie'
import {Redirect} from 'react-router-dom'
import {
  LoginPageContainer,
  LoginCardContainer,
  LogoImg,
  LoginFormContainer,
  LabelText,
  InputTag,
  ShowPasswordContainer,
  CheckBoxTag,
  ShowPasswordText,
  LoginButton,
  ErrorMsgText,
} from './styledComponents'

class LoginRoute extends Component {
  state = {
    mobileNumber: '',
    password: '',
    showPassword: false,
    showErrorMsg: false,
    errorMsg: '',
  }

  onChangeMobileNumber = event => {
    this.setState({mobileNumber: event.target.value})
  }

  onChangePassword = event => {
    this.setState({password: event.target.value})
  }

  onClickShowPassword = () => {
    this.setState(prevState => ({
      showPassword: !prevState.showPassword,
    }))
  }

  onSubmitLoginForm = async event => {
    event.preventDefault()
    const {mobileNumber, password} = this.state
    console.log(Number.isNaN(Number(mobileNumber)))
    if (
      mobileNumber.length !== 10 ||
      Number.isNaN(Number(mobileNumber)) === true
    ) {
      this.setState({
        errorMsg: 'Enter a valid 10 digit mobile number.',
        showErrorMsg: true,
      })
    } else if (password === '' || password.length !== 8) {
      this.setState({
        errorMsg: 'Enter a atleast 8 character long password.',
        showErrorMsg: true,
      })
    } else {
      this.setState({
        errorMsg: '',
        mobileNumber: '',
        password: '',
        showErrorMsg: false,
      })
      const {history} = this.props
      Cookies.set('jwt_token', 'abcde', {expires: 30})
      history.replace('/')
    }
  }

  render() {
    const {
      mobileNumber,
      password,
      showPassword,
      errorMsg,
      showErrorMsg,
    } = this.state

    const jwtToken = Cookies.get('jwt_token')

    if (jwtToken !== undefined) {
      return <Redirect to="/" />
    }

    return (
      <LoginPageContainer>
        <LoginCardContainer>
          <LogoImg
            src="https://res.cloudinary.com/adityak/image/upload/v1659271468/NxtWave_TM_Coloured_logo_1_mnll3f.png"
            alt="website logo"
          />
          <LoginFormContainer onSubmit={this.onSubmitLoginForm}>
            <LabelText htmlFor="mobileNumber">MOBILE NUMBER</LabelText>
            <InputTag
              type="text"
              id="mobileNumber"
              onChange={this.onChangeMobileNumber}
              value={mobileNumber}
              placeholder="Enter Mobile Number"
            />
            <LabelText htmlFor="password">PASSWORD</LabelText>
            <InputTag
              type={showPassword ? 'text' : 'password'}
              id="password"
              onChange={this.onChangePassword}
              value={password}
              placeholder="Password"
            />
            <ShowPasswordContainer>
              <CheckBoxTag
                type="checkbox"
                id="checkbox"
                onChange={this.onClickShowPassword}
                value={showPassword}
              />
              <ShowPasswordText htmlFor="checkbox">
                Show Password
              </ShowPasswordText>
            </ShowPasswordContainer>
            <LoginButton type="submit">Login</LoginButton>
            {showErrorMsg && <ErrorMsgText>*{errorMsg}</ErrorMsgText>}
          </LoginFormContainer>
        </LoginCardContainer>
      </LoginPageContainer>
    )
  }
}

export default LoginRoute
