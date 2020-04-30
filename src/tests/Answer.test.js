// import React, { Component } from 'react';
// import ReactDOM from 'react-dom'
// import { shallow, mount } from 'enzyme';
// import Answer from '../components/Answer';
// import renderer from 'react-test-renderer';
// import { configure } from 'enzyme';


// describe(Answer, () => {
//     it('mounts to DOM', () => {
//         const div = document.createElement('div');
//         ReactDOM.render(<Answer />, div);
//         ReactDOM.unmountComponentAtNode(div);
//     });

//     it('renders correctly', () => {
//         const tree = renderer
//             .create(<Answer />)
//             .toJSON();
//         expect(tree).toMatchSnapshot();
//     });

//     let wrapper;
//     beforeEach(() => wrapper = shallow(<Answer />));
    
//     it('Renders correctly', () => {
//         expect(wrapper).toMatchSnapshot();
//     })

//     it('should render a <div />', () => {
//         expect(wrapper.find('div').length).toEqual(1);
//     });



// })