import React from 'react';
import { shallow } from 'enzyme';
import 'jest-styled-components'
import StyleButton from '../../components/styleComponents/StyleButton'

describe('StyleButton', () =>{

  it('returns title with specific style', ()=>{
    let button = shallow(<StyleButton />)
    expect(button).toMatchSnapshot();
    expect(button).toHaveStyleRule('height', '10em', 'margin-top', '5%', 'width', '15em');
  })
})