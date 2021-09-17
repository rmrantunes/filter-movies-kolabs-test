import { useCallback, useState } from 'react'
import { useSearch } from 'hooks/useSearch'
import { useDisclosure } from 'hooks/useDisclosure'

import Card from 'components/Card'
import Modal from 'components/Modal'

import { mapResultToCardProps } from 'utils/mapResultToCardProps'
import { DetailedResult } from 'components/DetailedResult'

export function Results() {
  const { results } = useSearch()
  const { isOpen, open, close } = useDisclosure(false)
  const [selectedResultIndex, setSelectedResultIndex] = useState<number>(null)

  const openResultDetailsModal = (index: number) => {
    setSelectedResultIndex(index)
    open()
  }

  return (
    <>
      <div>
        {results?.map((result, index) => (
          <Card
            key={result.id}
            onClick={() => openResultDetailsModal(index)}
            {...mapResultToCardProps(result)}
          />
        ))}
      </div>
      {isOpen && (
        <Modal onClose={close}>
          {selectedResultIndex !== null && (
            <DetailedResult result={results[selectedResultIndex]} />
          )}
        </Modal>
      )}
    </>
  )
}
