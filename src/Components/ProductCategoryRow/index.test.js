import React from 'react';
import renderer from 'react-test-renderer';
import ProductRowCategory from './index';
import { shallow } from 'enzyme';

describe('ProductRowCategory', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(<ProductRowCategory />);
    expect(tree).toMatchSnapshot();
  });
})