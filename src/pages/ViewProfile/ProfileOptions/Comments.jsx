import profilePic from "../../../assets/profilePic.png"
import ViewBar from "../viewBar"
import ProfileSumm from "../ProfileSumm"
import eyeIcon from "../../../assets/view.png"
import emptySnoo from "../../../assets/reddit-snoo.png"
import { Link } from "react-router-dom"

const textstyle = {
    color: '#adafba'
}

function Comments(){
    const username = "KareemAdel4805";
    return (
            <div style={{display:'flex',alignItems:'center'}}>

            <div>
                <div style={{display: 'flex', alignItems: 'center', gap: '5px'}}>
                    <img src={profilePic}
                    alt= "ProfilePic" 
                    style={{
                    width:'50px',
                    height: '50px',
                    borderRadius:'30px'
                    }}></img>
                    <div style={textstyle}>
                        {username}
                        <br></br>
                        u/{username}
                    </div>
                </div>
                
                <ViewBar />

                 <div>
                    <Link to="/" style={{textDecoration:'none'}}>
                    <div style={styles.bannerCard}>
                            <div style={styles.bannerLeft}>
                                <img
                                    src={eyeIcon}
                                    alt="Visibility"
                                    style={{ width: '18px', height: '18px', objectFit: 'contain' }}
                                />
                                <p style={{ fontSize: '14px', fontWeight: 500,  color:'#ffffff'}}>Showing all comments</p>
                            </div>
                        
                    </div>
                    </Link>

                    <hr style={styles.divider} />

                    <div style={styles.emptyState}>
                        <img
                        src={emptySnoo}
                        alt="No posts illustration"
                        style={{ width: '110px', height: '110px', objectFit: 'contain' }}
                        />
                        <h2 style={styles.emptyTitle}>You don't have any Comments yet</h2>
                        <p style={styles.emptySubtitle}>
                        Once you comment in a community, it'll show up here. If you'd rather
                        <br />
                        hide your comments, update your settings.
                        </p>
                        <button style={styles.updateSettingsBtn}>Update Settings</button>
                    </div>
                </div>
            </div>

            <ProfileSumm/>

        </div>
       
    );
}

const styles={
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

export default Comments