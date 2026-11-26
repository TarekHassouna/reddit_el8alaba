import profilePic from "../../assets/profilePic.png"
import imageAddIcon from "../../assets/addImage.png"
import shareIcon from "../../assets/share.png"
import eyeIcon from "../../assets/view.png"
import shirtIcon from "../../assets/shirt.png"


function ProfileSumm(){
    const username="KareemAdel4805"

    return(
        <div style={styles.sidebar}>
          <div style={styles.sidebarCard}>
            <div style={styles.coverBanner}>
              <button style={styles.coverEditBtn} title="Change Banner">
                <img
                  src={imageAddIcon}
                  alt="Edit Banner"
                  style={styles.smallIconImg}
                />
              </button>
            </div>

            <div style={styles.sidebarBody}>
              <h2 style={styles.sidebarUsername}>{username}</h2>

              <button style={styles.shareBtn}>
                <img
                  src={shareIcon}
                  alt="Share"
                  style={{ width: '15px', height: '15px'}}
                />
                <p>Share</p>
              </button>

              <p style={styles.followersText}>0 followers</p>

              <div style={styles.statsGrid}>
                <div>
                  <div style={styles.statValue}>1</div>
                  <div style={styles.statLabel}>Karma</div>
                </div>
                <div>
                  <div style={styles.statValue}>0</div>
                  <div style={styles.statLabel}>Contributions</div>
                </div>
                <div>
                  <div style={styles.statValue}>2 y</div>
                  <div style={styles.statLabel}>Reddit Age</div>
                </div>
                <div>
                  <div style={styles.statValue}>0</div>
                  <div style={styles.statLabel}>Active in &gt;</div>
                </div>
                <div>
                  <div style={styles.statValue}>0</div>
                  <div style={styles.statLabel}>Gold earned</div>
                </div>
              </div>

              <hr style={styles.sidebarDivider} />

              <div style={styles.sectionHeader}>SETTINGS</div>

            <div style={styles.settingsList}>
                <div style={styles.settingItem}>
                    <div style={styles.settingLeft}>
                        <div style={styles.settingIconBox}>
                            <img
                            src={profilePic}
                            alt="Profile"
                            style={styles.settingAvatarImg}
                            />
                        </div>
                        <div>
                            <div style={styles.settingTitle}>Profile</div>
                            <div style={styles.settingSubtitle}>Customize your profile</div>
                        </div>
                    </div>
                    <button style={styles.pillSmallBtn}>Update</button>
                </div>

                <div style={styles.settingItem}>
                    <div style={styles.settingLeft}>
                    <div style={styles.settingIconBox}>
                        <img
                        src={eyeIcon}
                        alt="Curate your profile"
                        style={styles.settingIconImg}
                        />
                    </div>
                    <div>
                        <div style={styles.settingTitle}>Curate your profile</div>
                        <div style={styles.settingSubtitle}>
                        Manage what people see when they visit your profile
                        </div>
                    </div>
                    </div>
                    <button style={styles.pillSmallBtn}>Update</button>
                </div>

                <div style={styles.settingItem}>
                    <div style={styles.settingLeft}>
                    <div style={styles.settingIconBox}>
                        <img
                        src={shirtIcon}
                        alt="Avatar"
                        style={styles.settingIconImg}
                        />
                    </div>
                    <div>
                        <div style={styles.settingTitle}>Avatar</div>
                        <div style={styles.settingSubtitle}>Style your avatar</div>
                    </div>
                    </div>
                    <button style={styles.pillSmallBtn}>Update</button>
                </div>
            </div>
            </div>
            </div>
            </div>
    );
}


const styles = {
    smallIconImg: {
    width: '14px',
    height: '14px',
    objectFit: 'contain',
  },
  sidebar: {
    width: '312px',
    flexShrink: 0,
  },
  sidebarCard: {
    backgroundColor: '#04090a',
    borderRadius: '16px',
    overflow: 'hidden',
  },
  coverBanner: {
    height: '110px',
    background: 'linear-gradient(180deg, #d3d3d3 0%, #2f3030 75%, #04090a 100%)',
    position: 'relative',
  },
  coverEditBtn: {
    position: 'absolute',
    top: '12px',
    right: '12px',
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    backgroundColor: 'rgba(255, 255, 255, 0.75)',
    border: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
  },
  sidebarBody: {
    padding: '8px 18px 20px 18px',
  },
  sidebarUsername: {
    margin: '0 0 12px 0',
    fontSize: '18px',
    fontWeight: 700,
    color: '#f2f4f5',
  },
  shareBtn: {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    backgroundColor: '#222729',
    color: '#f2f4f5',
    border: 'none',
    borderRadius: '18px',
    padding: '7px 14px',
    fontSize: '13px',
    fontWeight: 600,
    cursor: 'pointer',
    marginBottom: '14px',
  },
  followersText: {
    margin: '0 0 16px 0',
    fontSize: '13px',
    fontWeight: 600,
    color: '#d7dadc',
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    rowGap: '16px',
    columnGap: '12px',
  },
  statValue: {
    fontSize: '14px',
    fontWeight: 700,
    color: '#f2f4f5',
  },
  statLabel: {
    fontSize: '12px',
    color: '#818384',
    marginTop: '2px',
  },
  sidebarDivider: {
    border: 'none',
    borderTop: '1px solid #1a2022',
    margin: '18px 0',
  },
  sectionHeader: {
    fontSize: '11px',
    fontWeight: 700,
    letterSpacing: '0.5px',
    color: '#818384',
    marginBottom: '12px',
  },
  achievementsRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    marginBottom: '14px',
  },
  badgeStack: {
    display: 'flex',
    alignItems: 'center',
  },
  badgeImg: {
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    border: '2px solid #04090a',
    objectFit: 'cover',
    display: 'block',
  },
  achievementNames: {
    margin: 0,
    fontSize: '12px',
    lineHeight: 1.4,
    color: '#d7dadc',
  },
  unlockedRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  pillSmallBtn: {
    backgroundColor: '#222729',
    color: '#f2f4f5',
    border: 'none',
    borderRadius: '16px',
    padding: '6px 14px',
    fontSize: '12px',
    fontWeight: 600,
    cursor: 'pointer',
  },
  settingsList: {
  display: 'flex',
  flexDirection: 'column',
  gap: '16px',
    },
  settingAvatarImg: {
    width: '28px',
    height: '28px',
    borderRadius: '50%',
    objectFit: 'cover',
  },
  settingIconImg: {
    width: '20px',
    height: '20px',
    objectFit: 'contain',
  },
  settingTitle: {
    fontSize: '13px',
    fontWeight: 600,
    color: '#f2f4f5',
  },
  settingSubtitle: {
    fontSize: '11px',
    color: '#818384',
    marginTop: '2px',
    lineHeight: 1.3,
  },
    settingItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '10px',
    },
    settingLeft: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    },
    settingIconBox: {
    width: '28px',
    height: '28px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexShrink: 0,
},
};

export default ProfileSumm