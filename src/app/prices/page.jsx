'use client'
import { useState, useEffect } from 'react'
import CryptoPrices from '@/app/components/home/CryptoPrices'

export default function PricesPage() {
  return (
    <div className="container mx-auto px-4 py-8 mt-16">
      <h1 className="text-3xl font-bold mb-8">Cryptocurrency Prices</h1>
      <CryptoPrices fullWidth={true} showMore={true} />
    </div>
  )
} 