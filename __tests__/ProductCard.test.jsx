import React from 'react';
import '@testing-library/jest-dom';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithProviders } from './utils/test-utils';
import ProductCard from '@/components/ProductCard';

const mockProduct = {
  id: 1,
  name: 'Test Product',
  price: 99.99,
  category: 'Electronics',
  image: '/test-image.jpg'
};

describe('ProductCard Component', () => {
  it('renders without crashing and displays correct product info', () => {
    renderWithProviders(<ProductCard product={mockProduct} />);
    
    expect(screen.getByText('Test Product')).toBeInTheDocument();
    expect(screen.getByText('$99.99')).toBeInTheDocument();
    expect(screen.getByText(/Electronics/i)).toBeInTheDocument();
  });

  it('adds item to cart when "Add to Cart" is clicked', async () => {
    const user = userEvent.setup();
    const { store } = renderWithProviders(<ProductCard product={mockProduct} />, {
      preloadedState: {
        cart: { items: [], totalQuantity: 0, totalAmount: 0 }
      }
    });
    
    const addToCartButton = screen.getByRole('button', { name: /add to cart/i });
    await user.click(addToCartButton);
    
    const state = store.getState().cart;
    expect(state.totalQuantity).toBe(1);
    expect(state.items[0].id).toBe(1);
    expect(state.items[0].name).toBe('Test Product');
  });
});
