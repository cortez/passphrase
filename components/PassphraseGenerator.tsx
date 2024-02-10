'use client'

import { useState } from 'react'
import { generate } from 'random-words'
import React from 'react'
import useClickToCopy from '@/utils/copy'

export default function PassphraseGenerator() {
  const [passphrase, setPassphrase] = useState(generatePassphrase())
  const [copyStatus, copy] = useClickToCopy(passphrase)

  function generatePassphrase() {
    return generate({ exactly: 4, join: '-' })
  }

  return (
    <section className='flex flex-col items-center justify-center h-[100svh] bg-background p-5 text-sm sm:text-base'>
      <div className='flex flex-col gap-2.5 w-full sm:w-[500px] p-5 sm:p-10 rounded-lg border border-border'>
        <input
          type='text'
          className='font-mono px-3 h-11 w-full text-center rounded border border-border bg-background bg-gradient-to-tr from-accent to-secondary bg-clip-text text-transparent focus:outline-none'
          value={passphrase}
          readOnly
        />

        <div className='grid grid-cols-2 gap-2.5 w-full'>
          <button className='group' onClick={copy} type='button'>
            Copy
            <svg
              className={`absolute right-3.5 transition-all text-secondary pointer-events-none ${
                copyStatus ? 'scale-100 opacity-100' : 'scale-50 opacity-0'
              }`}
              width='14'
              height='14'
              viewBox='0 -4 24 24'
              id='meteor-icon-kit__solid-checkmark'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fill-rule='evenodd'
                clip-rule='evenodd'
                d='M3.06066 6.4393C2.47487 5.85355 1.52513 5.85355 0.93934 6.4393C0.353553 7.0251 0.353553 7.9749 0.93934 8.5607L7.93934 15.5607C8.52513 16.1464 9.47487 16.1464 10.0607 15.5607L23.0607 2.56066C23.6464 1.97487 23.6464 1.02513 23.0607 0.43934C22.4749 -0.14645 21.5251 -0.14645 20.9393 0.43934L9 12.3787L3.06066 6.4393z'
                fill='currentColor'
              />
            </svg>
          </button>
          <button
            className='group'
            onClick={() => setPassphrase(generatePassphrase())}
            type='button'
          >
            Generate
          </button>
        </div>
      </div>
    </section>
  )
}
