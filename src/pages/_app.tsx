import 'src/styles/index.css'
import 'react-toastify/dist/ReactToastify.min.css';
import Scrollbars from 'react-custom-scrollbars-2'
import { useEffect } from 'react'
import { cn } from 'src/utils/cn'
import { SETTINGS } from 'src/config'
import { ToastContainer } from 'react-toastify';


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

      <ToastContainer
        className='app_toast-container'
        toastClassName='app_toast'
        bodyClassName='app_toast-body'
        progressClassName='app_toast-progress'
        position='bottom-right'
        autoClose={8000}
        pauseOnFocusLoss
        limit={3}
        closeButton={false}
        draggable={false}
      />

      <Component {...pageProps} />
    </Scrollbars>
  )
}

export default MyApp
