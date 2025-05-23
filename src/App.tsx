import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Layout from "./components/layout/Layout";
import LoadingSpinner from "./components/ui/LoadingSpinner";
import { AuthProvider } from "./contexts/AuthContext";
import { GoogleOAuthProvider } from "@react-oauth/google";
// Lazy load pages for better performance
const Home = lazy(() => import("./pages/Home"));
const Community = lazy(() => import("./pages/community/Community"));
const MyPlans = lazy(() => import("./pages/MyPlans/MyPlans"));
// const Contact = lazy(() => import("./pages/Contact"));
const Login = lazy(() => import("./pages/Login"));
// const Register = lazy(() => import("./pages/Register"));
const NotFound = lazy(() => import("./pages/NotFound"));

function App() {
  return (
    <AuthProvider>
      <Layout>
        <Suspense fallback={<LoadingSpinner />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cong-dong" element={<Community />} />
            <Route path="/ke-hoach-cua-toi" element={<MyPlans />} />
            {/* <Route path="/lien-he" element={<Contact />} /> */}

            <Route
              path="/dang-nhap"
              element={
                <GoogleOAuthProvider
                  clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID}
                >
                  <Login />
                </GoogleOAuthProvider>
              }
            />
            {/* <Route path="/dang-ky" element={<Register />} /> */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </Layout>
    </AuthProvider>
  );
}

export default App;
