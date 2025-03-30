import React from 'react'
import Hero from '../components/Hero'
import Features from '../components/Features'
import PrayerTimes from '../components/PrayerTimes'
import FAQ from '../components/FAQ'

export default function Home() {
  return (
    <div>
      <Hero />
      <Features />
      <PrayerTimes />
      <FAQ />
    </div>
  )
}
