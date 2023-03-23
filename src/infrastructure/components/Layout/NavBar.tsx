import React from 'react'
import Menu from './Menu'

type NavBarProps = {
    title: string
}

const NavBar: React.FC<NavBarProps> = ({ title }) => {
  return (
        <nav className="navbar navbar-custom navbar-fixed-top" role="navigation">
            <div className="container">
                <div className="navbar-header">
                    <button className="navbar-toggle" type="button" data-toggle="collapse" data-target="#custom-collapse">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <a className="navbar-brand" href="index.html">SkydiveApp</a>
                    </button>
                </div>
                <div className="collapse navbar-collapse" id="custom-collapse">
                    <Menu title={'Home'} />
                </div>
            </div>
        </nav>
  )
}

export default NavBar
