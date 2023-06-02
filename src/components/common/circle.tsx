import React from 'react'

interface CircleProps extends React.ComponentProps<'div'> {
  size?: number
  fillColor?: string
}

export default function Circle({
  size = 200,
  fillColor = 'black',
  style,
  ...props
}: CircleProps) {
  return (
    <div
      {...props}
      style={{
        ...style,
        height: size,
        width: size,
        borderRadius: size,
        backgroundColor: fillColor
      }}
    ></div>
  )
}
