import React from 'react';
import styled from 'styled-components'
import renderer from 'react-test-renderer'
import 'jest-styled-components'

describe('StyleTitle', () =>{

  let title = render.create(<StyleTitle />).toJSON();

  it('returns title with specific style', ()=>{
    expect(title).toMatchSnapshot();
    expect(title).toHaveStyleRule('color', 'red', 'border', 'white');
  })
})