import { memo } from 'react'

const Item = ({ children }) => {
    return (
        <li className="item hover:text-blue-500 hover:transition hover:ease-linear hover:duration-100 ">{children}</li>
    )
}

export default memo(Item)