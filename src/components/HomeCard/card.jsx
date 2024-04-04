import {useNavigate} from 'react-router-dom';
import './card.css'

function Card(props) {
  const {id} = props.product;
     const {image, title, price} = props.product.attributes;
     const navigate = useNavigate();

     function handleRedirect() {
          navigate(`/product/${id}`)
     }

  return (
        <div className="HomeCard " style={{cursor: "pointer"}} onClick={handleRedirect}>
          <div className='CardDetails'>
            <img className='HomeCardimage' height={300} style={{width: "280px"}} src={image} alt='' />
            <div className='card-bodyy text-center'>
              <h5 className='card-title mt-4 mb-3'>{title}</h5>
              <h6 className='card-price'>${price}</h6>
            </div>
          </div>
        </div>
  )
}

export default Card