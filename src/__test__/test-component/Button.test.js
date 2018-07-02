import React from 'react';
import { shallow, mount } from 'enzyme';
import Button from '../../components/Button';

describe ('Button', () => {

  describe ('renders components', () => {
    it('renders components correctly', () => {
      let button = shallow(<Button />);
     expect(button).toMatchSnapshot(); 
    });

    it('renders button correctly', () => {
      let button = shallow(<Button />);
     expect(button.find('#homepage-button')).toHaveLength(1);
    });

    it('passes the props correctly from parent component', () => {
      let imageButton = mount(<Button img={'https://pngtree.com/so/star-wars/2'}/>);
      expect(imageButton.props().img).toBe('https://pngtree.com/so/star-wars/2');
    })
  })
})