import { map } from "rxjs/operators"
import { bind } from "@react-rxjs/core"
import { text$, useCharCount } from "../state/state"



function CharacterCount() {
  const count = useCharCount()

  return <>Character Count: {count}</>
}

export default CharacterCount