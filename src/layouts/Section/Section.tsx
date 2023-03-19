import React from 'react'
import { globalSpace, globalStyles, childWidth } from '../../utils/idcClasses'

export interface SectionProps {
  children?: React.ReactNode
  maxWidth?: 'full' | '5xl' | '7xl'
  hasProse?: boolean
}

export const Section = ({ children, maxWidth = '5xl', hasProse }: SectionProps) => {
  const addProse = hasProse ? globalStyles.prose : ''

  return (
    <section className={`idc-section ${globalSpace.padding} ${childWidth[maxWidth]} ${addProse}`}>{children}</section>
  )
}
