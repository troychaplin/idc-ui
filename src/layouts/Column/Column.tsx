import React from 'react'
import { gridColumns } from '../../utils/idcClasses'

export interface ColumnProps {
  children: React.ReactNode
  cols?: '2' | '3' | '4' | '1/3' | '2/3'
}

const styles = {
  base: `grid gap-8 md:gap-12`,
}

export const Column = ({ children, cols = '2' }: ColumnProps) => {
  return <div className={`idc-column ${styles.base} ${gridColumns[cols]}`}>{children}</div>
}
