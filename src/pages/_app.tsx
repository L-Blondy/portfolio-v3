import 'src/styles/index.css'
import Scrollbars from 'react-custom-scrollbars-2'
import { useEffect, useState } from 'react'
import { cn } from 'src/utils/cn'
import { SETTINGS } from 'src/config'


function MyApp({ Component, pageProps }: any) {

  useEffect(() => {
    const thumbVertical = document.querySelector('.thumb-vertical')
    const trackVertical = thumbVertical?.parentElement
    if (!trackVertical || !thumbVertical) return
    trackVertical.style.width = SETTINGS.SCROLLBAR_WIDTH
  }, [])

  return (
    <Scrollbars
      className='app-scrollbars'
      renderThumbVertical={({ className, style, ...props }) => (
        <div
          className={cn`thumb-vertical bg-gray-400 bg-opacity-40 rounded-sm cursor-pointer ${className}`}
          {...props}
        />
      )}
      universal>
      <Component {...pageProps} />
    </Scrollbars>
  )
}

export default MyApp
