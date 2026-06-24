import logo from './images.jpg'
import './Card.css'
function Card() {
      return(
            <div className="card">
                  <h1>panda</h1>
                  <img className='img' src={logo} alt="panda" />
                  <button className='btn'>click</button>
            </div>
      )

            
}
export default Card