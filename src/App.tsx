import React, {useEffect, useState} from 'react';
import './App.css';
import TopNav from "./components/TopNav";
import AddGamePanel from "./components/AddGamePanel";
import MockPlayers from "./mocks/MockPlayers";
import MockLocations from "./mocks/MockLocations";
import MockGameNames from "./mocks/MockGameNames";
import MockGameRecords from "./mocks/MockGameRecords";

function App() {

    const [locations, setLocations]: any = useState([]);
    const [gameNames, setGameNames]: any = useState([]);
    const [players, setPlayers]: any = useState([]);
    const [gameRecords, setGameRecords]: any = useState([]);

    useEffect(() => {
        setLocations(MockLocations);
        setGameNames(MockGameNames);
        setPlayers(MockPlayers);
        setGameRecords(MockGameRecords);
    }, []);

    return (
      <div className="App">
          <TopNav />
          <main className="container-fluid">
              <AddGamePanel
                  locations={locations}
                  gameNames={gameNames}
                  players={players}
              />
          </main>
      </div>
  );
}

export default App;
