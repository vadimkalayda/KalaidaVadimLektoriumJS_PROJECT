import React from 'react';
import HeaderComponent from "../HeaderComponent/HeaderComponent";
import { MainHomeBlock } from "../../elements";
import { UserInfoParagraph, UserInfoLink } from './elements';
import {Link} from "react-router-dom";
import ErrorComponent from "../ErrorComponent/ErrorComponent";

const UserInfoComponent : React.FC = () => {

  const showUserInfo = () => {
    let unparsedUsersArray : any = localStorage.getItem('users'),
      usersArray = JSON.parse(unparsedUsersArray),
      userId = localStorage.getItem('lektorium_login_user_id'),
      userInfo;

    for(let i : number = 0; i < usersArray.length; i++) {
      if(usersArray[i]._id === userId) {
        userInfo = usersArray[i];
      }
    }

    return(
      <>
        <HeaderComponent buttonTextColorProps={'#FEFADD'} pageNameProps={'user_info'} buttonBackgroundProps={'#A47493'} />
        <UserInfoParagraph>Name: <span>{ userInfo.name }</span></UserInfoParagraph>
        <UserInfoParagraph>Description: <span>{ userInfo.description }</span></UserInfoParagraph>
        <UserInfoParagraph>Organization: <span>{ userInfo.organization }</span></UserInfoParagraph>
        <UserInfoParagraph>Address: <span>{ userInfo.address }</span></UserInfoParagraph>
        <UserInfoParagraph>Email: <span>{ userInfo.email }</span></UserInfoParagraph>
        <UserInfoParagraph>Phone: <span>{ userInfo.phone }</span></UserInfoParagraph>
        <UserInfoLink><Link to={'/resetPass'}>Change Password</Link></UserInfoLink>
      </>
    );
  };

  return(
    <MainHomeBlock>
      { !sessionStorage.getItem('userLoggedIN') || sessionStorage.getItem('userLoggedIN') === '0' ? <ErrorComponent /> : showUserInfo() }
    </MainHomeBlock>
  );
};

export default UserInfoComponent;