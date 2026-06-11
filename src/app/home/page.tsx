import Home from '@/features/home/Home'
import { buildMetadata } from '@/lib/seo'
import React from 'react'

export const metadata = buildMetadata({
  title: "Employee Monitoring & Productivity Software",
  description:
    "Boost team productivity with TrackForce — real-time activity tracking, time management, screenshots, and detailed reports for remote and in-office teams.",
  path: "/home",
})

const page = () => {
  return (
    <Home />
  )
}

export default page