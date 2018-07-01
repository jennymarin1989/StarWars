import React from 'react';
import { shallow } from 'enzyme';
import App from '../../components/App';

describe('App', () => {

  describe('renders correctly', () => {

    it('renders components correctly', () => {
      let app = shallow(<App />);
    expect(app).toMatchSnapshot();  
    });
  
    it('renders Title component correctly', () => {
      let app = shallow(<App />);
     expect(app.find('title')).toHaveLength(1);
    });

  });

})