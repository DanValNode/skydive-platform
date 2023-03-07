import React, { useState } from 'react'
import Stars from './Stars'
import parse from 'html-react-parser'
import { useNavigate } from 'react-router-dom'

type DetailProps = {
    mainImage?: string,
    image?: string[],
    title?: string,
    text?: string,
    videos?:string[]
}

const DetailAndGallery: React.FC<DetailProps> = (props) => {
  const [mainImage, setMainImage] = useState(props.mainImage)
  const [currentVideo, setCurrentVideo] = useState(0)
  const navigate = useNavigate()

  return (
        <div className="row">
            <div className="col-sm-6 mb-sm-40">
                <a className="gallery" href={mainImage ?? ''}>
                    <img src={mainImage ?? ''} alt={mainImage ?? ''}/>
                </a>
                <ul className="product-gallery">
                    {
                        props.image?.map((item, index) =>
                            <li key={index}>
                                <a className="gallery" onClick={ () => {
                                  setMainImage(item)
                                  setCurrentVideo(index)
                                } }>
                                    <img src={item} alt={props.title ?? ''}/>
                                </a>
                            </li>
                        )
                    }
                </ul>
                <div className="modal fade" id="exampleModal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h4 className="modal-title" id="exampleModalLabel">{props.title}</h4>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <iframe width="100%" height="350"
                                        src={props.videos !== undefined ? props.videos[currentVideo] : ''}>
                                </iframe>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-sm-6">
                <div className="row">
                    <div className="col-sm-12">
                        <h1 className="product-title font-alt">{props.title ?? ''}</h1>
                    </div>
                </div>
                <Stars rating={0} />
                <div className="row mb-20">
                    <div className="col-sm-12">
                        <div className="description">
                            <p>
                                {parse(props.text ?? '')}
                            </p>
                            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                                Ver video
                            </button>
                            <button type="button" className="btn ml-1" onClick={ () => navigate('/') }>
                                Volver
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default DetailAndGallery
