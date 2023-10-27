import React, { useCallback } from 'react'

interface ModalProps{
  isOpen?: boolean;
  onClose: () => void;
  onSubmit: () => void;
  title?: string;
  body?: React.ReactElement;
  footer?: React.ReactElement;
  actionLabel: string;
  disabled?: boolean;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  title,
  body,
  footer,
  actionLabel,
  disabled
}) => {
  const handleClose = useCallback(() => {
    if (disabled) {
      return;
    }
  }, [disabled, onClose])

  return (
    <div></div>
  )
}

export default Modal