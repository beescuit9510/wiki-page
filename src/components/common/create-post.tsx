import {
  Modal,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Button,
} from '@chakra-ui/react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import useCreatePost from '../../hooks/mutations/useCreatePost'
import MutatePost from './mutate-post'
import useSuccessToast from '../../hooks/useSuccessToast'

export default function CreatePost() {
  const { onOpen, isOpen, onClose } = useDisclosure()
  const { mutate, isSuccess, data } = useCreatePost()

  useSuccessToast(isSuccess, '성공적으로 추가되었습니다.')

  const navigate = useNavigate()

  useEffect(() => {
    isSuccess && navigate(`/posts/${data.id}`)
  }, [isSuccess])

  return (
    <>
      <Button onClick={onOpen}>추가하기</Button>

      <Modal isCentered={true} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalHeader>추가하기</ModalHeader>
          <MutatePost
            mutate={(post) => {
              mutate(post)
              onClose()
            }}
          />
        </ModalContent>
      </Modal>
    </>
  )
}
