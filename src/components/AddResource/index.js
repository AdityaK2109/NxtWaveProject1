import {Component} from 'react'
import {AiOutlineLeft} from 'react-icons/ai'
import Header from '../Header'
import {PageContainer} from '../Home/styledComponents'
import {IconImageTag} from '../ResourceCard/styledComponents'

import {
  SuccessViewContainer,
  AddResourceFormAndUsersBtnContainer,
  AddResourceFormContainer,
  ContainerHeading,
  LabelText,
  InputTag,
  ChangePhotoContainer,
  UploadIcon,
  ChangePhotoText,
  CreateBtn,
  ImgTag,
  UserBtn,
  TextAreaTag,
  ErrorMsgText,
  PromiseContainer,
} from './styledComponents'

const apiStatusConstants = {
  initial: 'INITIAL',
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
  emptyList: 'EMPTY LIST',
}

const showErrorMsgConstants = {
  name: 'NAME',
  link: 'LINK',
  description: 'DESCRIPTION',
  noError: '',
}

class AddResource extends Component {
  state = {
    nameInput: '',
    linkInput: '',
    descriptionInput: '',
    apiStatus: apiStatusConstants.initial,
    showErrorMsg: showErrorMsgConstants.noError,
    errorMsg: '',
  }

  onChangeName = event => {
    this.setState({nameInput: event.target.value})
  }

  onChangeLink = event => {
    this.setState({linkInput: event.target.value})
  }

  onChangeDescription = event => {
    this.setState({descriptionInput: event.target.value})
  }

  onSubmitForm = async event => {
    event.preventDefault()
    const {nameInput, linkInput, descriptionInput} = this.state
    if (nameInput === '') {
      this.setState({
        showErrorMsg: showErrorMsgConstants.name,
        errorMsg: "Name can't be blank.",
      })
    } else if (linkInput === '') {
      this.setState({
        showErrorMsg: showErrorMsgConstants.link,
        errorMsg: "Link can't be blank.",
      })
    } else if (descriptionInput.length <= 25) {
      this.setState({
        showErrorMsg: showErrorMsgConstants.description,
        errorMsg: 'Description must be 25 characters long.',
      })
    } else {
      this.setState({
        nameInput: '',
        linkInput: '',
        descriptionInput: '',
        showErrorMsg: showErrorMsgConstants.noError,
        errorMsg: '',
        apiStatus: apiStatusConstants.loading,
      })
      const apiUrl =
        'https://media-content.ccbp.in/website/react-assignment/add_resource.json'
      const options = {
        method: 'GET',
      }

      const response = await fetch(apiUrl, options)
      const data = await response.json()
      if (response.ok === true) {
        console.log(data)
        this.setState({apiStatus: apiStatusConstants.success})
      } else {
        this.setState({apiStatus: apiStatusConstants.failure})
      }
    }
  }

  render() {
    const {
      nameInput,
      linkInput,
      descriptionInput,
      apiStatus,
      showErrorMsg,
      errorMsg,
    } = this.state
    console.log(nameInput)
    console.log(linkInput)
    console.log(descriptionInput)
    console.log(apiStatus)

    const renderDifferentView = () => {
      switch (apiStatus) {
        case apiStatusConstants.loading:
          return (
            <PromiseContainer borderColor="#ffce30">
              Promise is pending
            </PromiseContainer>
          )
        case apiStatusConstants.failure:
          return (
            <PromiseContainer borderColor="#ff0000">
              Promise is failed
            </PromiseContainer>
          )
        case apiStatusConstants.success:
          return (
            <PromiseContainer borderColor="#66ff00">
              Promise is successful
            </PromiseContainer>
          )
        default:
          return null
      }
    }

    return (
      <PageContainer>
        <Header />
        <SuccessViewContainer>
          <AddResourceFormAndUsersBtnContainer>
            <UserBtn type="button">
              <AiOutlineLeft size={18} color="#171F46" />
              Users
            </UserBtn>
            <AddResourceFormContainer onSubmit={this.onSubmitForm}>
              <ContainerHeading>Add a Resource</ContainerHeading>
              <LabelText htmlFpr="name">NAME</LabelText>
              <InputTag
                id="name"
                type="text"
                onChange={this.onChangeName}
                value={nameInput}
                placeholder="Enter Name"
              />
              {showErrorMsg === showErrorMsgConstants.name && (
                <ErrorMsgText>*{errorMsg}</ErrorMsgText>
              )}
              <LabelText htmlFpr="link">LINK</LabelText>
              <InputTag
                id="link"
                type="text"
                onChange={this.onChangeLink}
                value={linkInput}
                placeholder="Enter Link"
              />
              {showErrorMsg === showErrorMsgConstants.link && (
                <ErrorMsgText>*{errorMsg}</ErrorMsgText>
              )}
              <LabelText htmlFpr="description">DESCRIPTION</LabelText>
              <TextAreaTag
                id="description"
                type="textarea"
                onChange={this.onChangeDescription}
                value={descriptionInput}
                placeholder="Enter Description"
              />
              {showErrorMsg === showErrorMsgConstants.description && (
                <ErrorMsgText>*{errorMsg}</ErrorMsgText>
              )}
              <ChangePhotoContainer>
                <IconImageTag
                  src="http://loremflickr.com/640/480"
                  alt="icon picture"
                />
                <UploadIcon
                  src="https://res.cloudinary.com/adityak/image/upload/v1659380149/Icon_rrewpu.png"
                  alt="upload logo"
                />
                <ChangePhotoText>Change photo</ChangePhotoText>
              </ChangePhotoContainer>
              <CreateBtn type="submit">Create</CreateBtn>
            </AddResourceFormContainer>
            {renderDifferentView()}
          </AddResourceFormAndUsersBtnContainer>
          <ImgTag
            src="https://res.cloudinary.com/adityak/image/upload/v1659417571/image_9_uiir3n.png"
            alt="add resource picture"
          />
        </SuccessViewContainer>
      </PageContainer>
    )
  }
}

export default AddResource
