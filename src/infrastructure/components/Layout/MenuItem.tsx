import React from 'react'

type MenuItemProps = {
    title: string
}

const MenuItem : React.FC<MenuItemProps> = ({ title }) => {
  return (
      <li className="dropdown"><a className="dropdown-toggle" href="#" data-toggle="dropdown">Home</a>
          <ul className="dropdown-menu">
              <li><a href="index_mp_fullscreen_video_background.html">Default</a></li>
              <li><a href="index_op_fullscreen_gradient_overlay.html">One Page</a></li>
              <li><a href="index_agency.html">Agency</a></li>
              <li><a href="index_portfolio.html">Portfolio</a></li>
              <li><a href="index_restaurant.html">Restaurant</a></li>
              <li><a href="index_finance.html">Finance</a></li>
              <li><a href="index_landing.html">Landing Page</a></li>
              <li><a href="index_photography.html">Photography</a></li>
              <li><a href="index_shop.html">Shop</a></li>
          </ul>
      </li>
  )
}

export default MenuItem
