import { memo } from "react"
import { HeroSection } from "../../components"

const Home = () => {
    return (
        <div className="w-">
            <HeroSection />
        </div>
    )
}

export default memo(Home)