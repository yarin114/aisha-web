export interface GalleryImage {
  src: string;
  alt: string;
  width: number;
  height: number;
}

export const GALLERY_IMAGES: GalleryImage[] = [
  { src: '/p1.jpeg', alt: 'טקס חינה', width: 1066, height: 1600 },
  { src: '/p2.jpeg', alt: 'עיצוב אירוע', width: 1066, height: 1600 },
  { src: '/p3.jpeg', alt: 'שולחן ערוך', width: 1066, height: 1600 },
  { src: '/p4.jpeg', alt: 'הפרשת חלה', width: 1200, height: 1600 },
];
