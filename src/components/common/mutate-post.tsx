import {
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  ModalBody,
  ModalFooter,
  Stack,
  StackDivider,
  Textarea,
} from '@chakra-ui/react'
import { useState } from 'react'

export default function MutatePost({
  title: _title = '',
  content: _content = '',
  mutate,
}: {
  title?: string
  content?: string
  mutate: (post: { title: string; content: string }) => void
}) {
  const [title, setTitle] = useState(_title)
  const [content, setContent] = useState(_content)
  const [isInvalid, setIsInValid] = useState(false)

  const onMutate = () => {
    if (!title || title.trim() === '') return setIsInValid(true)
    if (!content || content.trim() === '') return setIsInValid(true)

    mutate({ title, content })
  }

  return (
    <>
      <ModalBody>
        <Stack>
          <FormControl isRequired>
            <FormLabel>제목</FormLabel>
            <Input
              size={'lg'}
              fontSize={'lg'}
              value={title}
              onChange={(event) => setTitle(event.target.value)}
            />
          </FormControl>
          <StackDivider />
          <FormControl isRequired>
            <FormLabel>내용</FormLabel>
            <Textarea
              value={content}
              onChange={(event) => setContent(event.target.value)}
            />
          </FormControl>
          <FormControl isInvalid={isInvalid}>
            <FormErrorMessage>제목 or 내용을 작성해주세요.</FormErrorMessage>
          </FormControl>
        </Stack>
      </ModalBody>

      <ModalFooter>
        <Button colorScheme='blue' onClick={onMutate}>
          완료
        </Button>
      </ModalFooter>
    </>
  )
}
