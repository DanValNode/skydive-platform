import React from 'react'
import { useNavigate } from 'react-router-dom'
import parse from 'html-react-parser'

type MediaItemProps = {
    image: string,
    text: string,
    description: string,
    id: number
}

const MediaItem: React.FC<MediaItemProps> = ({ image, text, description, id }) => {
  const navigate = useNavigate()
  const selectEmergency = (identifier: number) => {
    sessionStorage.setItem('emergency-id', identifier.toString())
    navigate('detail-emergency')
  }

  return (
        <div className="col-sm-6 col-md-4 col-lg-4">
            <div className="shop-item">
                <div className="shop-item-image">
                    <img src={image} alt="Accessories Pack"/>
                    <div className="shop-item-detail">
                        <a className="btn btn-round btn-b" onClick={() => selectEmergency(id)}>
                            <span className="icon-book-open"> Mas información </span>
                        </a>
                    </div>
                </div>
                <h4 className="shop-item-title font-alt">
                    <a href="#">{text}</a>
                </h4>
                {parse(description)}
            </div>
        </div>
  )
}

export default MediaItem
