import { expect, it } from 'vitest';
import { render, screen } from '@testing-library/react';
import { describe } from 'node:test';
import '@testing-library/jest-dom/vitest';
import { Provider } from 'react-redux';
import { MemoryRouter as Router } from "react-router-dom";

import { Projects } from '../components/Projects';
import store from '../store/index';

describe('Projects', () => {
    it('Should render without crashing', async () => {
        render(<Provider store={store}><Router><Projects /></Router></Provider>);
        expect(screen.getByTestId('Projects')).toBeInTheDocument();
    })
})