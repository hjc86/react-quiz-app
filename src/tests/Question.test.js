import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { shallow, mount } from 'enzyme';
import Question from '../components/Question';
import renderer from 'react-test-renderer';

let testData ={ 
    
        "category": "Animals",
        "type": "multiple",
        "difficulty": "easy",
        "question": "Hippocampus is the Latin name for which marine creature?",
        "correct_answer": "Seahorse",
        "incorrect_answers": [
          "Dolphin",
          "Whale",
          "Octopus"
        ]
    }


describe("<Question />", () => {
    
    /// setup for test ///

    const essentialProps ={
        questionData: testData,
        latestPoint: 0,
        answeredQuestions: 0
    }

    let componentWithProps = <Question {...essentialProps}/>
    let wrapper;

    /// end of setup //

    beforeEach(() => wrapper = shallow(componentWithProps));

    it('should render  three <div />',()=>{
        expect(wrapper.find('div').length).toEqual(3);
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
