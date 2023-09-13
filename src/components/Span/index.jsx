import { memo } from 'react'

const Span = ({ className, children }) => {
    return (
        <span className={className}>
            {children}
        </span>
    )
}

export default memo(Span)