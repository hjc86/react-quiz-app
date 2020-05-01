// import React, { Component } from 'react';
// import ReactDOM from 'react-dom'
// import { shallow, mount } from 'enzyme';
// import Answer from '../components/Answer';
// import renderer from 'react-test-renderer';

// describe("<Answer />", () => {
    
//     /// setup for test ///

//     const essentialProps ={
//         scoreArray:[0,1],
//         userName:['a','b']
//     }

//     let componentWithProps = <Answer {...essentialProps}/>
//     let wrapper;

//     /// end of setup //

//     beforeEach(() => wrapper = shallow(componentWithProps));

//     it('should render a single <div />',()=>{
//         expect(wrapper.find('div').length).toEqual(2);
//     })

//     it('mounts to DOM', () => {
//         const div = document.createElement('div');
//         ReactDOM.render(componentWithProps, div);
//         ReactDOM.unmountComponentAtNode(div);
//     });

//     it('renders correctly', () => {
//         const tree = renderer
//             .create(componentWithProps)
//             .toJSON();
//         expect(tree).toMatchSnapshot();
//     });
    
//     it('Renders correctly', () => {
//         expect(wrapper).toMatchSnapshot();
//     })


// })
