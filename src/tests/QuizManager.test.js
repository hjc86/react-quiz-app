import React from 'react';
import ReactDOM from 'react-dom'
import {shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import QuizManager from '../containers/QuizManager'

describe(QuizManager, () => {
    let wrapper;
    beforeEach(() => wrapper = shallow(<QuizManager />));
    
    // beforeEach(() => wrapper.setProps({playerInfo: {userName: 'Tom'}}))
    beforeEach(() => wrapper.setState({questionsAnswered: 5}))
    
    //check rendering and mounting of <QuizManager /> component //
    it('should mount to DOM', () => {
        const div = document.createElement('div');
        ReactDOM.render(<QuizManager />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders correctly', () => {
        const tree = renderer
            .create(<QuizManager />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
    
   
    
   
    
    // it('should render a single div <div />', () => {
    //     expect(wrapper.find('div').length).toEqual(1);
    // });

   
    // it('should render two <p />', () => {
    //     let wrapper =shallow(<QuizManager />)
    //     expect(wrapper.find('p').length).toEqual(1);
    //  });
 
    //test conditional rendering //

    //beforeEach(()=>wrapper.setState({QuestionsAnswered: 5}))

})