function GameHistory({ games }: any) {
  // @ts-ignore
  games.sort((a: any, b: any) => new Date(b.createdAt) - new Date(a.createdAt));
  return (<div className="card">
    <h3>Game History</h3>
    <hr />
    <table className="table table-hover">

      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Date</th>
          <th scope="col">Winner</th>
          <th scope="col">Loser</th>
        </tr>
      </thead>

      <tbody>
        { // @ts-ignore
          games.map((game, index) => (
            <tr>
              <th scope="row">{index + 1}</th>
              <td>{new Date(game.createdAt).toLocaleDateString()}</td>
              <td>{game.winner.alias}</td>
              <td>{game.loser.alias}</td>
            </tr>
          ))}
      </tbody>

    </table>
  </div>)
}

export default GameHistory;
