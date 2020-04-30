import React from 'react';
import { shallow, mount, render } from 'enzyme';
import UserInfo from "./components/UserInfo";
import renderer from 'react-test-renderer';
import ReactDOM from "react-dom";

// it("<UserInfo/> renders as expected",() =>{
//     const 


// })


// it('should render component renders as expected', () => {// makes sure that any changes in the component are actually wanted
//     const tree = renderer
//       .create(<UserInfo/>)
//       .toJSON();
//     expect(tree).toMatchSnapshot()
// });



// it('should mount component using enzyme',()=>{
//     const wrapper = mount(<Search/>)
//   })

  it('renders 2 search input elements in form', () => {
    const wrapper = shallow(<UserInfo/>)
    expect(wrapper.find('input').length).toEqual(5);
  })


  it('username and difficult should be set to required',() =>{
    const wrapper = shallow(<UserInfo/>)
    expect(wrapper.find('input').filterWhere((item) => item.prop('required') === true)).toHaveLength(2)
  })
  


  it('should call getUserData with category, username and difficult on form submit ',()=>{
    // we need to create a jest function that mocks/fakes the prop call back that is sent with search component; we dont have access to this so need to mock it!
    const essentialProps ={
      userData: jest.fn()
    }

    // do a shallow render as this is all that is needed  
    const wrapper = mount(<UserInfo {...essentialProps} />)//, {disableLifecycleMethods: true})

    //we find the form in the shallow render and simulate form submission
    // we need to include paraters for: 
    //  1. preventing default ===> preventDefault:()=>{},
    //  2. value of the text input ===> target: [{value: 'London'}]}
    // N.B if we were doing a mount, instead of render, we would not need to have a preventDefault parameter
    
    // set instance of inputs to values to test submission of user data
    wrapper.find("#username").instance().value = "Helder"
    wrapper.find("#category").instance().value = 1
    wrapper.find({value:"easy"}).instance().checked = true
    
    //simiutalte form submiisson
    wrapper.find('form').simulate('submit',{
      preventDefault:()=>{}
    })

    // we then expect that the searchTerm prop callback will be called with the value ("london in this case") we sent on submit of form
    expect(essentialProps.userData).toHaveBeenCalledWith({userName:"Helder", category: "1", difficulty:"easy"})


  })