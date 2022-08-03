import styled from 'styled-components/macro'

export const SuccessViewContainer = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 1px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`
export const AddResourceFormAndUsersBtnContainer = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
`
export const UserBtn = styled.button`
  justify-self: flex-start;
  align-self: flex-start;
  background-color: transparent;
  outline: none;
  cursor: pointer;
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 16px;
  color: #7e858e;
  border: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  margin-left: 15px;
`
export const AddResourceFormContainer = styled.form`
  align-self: center;
  margin-top: 12%;
  display: flex;
  flex-direction: column;
  margin-right: 25px;
  width: 70%;
  max-width: 550px;
`
export const ContainerHeading = styled.h1`
  font-style: normal;
  font-weight: 500;
  font-size: 32px;
  line-height: 40px;
  text-align: center;
  color: #171f46;
`
export const LabelText = styled.label`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 16px;
  letter-spacing: 0.01em;
  color: #7e858e;
  margin-top: 25px;
  margin-bottom: 8px;
`
export const InputTag = styled.input`
  border: 1px solid #d7dfe9;
  border-radius: 2px;
  background-color: #ffffff;
  outline: none;
  padding: 8px 15px;
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #171f46;
`
export const ChangePhotoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 25px;
`
export const UploadIcon = styled.img`
  width: 14px;
  height: 14px;
  color: #7e858e;
`
export const ChangePhotoText = styled.p`
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #7e858e;
  margin-left: 6px;
`
export const CreateBtn = styled.button`
  align-self: center;
  padding: 8px 20px;
  gap: 10px;
  background: #0b69ff;
  border-radius: 4px;
  color: #ffffff;
  border: 0px;
  font-style: normal;
  font-size: 14px;
  line-height: 24px;
  margin-top: 35px;
`
export const ImgTag = styled.img`
  width: 50%;
  height: 100%;
  max-width: 564px;
  display: flex;
  align-items: stretch;
  justify-content: flex-end;
  @media (max-width: 768px) {
    display: none;
  }
`
export const DivContainer = styled.div``

export const TextAreaTag = styled.textarea`
  border: 1px solid #d7dfe9;
  border-radius: 2px;
  background-color: #ffffff;
  outline: none;
  padding: 8px 15px;
  font-family: 'Roboto';
  font-weight: 400;
  font-size: 14px;
  line-height: 20px;
  color: #171f46;
`
export const ErrorMsgText = styled.p`
  color: #ff0000;
  font-size: 11px;
  font-weight: 400;
  font-family: 'Roboto';
  margin-top: 7px;
`
export const PromiseContainer = styled.p`
  align-self: center;
  padding: 8px 18px;
  border: 0px;
  box-shadow: 3px 3px 15px 5px #d7dfe9;
  width: 200px;
  margin-top: 30px;
  text-align: center;
  border-radius: 5px;
  border-left: 4px solid ${props => props.borderColor};
`
