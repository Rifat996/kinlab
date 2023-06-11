import React from 'react'
import Container from 'react-bootstrap/esm/Container';
import ImageGallery from "react-image-grid-gallery";


export default function Gal() {
  const imagesArray = [
    {
      alt: "Image1's alt text",
      caption: "Image1's description",
      src: "https://placehold.co/600x400",
    },
    {
      alt: "Image2's alt text",
      caption: "Image2's description",
      src: "https://placehold.co/600x400",
    },
    {
      alt: "Image3's alt text",
      caption: "Image3's description",
      src: "https://placehold.co/600x400",
    },
    {
      alt: "Image3's alt text",
      caption: "Image3's description",
      src: "https://placehold.co/600x400",
    },
    {
      alt: "Image3's alt text",
      caption: "Image3's description",
      src: "https://placehold.co/600x400",
    },
    {
      alt: "Image3's alt text",
      caption: "Image3's description",
      src: "https://placehold.co/600x400",
    },
    {
      alt: "Image3's alt text",
      caption: "Image3's description",
      src: "https://placehold.co/600x400",
    },
  ];


  return (
    <Container>
      <ImageGallery imgArray={imagesArray} columnWidth={290} gapSize={22} />
    </Container>
  )
}
