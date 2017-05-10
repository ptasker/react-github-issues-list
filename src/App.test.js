import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';
import Header from './Header';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
});

it('renders header with props', () => {
    const header = shallow(<Header title={'What\'s up doc?'} />);
    expect(header.contains('What\'s up doc?')).toEqual(true);
});