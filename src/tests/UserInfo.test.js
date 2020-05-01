import React from 'react';
import { shallow, mount, render } from 'enzyme';
import UserInfo from "../components/UserInfo";
import renderer from 'react-test-renderer';
import ReactDOM from "react-dom";

describe("<UserInfo />", () => {
  
  let essentialProps ={
    UserInfo:{
      userName: "Tom",
      difficulty: "Hard",
      category: "1",
      categoryName: "Animals"
    },
    playerData: jest.fn()
  }
 
  let componentWithProps = <UserInfo {...essentialProps}/>
  let wrapper;
  
  beforeEach(() => wrapper = shallow(componentWithProps));
  beforeEach(() => wrapper.setState({questionsAnswered: 5}))
  
  it('should render 4 input elements', () => {
    const wrapper = shallow(componentWithProps)
    expect(wrapper.find('input').length).toEqual(4);
  })

  it('username and difficult should be set to required',() =>{
    const wrapper = shallow(componentWithProps)
    expect(wrapper.find('input').filterWhere((item) => item.prop('required') === true)).toHaveLength(2)
  })
  
  it('should call getUserData with category, username, categoryName, and difficulty on form submit ',()=>{
    // we need to create a jest function that mocks/fakes the prop call back that is sent with <UserInfo />; we dont have access to this so need to mock it!

    // do a shallow render as this is all that is needed  
    const wrapper = mount(<UserInfo {...essentialProps} />)//, {disableLifecycleMethods: true})

    //we find the form in the shallow render and simulate form submission
    // we need to include paraters for: 
    //  1. preventing default ===> preventDefault:()=>{},
    //  2. value of the text input ===> target: [{value: 'London'}]}
    // N.B if we were doing a mount, instead of render, we would not need to have a preventDefault parameter
    
    // set instance of inputs to values to test submission of user data
    wrapper.find("#username").instance().value = "Helder"
    wrapper.find("#category").instance().value = 27
    wrapper.find({value:"27"}).instance().checked =true
    wrapper.find({value:"easy"}).instance().checked = true
    
    //simulate form submission
    wrapper.find('form').simulate('submit',{
      preventDefault:()=>{}
    })

    // we then expect that the searchTerm prop callback will be called with the value ("london in this case") we sent on submit of form
    expect(essentialProps.playerData).toHaveBeenCalledWith({userName:"Helder", category: "27", difficulty:"easy", categoryName:"Animals"})
  })

})