import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import LoggedLayout from "./layouts/LoggedLayout";

import Home from "./pages/Home";
import Livros from "./pages/Livros";
import Estudo from "./pages/Estudo";
import SobreNos from "./pages/SobreNos";
import Contato from "./pages/Contato";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <LoggedLayout>
        <Home />
      </LoggedLayout>
    ),
  },
  {
    path: "/livros",
    element: (
      <LoggedLayout>
        <Livros />
      </LoggedLayout>
    ),
  },
  {
    path: "/estudo",
    element: (
      <LoggedLayout>
        <Estudo />
      </LoggedLayout>
    ),
  },
  {
    path: "/sobre-nos",
    element: (
      <LoggedLayout>
        <SobreNos />
      </LoggedLayout>
    ),
  },
  {
    path: "/contato",
    element: (
      <LoggedLayout>
        <Contato />
      </LoggedLayout>
    ),
  },
]);

const theme = extendTheme({
  fonts: {
    heading: `'Libre Bodoni, sans-serif'`,
    body: `'Raleway, sans-serif'`,
  },
});

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>,
);
