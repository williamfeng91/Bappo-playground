import React from 'react';
import expect from 'expect';
import { shallow } from 'enzyme';
import App from './app';

function setup() {
  return shallow(<App />);
}

describe('App', () => {
  it('renders words and h1', () => {
    const wrapper = setup();
    expect(wrapper.find('h1').text()).toEqual('hello');
  });
});
