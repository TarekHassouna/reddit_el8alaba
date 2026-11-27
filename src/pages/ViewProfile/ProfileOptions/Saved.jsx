import profilePic from "../../../assets/profilePic.png"
import ViewBar from "../viewBar"
import ProfileSumm from "../ProfileSumm"
import emptySnoo from "../../../assets/reddit-snoo.png"

const textstyle = {
    color: '#adafba'
}

function Saved(){
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
                    <hr style={styles.divider} />

                    <div style={styles.emptyState}>
                        <img
                        src={emptySnoo}
                        alt="No posts illustration"
                        style={{ width: '110px', height: '110px', objectFit: 'contain' }}
                        />
                        <h2 style={styles.emptyTitle}>
                        Looks like you haven't saved anything yet.
                        </h2>
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
    color: '#aeafb0',
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

export default Saved