import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import LineChart from '../client/components/LineChart';
import DoughnutChart from '../client/components/DoughnutChart';
import BarChart from '../client/components/BarChart';
import PolarChart from '../client/components/PolarChart';

configure({ adapter: new Adapter() });
configure({ disableLifecycleMethods: true });

describe('React unit tests', () => {
  let wrapper;

  describe('LineChart', () => {
    beforeAll(() => {
      wrapper = shallow(<LineChart />);
    });

    it('Renders component within a  <div> tag', () => {
      expect(wrapper.type()).toEqual('div');
    });

    it('Renders a canvas element for the line chart', () => {
      expect(wrapper.find('canvas'));
    });
  });

  describe('DoughnutChart', () => {
    beforeAll(() => {
      wrapper = shallow(<DoughnutChart />);
    });

    it('Renders a canvas element for the doughnut chart', () => {
      expect(wrapper.find('canvas'));
    });
  });

  describe('PolarChart', () => {
    beforeAll(() => {
      wrapper = shallow(<PolarChart />);
    });

    it('Renders a canvas element for the polar chart', () => {
      expect(wrapper.find('canvas'));
    });
  });

  describe('BarChart', () => {
    beforeAll(() => {
      wrapper = shallow(<BarChart />);
    });

    it('Renders a canvas element for the line chart', () => {
      expect(wrapper.find('canvas'));
    });
  });
});
