import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

import Spinner from "./Spinner";

import { useUser } from "@/features/authentication/useUser";

const FullPage = styled.div`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
`;

function ProtectedRoute({ children }) {
  const navigate = useNavigate();

  // 1. Load the authenticated user
  const { isLoading, isAuthenticated, isFetching } = useUser();

  // 2. If there is NO authenticated user, redirect to the /login page
  useEffect(
    function () {
      if (!isAuthenticated && !isLoading && !isFetching) navigate("/login");
    },
    [isLoading, isAuthenticated, isFetching, navigate]
  );

  // 3. While loading, show a spinner
  if (isLoading)
    return (
      <FullPage>
        <Spinner />
      </FullPage>
    );

  // 4. If there IS a user, render the app
  if (isAuthenticated) return children;
}

export default ProtectedRoute;
