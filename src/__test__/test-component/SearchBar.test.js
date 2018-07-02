import React from 'react';
import { shallow } from 'enzyme';
import SearchBar from '../../components/SearchBar';

describe ('SearchBar', () => {

  let search;

  beforeEach( () => {
    search = shallow(<SearchBar />);
  });

  describe ('renders correctly', () => {
    it('renders components correctly', () => {
      expect(search).toMatchSnapshot();
    });

    it('renders search bar correctly', () => {
      expect(search.find('#search')).toHaveLength(1);
    })
  });

  describe ('initializes state ', () => {
    it('initializes search state successfully', () => {
      expect(search.state('inputSearch')).toEqual('');
    });
  });

  describe ('changes state of inputSearch', () =>{
    it('changes the state when enters an input', () => {
      search.find('#search').simulate('change', {target: { name:"search", value:"People"}})
      expect(search.state('inputSearch')).toEqual("People");
    })
  })
})