import styled from 'styled-components'

export const MemeGeneratorPage = styled.div`
  font-family: 'Roboto';
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
  @media (min-width: 768px) {
    gap: 24px;
  }
`

export const Heading = styled.h1`
  font-size: 24px;
  color: #35469c;
`
export const MemeOutput = styled.div`
  width: 100%;
  aspect-ratio: 1;
  display: flex;
  border: 1px solid red;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
  padding: 20px;
  background-image: url('${props => props.bgImgUrl}');
  max-width: 360px;
  margin: 0 auto 20px auto;
`
export const MemeText = styled.p`
  color: #ffffff;
  font-size: ${props => props.fontSize};
`
export const MainSection = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  @media (min-width: 768px) {
    flex-direction: row-reverse;
  }
`
export const FormSection = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`

export const CustomLabel = styled.label`
  color: #7e858e;
  display: block;
  font-size: 13px;
  margin: 0 0 6px 0;
  width: 100%;
  max-width: 360px;
`
export const CustomInput = styled.input`
  border: 1px solid #7e858e;
  width: 100%;
  max-width: 360px;
  border-radius: 4px;
  outline: none;
  padding: 6px 8px;
  font-family: 'Roboto';
  margin: 0 0 16px 0;
`

export const CustomButton = styled.button`
  border-radius: 4px;
  border: none;
  background-color: #0b69ff;
  color: #ffffff;
  outline: none;
  cursor: pointer;
  padding: 8px 12px;
  width: 100px;
`
