import { useEffect } from 'react';
import ReactGA from 'react-ga';
import { useRouter } from 'next/router';
import { getWindow } from './browserUtils';

const pageview = () => {
  ReactGA.set({ page: getWindow().location.pathname });
  ReactGA.pageview(getWindow().location.pathname);
};

const useInitReactGa = (): boolean => {
  const router = useRouter();

  useEffect(() => {
    ReactGA.initialize('UA-43963933-8', { debug: false });
    pageview();
  }, [router]);

  return true;
};

export default useInitReactGa;
