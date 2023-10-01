import './index.css'

const EmojiCard = props => {
  const {emojisList, shuffledEmojisList} = props
  const {emojiName, emojiUrl} = emojisList

  const onTap = () => {
    shuffledEmojisList()
  }

  return (
    <div className="bg4">
      <button type="button" className="btn" onClick={onTap}>
        <img src={emojiUrl} className="img2" alt={emojiName} />
      </button>
    </div>
  )
}

export default EmojiCard
