import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { InMemoryCache } from '@apollo/client';
import { renderApolloWithRouter, cleanup } from '../../utils/test-utils';
import { waitFor } from '@testing-library/react'; // Correct import
import MarsPhotos, { MARSPHOTOS } from '../marsphotos';

const mockMarsPhoto = {
  id: 'm_1',
  sol: '1000',
  img_src: 'https://example.com/photo.jpg',
  rover: {
    name: 'Curiosity',
  },
};

describe('MarsPhotos Page', () => {
  afterEach(cleanup);
  const cache = new InMemoryCache({ addTypename: false });

  it('renders mars photos', async () => {
    const mocks = [
      {
        request: { query: MARSPHOTOS },
        result: {
          data: {
            marsPhotos: [mockMarsPhoto],
          },
        },
      },
    ];

    const { getByText } = await renderApolloWithRouter(<MarsPhotos />, {
      mocks,
      cache,
    });

    await waitFor(() => {
      getByText(/1000/i); // Validate sol
      getByText(/Curiosity/i); // Validate rover name
    });
  });
});
