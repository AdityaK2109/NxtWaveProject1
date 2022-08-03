import {Component} from 'react'
import {TailSpin} from 'react-loader-spinner'
import {MdSearch} from 'react-icons/md'
import Header from '../Header'
import ResourceCard from '../ResourceCard'
import {
  PageContainer,
  LoadingViewPage,
  SearchbarAndIconContainer,
  InputTag,
  ResourcesListContainer,
  FailureImgTag,
  FailureHeading,
  FailureDescription,
  RetryButton,
  SuccessViewContainer,
  ResourceBtn,
  OptionBtn,
  UsersBtn,
  EachOption,
  OptionsContainer,
} from './styledComponents'

const activeButtonValues = {
  resources: '',
  requests: 'request',
  users: 'user',
}

const apiStatusConstants = {
  initial: 'INITIAL',
  loading: 'LOADING',
  success: 'SUCCESS',
  failure: 'FAILURE',
  emptyList: 'EMPTY LIST',
}

class Home extends Component {
  state = {
    activeButton: activeButtonValues.resources,
    searchInput: '',
    resourceList: [],
    apiStatus: apiStatusConstants.initial,
  }

  componentDidMount() {
    this.getResourceList()
  }

  getResourceList = async () => {
    this.setState({apiStatus: apiStatusConstants.loading})
    const apiUrl =
      'https://media-content.ccbp.in/website/react-assignment/resources.json'
    const options = {
      method: 'GET',
    }
    const response = await fetch(apiUrl, options)
    const data = await response.json()
    if (response.ok === true) {
      const updatedResourceList = data.map(eachItem => ({
        id: eachItem.id,
        title: eachItem.title,
        iconUrl: eachItem.icon_url,
        link: eachItem.link,
        description: eachItem.description,
        category: eachItem.category,
        tag: eachItem.tag,
      }))
      this.setState({
        apiStatus: apiStatusConstants.success,
        resourceList: updatedResourceList,
      })
    } else {
      this.setState({apiStatus: apiStatusConstants.failure})
    }
  }

  onChangeSearchInput = event => {
    this.setState({searchInput: event.target.value})
  }

  onClickRetryButton = () => {
    this.getVideosList()
  }

  onClickResourcesButton = () => {
    this.setState({activeButton: activeButtonValues.resources})
  }

  onClickRequestsButton = () => {
    this.setState({activeButton: activeButtonValues.requests})
  }

  onClickUsersButton = () => {
    this.setState({activeButton: activeButtonValues.users})
  }

  render() {
    const {apiStatus, activeButton, searchInput, resourceList} = this.state
    console.log(apiStatus)
    console.log(activeButton)
    console.log(searchInput)
    console.log(resourceList)

    let updatedList = resourceList.filter(eachResource =>
      eachResource.tag.includes(activeButton),
    )

    if (searchInput !== '') {
      updatedList = resourceList.filter(eachResource =>
        eachResource.title.includes(searchInput),
      )
    }

    const renderLoadingView = () => (
      <LoadingViewPage>
        <div className="loader-container" data-testid="loader">
          <TailSpin color="#3b82f6" height="50" width="50" />
        </div>
      </LoadingViewPage>
    )

    const renderFailureView = () => (
      <LoadingViewPage>
        <FailureImgTag
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-failure-view-light-theme-img.png"
          alt="failure view"
        />
        <FailureHeading>Oops! Something Went Wrong</FailureHeading>
        <FailureDescription>We are having some trouble</FailureDescription>
        <RetryButton type="button" onClick={this.onClickRetryButton}>
          Retry
        </RetryButton>
      </LoadingViewPage>
    )

    const renderEmptyListView = () => (
      <LoadingViewPage>
        <FailureImgTag
          src="https://assets.ccbp.in/frontend/react-js/nxt-watch-no-search-results-img.png"
          alt="no result"
        />
        <FailureHeading>No Search results found</FailureHeading>
        <FailureDescription>
          Try different key words or remove search filter
        </FailureDescription>
        <RetryButton type="button" onClick={this.onClickRetryButton}>
          Retry
        </RetryButton>
      </LoadingViewPage>
    )

    const renderSuccessView = () => (
      <SuccessViewContainer>
        <OptionsContainer>
          <EachOption key="resourcesButton">
            <ResourceBtn
              type="button"
              onClick={this.onClickResourcesButton}
              isActive={activeButton === activeButtonValues.resources}
            >
              Resources
            </ResourceBtn>
          </EachOption>
          <EachOption key="requestsButton">
            <OptionBtn
              type="button"
              onClick={this.onClickRequestsButton}
              isActive={activeButton === activeButtonValues.requests}
            >
              Requests
            </OptionBtn>
          </EachOption>
          <EachOption key="usersButton">
            <UsersBtn
              type="button"
              onClick={this.onClickUsersButton}
              isActive={activeButton === activeButtonValues.users}
            >
              Users
            </UsersBtn>
          </EachOption>
        </OptionsContainer>
        <SearchbarAndIconContainer>
          <MdSearch size={19} color="#171F46" />
          <InputTag
            type="search"
            placeholder="Search"
            value={searchInput}
            onChange={this.onChangeSearchInput}
          />
        </SearchbarAndIconContainer>
        <ResourcesListContainer>
          {updatedList.map(eachResource => (
            <ResourceCard key={eachResource.id} eachResource={eachResource} />
          ))}
        </ResourcesListContainer>
      </SuccessViewContainer>
    )

    const renderDifferentView = () => {
      switch (apiStatus) {
        case apiStatusConstants.loading:
          return renderLoadingView()
        case apiStatusConstants.failure:
          return renderFailureView()
        case apiStatusConstants.emptyList:
          return renderEmptyListView()
        case apiStatusConstants.success:
          return renderSuccessView()
        default:
          return null
      }
    }

    return (
      <PageContainer>
        <Header />
        {renderDifferentView()}
      </PageContainer>
    )
  }
}

export default Home
