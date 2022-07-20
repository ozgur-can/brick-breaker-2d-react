import { useEffect } from 'react'

const click = { status: false }
const useStart = (isStarted) => {
  useEffect(() => {
    window.addEventListener('click', () => {
      if (isStarted) {
        click.status = true
      }
    }, { once: true })
    return () => {
      window.removeEventListener('click', () => { click.status = false })
    }
  }, [isStarted])
}

export { click }
export default useStart
