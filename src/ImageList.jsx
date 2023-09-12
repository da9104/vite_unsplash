import ImageShow from './ImageShow'

export default function ImageList({ images }) {
    const renderedImages = images.map((image) => {
        return <ImageShow key={image.id} image={image} />
    })
    const totalImgNum = images.length
    return (
    <div>
     {images.length > 1 ? `Total ${totalImgNum} images founded.` : ""}
      {renderedImages}
    </div>
    )}