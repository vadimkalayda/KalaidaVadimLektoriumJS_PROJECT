import styled from "styled-components";

export const FormConstructor = styled.form`
  width: 700px;
  height: 350px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  background: #0f0c29;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #24243e, #0f0c29);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #24243e, #0f0c29); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  position: relative;
`;

export const FormConstructorTitle = styled.p`
  font-size: 22px;
  font-weight: 800;
  text-transform: uppercase;
  letter-spacing: 1.3px;
  background: #11998e;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #38ef7d, #11998e);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #38ef7d, #11998e); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export const FormConstructorTip = styled.p`
  position: absolute;
  top: -9px;
  left: 7px;
  font-size: 14px;
  background: #FF416C;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #FF4B2B, #FF416C);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #FF4B2B, #FF416C); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  opacity: .85;
`;

export const FormConstructorInputBlock = styled.div`
  width: 75%;
  min-height: 105px;
  background: #8E2DE2;
  background: -webkit-linear-gradient(to right, #4A00E0, #8E2DE2);
  background: linear-gradient(to right, #4A00E0, #8E2DE2);
  border-radius: 5px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  margin-bottom: 25px;
  #formTitle {
    width: 85%;
  }
  #inputBG {
    width: 150px;
  }
  #inputBorderColor {
    width: 150px;
  }
  #inputRequired {
    width: 50px; 
    cursor: pointer;
  }
`;

export const FormConstructorInput = styled.input`
  width: 85%;
  height: 50px;
  background: #0f0c29;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #24243e, #0f0c29);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #24243e, #0f0c29); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  color: #8B30DF;
  padding-left: 15px;
  font-weight: 800;
  font-size: 18px;
  outline: none;
  border: none;
  margin-bottom: 20px;
  margin-top: 20px;
  &::placeholder {
    color: #6F22DE;
  }
`;

export const DropDownMenu = styled.div`
  width: 120px;
  position: relative;
  display: inline-block;
  cursor: pointer;
  border: 1px solid #297CC1;
  margin-right: 10px;
  & span {
    font-size: 24px;
    min-height: 35px;
  }
  & div {
    min-width: 120px;
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
    z-index: 1;
    & p {
      min-height: 35px;
      color: #0E57AA;
      font-weight: 800;
      font-size: 18px;
      border-bottom: 1px solid #0E57AA;
      margin-bottom: 0;
      margin-top: 0;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: .3s;
      &:hover {
        background: rgba(14,87,170, .1);
      }
    }
  }
  &:hover& div {
    display: block;
  }
`;

export const FormConstructorAddInput = styled.button`
  width: 150px;
  height: 50px;
  background: #0f0c29;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #24243e, #0f0c29);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #24243e, #0f0c29); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  outline: none;
  border: 1px solid #100E29;
  color: #fff;
  text-transform: uppercase;
  font-size: 22px;
  font-weight: 800;
  cursor: pointer;
  transition: .2s;
  margin-bottom: 25px;
  &:hover {
    border: 2px solid #110E2A;
    background: #8E2DE2;
    background: -webkit-linear-gradient(to right, #4A00E0, #8E2DE2);
    background: linear-gradient(to right, #4A00E0, #8E2DE2);
  }
  &:active {
    background: #0E57AA;
    background: #0f0c29;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to right, #24243e, #0f0c29);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to right, #24243e, #0f0c29); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  }
`;

export const FormConstructorLine = styled.hr`
  width: 85%;
  height: 2px;
  border: none;
  background: #014A9D;
`;

export const MakeFormButton = styled.button`
  width: 250px;
  min-height: 80px;
  background: #0E57AA;
  outline: none;
  border: none;
  color: #fff;
  text-transform: uppercase;
  font-size: 22px;
  font-weight: 800;
  cursor: pointer;
  transition: .2s;
  margin-bottom: 15px;
  &:hover {
    background: #014A9D;
  }
  &:active {
    background: #0E57AA;
  }
`;
