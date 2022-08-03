import {Link, withRouter} from 'react-router-dom'
import {HiPlus} from 'react-icons/hi'
import {
  NavbarContainer,
  WebsiteLogo,
  NavItemsContainer,
  EachNavItem,
  AddButton,
  ProfilePictureImg,
} from './styledComponents'

const Header = props => {
  const {match} = props
  const {path} = match
  const isAddResourceActive = path === '/add-resource'

  const onClickAddButton = () => {
    const {history} = props
    history.push('/add-resource')
  }

  return (
    <NavbarContainer>
      <Link to="/">
        <WebsiteLogo
          src="https://res.cloudinary.com/adityak/image/upload/v1659271468/NxtWave_TM_Coloured_logo_1_mnll3f.png"
          alt="website logo"
        />
      </Link>
      <NavItemsContainer>
        <EachNavItem key="addResourceButton">
          <AddButton
            type="button"
            onClick={onClickAddButton}
            isAddResourceActive={isAddResourceActive}
          >
            <HiPlus size={18} color="#ffffff" />
            ADD
          </AddButton>
        </EachNavItem>
        <EachNavItem key="profilePicture">
          <ProfilePictureImg
            src="https://res.cloudinary.com/adityak/image/upload/v1656503488/profile3_vt2tvd.jpg"
            alt="profile picture"
          />
        </EachNavItem>
      </NavItemsContainer>
    </NavbarContainer>
  )
}

export default withRouter(Header)
