import React from 'react';
import ReactDOM from 'react-dom'
import { shallow, mount } from 'enzyme';
import Quiz from '../components/Quiz';
import renderer from 'react-test-renderer';
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';


describe(Quiz, () => {
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
    it('should render a <div />', () => {
        expect(wrapper.find('div').length).toEqual(1);
    });
    it('should render a H3', () => {
        expect(wrapper.find('h3').length).toEqual(2);
    });
})



