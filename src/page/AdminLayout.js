import AdminHeader from './AdminHeader';
import SideBar from './SideBar';
import {Container} from 'react-bootstrap';
import { useState } from 'react';

const AdminLayout = ({ children }) => {
    const [showWelcome, setShowWelcome] = useState(false);

    const toggleWelcomeMessage = () => {
        setShowWelcome(!showWelcome);
    }

    return (
        <Container id="adminContainer"> {/* Container를 div로 변경하여 필요한 스타일 적용 */}
            <AdminHeader showWelcome={showWelcome} />
            <SideBar toggleWelcomeMessage={toggleWelcomeMessage} />
            <div id="main-content">
                <main>
                    {children}
                </main>
            </div>
        </Container>
    );
}

export default AdminLayout;
