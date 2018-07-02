import React from 'react';
import { shallow } from 'enzyme';
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
    })
  })
})