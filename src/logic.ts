import { Limb, Side, Color } from './enums'

// https://stackblitz.com/edit/typescript-random-enum-value?file=index.ts
const randomEnumValue = (enumeration: { [x: string]: any }) => {
  const values = Object.keys(enumeration)
  const enumKey = values[Math.floor(Math.random() * values.length)]
  return enumeration[enumKey]
}

export default function getRandom(): [Side, Limb, Color] {
  return [randomEnumValue(Side), randomEnumValue(Limb), randomEnumValue(Color)]
}

export function setTitle(side: Side, limb: Limb, color: Color) {
  // Setting title
  document.title = `${side} ${limb}`

  // Setting favicon
  const href = `https://`
}
