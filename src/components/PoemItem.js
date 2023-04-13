import CareScale from './CareScale'
import '../styles/PoemItem.css'

function PoemItem({ name, cover, id, light, water, sales }){

    return (
            <li key={id} className='pw-poem-item'> 
                <img className='pw-poem-item-cover' src={cover} alt={`${name} cover`} />
                {name}
                {sales && <div className='pw-sales'>Best sale</div>} 
                <div>
                    <CareScale careType='water' scaleValue={water}/>
                    <CareScale careType='light' scaleValue={light}/>
                </div>
            </li>
    )
}

export default PoemItem