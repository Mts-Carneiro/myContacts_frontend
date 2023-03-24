import UserProvider from './contexts/user.context';
import {RoutesMain} from './routes';
import "./App.css"


function App() {
  
  return(
   <div className='App'>
      <UserProvider>
        <RoutesMain />
      </UserProvider>
   </div> 
  );
}

export default App;
