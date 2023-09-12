import { Children, memo } from 'react'

const Ul = ({ className, children }) => {
    return (
        <ul className={className}>
            {children}
        </ul>
    )
}

export default memo(Ul)