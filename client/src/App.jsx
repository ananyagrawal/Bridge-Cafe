import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./Home";
import Order from "./Order";
import Book from "./Book";
import Inquiry from "./Inquiry";
import Contact from "./Contact";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: Infinity,
      cacheTime: Infinity,
    },
  },
});
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <QueryClientProvider client={queryClient}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/order-online" element={<Order />} />
            <Route path="/book-table" element={<Book />} />
            <Route path="/event-inquiry" element={<Inquiry />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </QueryClientProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
