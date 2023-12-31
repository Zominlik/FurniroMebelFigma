import React, { memo } from 'react'

const Title = ({ children, className }) => {
    return (
        <h2 className={className}>{children}</h2>
    )
}

export default memo(Title)