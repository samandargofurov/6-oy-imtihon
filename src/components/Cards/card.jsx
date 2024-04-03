import card1 from '../../assets/card1.webp'
import card2 from '../../assets/card2.jpeg'
import card3 from '../../assets/card3.jpeg'
import './card.css'

function Card() {
  return (
    <>
      <div className="pdc">
        <div className="pdct">
          <img className='lamp' src={card1} alt="" />

          <div className="pct">Avant-Garde Lamp</div>
          <div className="pcp">$179.99</div>
        </div>
        <div className="pdct">
          <img className='table' src={card2} alt="" />
        
          <div className="pct">Coffee Table</div>
          <div className="pcp">$179.99</div>
        </div>
        <div className="pdct">
          <img className='bed' src={card3} alt="" />
        
          <div className="pct">Comfy Bed</div>
          <div className="pcp">$129.99</div>
        </div>
      </div>
    </>
  )
}

export default Card