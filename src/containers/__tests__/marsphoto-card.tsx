import React from 'react';
import { MockedResponse } from '@apollo/client/testing';
import { renderApolloWithRouter, cleanup } from '../../utils/test-utils';
import { waitFor } from '@testing-library/react'; // Correct import
import MarsPhotoCard from '../marsphoto-card';

const mockMarsPhoto = {
  id: 'm_1',
  sol: '1000',
  img_src: 'https://example.com/photo.jpg',
  rover: {
    name: 'Curiosity',
    landing_date: '2012-08-06',
    status: 'active',
  },
};

describe('MarsPhoto Card', () => {
  // automatically unmount and cleanup DOM after the test is finished.
  afterEach(cleanup);

  it('renders MarsPhoto Card with correct data', async () => {
    const mocks: MockedResponse<Record<string, any>>[] = [];
    const { getByText, getByAltText } = await renderApolloWithRouter(
      <MarsPhotoCard marsPhoto={mockMarsPhoto} />,
      {
        mocks,
        resolvers: {},
        addTypename: false,
      }
    );

    await waitFor(() => {
      getByText(/1000/i); // Validate sol
      getByText(/Curiosity/i); // Validate rover name
      getByAltText(/m_1/i); // Validate image alt text
    });
  });
});
