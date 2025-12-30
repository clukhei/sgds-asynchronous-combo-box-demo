import "./App.css";
import "@govtechsg/sgds-web-component";
import AsyncComboBoxSingle from "./AsyncComboBoxSingle";

export interface IFormData {
  firstName: string;
  lastName: string;
  address: string;
}
function App() {
  return (
    <div>
      <AsyncComboBoxSingle />
    </div>
  );
}

export default App;
