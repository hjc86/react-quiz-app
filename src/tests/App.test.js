import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { shallow, mount } from 'enzyme';
import App from '../App';
import renderer from 'react-test-renderer';
import UserInfo from '../components/UserInfo'
import QuizManager from '../containers/QuizManager'


describe(App, () => {
    it('mounts to DOM', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders correctly', () => {
        const tree = renderer
            .create(<App />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    let wrapper;
    beforeEach(() => wrapper = shallow(<App />));
    
    it('Renders correctly', () => {
        expect(wrapper).toMatchSnapshot();
    })

    it('should render a <div />', () => {
        expect(wrapper.find('div').length).toEqual(1);
    });

    it('should render a <UserInfo/>', () => {
        expect(wrapper.find(UserInfo)).toHaveLength(1)
    });

    it('should render a <QuizManager/> if userName state is not null',()=>{
        wrapper.setState({userName: "Tom"})
        expect(wrapper.find(QuizManager)).toHaveLength(1)
    })


})



