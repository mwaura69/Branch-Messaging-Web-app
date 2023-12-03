import { PrettyChatWindow } from "react-chat-engine-pretty";
import { useAuth } from '../routes/AuthContext'



const ChatsPage = () => {
    const { userName, userNo } = useAuth()
    const phoneNumber = userNo
    const name = userName
    console.log(userId, userName)
    return (
        <div style={{ height: "100vh", width: "150vh" }}>
            <PrettyChatWindow
                projectId="b23fb5a1-6099-4240-acc5-f3eb35eca42e"
                username={name} // adam
                secret={phoneNumber} // pass1234
                style={{ height: "100%", width: '100%' }}
            />
        </div>
    );
};

export default ChatsPage;