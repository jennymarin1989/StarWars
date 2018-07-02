import React from 'react';
import { shallow } from 'enzyme';
import StarWarsPage from '../../components/StarWarsPage';

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
      expect(starPage.find(SearchPage)).toHaveLength(1);
    })
  });
  
});