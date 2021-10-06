import { useState, useEffect } from "react";

function Leaderboard({ games }: any) {
    const [players, setPlayers] = useState<any[]>([]);

    // @ts-ignore
    useEffect(() => {
        if (games.length) {
            const playerMap = transformGamesToLeaderboard();
            const playersArray: any[] = Object.values(playerMap);
            playersArray.sort((a, b) => (a.wins.length > b.wins.length) ? 1 : -1);
            setPlayers(playersArray);
        }
    }, [games])

    const transformGamesToLeaderboard = (): any => {
        return games.reduce((map: any, game: any) => {
            const { winner, loser } = game;
            if (map[winner.id]) {
                map[winner.id].wins.push(game);
            } else {
                map[winner.id] = {
                    wins: [game],
                    losses: [],
                    details: winner
                };
            }
            if (map[loser.id]) {
                map[loser.id].losses.push(game);
            } else {
                map[loser.id] = {
                    wins: [],
                    losses: [game],
                    details: loser
                };
            }
            return map;
        }, {});
    }

    function getPct(player: any) {
        return (player.wins.length / (player.wins.length + player.losses.length)).toFixed(2);
    }

    // @ts-ignore
    players.sort((b: any, a: any) => getPct(a) - getPct(b));

    return (<div className="card">
        <h3>Leaderboard</h3>
        <hr /><table className="table table-hover">

            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Alias</th>
                    <th scope="col">Wins</th>
                    <th scope="col">Losses</th>
                    <th scope="col">PCT</th>
                </tr>
            </thead>

            <tbody>
                { // @ts-ignore
                    players.map((player, index) => (
                        <tr>
                            <th scope="row">{index + 1}</th>
                            <td>{player.details.alias}</td>
                            <td>{player.wins.length}</td>
                            <td>{player.losses.length}</td>
                            <td>{getPct(player)}</td>
                        </tr>
                    ))}
            </tbody>

        </table>
    </div>)
}

export default Leaderboard;