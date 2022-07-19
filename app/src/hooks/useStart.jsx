import { useEffect } from 'react'

let click = false
const useStart = (isStarted) => {
  useEffect(() => {
    window.addEventListener('click', () => {
      if (isStarted) {
        click = true
      }
    }, { once: true })
    return () => {
      window.removeEventListener('click', () => { click = false })
    }
  }, [isStarted])
}

export { click }
export default useStart
