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

  const handleClick = useCallback(({ index }: ClickHandlerProps) => {
    setIndex(index);
  }, []);

  return (
    <>
      <MasonryPhotoAlbum
        photos={photos}
        onClick={handleClick}
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
