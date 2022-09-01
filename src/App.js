import './App.css';
import {ThemeProvider} from "styled-components";
import UserLayouts from "./layouts/UserLayouts/UserLayouts";
import { theme } from './theme';


function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <UserLayouts/>
      </div>
    </ThemeProvider>
  );
}

export default App;
