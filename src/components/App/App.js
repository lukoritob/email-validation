import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import LoginForm from '../Loginform';


const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <LoginForm />
      </Grid>
    </ThemeProvider>
  );
}

export default App;
