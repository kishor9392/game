import {Component} from 'react'

import NavBar from '../NavBar'

import EmojiCard from '../EmojiCard'

import './index.css'

class EmojiGame extends Component {
  state = {
    newList: this.props,
  }

  shuffledEmojisList = () => {
    const {newList} = this.state
    const x = newList.sort(() => Math.random() - 0.5)

    this.setState({newList: x})
  }

  render() {
    const {newList} = this.state
    return (
      <div>
        <NavBar score={0} topScore={0} />

        <div className="bg3">
          {newList.map(each => (
            <EmojiCard
              key={each.id}
              emojisList={each}
              shuffledEmojisList={this.shuffledEmojisList}
            />
          ))}
        </div>
      </div>
    )
  }
}

export default EmojiGame
