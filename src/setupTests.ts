import '@testing-library/jest-dom';
import '@testing-library/jest-dom/vitest';
import createFetchMock from 'vitest-fetch-mock';
import { afterEach, vi } from 'vitest';
import { cleanup } from '@testing-library/react';

export const fetchMocker = createFetchMock(vi);
fetchMocker.enableMocks();

afterEach(() => {
    cleanup();
});