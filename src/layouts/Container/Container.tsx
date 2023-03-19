import React from 'react'
import { globalSpace, globalStyles, childWidth } from '../../utils/idcClasses'

export interface ContainerProps {
  children?: React.ReactNode
  hasProse?: boolean
  bgColor?: 'white' | 'gray'
  maxWidth?: 'full' | '5xl' | '7xl'
}

export const Container = ({ children, hasProse = false, bgColor = 'white', maxWidth = '5xl' }: ContainerProps) => {
  const addProse = hasProse ? globalStyles.prose : '[&>*:first-child]:-mt-0'
  const bgStyles = bgColor === 'gray' ? `bg-gray-100 ${globalSpace.paddingY} last:[&>*]:mb-0` : 'bg-white'

  return (
    <>
      <div
        className={`idc-container ${globalSpace.marginNegX} ${globalSpace.paddingX} ${childWidth[maxWidth]} ${bgStyles} ${addProse}`}
      >
        {children}
      </div>
    </>
  )
}
