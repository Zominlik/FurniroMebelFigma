import { memo } from 'react'

const Img = ({ image, ImgDesc }) => {
    return (
        <img src={image} alt={ImgDesc} />
    )
}

export default memo(Img)