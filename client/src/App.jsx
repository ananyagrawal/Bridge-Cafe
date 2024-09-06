import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Home from "./pages/Home";
import Order from "./pages/Order";
import Book from "./pages/Book";
import Inquiry from "./pages/Inquiry";
import Contact from "./pages/Contact";
import Checkout from "./pages/Checkout";
import { CartContextProvider } from "./context/CartContext";  // Import the CartContextProvider
import { AuthContextProvider } from "./context/AuthContext";
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
          {/* Wrap your app with CartContextProvider so that all routes have access to it */}
          <AuthContextProvider>
          <CartContextProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/order-online" element={<Order />} />
              <Route path="/book-table" element={<Book />} />
              <Route path="/event-inquiry" element={<Inquiry />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/checkout" element={<Checkout />} />
            </Routes>
          </CartContextProvider>
          </AuthContextProvider>
        </QueryClientProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
