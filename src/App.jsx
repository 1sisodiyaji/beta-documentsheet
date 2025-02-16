import { Toaster } from 'react-hot-toast';
import Routess from './routes/Routess';
import { BrowserRouter } from 'react-router-dom';
const App = () => {
  return (
    <>
      <BrowserRouter>
        <Toaster />
        <Routess />
      </BrowserRouter>
    </>
  );
};

export default App;
