import React from 'react'
import MenuItem from './MenuItem'

type MenuProps = {
    title: string
}

const Menu: React.FC<MenuProps> = ({ title }) => {
  return (
      <ul className="nav navbar-nav navbar-right">
          <MenuItem title={title} />
      </ul>
  )
}

export default Menu
