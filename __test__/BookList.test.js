import React from 'react';
//import ReactDOM from 'react-dom';
import BooksList from '../src/BooksList';

import Enzyme, { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({adapter : new Adapter()})

it('renders correctly enzyme', () => {
    const wrapper = shallow(<BooksList />)
    expect(toJson(wrapper)).toMatchSnapshot();
})