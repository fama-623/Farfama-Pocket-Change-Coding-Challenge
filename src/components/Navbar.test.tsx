import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Navbar from './Navbar';
import { BrowserRouter } from 'react-router-dom';

describe('Navbar', () => {
    test('renders the correct link text for Home and Favorites', () => {
        render(
            <BrowserRouter basename="/">
                <Navbar />
            </BrowserRouter>
        );
    
        const homeLink = screen.getByText('Home');
        const favoritesLink = screen.getByText('Favorites');
    
        expect(homeLink).toBeInTheDocument();
        expect(favoritesLink).toBeInTheDocument();
    });
});
