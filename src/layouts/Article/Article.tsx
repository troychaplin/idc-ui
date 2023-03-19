import React from 'react'
import { globalStyles } from '../../utils/idcClasses'

export interface ArticleProps {
  children?: React.ReactNode
}

export const Article = ({ children }: ArticleProps) => {
  return <article className={`${globalStyles.prose}`}>{children}</article>
}
