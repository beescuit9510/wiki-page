import { useEffect } from 'react'
import useShowToast from './useShowToast'

export default function useSuccessToast(isSuccess: boolean, message: string) {
  const toast = useShowToast()

  useEffect(() => {
    isSuccess &&
      toast({
        title: message,
        status: 'success',
      })
  }, [isSuccess])
}
