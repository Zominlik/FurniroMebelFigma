import { memo } from 'react'

const Button = ({ className, setState = () => { }, children, btnType }) => {
    return (
        <button className={className} onClick={(prev) => setState(!prev)} type={btnType}>{children}</button>
    )
}

export default memo(Button)