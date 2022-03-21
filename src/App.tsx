import './App.css';
import TopNav from "./components/TopNav";
import AddGamePanel from "./components/AddGamePanel";
import GameHistory from './components/GameHistory';
import { API } from "aws-amplify";
import { useEffect, useState } from "react";
import { listGames } from "./graphql/queries";
import Leaderboard from './components/Leaderboard';
import Groups from './components/Groups';

function App() {

    const [games, setGames] = useState<any[]>([]);
    const [view, setView] = useState<string>('addgame');

    // @ts-ignore
    useEffect(async () => {
        const response = await (API.graphql({ query: listGames }) as Promise<any>);
        if (response?.data?.listGames?.items) {
            setGames(response.data.listGames.items);
        }
    }, []);

    function handleGameAdded(newGame: any) {
        setGames([...games, newGame]);
    }

    return (
        <div className="App">

            <TopNav activeView={view} onNavChange={setView} />

            <main className="container-lg">

                { /* Mobile */}
                <div className="row d-sm-none">
                    <div className="col col-12 col-sm-6">
                        {view === 'addgame' && <AddGamePanel mobile={true} onGameAdded={handleGameAdded} />}
                        {view === 'gamehistory' && <GameHistory games={games} />}
                        {view === 'leaderboard' && <Leaderboard games={games} />}
                        {view === 'groups' && <Groups />}
                    </div>
                </div>

                { /* Tablet & Desktop */}
                {/* <div className="row d-none d-sm-flex">
                    <div className="col col-12 col-sm-6 col-md-5 col-lg-4">
                        <AddGamePanel onGameAdded={handleGameAdded} />
                    </div>
                    <div className="col col-12 col-sm-6 col-md-7 col-lg-8">
                        {(view === 'addgame' || view === 'gamehistory') && <GameHistory games={games} />}
                        {view === 'leaderboard' && <Leaderboard games={games} />}
                        {view === 'groups' && <Groups />}
                    </div>
                </div> */}

            </main>

        </div>
    );
}

export default App;
