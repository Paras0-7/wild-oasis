// import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { GlobalStyles } from "./styles/GlobalStyle.js";
import { BrowserRouter } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import { ErrorFallback } from "./ui/Error/ErrorFallback.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>
  <>
    <GlobalStyles />
    <BrowserRouter>
      <ErrorBoundary FallbackComponent={ErrorFallback} onReset={() => window.location.replace("/")}>
        <App />
      </ErrorBoundary>
    </BrowserRouter>
  </>
  // </React.StrictMode>
);
