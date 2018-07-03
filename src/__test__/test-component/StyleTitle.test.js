import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components'
import StyleTitle from '../../components/styleComponents/StyleTitle'

describe('StyleTitle', () =>{

  it('returns title with specific style', ()=>{
    let title = shallow(<StyleTitle />)
    expect(title).toMatchSnapshot();
    expect(title).toHaveStyleRule('color', 'white', 'font-family', 'verdana', 'text-align', 'center', 'font-size', '0.8em');
  })
})