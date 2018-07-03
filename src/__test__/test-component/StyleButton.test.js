import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components'
import StyleButton from '../../components/styleComponents/StyleButton'

describe('StyleButton', () =>{

  it('returns title with specific style', ()=>{
    let title = shallow(<StyleButton />)
    expect(title).toMatchSnapshot();
    expect(title).toHaveStyleRule('width', '120px', 'height', '100px', 'margin-top', '150px', 'padding-left', '0px', 'padding-right', '0px');
  })
})