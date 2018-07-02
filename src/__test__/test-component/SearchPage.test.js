import React from 'react';
import { shallow } from 'enzyme';
import SearchPage from '../../components/SearchPage';

describe ('SearchPage', () =>{

  describe ('renders correctly', () => {
    it('renders component correctly', () => {
      let search = shallow(<SearchPage />);
     expect(search).toMatchSnapshot(); 
    });
  });
});