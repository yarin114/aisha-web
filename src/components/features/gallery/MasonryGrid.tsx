"use client";

import { useState, useCallback } from "react";
import { MasonryPhotoAlbum } from "react-photo-album";
import type { Photo, ClickHandlerProps } from "react-photo-album";
import "react-photo-album/masonry.css";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import { GALLERY_IMAGES } from "@/config/gallery";

const photos: Photo[] = GALLERY_IMAGES.map((img) => ({
  src: img.src,
  width: img.width,
  height: img.height,
  alt: img.alt,
}));

export default function MasonryGrid() {
  const [index, setIndex] = useState(-1);

  const handleClick = useCallback(({ index: i }: ClickHandlerProps) => {
    setIndex(i);
  }, []);

  return (
    <>
      {/* onClick causes the library to wrap each photo in a <button> automatically.
          render.button lets us inject the correct aria-label onto that button. */}
      <MasonryPhotoAlbum
        photos={photos}
        onClick={handleClick}
        render={{
          button: ({ children, ...rest }, context) => (
            <button
              {...rest}
              aria-label={`פתח תמונה: ${"photo" in context ? (context as { photo: Photo }).photo.alt : ""}`}
              className="focus-visible:outline-2 focus-visible:outline-burgundy focus-visible:outline-offset-2 rounded-sm"
            >
              {children}
            </button>
          ),
        }}
        columns={(containerWidth) => {
          if (containerWidth < 500) return 2;
          if (containerWidth < 900) return 3;
          return 4;
        }}
        spacing={12}
      />

      <Lightbox
        index={index}
        slides={photos}
        open={index >= 0}
        close={() => setIndex(-1)}
      />
    </>
  );
}
