import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "react-hot-toast";

import AppLayout from "./ui/AppLayout";
import Dashboard from "./pages/Dashboard";
import Bookings from "./pages/Bookings";
import Cabins from "./pages/Cabins";
// import Users from "./pages/Users";
import Settings from "./pages/Settings";
import Account from "./pages/Account";
import Login from "./pages/Login";
import Booking from "./pages/Booking";
import Checkin from "./pages/Checkin";
import PageNotFound from "./pages/PageNotFound";

import GlobalStyles from "./styles/GlobalStyles";
import ProtectedRoute from "@/ui/ProtectedRoute";
import { DarkModeProvider } from "./contexts/DarkModeContext";
import { Breakpoint, BreakpointProvider } from "react-socks";
import MobileDevice from "./pages/MobileDevice";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // staleTime: 60 * 1000,
      staleTime: 0,
    },
  },
});

function App() {
  return (
    <DarkModeProvider>
      <BreakpointProvider>
        <Breakpoint large down>
          <GlobalStyles />
          <BrowserRouter>
            <Routes>
              <Route index element={<MobileDevice />} />
              <Route path="*" element={<Navigate replace to="/" />} />
            </Routes>
          </BrowserRouter>
        </Breakpoint>
        <Breakpoint xlarge up>
          <QueryClientProvider client={queryClient}>
            <ReactQueryDevtools initialIsOpen={false} />
            <GlobalStyles />
            <BrowserRouter>
              <Routes>
                <Route
                  element={
                    <ProtectedRoute>
                      <AppLayout />
                    </ProtectedRoute>
                  }
                >
                  <Route index element={<Navigate replace to="dashboard" />} />
                  <Route path="dashboard" element={<Dashboard />} />
                  <Route path="bookings" element={<Bookings />} />
                  <Route path="bookings/:bookingId" element={<Booking />} />
                  <Route path="checkin/:bookingId" element={<Checkin />} />
                  <Route path="cabins" element={<Cabins />} />
                  {/* <Route path="users" element={<Users />} /> */}
                  <Route path="settings" element={<Settings />} />
                  <Route path="account" element={<Account />} />
                </Route>
                <Route path="login" element={<Login />} />
                <Route path="*" element={<PageNotFound />} />
              </Routes>
            </BrowserRouter>
            <Toaster
              position="top-center"
              gutter={12}
              containerStyle={{ margin: "8px" }}
              toastOptions={{
                success: {
                  duration: 3000,
                },
                error: {
                  duration: 5000,
                },
                style: {
                  fontSize: "16px",
                  maxWidth: "500px",
                  padding: "16px 24px",
                  backgroundColor: "var(--color-grey-0)",
                  color: "var(--color-grey-700)",
                },
              }}
            />
          </QueryClientProvider>
        </Breakpoint>
      </BreakpointProvider>
    </DarkModeProvider>
  );
}

export default App;
