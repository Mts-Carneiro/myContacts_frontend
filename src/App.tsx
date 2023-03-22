import UserProvider from './contexts/user.context';
import {RoutesMain} from './routes';


function App() {
  return(
   <>
      <UserProvider>
        <RoutesMain />
      </UserProvider>
   </> 
  );
}

export default App;
