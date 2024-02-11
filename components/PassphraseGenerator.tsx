'use client'

import { useState } from 'react'
import { generate } from 'random-words'
import React from 'react'
import useClickToCopy from '@/utils/copy'

export default function PassphraseGenerator() {
  const [passphrase, setPassphrase] = useState(generatePassphrase())
  const [copyStatus, copy] = useClickToCopy(passphrase)

  function generatePassphrase(count = 3) {
    return generate({ exactly: count, join: '-' })
  }

  return (
    <section className='flex flex-col items-center justify-center h-[100svh] bg-background p-5 text-sm sm:text-base'>
      <div className='flex flex-col gap-2.5 w-full sm:w-[500px] p-5 sm:p-10 rounded-lg border-[1.5px] border-border'>
        <input
          type='text'
          className='font-mono px-3 h-11 w-full text-center rounded border-[1.5px] border-border bg-background text-primary focus:outline-none'
          value={passphrase}
          readOnly
        />

        <div className='grid grid-cols-3 gap-2.5 w-full'>
          <button
            className='group'
            onClick={() => setPassphrase(generatePassphrase(3))}
            type='button'
          >
            3 words
          </button>
          <button
            className='group'
            onClick={() => setPassphrase(generatePassphrase(4))}
            type='button'
          >
            4 words
          </button>
          <button
            className={`group ${copyStatus ? 'border-green' : ''}`}
            onClick={copy}
            type='button'
          >
            Copy
          </button>
        </div>
      </div>
    </section>
  )
}
