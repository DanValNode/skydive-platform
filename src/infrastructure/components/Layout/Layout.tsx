import React from 'react'
import NavBar from './NavBar'

type LayoutProps = {
    title: string,
    loading: boolean
}

const Layout: React.FC<LayoutProps> = (props) => {
  return (
        <main>
            {
                props.loading &&
                <div className="page-loader">
                    <div className="loader">loading...</div>
                </div>
            }
            <NavBar title={''} />
            { props.children }
        </main>
  )
}

export default Layout
