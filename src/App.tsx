import 'react'
import face from "./assets/face.png"
import sunglasses from "./assets/sunglasses.png"
import './App.css'

import * as S from './styles'
import { useCallback, useEffect, useState } from 'react'


function App() {
  const [scrollY, setScrollY] = useState(0)
  const [numLoaded, setNumLoaded] = useState(0)

  useEffect(() => {
    window.onscroll = () => {
      setScrollY(window.scrollY)
    }
  }, [])

  const onLoad = useCallback(() => {
    setNumLoaded(oldNum => oldNum + 1)
  }, [])

  const opacity = 1 - Math.min(1, Math.max(0, (scrollY - 0) / 600))
  const loading = numLoaded != 2

  return (
    <S.Container>
      <S.HeadFrame style={{ visibility: loading ? 'hidden' : 'visible'}}>
        <S.Image src={face} onLoad={onLoad} />
        <S.Image src={sunglasses}  onLoad={onLoad} style={{ position: 'absolute', top: 0, left: 0, opacity, }} />
      </S.HeadFrame>
    </S.Container>
  )
}

export default App
