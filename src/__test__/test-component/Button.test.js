import React from 'react';
import { shallow } from 'enzyme';

describe ('Button', () => {

  describe ('renders components', () => {
    it('renders components correctly', () => {
      let app = shallow(<Button />);
     expect(app).toMatchSnapshot(); 
    });
  })
})