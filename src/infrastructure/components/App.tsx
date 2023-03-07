import React from 'react'
import DashboardRoutes from './Routers/DashboardRoutes'

type AppProps = {
  msg: string
}

const App: React.FC<AppProps> = ({ msg }) => {
  return (
    <div className="App">
      <DashboardRoutes />
    </div>
  )
}

export default App

// https://vivirenlasnubes.blog/blog/emergencias-en-el-paracaidismo-avion
// https://www.youtube.com/watch?v=Ea0Jk0y_frs
// https://www.youtube.com/watch?v=DcWfJ_hzgxA
// https://www.togglescience.com/
// https://www.youtube.com/watch?v=SLGq2EdMlbo
// https://www.youtube.com/watch?v=cJyyq1qjVmU
// https://www.youtube.com/watch?v=rCJC0rz0Wro
