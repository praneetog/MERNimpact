import { useState, useRef } from 'react'

function Example1() {

  const inputRef = useRef()

  const handlerFocus = () => {
    inputRef.current.focus()
  }

  const handlerCopy = () => {
    navigator.clipboard.writeText(inputRef.current.value)
  }

  return (
    <div>
      <input ref={inputRef} type="text" className='' />
      <br />
      <br />
      <button onClick={handlerFocus} >Click to Focus</button>
      <button onClick={handlerCopy} >Click to Copy</button>
    </div>
  )
}

export default Example1
