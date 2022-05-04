import PersonCard from './componets/PersonCard';
import './App.css';

function App() {
  return (
    <div>
        <PersonCard firstname="Logan"
          lastname="Erspamer"
          age={20}
          haircolor="Black"/>
          <PersonCard firstname="Sam"
          lastname="Sotsky"
          age={21}
          haircolor="Blonde"/>
          <PersonCard firstname="Lexington"
          lastname="Carey"
          age={19}
          haircolor="Red"/>
          <PersonCard firstname="Kyle"
          lastname="Deato"
          age={26}
          haircolor="Black"/>
    </div>
  );
}

export default App;
