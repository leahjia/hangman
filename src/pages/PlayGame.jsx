import { FaShare } from "react-icons/fa"
import Game from "../components/Game"

const PlayGame = () => {
  return (
    <div>
      {/* <button className='btn btn-blue'>
        Challenge a friend!
        <FaShare />
      </button> */}
      <button className="btn btn-info btn-lg" data-toggle="modal" data-target="#rulesModal">Game Rules</button>
      <div className="modal fade" id="rulesModal" role="dialog">
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <button className="close" data-dismiss="modal">&times;</button>
              <h4  >Rule of the game</h4>
            </div>
            <div className="modal-body">
              <p>Guess the letters in the word before you run out of guesses. You can guess one letter at a time. If the letter is in the word, it will be revealed. If not, you will lose a guess. You win the game by guessing all the letters in the word, and lose the game if you run out of guesses before guessing all the letters.</p>
            </div>
            <div className="modal-footer">
              <button className="btn btn-default" data-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
      <Game />

    </div>
  )
}

export default PlayGame