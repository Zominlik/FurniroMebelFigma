import { memo } from 'react'
import { NavLink } from 'react-router-dom'
import Item from '../Item'
import Img from '../Img'
import FurniroLogo from '../../assets/Logos/FurniroLogo.png'
import PersonIcon from '../../assets/Icons/PersonIcon.png'
import SearchIcons from '../../assets/Icons/SearchIcons.png'
import HeartIcon from '../../assets/Icons/HeartIcon.png'
import ShoppingIcon from '../../assets/Icons/ShoppingIcon.png'
import Ul from '../Ul'


const Header = () => {
    return (
        <header className='select-none flex items-center justify-center gap-[19rem] py-[1.813rem] px-[6.25rem]'>
            <Ul className="headerItems">
                <Item>
                    <Img image={FurniroLogo} ImgDesc='FurniroLogo' />
                </Item>
            </Ul>
            <Ul className="HeaderItemsLinks flex justify-center items-center gap-[3rem]">
                <Item>
                    <NavLink to='/home' className={({ isActive }) => `HeaderLink ${isActive ? 'text-pink-500 animate-pulse inline-block' : ''}`}>Home</NavLink>
                </Item>
                <Item>
                    <NavLink to='/shop' className={({ isActive }) => `HeaderLink ${isActive ? 'text-pink-500 animate-pulse inline-block' : ''}`}>Shop</NavLink>
                </Item>
                <Item>
                    <NavLink to='/cart' className={({ isActive }) => `HeaderLink ${isActive ? 'text-pink-500 animate-pulse inline-block' : ''}`}>Card</NavLink>
                </Item>
                <Item>
                    <NavLink to='/contact' className={({ isActive }) => `HeaderLink ${isActive ? 'text-pink-500 animate-pulse inline-block' : ''}`}>Contact</NavLink>
                </Item>
            </Ul>
            <Ul className="headerPageIconsLinks flex justify-center items-center gap-[2rem]">
                <Item>
                    <NavLink to='blog' className={({ isActive }) => `icons ${isActive ? 'rounded-xl p-[0.3rem] bg-gray-300 inline-block animate-bounce transition ' : ''}`}>
                        <Img image={PersonIcon} imgDesc='PersonIcon' />
                    </NavLink>
                </Item>
                <Item>
                    <Img image={SearchIcons} imgDesc='PersonIcon' />
                </Item>
                <Item>
                    <Img image={HeartIcon} imgDesc='PersonIcon' />
                </Item>
                <Item>
                    <Img image={ShoppingIcon} imgDesc='PersonIcon' />
                </Item>
            </Ul>
        </header>
    )
}

export default memo(Header)