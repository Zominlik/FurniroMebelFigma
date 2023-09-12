import React, { memo } from 'react'

const Subtitle = ({ children, className }) => {
    return (
        <p className={className}>{children}</p>
    )
}

export default memo(Subtitle)