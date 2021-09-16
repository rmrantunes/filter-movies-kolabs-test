import { useCallback } from 'react'
import * as S from './styles'

export type FilterLinkProps = {
  children: React.ReactNode
  count?: number
  isActive: boolean
  onClick: (filter: string) => void
  filter?: string | undefined
}

export default function FilterLink(props: FilterLinkProps) {
  const handleFilter = useCallback(() => {
    props.onClick(props.filter)
  }, [])

  return (
    <S.FilterButton isActive={props.isActive} onClick={handleFilter}>
      {props.children}
      {props.count !== undefined && <S.CountBadge>{props.count}</S.CountBadge>}
    </S.FilterButton>
  )
}
