import React from 'react';
import ReactDOM from 'react-dom'
import { shallow, mount } from 'enzyme';
import Quiz from '../components/Quiz';
import renderer from 'react-test-renderer';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Question from '../components/Question';

let testData ={ 
    "results": [
    {
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
    },
    {
      "category": "Science: Computers",
      "type": "multiple",
      "difficulty": "easy",
      "question": "If you were to code software in this language you&#039;d only be able to type 0&#039;s and 1&#039;s.",
      "correct_answer": "Binary",
      "incorrect_answers": [
        "JavaScript",
        "C++",
        "Python"
      ]
    },
    {
      "category": "General Knowledge",
      "type": "multiple",
      "difficulty": "easy",
      "question": "Which one of the following rhythm games was made by Harmonix?",
      "correct_answer": "Rock Band",
      "incorrect_answers": [
        "Meat Beat Mania",
        "Guitar Hero Live",
        "Dance Dance Revolution"
      ]
    },
    {
      "category": "Entertainment: Video Games",
      "type": "multiple",
      "difficulty": "easy",
      "question": "Which of these is NOT a playable character in the 2016 video game Overwatch?",
      "correct_answer": "Invoker",
      "incorrect_answers": [
        "Mercy",
        "Winston",
        "Zenyatta"
      ]
    },
    {
      "category": "General Knowledge",
      "type": "multiple",
      "difficulty": "easy",
      "question": "The Flag of the European Union has how many stars on it?",
      "correct_answer": "12",
      "incorrect_answers": [
        "10",
        "14",
        "16"
      ]
    }
  ]
}



describe(Quiz, () => {
    let playerInfo ={
        userName: "tom",
        difficulty: "easy",
        categoryName: "Animals"
    }

    it('mounts to DOM', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Quiz />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders correctly', () => {
        const tree = renderer
            .create(<Quiz />)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });

    let wrapper;
    beforeEach(() => wrapper = shallow(<Quiz />));
    it('Renders correctly', () => {
        expect(wrapper).toMatchSnapshot();
    })



    
    beforeEach(() => wrapper.setState({quizInstance: testData.results}))
    it('should render 5 <Question /> if quizInstance state is not null',()=>{

        //let wrapper = mount(<Quiz />)
      
        console.log(playerInfo)
        wrapper.setState({quizInstance: testData.results})
        wrapper.setProps({playerInfo:{
            userName: "tom",
            difficulty: "easy",
            categoryName: "Animals"
        }})
        
        expect(wrapper.find(Question)).toHaveLength(5)
    })

    it('should render a <div />', () => {
        expect(wrapper.find('div').length).toEqual(3);
    });



})



