import type { Component } from 'solid-js'

import logo from './logo.svg'
import styles from './App.module.css'

const App: Component = () => {
  return (
    <div class={styles.App}>
      <div class={styles.topPanel}></div>

      <div class={styles.svgWrapper}>
        <div class={styles.texts}>
          <div class={styles.topText}>Right hand</div>
          <div class={styles.bottomText}>Blue</div>
        </div>
        <img src={logo} class={styles.svg} />
      </div>
    </div>
  )
}

export default App
