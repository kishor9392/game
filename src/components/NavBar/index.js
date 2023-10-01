import './index.css'

const NavBar = props => {
  const {score, topScore} = props

  return (
    <div className="bg1">
      <div className="bg2">
        <img
          src="https://assets.ccbp.in/frontend/react-js/game-logo-img.png "
          alt="emoji logo"
          className="img"
        />
        <h1 className="h1">Emoji Game</h1>
      </div>

      <div className="bg2">
        <h1 className="h2">Score: {score}</h1>
        <h1 className="h2">Top Score: {topScore}</h1>
      </div>
    </div>
  )
}

export default NavBar
