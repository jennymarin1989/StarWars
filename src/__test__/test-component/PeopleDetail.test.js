import React from 'react';
import { shallow, mount } from 'enzyme';
import PeopleDetail from '../../components/PeopleDetail';

describe('PeopleDetail component', () => {

  describe('renders components', ()=> {
    it('should render components correctly', () => {
      let detail = shallow(<PeopleDetail />);
      expect(detail).toMatchSnapshot();
    });
  });

  it('should pass props from parent component correctly', () => {
    let peopleDetail = mount(<PeopleDetail details = {"Luke SkyWalker"}/>);
    expect(peopleDetail.props().details).toBe("Luke SkyWalker");
  })

})