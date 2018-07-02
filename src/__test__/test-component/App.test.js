import React from 'react';
import { shallow } from 'enzyme';
import App from '../../components/App';
import Button from '../../components/Button';

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
    });
  });

  describe('Initializes state correctly', () => {
    it('initializes state of starwars button', () => {
      expect(app.state('starwars')).toBeFalsy();
    });
  });

  describe('changes state correctly', () => {
    it('changes starwars state on click', () => {
      const mockCLickButton = jest.fn();
      let button2 = shallow(<Button onclick={mockCLickButton} />);
      button2.find('#homepage-button').simulate('click');
      expect(app.state('starwars')).toBeTruthy(); 
    })
  })


})