import { bind } from "@react-rxjs/core";
import { createSignal } from "@react-rxjs/utils";
import { map } from "rxjs";

// A signal is an entry point to react-rxjs. It's equivalent to using a subject
export const [textChange$, setText] = createSignal<any>();

export const [useText, text$] = bind<any>(textChange$, "")

export const [useCharCount, charCount$] = bind(
    text$.pipe(
      map((text) => text.length)
    )
  )