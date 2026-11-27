import { Link } from "react-router-dom";

const TABS = [
  'Overview',
  'Posts',
  'Comments',
  'Saved',
  'History',
  'Hidden',
  'Upvoted',
  'Downvoted',
];

function ViewBar(){
    const username = "KareemAdel4805"

    return(
        <div>
          <div style={styles.tabsRow}>
            <Link to={`/user/${username}`} style={styles.tabButton}>
              <div>
                OverView
              </div>
            </Link>

            <Link to= {`/user/${username}/Posts`} style={styles.tabButton}>
              <div>
                Posts
              </div>
            </Link>

            <Link to= {`/user/${username}/comments`} style={styles.tabButton}>
              <div>
                Comments
              </div>
            </Link>

            <Link to= {`/user/${username}/saved`} style={styles.tabButton}>
              <div>
                Saved
              </div>
            </Link>

            <Link to= {`/user/${username}/history`} style={styles.tabButton}>
              <div>
                History
              </div>
            </Link>

            <Link to= {`/user/${username}/hidden`} style={styles.tabButton}>
              <div>
                Hidden
              </div>
            </Link>

            <Link to= {`/user/${username}/upvoted`} style={styles.tabButton}>
              <div>
                Upvoted
              </div>
            </Link>

            <Link to= {`/user/${username}/downvoted`} style={styles.tabButton}>
              <div>
                Downvoted
              </div>
            </Link>

          </div>
       </div>
    );
}

const styles = {
  tabsRow: {
    display: 'flex',
    gap: '6px',
    overflowX: 'auto',
    marginBottom: '16px',
  },
  tabButton: {
    border: 'none',
    borderRadius: '20px',
    padding: '8px 16px',
    fontSize: '14px',
    fontWeight: 600,
    textDecoration: 'none',
    backgroundColor: '#2f2f2f',
    color: '#ffffff'
  },
};

export default ViewBar