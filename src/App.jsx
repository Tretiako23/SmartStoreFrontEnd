import { useEffect } from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './navigation';
import { useStore } from './zustand/store';

const App = () => {
  const { refreshUser } = useStore();

  useEffect(() => {
    refreshUser();
  }, []);

  return <RouterProvider router={router} />;
};

export default App;
