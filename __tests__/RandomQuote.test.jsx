import React from 'react';
import '@testing-library/jest-dom';
import { render, screen, waitFor } from '@testing-library/react';
import RandomQuote from '@/components/RandomQuote';

// Mock the global fetch function
global.fetch = jest.fn();

describe('RandomQuote Component', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('renders loading state initially', () => {
    // Make fetch return a promise that doesn't resolve immediately
    global.fetch.mockImplementationOnce(() => new Promise(() => {}));
    
    render(<RandomQuote />);
    expect(screen.getByTestId('quote-loading')).toBeInTheDocument();
  });

  it('fetches and displays a quote successfully', async () => {
    const mockQuoteResponse = {
      ok: true,
      json: async () => ({
        quote: 'Test quote from mocked API',
        author: 'Test Author'
      })
    };
    
    global.fetch.mockResolvedValueOnce(mockQuoteResponse);
    
    render(<RandomQuote />);
    
    // Wait for the quote to appear
    await waitFor(() => {
      expect(screen.getByText(/"Test quote from mocked API"/i)).toBeInTheDocument();
    });
    expect(screen.getByText(/- Test Author/i)).toBeInTheDocument();
  });

  it('displays an error message when fetch fails', async () => {
    global.fetch.mockRejectedValueOnce(new Error('Network Error'));
    
    render(<RandomQuote />);
    
    await waitFor(() => {
      expect(screen.getByTestId('quote-error')).toBeInTheDocument();
    });
    expect(screen.getByText(/Error: Network Error/i)).toBeInTheDocument();
  });
});
