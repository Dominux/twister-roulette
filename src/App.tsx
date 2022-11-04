import { Component, createSignal } from 'solid-js'

import getRandom, { setTitle } from './logic'

import wave from './wave.svg'
import styles from './App.module.css'

const App: Component = () => {
  const [initSide, initLimb, initColor] = getRandom()
  const [getSide, setSide] = createSignal(initSide)
  const [getLimb, setLimb] = createSignal(initLimb)
  const [getColor, setColor] = createSignal(initColor)

  setTitle(getSide(), getLimb(), getColor())

  function onClick(_event: MouseEvent) {
    const [newSide, newLimb, newColor] = getRandom()
    setSide(newSide)
    setLimb(newLimb)
    setColor(newColor)

    // Setting title
    setTitle(newSide, newLimb, newColor)
  }

  return (
    <div
      classList={{
        [styles.App]: true,
        [styles[getColor().toLowerCase()]]: true,
      }}
      onClick={onClick}
    >
      <div class={styles.topPanel}></div>

      <div class={styles.svgWrapper}>
        <div class={styles.texts}>
          <div class={styles.topText}>
            {getSide()} {getLimb()}
          </div>
          <div class={styles.bottomText}>
            <b>{getColor()}</b>
          </div>
        </div>

        <img src={wave} class={styles.svg} />
      </div>
    </div>
  )
}

export default App
