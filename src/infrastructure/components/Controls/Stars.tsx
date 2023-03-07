import React from 'react'

type NumberStar = {
  rating: number
}

const Stars: React.FC<NumberStar> = ({ rating }) => {
  return (
      <div className="row mb-20" style={{ display: (rating > 0 ? 'block' : 'none') }}>
        <div className="col-sm-12">
            <span>
                <i className="fa fa-star star"/>
            </span>
            <span>
                <i className="fa fa-star star"></i>
            </span>
            <span>
                <i className="fa fa-star star"/>
            </span>
            <span>
                <i className="fa fa-star star"/>
            </span>
            <span>
                <i className="fa fa-star star-off"/>
            </span>
          <a className="open-tab section-scroll" href="#">Peligrosidad</a>
        </div>
      </div>
  )
}

export default Stars
