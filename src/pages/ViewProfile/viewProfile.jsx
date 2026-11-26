import profilePic from "../../assets/profilePic.png"
import ViewBar from "./viewBar";
import ProfileSumm from "./ProfileSumm";

function ViewProfile(){
    const username = "KareemAdel4805";

    return(
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
            </div>

            <ProfileSumm/>

        </div>
    );
}

const textstyle = {
    color: '#adafba'
}

export default ViewProfile