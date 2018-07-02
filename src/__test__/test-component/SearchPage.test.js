import React from 'react';
import { shallow } from 'enzyme';
import SearchPage from '../../components/searchPage';

describe ('renders correctly', () =>{

  describe ('renders components correctly', () => {
    let search = shallow(<SearchPage />);
   expect(search).toMatchSnapshot(); 
  })
})