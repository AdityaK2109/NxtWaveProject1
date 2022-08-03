/* Write your CSS code here */
import styled from 'styled-components/macro'

export const PageContainer = styled.div`
  width: 100%;
  height: 98vh;
  overflow: hidden;
  margin: 0px;
  font-family: 'Roboto';
`
export const LoadingViewPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90%;
  text-align: center;
`
export const SearchbarAndIconContainer = styled.div`
  width: 80%;
  max-width: 500px;
  margin-left: 16px;
  background-color: transparent;
  border: 1px solid #d7dfe9;
  padding: 8px 18px;
  border-radius: 3px;
  display: flex;
  align-items: center;
  background-color: #ffffff;
  @media (max-width: 550px) {
    width: 80%;
  }
  @media (max-width: 1300px) {
    margin-left: 10px;
  }
`
export const InputTag = styled.input`
  background-color: transparent;
  width: 88%;
  font-size: 15px;
  font-weight: 500;
  border: 0px;
  padding-left: 15px;
  outline: none;
  @media (max-width: 550px) {
    padding-left: 13px;
    padding-right: 13px;
  }
`
export const FailureImgTag = styled.img`
  width: 65%;
  max-width: 450px;
  margin-bottom: 30px;
  @media (max-width: 380px) {
    width: 80%;
  }
`
export const FailureHeading = styled.h1`
  font-size: 21px;
  font-weight: 500;
  font-family: 'Roboto';
  color: '#181818';
  @media (max-width: 380px) {
    font-size: 17px;
  }
`
export const FailureDescription = styled.p`
  font-size: 17px;
  font-weight: normal;
  font-family: 'Roboto';
  line-height: 1.5;
  margin: 0px;
  color: '#64748b';
  @media (max-width: 380px) {
    font-size: 15px;
  }
`
export const RetryButton = styled.button`
  outline: none;
  cursor: pointer;
  font-size: 16;
  font-weight: 500;
  font-family: 'Roboto';
  color: #f8fafc;
  padding: 8px;
  padding-left: 26px;
  padding-right: 26px;
  border: 0px;
  border-radius: 3px;
  background-color: #4f46e5;
  margin-top: 22px;
`
export const SuccessViewContainer = styled.div`
  background-color: #f5f5f5;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  padding: 40px;
  padding-left: 130px;
  padding-right: 130px;
  height: 88%;
  @media (max-width: 1400px) {
    padding-left: 70px;
    padding-right: 70px;
  }
  @media (max-width: 850px) {
    padding-left: 40px;
    padding-right: 40px;
  }
  @media (max-width: 380px) {
    padding: 30px;
  }
`
export const OptionBtn = styled.button`
  outline: none;
  cursor: pointer;
  width: 200px;
  line-height: 36px;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  color: ${props => (props.isActive ? '#ffffff' : '#171f46')};
  border: 1px solid #d7dfe9;
  background-color: ${props => (props.isActive ? '#0b69ff' : '#eaeff2')};
  &:hover {
    border: 1px solid #0b69ff;
  }
  @media (max-width: 768px) {
    width: 120px;
  }
  @media (max-width: 576px) {
    width: 105px;
  }
`
export const ResourceBtn = styled(OptionBtn)`
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
`
export const UsersBtn = styled(OptionBtn)`
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
`

export const OptionsContainer = styled.ul`
  padding: 0px;
  margin: 0px;
  justify-self: center;
  list-style-type: none;
  display: flex;
  justify-content: center;
  margin-bottom: 40px;
  border-radius: 5px;
`
export const EachOption = styled.li`
  padding: 0px;
`
export const ResourcesListContainer = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  padding: 0px;
  width: 100%;
`
