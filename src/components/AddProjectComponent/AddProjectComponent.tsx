import React, { useState, useEffect } from 'react';
import HeaderComponent from "../HeaderComponent/HeaderComponent";
import { AddProjectForm, AddProjectTitle, AddProjectInput, AddProjectButton, AddProjectBlocker } from "./elements";
import { FormError } from "../../elements";
import { sendRequestGetProjects, sendRequestAddProject } from "../../services/projectsRequests";
import ErrorComponent from "../ErrorComponent/ErrorComponent";

const AddProjectComponent : React.FC = () => {
  const [ addProjectTitle, setAddProjectTitle ] : React.ComponentState = useState('');
  const [ addProjectTitleError, setAddProjectTitleError ] : React.ComponentState = useState('');
  const [ addProjectCost, setAddProjectCost ] : React.ComponentState = useState('');
  const [ addProjectCostError, setAddProjectCostError ] : React.ComponentState = useState('');
  const [ addProjectDeadline, setAddProjectDeadline ] : React.ComponentState = useState('');
  const [ addProjectDeadlineError, setAddProjectDeadlineError ] : React.ComponentState = useState('');
  const [ addProjectBlocker, setAddProjectBlocker ] : React.ComponentState = useState(1);
  let checkDate : RegExp = /^\d{4}\-\d{2}\-\d{2}$/;
  let loginUserId : any = localStorage.getItem('lektorium_login_user_id');

  const handleProjectTitleChange = (e : any) => {
    setAddProjectTitle(e.target.value);
  };

  const handleProjectCostChange = (e : any) => {
    setAddProjectCost(e.target.value);
  };

  const handleProjectDeadlineChange = (e : any) => {
    setAddProjectDeadline(e.target.value);
  };

  useEffect(() => {
    if(!/^[A-Za-z\s][A-Za-z0-9/!_.\s-]*$/.test(addProjectTitle) || addProjectTitle.search(/[A-Z]/) < 0 || addProjectTitle.length < 1 || addProjectTitle.length > 36) {
      setAddProjectTitleError('Oops, looks like title is incorrect.');
    } else {
      setAddProjectTitleError('');
    }

    if(addProjectCost.length < 1 || addProjectCost.length > 10 || !/^[0-9]*$/.test(addProjectCost)) {
      setAddProjectCostError('Oops, looks like cost is incorrect.');
    } else {
      setAddProjectCostError('');
    }

    if(!checkDate.test(addProjectDeadline)) {
      setAddProjectDeadlineError('Oops, looks like deadline is incorrect.');
    } else {
      setAddProjectDeadlineError('');
    }

    if(!/^[A-Za-z\s][A-Za-z0-9/!_.\s-]*$/.test(addProjectTitle) || addProjectTitle.search(/[A-Z]/) < 0 || addProjectTitle.length < 1 || addProjectTitle.length > 36 || addProjectCost.length < 1 || addProjectCost.length > 10 || !/^[0-9]*$/.test(addProjectCost) || !checkDate.test(addProjectDeadline)) {
      setAddProjectBlocker(1);
    } else {
      setAddProjectBlocker(0);
    }
  }, [addProjectTitle, addProjectCost, addProjectDeadline, checkDate]);

  const addProject = (e : any) => {
    e.preventDefault();

    let unsortedUsers : any = localStorage.getItem('users');
    let users = JSON.parse(unsortedUsers);
    let userCompany;

    for(let i : number = 0; i < users.length; i++ ) {
      if(users[i]._id === loginUserId) {
        userCompany = users[i].organization;
      }
    }

    sendRequestAddProject('https://geekhub-frontend-js-9.herokuapp.com/api/projects/', addProjectTitle, userCompany, '$' + addProjectCost, addProjectDeadline, loginUserId )
      .then(data => {
        console.log(data);
        alert('Project was added');
      })
      .catch(err => {
        console.log(err);
        alert('Sorry but something went wrong:(')
      });

    sendRequestGetProjects('https://geekhub-frontend-js-9.herokuapp.com/api/projects')
      .then(data => {
        console.log(data);
        localStorage.setItem('projects_array', JSON.stringify(data));
      })
      .catch(err => {
        console.log(err);
      });

    let projectsArray : any = [];

    let localStorageProjects : any = localStorage.getItem('projects_array');
    let parsedLocalStorageProjects : any = JSON.parse(localStorageProjects);

    for(let i : number = 0; i < parsedLocalStorageProjects.length; i++) {
      if(parsedLocalStorageProjects[i].assigned !== null) {
        projectsArray.push(parsedLocalStorageProjects[i])
      }
    }

    localStorage.setItem('sorted_projects_array', JSON.stringify(projectsArray));


    setAddProjectTitle('');
    setAddProjectCost('');
    setAddProjectDeadline('');
  };

  const ProjectForm = () => {
    return(
      <>
        <HeaderComponent buttonTextColorProps={'#FD7867'} pageNameProps={'add_project'} buttonBackgroundProps={'#2F0842'} />
        <AddProjectForm>
          <AddProjectTitle>Add Project</AddProjectTitle>
          <AddProjectInput type={'text'} name={'ProjectTitle'} value={addProjectTitle} onChange={handleProjectTitleChange} placeholder={'Title(Wordpress Theme)...'} />
          <FormError>{ addProjectTitleError }</FormError>
          <AddProjectInput type={'text'} name={'ProjectCost'} value={addProjectCost} onChange={handleProjectCostChange} placeholder={'Cost(570250 - DONT USE $)...'} />
          <FormError>{ addProjectCostError }</FormError>
          <AddProjectInput type={'text'} name={'ProjectDeadline'} value={addProjectDeadline} onChange={handleProjectDeadlineChange} placeholder={'Deadline(2021-01-28)...'} />
          <FormError>{ addProjectDeadlineError }</FormError>
          { addProjectBlocker === 1 ? <AddProjectBlocker></AddProjectBlocker> : null }
          <AddProjectButton onClick={addProject}>Add Project</AddProjectButton>
        </AddProjectForm>
      </>
    );
  };

  return(
    <>
      { !sessionStorage.getItem('userLoggedIN') || sessionStorage.getItem('userLoggedIN') === '0' ? <ErrorComponent /> : ProjectForm() }
    </>
  );
};

export default AddProjectComponent;