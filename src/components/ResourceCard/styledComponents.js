import styled from 'styled-components/macro'

export const EachResourceCardContainer = styled.li`
  border: 1px solid #d7dfe9;
  border-radius: 5px;
  background-color: #ffffff;
  padding: 24px;
  margin: 16px;
  width: 25%;
  display: flex;
  flex-direction: column;
  flex-basis: auto;
  @media (max-width: 1100px) {
    width: 38%;
  }
  @media (max-width: 700px) {
    width: 95%;
  }
  @media (max-width: 1300px) {
    margin: 10px;
  }
`
export const IconAndTitleContainer = styled.div`
  display: flex;
  align-items: center;
`
export const IconImageTag = styled.img`
  border: 2px solid #d7dfe9;
  border-radius: 4px;
  margin-right: 18px;
  padding: 1px;
  height: 42px;
  width: 42px;
`
export const TitleContainer = styled.div``

export const TitleText = styled.h1`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #171f46;
  margin: 0px;
`
export const CategoryText = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #7e858e;
  margin-bottom: 0px;
  margin-top: 7px;
`
export const LinkText = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #0b69ff;
  margin-top: 20px;
  margin-bottom: 7px;
`
export const DescriptionText = styled.p`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #7e858e;
  margin: 0px;
`
