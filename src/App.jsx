import { useState } from 'react'
import './App.css'
import searchImg from './api'
import SearchBar from './SearchBar'
import ImageList from './ImageList'

function App() {
   const [images, setImages] = useState([])
   const handleSubmit = async (term) => {
     const result = await searchImg(term)
    // console.log('Do a search with: ', result.data)
     setImages(result)
   }

  return (
    <>
      <h1>Vite + React + Unsplash</h1>
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images} />
    </>
  )
}

export default App
