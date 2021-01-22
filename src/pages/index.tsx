import React from 'react'
import Seo from '@/components/Seo'
import Grid from '@/components/Grid'

function IndexPage() {
  return (
    <main className="grid place-items-center min-h-screen py-18 px-8">
      <Seo title="Frontend Mentor: Single price grid component" />
      <Grid />
    </main>
  )
}

export default IndexPage
