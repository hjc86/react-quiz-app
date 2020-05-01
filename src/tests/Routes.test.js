import React from 'react';
import ReactDOM from 'react-dom'
import {shallow} from 'enzyme'; 
import Routes from '../components/Routes';
import renderer from 'react-test-renderer';
import App from '../App'



describe('Routes', () => {
  it('mounts to DOM', () => {
      const div = document.createElement('div');
      ReactDOM.render(<Routes />, div);
      ReactDOM.unmountComponentAtNode(div);
  });

  it('renders correctly', () => {
  const tree = renderer
    .create(<Routes/>)
    .toJSON();
    expect(tree).toMatchSnapshot();
});

 

  let wrapper;

    /// end of setup //

    beforeEach(() => wrapper = shallow(<Routes />));

    it('should render a single <div />',()=>{
        expect(wrapper.find('div').length).toEqual(1);
    })

    it('should render 1 Route to App Component', () =>{
      expect(wrapper.find('Route').length).toEqual(1);
  })
 
})