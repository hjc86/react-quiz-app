// import React, { Component } from 'react';
// import ReactDOM from 'react-dom'
// import { shallow, mount } from 'enzyme';
// import Question from '../components/Question';
// import renderer from 'react-test-renderer';
// import { configure } from 'enzyme';


// describe(Question, () => {
//     it('mounts to DOM', () => {
//         const div = document.createElement('div');
//         ReactDOM.render(<Question />, div);
//         ReactDOM.unmountComponentAtNode(div);
//     });

//     it('renders correctly', () => {
//         const tree = renderer
//             .create(<Question />)
//             .toJSON();
//         expect(tree).toMatchSnapshot();
//     });

//     let wrapper;
//     beforeEach(() => wrapper = shallow(<Question />));
    
//     it('Renders correctly', () => {
//         expect(wrapper).toMatchSnapshot();
//     })

//     it('should render a <div />', () => {
//         expect(wrapper.find('div').length).toEqual(3);
//     });



// })