import { useState } from 'react'

export function useToast() {
  const [toasts, setToasts] = useState<any[]>([])

  const toast = (props: any) => {
    const id = Date.now()
    const newToast = { ...props, id }
    setToasts((prev) => [...prev, newToast])
    
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id))
    }, props.duration || 5000)
  }

  return { toast, toasts }
}

export function Toaster() {
  return null
}
