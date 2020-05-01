import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { shallow, mount } from 'enzyme';
import Score from '../components/Score';
import renderer from 'react-test-renderer';

describe("<Score />", () => {
    
    /// setup for test ///

    const essentialProps ={
        scoreArray:[0,1],
        userName:['a','b']
    }

    let componentWithProps = <Score {...essentialProps}/>
    let wrapper;

    /// end of setup //

    beforeEach(() => wrapper = shallow(componentWithProps));

    it('should render a ten <div />',()=>{
        expect(wrapper.find('div').length).toEqual(10);
    })

    it('mounts to DOM', () => {
        const div = document.createElement('div');
        ReactDOM.render(componentWithProps, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders correctly', () => {
        const tree = renderer
            .create(componentWithProps)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
    
    it('Renders correctly', () => {
        expect(wrapper).toMatchSnapshot();
    })


})


