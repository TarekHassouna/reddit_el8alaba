import "./arrows.css";

function Arrows({ onUpvote, onDownvote, votes, userVote }) {
    console.log("userVote:", userVote);
  const bar =
    userVote === 1 ? "vote-bar bar-up" : userVote === -1 ? "vote-bar bar-down" : "vote-bar";
  const upIcon = userVote === 1 ? "vote-icon icon-filled" : "vote-icon";
  const downIcon = userVote === -1 ? "vote-icon icon-filled" : "vote-icon";

  return (
    <div className={bar}>
      <button className="vote-btn" onClick={onUpvote}>
        <svg viewBox="0 0 24 24" width="20" height="20">
          <path className={upIcon} d="M12 3 L21 13 H15 V21 H9 V13 H3 Z" />
        </svg>
      </button>

      <span className="vote-count">{votes}</span>

      <button className="vote-btn" onClick={onDownvote}>
        <svg viewBox="0 0 24 24" width="20" height="20">
          <path className={downIcon} d="M12 21 L3 11 H9 V3 H15 V11 H21 Z" />
        </svg>
      </button>
    </div>
  );
}
export default Arrows;