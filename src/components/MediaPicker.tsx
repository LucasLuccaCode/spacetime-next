'use client'

import { ChangeEvent, useState } from 'react'

export function MediaPicker() {
  const [preview, setPreview] = useState<string | null>(null)

  const handleMediaSelected = (event: ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target

    if (!files) {
      return null
    }

    const previewURL = URL.createObjectURL(files[0])

    setPreview(previewURL)
  }

  return (
    <>
      <input
        onChange={handleMediaSelected}
        type="file"
        name="coverUrl"
        id="coverUrl"
        className="invisible h-0 w-0"
      />

      {preview && (
        // eslint-disable-next-line
        <img
          src={preview}
          alt=""
          className="rounded-object aspect-video w-full object-cover"
        />
      )}
    </>
  )
}
