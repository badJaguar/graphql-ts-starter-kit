import React from 'react'

export const mergeStyles = (
  classNameProp?: string,
  stylesProp?: React.CSSProperties,
  className?: string | false,
  styles?: React.CSSProperties
): { style: React.CSSProperties, className: string } => {
  const classNames = []
  if (classNameProp !== undefined) { classNames.push(classNameProp) }
  if (className !== undefined) { classNames.push(className) }
  return {
    style: { ...stylesProp, ...styles },
    className: classNames.join(' ')
  }
}