import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import  {ContextProvider}  from "./Components/contextProvider";
import { Tableau } from './Components/tableau';
import { InputSearching } from './Components/inputsearching';

function App() {
  return (
    <div className="App">
  <ContextProvider>
  <InputSearching/>
<Tableau/>
  </ContextProvider>
    </div>
  );
}

export default App;
