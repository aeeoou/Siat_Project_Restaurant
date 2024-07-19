import Header from './Header'
import Footer from './Footer'
import {Container} from 'react-bootstrap'

const UserLayout = ({children}) => {
    return (
        <>
            <Container id='Container' className='border border-dark'>
                <Header/>
                    <div>
                        <main>
                            {children}
                        </main>
                    </div>
                <Footer/>
            </Container>
        </>
    )
}

export default UserLayout