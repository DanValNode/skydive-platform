import React from 'react'
import MediaItem from './MediaItem'
import parse from 'html-react-parser'

type MiddleContainerProps = {
    items: elements[],
    title: string,
    description: string,
    subtitle: string
}

type elements = {
    image: string,
    text: string,
    subtext: string,
    id: number
}

const MiddleContainer: React.FC<MiddleContainerProps> = ({ items, title, description, subtitle }) => {
  return (
        <section className="module-small">
            <div className="container">
                <h3>{title}</h3>
                <h4>{subtitle}</h4>
                <h5 className="mb-70">{parse(description)}</h5>
                <div className="row multi-columns-row">
                {
                    items.map((x, index) =>
                        <MediaItem key={index}
                                   image={x.image}
                                   text={x.text}
                                   description={x.subtext}
                                   id={x.id}
                        />
                    )
                }
                </div>
            </div>
        </section>
  )
}

export default MiddleContainer
