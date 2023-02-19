import ContactApp from "./components/Contacts/ContactApp";
import './app.css'


function App() {
  return (
    <div className="App" style={{display:"flex", justifyContent: "center", alignItems: "center", flexDirection:"column",minHeight:100+"vh"}}>
      <ContactApp/>
    </div>
  );
}

export default App;
