import React, { FC, ReactElement, ReactNode } from 'react';
import { render, RenderResult } from '@testing-library/react';
import { QueryClient, QueryClientProvider, setLogger } from 'react-query';
import { generateQueryClient } from '../react-query/queryClient';

setLogger({
  log: console.log,
  warn: console.warn,
  error: () => {
    // TODO: test error log 방지
  },
});

const generateTestQueryClient = () => {
  const client = generateQueryClient();
  const options = client.getDefaultOptions();
  options.queries = { ...options.queries, retry: false };

  return client;
};

export const renderWithQueryClient = (ui: ReactElement, client?: QueryClient): RenderResult => {
  const queryClient = client ?? generateTestQueryClient();

  return render(<QueryClientProvider client={queryClient}>{ui}</QueryClientProvider>);
};

export const createQueryClientWrapper = (): FC<{ children: ReactNode }> => {
  const queryClient = generateTestQueryClient();
  return ({ children }) => (
    <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
  );
};