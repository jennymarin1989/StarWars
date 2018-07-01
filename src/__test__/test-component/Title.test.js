import React from 'react';
import { shallow, mount } from 'enzyme';
import Title  from '../../components/Title';

describe ('Title', () => {

  describe( 'renders components correctly', () => {
    it('renders Title component correctly', () =>{
      let title = shallow(<Title />)
     expect(title).toMatchSnapshot(); 
    });

    it ('passes the props from parent to child component', () => {
      let title = mount(<Title header={"LEGO"}/>)
      expect(title.props().header).toBe("LEGO")
    })
  })
})