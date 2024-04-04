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
    <>
        <div className="card">
          <div className="card" style={{cursor: "pointer"}} onClick={handleRedirect}>
            <img height={200} style={{width: "250px"}} src={image} alt="" />
            <div className="homeCardTitle">{title}</div>
            <div className="homeCardPrice">{price}</div>
          </div>
        </div>
    </>
  )
}

export default Card