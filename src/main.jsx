import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { ChakraProvider, extendTheme } from "@chakra-ui/react";

const colors = {
  brand: {
    500: "#E53E3E", // ProBau Red
    50: "#F4F4F4", // ProBau Light Gray
  },
  accent: {
    900: "#323F4B", // ProBau Dark Gray
  },
  highlight: {
    500: "#1E90FF", // ProBau Blue
  },
};

const theme = extendTheme({ colors });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
);
