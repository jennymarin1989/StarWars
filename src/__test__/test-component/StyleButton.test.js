import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components'
import StyleButton from '../../components/styleComponents/StyleButton'

describe('StyleTitle', () =>{

  it('returns title with specific style', ()=>{
    let title = shallow(<StyleButton />)
    expect(title).toMatchSnapshot();
    expect(title).toHaveStyleRule('widht', '100px', 'height', '100px', 'margin-top', '150px', 'padding-left', '0px', 'padding-right', '0px');
  })
})