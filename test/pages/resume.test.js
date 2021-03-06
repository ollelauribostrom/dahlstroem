import React from 'react';
import { shallow } from 'enzyme';

import ResumePage from '../../src/pages/resume';

const mockData = {
  allDatoCmsGrant: {
    edges: [
      { node: { description: 'Grant1' } },
      { node: { description: 'Grant2', href: 'http://google.com' } },
    ],
  },
  allDatoCmsExhibition: {
    edges: [
      { node: { description: 'Exhibition1' } },
      { node: { description: 'Exhibition2', href: 'http://google.com' } },
    ],
  },
  allDatoCmsEducation: {
    edges: [
      { node: { description: 'Education 1' } },
      { node: { description: 'Education 2' } },
    ],
  },
  datoCmsSetting: {
    headingColor: {
      hex: '#000',
    },
    resumeImage: {
      url: 'some-url',
      fluid: {
        aspectRatio: 1.4678899082568808,
        sizes: '(max-width: 1800px) 100vw, 1800px',
        src: 'someurl',
        srcSet: 'someurl',
      },
    },
  },
};

describe('Tests for Resume page', () => {
  it('renders correctly', () => {
    const wrapper = shallow(
      <ResumePage location={{ pathname: '/test' }} data={mockData} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
