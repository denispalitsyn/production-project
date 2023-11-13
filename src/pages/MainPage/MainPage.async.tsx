import { lazy } from 'react';

export const MainPageAsync = lazy(() => new Promise(res => {
  setTimeout(() => {
    res(import('./MainPage') as never);
  },1500)
}))