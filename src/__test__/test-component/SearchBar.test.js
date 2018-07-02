import React from 'react';
import { shallow } from 'enzyme';
import SearchBar from '../../components/SearchBar';

describe ('SearchBar', () => {

  describe ('renders correctly', () => {
    it('renders components correctly', () => {
      let search = shallow(<SearchBar />);
      expect(search).toMatchSnaphot();
    });
  });
})