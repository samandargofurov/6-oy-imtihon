import {useNavigate} from 'react-router-dom';
import './Card.css'

function Card(props) {
     const {id} = props.product;
     const {image, title, price} = props.product.attributes;
     const navigate = useNavigate();

     function handleRedirect() {
          navigate(`/product/${id}`)
     }
     
  return (
      <div className='productCard mt-5 mb-5' style={{cursor: "pointer"}} onClick={handleRedirect}>
        <div className='ProductCard'>
          <img height={300} style={{width: "250px"}} src={image} className='card-img-top' alt='' />
          <div className='card-info'>
            <h5 className='card-title'>{title}</h5>
            <h6 className='card-price'>${price}</h6>
          </div>
        </div>
      </div>
  );
}

export default Card;