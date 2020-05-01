import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { shallow, mount } from 'enzyme';
import App from '../App';
import renderer from 'react-test-renderer';
import ScoreBoard from '../components/ScoreBoard';



describe("<ScoreBoard/>", () => {
    
    it('mounts to DOM', () => {
        const div = document.createElement('div');
        ReactDOM.render(<App />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders correctly', () => {
        const tree = renderer
            .create(<ScoreBoard />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    let wrapper;
    beforeEach(() => wrapper = shallow(<ScoreBoard />));
    
    it('Renders correctly', () => {
        expect(wrapper).toMatchSnapshot();
    })

    it('should render a <div />', () => {
        expect(wrapper.find('div').length).toEqual(1);
    });

    

})