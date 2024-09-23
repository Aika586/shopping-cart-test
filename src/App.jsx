import { ThemeProvider } from "@mui/material/styles";
import { theme } from "./theme/theme";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "./components/Header";
import ProductCards from "./components/ProductCards"

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <Header />
      <ProductCards />
    </ThemeProvider>
  );
}

export default App;
