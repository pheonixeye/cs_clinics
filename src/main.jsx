import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./i18n/config";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./routes/app/App";

const client = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    },
  },
});

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <QueryClientProvider client={client}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);
