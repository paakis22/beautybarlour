import React, { useState } from 'react'
import Gallery, { images } from '../components/Gallery'

export default function GalleryPage(){
    const [current, setCurrent] = useState(null)

    const open = (index) => setCurrent(index)
    const close = () => setCurrent(null)
    const prev = () => setCurrent((c) => (c === 0 ? images.length - 1 : c - 1))
    const next = () => setCurrent((c) => (c === images.length - 1 ? 0 : c + 1))

    return (
        <div>
            <Gallery onImageClick={open} />

            {/* Lightbox modal */}
            {current !== null && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4">
                    <div className="relative max-w-4xl w-full">
                        <button onClick={close} className="absolute top-2 right-2 text-white bg-black/40 rounded-full p-2">✕</button>
                        <button onClick={prev} className="absolute left-2 top-1/2 -translate-y-1/2 text-white bg-black/40 rounded-full p-2">‹</button>
                        <button onClick={next} className="absolute right-2 top-1/2 -translate-y-1/2 text-white bg-black/40 rounded-full p-2">›</button>

                        <img src={images[current]} alt={`Gallery ${current + 1}`} className="w-full h-[70vh] object-contain rounded-lg shadow-lg bg-white" />
                    </div>
                </div>
            )}
        </div>
    )
}
