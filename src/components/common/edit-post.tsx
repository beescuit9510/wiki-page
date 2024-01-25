import {
  Button,
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
} from '@chakra-ui/react'
import MutatePost from './mutate-post'
import useEditPost from '../../hooks/mutations/useEditPost'
import useSuccessToast from '../../hooks/useSuccessToast'

export default function EditPost({
  id,
  title,
  content,
}: {
  id: string
  title: string
  content: string
}) {
  const { onOpen, isOpen, onClose } = useDisclosure()
  const { mutate, isSuccess } = useEditPost()

  useSuccessToast(isSuccess, '성공적으로 수정되었습니다.')

  return (
    <>
      <Button onClick={onOpen}>수정하기</Button>

      <Modal isCentered={true} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalHeader>Post</ModalHeader>
          <MutatePost
            title={title}
            content={content}
            mutate={(post) => {
              mutate({ id, ...post })
              onClose()
            }}
          />
        </ModalContent>
      </Modal>
    </>
  )
}
