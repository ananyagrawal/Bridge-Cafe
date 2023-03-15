import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./Home";
import Header from "./Header";
import Contact from "./Contact";
import Order from "./Order";
import Inquiry from "./Inquiry";
import Book from "./Book";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});
const App = () => {
  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <header>{<Header />}</header>
        <div className="heading">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/order-online" element={<Order />} />
            <Route path="/book-table" element={<Book />} />
            <Route path="/event-inquiry" element={<Inquiry />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
      </QueryClientProvider>
    </BrowserRouter>
  );
};
const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);
