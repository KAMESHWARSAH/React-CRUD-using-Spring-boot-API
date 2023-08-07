import "./App.css";
import CreateEmployeeComponent from "./components/CreateEmployeeComponent";
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import ListEmployeeComponents from "./components/ListEmployeeComponents";
import { BrowserRouter,Switch,Route } from 'react-router-dom';
import UpdateEmployeeComponent from "./components/UpdateEmployeeComponent";
import ViewEmployeeComponent from "./components/ViewEmployeeComponent";
function App() {
  return (
    <>
       
    <BrowserRouter>
    <HeaderComponent />
      <div className="container">
        <Switch>
            <Route path="/" exact component={ListEmployeeComponents} />
            <Route path="/employee" component={ListEmployeeComponents} />
            <Route path="/add-employee" component={CreateEmployeeComponent} />
            <Route path="/update-emploee/:id" component={UpdateEmployeeComponent} />
            <Route path="/view-employee/:id" component={ViewEmployeeComponent} />
           <ListEmployeeComponents/>
        </Switch>
        
      
      </div>
      <FooterComponent />
    </BrowserRouter>
    </>
  );
}

export default App;
