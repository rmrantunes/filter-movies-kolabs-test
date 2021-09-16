import * as S from './styles'

export type ModalProps = {
  children: React.ReactNode
  onClose?: () => void
  isOpen?: boolean
}

export default function Modal(props: ModalProps) {
  return (
    <>
      {props.isOpen && (
        <S.Wrapper>
          <S.Overlay
            onClick={props.onClose}
            aria-label="Click to close modal"
          />
          <S.Modal>{props.children}</S.Modal>
        </S.Wrapper>
      )}
    </>
  )
}
