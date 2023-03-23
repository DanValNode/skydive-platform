import React from 'react'

type MenuItemProps = {
    title: string
}

const MenuItem : React.FC<MenuItemProps> = ({ title }) => {
  return (
      <li className="dropdown"><a className="dropdown-toggle" href="#" data-toggle="dropdown">{title}</a>
          <ul className="dropdown-menu">
              <li><a href="/capsules/CapsulaChequeo.pdf" target="_blank">Chequeo antes de subir al avión</a></li>
              <li><a href="#">One Page</a></li>
              <li><a href="#">Portfolio</a></li>
          </ul>
      </li>
  )
}

export default MenuItem
