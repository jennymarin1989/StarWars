import React from 'react';
import { shallow, mount } from 'enzyme';
import Title  from '../../components/Title';
import StyleTitle from '../../components/styleComponents/StyleTitle';

describe ('Title', () => {

  let title;

  beforeEach(()=>{
    title = shallow(<Title />);
  })

  describe( 'renders components correctly', () => {
    it('renders Title component correctly', () =>{
     expect(title).toMatchSnapshot(); 
    });

    it ('passes the props from parent to child component', () => {
      let title = mount(<Title header={"LEGO"}/>)
      expect(title.props().header).toBe("LEGO")
    });

    it('renders style component correctly', () =>{
      expect(title.find(StyleTitle)).toHaveLength(1);
    })
  })
})