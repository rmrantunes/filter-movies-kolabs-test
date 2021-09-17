import { InformationCircleIcon } from '@heroicons/react/outline'
import { useSearch } from 'hooks/useSearch'
import FilterButton from 'components/FilterButton'
import * as S from './styles'

export default function Aside() {
  const { handleFilter, filter, mediaTypesCount, history, search } = useSearch()

  return (
    <S.Aside>
      <S.AsideCard>
        <S.AsideCardHeader>
          <h2>Resultado da Busca</h2>
        </S.AsideCardHeader>
        <S.AsideNav>
          <FilterButton
            onClick={handleFilter}
            filter="all"
            isActive={filter === 'all'}
            count={mediaTypesCount.all}
          >
            Tudo
          </FilterButton>
          <FilterButton
            onClick={handleFilter}
            filter="movie"
            isActive={filter === 'movie'}
            count={mediaTypesCount.movie}
          >
            Filmes
          </FilterButton>
          <FilterButton
            onClick={handleFilter}
            filter="tv"
            isActive={filter === 'tv'}
            count={mediaTypesCount.tv}
          >
            Séries
          </FilterButton>
          <FilterButton
            onClick={handleFilter}
            filter="person"
            isActive={filter === 'person'}
            count={mediaTypesCount.person}
          >
            Pessoas
          </FilterButton>
        </S.AsideNav>
      </S.AsideCard>
      {!!history.length && (
        <S.AsideCard>
          <S.AsideCardHeader>
            <h2>Histórico de Busca</h2>
          </S.AsideCardHeader>
          <S.AsideNav>
            {history.map((searchText) => (
              <FilterButton
                isActive={false}
                key={searchText}
                onClick={() => search(searchText)}
              >
                {searchText}
              </FilterButton>
            ))}
          </S.AsideNav>
        </S.AsideCard>
      )}
      <S.YearShortcutTip>
        <InformationCircleIcon />
        Dica: você pode usar o filtro 'y:' para limitar seus resultados por ano.
        Exemplo: 'tropa de elite y:2007'
      </S.YearShortcutTip>
    </S.Aside>
  )
}
