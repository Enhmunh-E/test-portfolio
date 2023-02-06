import "./App.css";
import { Box, ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { Home } from "./pages";
import { Header, Footer, Banner } from "./components";
import theme from "./theme";
function App() {
  return (
    <ChakraProvider>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />

      <Header />
      <Home />
      <Footer />
    </ChakraProvider>
  );
}

export default App;
