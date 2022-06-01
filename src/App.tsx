import { BrowserRouter } from 'react-router-dom';
import { MovieProvider } from './contexts/MovieContext';
import Routes from './routes';
import { GlobalStyle } from './styles/global';

export default function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <MovieProvider>
          <Routes/>
        </MovieProvider>
      </BrowserRouter>
    </>
  );
}
