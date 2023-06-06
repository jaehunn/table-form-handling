import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { QueryClientProvider, QueryClient } from "@tanstack/react-query";

import { Routes } from "./pages/Routes";

import { serviceWorker } from "./server/browser";
serviceWorker.start({ onUnhandledRequest: "bypass" });

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  // <React.StrictMode>
  <BrowserRouter>
    <QueryClientProvider client={queryClient}>
      <Routes />
    </QueryClientProvider>
  </BrowserRouter>
  // </React.StrictMode>
);
