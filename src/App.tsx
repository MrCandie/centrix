import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { lazy, Suspense } from "react";
import Spinner from "./components/Spinner";

const Dashboard = lazy(() => import("./screens/dashboard/Dashboard"));
const Profile = lazy(() => import("./screens/profile/Profile"));

import "./App.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route
        element={
          <Suspense fallback={<Spinner />}>
            <Dashboard />
          </Suspense>
        }
        index
      />
      <Route
        element={
          <Suspense fallback={<Spinner />}>
            <Profile />
          </Suspense>
        }
        path="/profile"
      />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
