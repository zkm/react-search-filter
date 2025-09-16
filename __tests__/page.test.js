

import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Page from '../src/app/page';

describe('React Search Filter', () => {
  it('adds items and filters them', async () => {
    render(<Page />);
    const user = userEvent.setup();
    const search = screen.getByLabelText(/search/i);
    const addInput = screen.getByPlaceholderText(/add new item/i);

    // Add an item first
    await user.type(addInput, 'bar');
    await user.click(screen.getByText(/add/i));
    expect(screen.getByText('bar')).toBeInTheDocument();

    // Filter to show the item
    await user.clear(search);
    await user.type(search, 'ba');
    expect(screen.getByText('bar')).toBeInTheDocument();

    // Filter to hide the item
    await user.clear(search);
    await user.type(search, 'zzz');
    expect(screen.getByText(/no items found/i)).toBeInTheDocument();
  });
});
