import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Dashboard } from '../pages/home';

export const RoutesMain = () => {
  return(
    <Routes>
      <Route path='/' element={<Dashboard />} />
    </Routes>
  )

}
;