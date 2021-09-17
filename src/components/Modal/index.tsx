import { useKeydown } from 'hooks/useKeydown'
import * as S from './styles'

export type ModalProps = {
  children: React.ReactNode
  onClose?: () => void
}

export default function Modal(props: ModalProps) {
  useKeydown({
    Escape: props.onClose
  })

  return (
    <S.Wrapper>
      <S.Overlay onClick={props.onClose} aria-label="Click to close modal" />
      <S.Modal>{props.children}</S.Modal>
    </S.Wrapper>
  )
}
