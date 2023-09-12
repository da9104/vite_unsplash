export default function ImageShow({ image }) {
    return (
    <>
    <ul style={{listStyle: 'none'}}>
    <li> {image.color}</li>
    <img src={image.urls.thumb} alt={image.alt_description} />
    <li> {image.alt_description} </li>
    </ul>
    </>    
)}