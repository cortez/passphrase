import { useCallback, useEffect, useState } from 'react'

const useClickToCopy = (text: string, notifyTimeout = 2000) => {
  const [copyStatus, setCopyStatus] = useState<any>(null)

  const copyToClipboardFallback = (textAreaVal: string) => {
    const textArea = document.createElement('textarea')
    textArea.value = textAreaVal
    document.body.appendChild(textArea)
    textArea.focus()
    textArea.select()
    try {
      document.execCommand('copy')
      setCopyStatus(true)
    } catch (err) {
      setCopyStatus(false)
    }
    document.body.removeChild(textArea)
  }

  const copy = useCallback(() => {
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(
        () => setCopyStatus(true),
        () => setCopyStatus(false)
      )
    } else {
      copyToClipboardFallback(text)
    }
  }, [text])

  useEffect(() => {
    if (copyStatus === false) {
      return
    }

    const timeoutId = setTimeout(() => setCopyStatus(null), notifyTimeout)

    return () => clearTimeout(timeoutId)
  }, [copyStatus, notifyTimeout])

  return [copyStatus, copy]
}

export default useClickToCopy
