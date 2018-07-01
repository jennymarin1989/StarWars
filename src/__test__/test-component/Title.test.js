import React from 'react';
import { shallow } from 'enzyme';
import Title  from '../../components/Title';

describe ('Title', () => {

  describe( 'renders components correctly', () => {
    it('renders Title component correctly', () =>{
      let title = shallow(<Title />)
     expect(title).toMatchSnapshot(); 
    });
  })
})