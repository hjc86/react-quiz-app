// import React, { Component } from 'react';
// import ReactDOM from 'react-dom'
// import { shallow, mount } from 'enzyme';
// import Score from '../components/Score';
// import renderer from 'react-test-renderer';
// import { configure } from 'enzyme';


// describe(Question, () => {
//     it('mounts to DOM', () => {
//         const div = document.createElement('div');
//         ReactDOM.render(<Score />, div);
//         ReactDOM.unmountComponentAtNode(div);
//     });

//     it('renders correctly', () => {
//         const tree = renderer
//             .create(<Score />)
//             .toJSON();
//         expect(tree).toMatchSnapshot();
//     });

//     let wrapper;
//     beforeEach(() => wrapper = shallow(<Score />));
    
//     it('Renders correctly', () => {
//         expect(wrapper).toMatchSnapshot();
//     })

//     it('should render a <div />', () => {
//         expect(wrapper.find('div').length).toEqual(1);
//     });

//    it('should render a <p />', () => {
//         expect(wrapper.find('p').length).toEqual(2);
//     });



// })