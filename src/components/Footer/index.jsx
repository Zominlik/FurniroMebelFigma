import { memo } from 'react'
import Title from '../Title'
import Subtitle from '../Subtitle'
import Ul from '../Ul'
import Item from '../Item'
import { NavLink } from 'react-router-dom'
import Div from '../Div'
import Span from '../Span'

const Footer = () => {
    return (
        <footer className="footer select-none flex flex-col px-[6.25rem] border-t-[0.1rem]">
            <address className='border-b-[0.1rem]'>
                <Div className='flex justify-between py-[3rem]'>
                    <Div className='flex flex-col  gap-[2.875rem]'>
                        <Title className='text-[1.5rem] font-semibold pb-[0.688rem] inline-block'>
                            Funiro.
                        </Title>
                        <Subtitle className='flex flex-col text-[1.5rem] font-light text-[#9F9F9F]'>
                            <Span className=''>
                                400 University Drive Suite 200 Coral
                            </Span>
                            <Span className=''>
                                Gables,
                            </Span>
                            <Span className=''>
                                FL 33134 USA
                            </Span>
                        </Subtitle>
                    </Div>
                    <Ul className='flex flex-col  gap-[2.875rem]'>
                        <Item>
                            <NavLink to='#' className={({ isActive }) => `navlink pb-[0.688rem] inline-block ${isActive ? 'text-blue-500' : 'animate-bounce inline-block'}`}>
                                Links
                            </NavLink>
                        </Item>
                        <Item>
                            <NavLink to='#' className={({ isActive }) => `navlink ${isActive ? 'text-blue-500' : 'animate-bounce inline-block'}`}>
                                Home
                            </NavLink>
                        </Item>
                        <Item>
                            <NavLink to='#' className={({ isActive }) => `navlink ${isActive ? 'text-blue-500' : 'animate-bounce inline-block'}`}>
                                Shop
                            </NavLink>
                        </Item>
                        <Item>
                            <NavLink to='#' className={({ isActive }) => `navlink ${isActive ? 'text-blue-500' : 'animate-bounce inline-block'}`}>
                                About
                            </NavLink>
                            <NavLink to='#' className={({ isActive }) => `navlink ${isActive ? 'text-blue-500' : 'animate-bounce inline-block'}`}>
                                Contact
                            </NavLink>
                        </Item>
                    </Ul>
                    <Ul className='flex flex-col gap-[2.875rem]'>
                        <Item>
                            <NavLink to='#' className={({ isActive }) => `navlink pb-[0.688rem] inline-block ${isActive ? 'text-blue-500' : 'animate-bounce inline-block'}`}>
                                Help
                            </NavLink>
                        </Item>
                        <Item>
                            <NavLink to='#' className={({ isActive }) => `navlink ${isActive ? 'text-blue-500' : 'animate-bounce inline-block'}`}>
                                Payment Options
                            </NavLink>
                        </Item>
                        <Item>
                            <NavLink to='#' className={({ isActive }) => `navlink ${isActive ? 'text-blue-500' : 'animate-bounce inline-block'}`}>
                                Returns
                            </NavLink>
                        </Item>
                        <Item>
                            <NavLink to='#' className={({ isActive }) => `navlink ${isActive ? 'text-blue-500' : 'animate-bounce inline-block'}`}>
                                Privacy Policies
                            </NavLink>
                        </Item>
                    </Ul>
                    <Ul className='flex flex-col gap-[2.875rem]'>
                        <Item className=''>
                            <NavLink to='#' className={({ isActive }) => `navlink pb-[0.688rem] inline-block ${isActive ? 'text-blue-500' : 'animate-bounce inline-block'}`}>
                                Newsletter
                            </NavLink>
                        </Item>
                        <Item>
                            <Ul className='flex gap-[0.688rem]'>
                                <Item>
                                    <NavLink to='#' className={({ isActive }) => `navlink inline-block min-w-[12rem] ${isActive ? 'text-blue-500' : 'animate-bounce inline-block'}`}>
                                        Enter Your Email Address
                                    </NavLink>
                                </Item>
                                <Item>
                                    <NavLink to='#' className={({ isActive }) => `navlink uppercase ${isActive ? 'text-blue-500' : 'animate-bounce inline-block'}`}>
                                        Subscribe
                                    </NavLink>
                                </Item>
                            </Ul>
                        </Item>
                    </Ul>
                </Div>
            </address>
            <Div>
                <Subtitle className='text-[1rem] py-[2.25rem]'>
                    2023 furino. All rights reverved
                </Subtitle>
            </Div>
        </footer>
    )
}

export default memo(Footer)