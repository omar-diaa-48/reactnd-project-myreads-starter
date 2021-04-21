import React from 'react';
import BooksList from '../src/BooksList';
import TestRenderer from 'react-test-renderer';
//import ReactDOM from 'react-dom';

const testRenderer = TestRenderer.create(<BooksList />)
console testInstance = testRenderer.root;

expect(testInstance.findByType(BooksList).state.read).toBe([])

// import Enzyme, { shallow } from 'enzyme';
// import toJson from 'enzyme-to-json';
// import Adapter from 'enzyme-adapter-react-16';

// Enzyme.configure({adapter : new Adapter()})

// it('renders correctly enzyme', () => {
//     const wrapper = shallow(<BooksList />)
//     expect(toJson(wrapper)).toMatchSnapshot();
// })