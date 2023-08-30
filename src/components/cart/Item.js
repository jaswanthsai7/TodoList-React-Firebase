import React from 'react'

export default function Item(props) {
    console.log(props.data)
  return (
    <li>
      {props.data}
    </li>
  )
}
