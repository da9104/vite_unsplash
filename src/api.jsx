import axios from 'axios'

const searchImg = async (term) => {
 const res = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
         Authorization:`${__VALUE__}`
        },
        params: {
            query: term
        }
      }) 

      return res.data.results
}

export default searchImg;
