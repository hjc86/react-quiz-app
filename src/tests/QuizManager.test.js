import React from 'react';
import ReactDOM from 'react-dom'
import {shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import QuizManager from '../containers/QuizManager'
import Score from '../components/Score'
import Quiz from '../components/Quiz'

describe("<QuizManager/ >", () => {

    const essentialProps ={
        playerInfo:{
          userName: "Tom",
          difficulty: "Hard",
          category: "1",
          categoryName: "Animals"
        }
    }
  
    let componentWithProps = <QuizManager {...essentialProps}/>
    let wrapper;
    
    beforeEach(() => wrapper = shallow(componentWithProps));
    beforeEach(() => wrapper.setState({questionsAnswered: 5}))
    
    it('should mount to DOM', () => {
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
 
  
    it('should render a single <div />', () => {
        expect(wrapper.find('div').length).toEqual(1);
    });

   

    it('should render 1 <Quiz /> if questionsAnswered state is not equal to 5',()=>{
        wrapper.setState({questionsAnswered: 0})
        //wrapper.setState({quizInstance: testData.results})
        
        expect(wrapper.find(Quiz)).toHaveLength(1)
    })
    
   
    it('should render 1 <Score /> if questionsAnswered state is equal to 5',()=>{
        wrapper.setState({questionsAnswered: 5})
        //wrapper.setState({quizInstance: testData.results})
        
        expect(wrapper.find(Score)).toHaveLength(1)
    })
    

})