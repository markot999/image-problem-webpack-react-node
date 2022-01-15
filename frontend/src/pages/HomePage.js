import { useEffect, useState } from 'react'
import axios from 'axios'

const HomePage = () => {
  const [products, setProducts] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axios.get('/api/products')
      setProducts(data)
    }
    fetchData()
  }, [])

  const list = products.map((product) => (
    <li key={product._id}>
      <img src={product.image} alt={product.url} />
      <div>
        <h2>{product.title}</h2>
        <p>{product.flavor}</p>
        <p>{product.price}</p>
        <button>View more</button>
      </div>
    </li>
  ))

  return (
    <div>
      <ul>{list}</ul>
    </div>
  )
}

export default HomePage
