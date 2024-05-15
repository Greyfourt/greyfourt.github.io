// import Script from "next/script";

// const MATOMO_URL = process.env.NEXT_PUBLIC_MATOMO_URL;
// const MATOMO_SITE_ID = process.env.NEXT_PUBLIC_MATOMO_SITE_ID;

// export default function Matomo() {
//     return (
//         <Script id="matomo" strategy="afterInteractive">
//             {`
//                 var _paq = window._paq = window._paq || [];
//                 /* tracker methods like "setCustomDimension" should be called before "trackPageView" */
//                  _paq.push(['trackPageView']);
//                  _paq.push(['enableLinkTracking']);
                
//                  (function() {
//                     var u="//${MATOMO_URL}/";
//                     _paq.push(['setTrackerUrl', u+'matomo.php']);
//                     _paq.push(['setSiteId', '${MATOMO_SITE_ID}']);
//                     var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
//                     g.async=true;
//                     g.src=u+'matomo.js'; 
//                     s.parentNode.insertBefore(g,s);
//              })();
// `           }

//         </Script>
//     )
// }

'use client'
// import { init, push } from '@socialgouv/matomo-next'
import { usePathname, useSearchParams } from 'next/navigation'
import { Suspense, useEffect, useState } from 'react'

const MATOMO_URL = process.env.NEXT_PUBLIC_MATOMO_URL;
const MATOMO_SITE_ID = process.env.NEXT_PUBLIC_MATOMO_SITE_ID;

const MatomoComponent = () => {
  const [initialised, setInitialised] = useState(false)
  useEffect(() => {
    if (MATOMO_URL && MATOMO_SITE_ID && !initialised) {
      init({ url: MATOMO_URL, siteId: MATOMO_SITE_ID })
    }
    return () => {
      setInitialised(true)
      push(['HeatmapSessionRecording::disable'])
    }
  }, [initialised, setInitialised])

  const searchParams = useSearchParams(),
    pathname = usePathname()

  const searchParamsString = searchParams.toString()
  useEffect(() => {
    if (!pathname) return
    // may be necessary to decodeURIComponent searchParamsString ?
    const url = pathname + (searchParamsString ? '?' + searchParamsString : '')
    push(['setCustomUrl', url])
    push(['trackPageView'])
  }, [pathname, searchParamsString])
  return null
}

export default function Matomo() {
  return (
    <Suspense>
      <MatomoComponent />
    </Suspense>
  )
}
