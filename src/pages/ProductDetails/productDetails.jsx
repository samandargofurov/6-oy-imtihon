import { useEffect, useState } from 'react';
import {useParams,  useNavigate} from 'react-router-dom';
function ProductDetails() {
     const [product, setProduct] = useState({});
     const {id} = useParams();
     const navigate = useNavigate();
     useEffect(() => {
          if (id) {
               fetch(`https://strapi-store-server.onrender.com/api/products/${id}`)
                    .then(res => res.json())
                    .then(data => {
                         setProduct(data.data)
                    })
                    .catch(err => {
                         console.log(err);
                    })
          } else {
               navigate("/")
          }
     }, [id])

  return (
    <div>ProductDetails</div>
  )
}

export default ProductDetails