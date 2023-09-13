import { Footer, Header } from '../../components'
import { Main } from '../../components'

const Layout = ({ children }) => {
    return (
        <div>
            <Header />
            <Main className='px-[6.25rem]'>
                {children}
            </Main>
            <Footer />
        </div>
    )
}

export default (Layout)