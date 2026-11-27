import eyeIcon from "../../../assets/view.png"
import slider from "../../../assets/slider.png"
import emptySnoo from "../../../assets/reddit-snoo.png"
import { Link } from "react-router-dom";

function Overview(){

    return(
        <div>
            <Link to="/" style={{textDecoration:'none'}}>
                <div style={styles.bannerCard}>
                        <div style={styles.bannerLeft}>
                            <img
                                src={eyeIcon}
                                alt="Visibility"
                                style={{ width: '18px', height: '18px', objectFit: 'contain' }}
                            />
                            <p style={{ fontSize: '14px', fontWeight: 500,  color:'#ffffff'}}>Showing all Content</p>
                        </div>
                    
                </div>
            </Link>

    
            <div style={styles.actionBar}>
                <Link to="/submit" style={styles.create}>
                    + Create Post
                </Link>
                <button style={styles.filterBtn} title="Sort and Filter">
                <img
                    src={slider}
                    alt="Filter"
                    style={{ width: '16px', height: '16px', objectFit: 'contain' }}
                />
                </button>
            </div>

            <hr style={styles.divider} />

            <div style={styles.emptyState}>
                <img
                src={emptySnoo}
                alt="No posts illustration"
                style={{ width: '110px', height: '110px', objectFit: 'contain' }}
                />
                <h2 style={styles.emptyTitle}>You don't have any posts yet</h2>
                <p style={styles.emptySubtitle}>
                Once you post to a community, it'll show up here. If you'd rather
                <br />
                hide your posts, update your settings.
                </p>
                <button style={styles.updateSettingsBtn}>Update Settings</button>
            </div>
        </div>
    );
}

const styles={
    create: {
    color: '#ffffff',
    textdecoration: 'none',
    fontweight: '700',
    fontsize: '14px',
    padding: '8px 16px',
    borderRadius: '999px',
    border: '1px solid #5c6165',
    },
  bannerCard: {
    backgroundColor: '#04090a',
    borderRadius: '10px',
    padding: '14px 18px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '16px',
    cursor: 'pointer',
  },
  bannerLeft: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  actionBar: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '16px',
  },
  createPostBtn: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    backgroundColor: 'transparent',
    border: '1px solid #343536',
    color: '#f2f4f5',
    borderRadius: '20px',
    padding: '7px 16px',
    fontSize: '13px',
    fontWeight: 600,
    cursor: 'pointer',
  },
  filterBtn: {
    backgroundColor: 'transparent',
    border: 'none',
    padding: '8px',
    borderRadius: '50%',
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
  },
  divider: {
    border: 'none',
    borderTop: '1px solid #1e2527',
    margin: '0 0 48px 0',
  },
  emptyState: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    padding: '32px 16px',
  },
  emptyTitle: {
    margin: '16px 0 8px 0',
    fontSize: '20px',
    fontWeight: 700,
    color: '#f2f4f5',
  },
  emptySubtitle: {
    margin: '0 0 20px 0',
    fontSize: '14px',
    lineHeight: 1.5,
    color: '#818384',
  },
  updateSettingsBtn: {
    backgroundColor: '#e5ebee',
    color: '#0b1416',
    border: 'none',
    borderRadius: '20px',
    padding: '10px 20px',
    fontSize: '14px',
    fontWeight: 600,
    cursor: 'pointer',
  },
}

export default Overview