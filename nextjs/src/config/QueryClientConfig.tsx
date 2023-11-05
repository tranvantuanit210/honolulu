"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export interface QueryClientProps {
  children: React.ReactNode;
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      retry: 0,
    },
  },
});

export default function ProviderQueryClient({ children }: QueryClientProps) {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
}
