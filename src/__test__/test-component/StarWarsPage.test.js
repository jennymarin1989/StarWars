import React from 'react';
import { shallow } from 'enzyme';
import StarWarsPage from '../../components/StarWarsPage';
import SearchBar from '../../components/SearchBar';

describe ('StarWarsPage', () =>{

  let starPage;

  beforeEach( () => {
     starPage = shallow(<StarWarsPage />);
  })

  describe ('renders correctly', () => {
    it('renders component correctly', () => {
     expect(starPage).toMatchSnapshot(); 
    });

    it('renders input tag correctly', () => {
      expect(starPage.find(SearchBar)).toHaveLength(1);
    })
  });

  describe('initialiazes state successfully', () => {
    it('initialiazes people state successfully', () => {
      expect(starPage.state('people')).toEqual([]);
    })
  })
  
});