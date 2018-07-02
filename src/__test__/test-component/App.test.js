import React from 'react';
import { shallow } from 'enzyme';
import App from '../../components/App';

describe('App', () => {

  let app;

    beforeEach(() => {
      app = shallow(<App />);
    })

  describe('renders correctly', () => {

    it('renders components correctly', () => {
    expect(app).toMatchSnapshot();  
    });
  
    it('renders Title component correctly', () => {
     expect(app.find('Title')).toHaveLength(1);
    });

    it('renders Button component correctly', () => {
      expect(app.find('Button')).toHaveLength(1);
    })

  });

})