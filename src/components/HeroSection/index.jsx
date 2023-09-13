import { memo } from 'react'
import Button from '../Button'
import Subtitle from '../Subtitle'
import Title from '../Title'
import Div from '../Div'

const HeroSection = () => {
    return (
        <Div className='select-none HeroSection relativey bg-hero-BgImg bg-cover h-[45rem] bg-center'>
            <Div className="HeroInnerWrapper flex flex-col items-start absolute left-[44.188rem] top-[18.25rem] bg-[#FFF3E3] w-[40.188rem] h-[27.688rem] pt-[3.75rem] pl-[2.313rem] pb-[2.313rem] rounded-xl">
                <Subtitle className='tracking-[0.188rem] leading-[1.5rem] font-semibold not-italic text-[1rem]'>
                    New Arrival
                </Subtitle>
                <Title className='text-[#B88E2F] text-[3.25rem] font-bold not-italic leading-[4.063rem]' style={{
                }}>
                    Discover Our New Collection
                </Title>
                <Subtitle className='leading-[1.5rem] font-medium not-italic text-[1.125rem]'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.
                </Subtitle>
                <Button className='h-[4rem] bg-[#b88e2f] px-[4.5rem] pt-[1.263rem] pb-[1.563rem] rounded-[1.1rem] text-white' btnType='click'>BUY Now</Button>
            </Div>
        </Div >
    )
}

export default memo(HeroSection)