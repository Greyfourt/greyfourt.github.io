'use client'

import { useEffect, useState } from 'react'
import { useTranslations } from 'next-intl'
import Matomo from '@/utils/matomo'

type ConsentState = 'pending' | 'accepted' | 'declined'

const STORAGE_KEY = 'cookie-consent'

const CookieBanner = () => {
  const [consent, setConsent] = useState<ConsentState>('pending')
  const t = useTranslations('cookies')

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === 'accepted' || stored === 'declined') {
      setConsent(stored)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem(STORAGE_KEY, 'accepted')
    setConsent('accepted')
  }

  const handleDecline = () => {
    localStorage.setItem(STORAGE_KEY, 'declined')
    setConsent('declined')
  }

  return (
    <>
      {consent === 'accepted' && <Matomo />}
      {consent === 'pending' && (
        <div className="cookieBanner" role="dialog" aria-label={t('title')}>
          <p>{t('message')}</p>
          <div className="cookieBannerActions">
            <button onClick={handleDecline} className="button Secondary">
              {t('decline')}
            </button>
            <button onClick={handleAccept} className="button Primary">
              {t('accept')}
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default CookieBanner
