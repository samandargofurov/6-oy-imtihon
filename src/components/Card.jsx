import {useNavigate} from 'react-router-dom';
function Card(props) {
     const {id} = props.product;
     const {image, title, price} = props.product.attributes;
     const navigate = useNavigate();

     function handleRedirect() {
          navigate(`/product/${id}`)
     }
     
  return (
    <div className='productCard' style={{cursor: "pointer"}} onClick={handleRedirect}>
      <div className='Card'>
        <img height={200} style={{width: "300px"}} src={image} className='card-img-top' alt='' />
        <div className='card-body text-center'>
          <h5 className='card-title'>{title}</h5>
          <h6 className='card-title'>{price}</h6>
        </div>
      </div>
    </div>
  );
}

export default Card;