import React from 'react';
import { shallow } from 'react';
import PeopleDetail from '../../components/PeopleDetail';

describe('PeopleDetail component', () => {

  describe('renders components', ()=> {
    it('should render components correctly', () => {
      let detail = (<PeopleDetail />);
      expect(detail).toMatchSnapshot();
    })
  })

})