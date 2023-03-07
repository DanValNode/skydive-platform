import React, { useEffect, useState } from 'react'
import { Route, BrowserRouter, Routes } from 'react-router-dom'
import Layout from '../Layout/Layout'
import Emergencies from '../Pages/Safety/Emergencies'
import EmergencyDetail from '../Pages/Safety/EmergencyDetail'

const DashboardRoutes = () => {
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(false)
  }, [])

  return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={
                    <Layout title="" loading={loading}>
                        <Emergencies title="Emergencies" />
                    </Layout>
                } />
                <Route path="/detail-emergency" element={
                    <Layout title="" loading={loading} >
                        <EmergencyDetail />
                    </Layout>
                } />
            </Routes>
        </BrowserRouter>
  )
}

export default DashboardRoutes
