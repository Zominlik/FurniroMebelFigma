import { Header } from '../../components'
import { Main } from '../../components'

const Layout = ({ children }) => {
    return (
        <>
            <Header />
            <div>
                <Main>
                    {children}
                </Main>
            </div>
        </>
    )
}

export default (Layout)