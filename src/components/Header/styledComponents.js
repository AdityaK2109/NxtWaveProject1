import styled from 'styled-components/macro'

export const NavbarContainer = styled.nav`
  background-color: '#ffffff';
  padding: 15px;
  padding-left: 28px;
  padding-right: 28px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media (max-width: 360px) {
    padding: 11px;
    padding-left: 16px;
    padding-right: 16px;
  }
  border-bottom: 2px solid #d7dfe9;
`
export const WebsiteLogo = styled.img`
  width: 82px;
`
export const NavItemsContainer = styled.ul`
  padding: 0px;
  margin: 0px;
  list-style-type: none;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const EachNavItem = styled.li`
  margin: auto;
  margin-left: 17px;
  @media (max-width: 400px) {
    margin-left: 13px;
  }
`
export const ProfilePictureImg = styled.img`
  height: 40px;
  width: 40px;
  border-radius: 20px;
`

export const AddButton = styled.button`
  background: #0b69ff;
  outline: none;
  cursor: pointer;
  border: 0px;
  display: ${props => (props.isAddResourceActive ? 'none' : 'flex')};
  flex-direction: row;
  align-items: center;
  padding: 7px 20px;
  gap: 8px;
  border-radius: 4px;
  color: #ffffff;
  font-style: normal;
  font-size: 14px;
  line-height: 24px;
  @media (max-width: 576px) {
    padding: 6px 14px;
    font-size: 13px;
    gap: 6px;
  }
`
