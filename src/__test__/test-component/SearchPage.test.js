import React from 'react';
import { shallow } from 'enzyme';
import SearchPage from '../../components/SearchPage';

describe ('SearchPage', () =>{

  let search;

  beforeEach( () => {
    search = shallow(<SearchPage />);
  })

  describe ('renders correctly', () => {
    it('renders component correctly', () => {
     expect(search).toMatchSnapshot(); 
    });

    it('renders input tag correctly', () => {
      expect(search.find('#input-search')).toHaveLength(1);
    })
  });
  
});