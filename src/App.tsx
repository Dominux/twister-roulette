import type { Component } from 'solid-js'

import logo from './logo.svg'
import styles from './App.module.css'

const App: Component = () => {
  return (
    <div class={styles.App}>
      <div class={styles.top}>
        <div class={styles.svg_text}>Right hand</div>
        <img src={logo} class={styles.svg} />
      </div>
    </div>
  )
}

export default App
