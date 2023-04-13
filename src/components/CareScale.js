import water from '../assets/water.svg'
import light from '../assets/sun.svg'

function CareScale({scaleValue, careType}) {
    const range = [1, 2, 3]

    const scaleType = careType === 'light' ? <img src={light} alt='light' /> : <img src={water} alt='water' />

    return (
        <div>
            {range.map((rangeElement) => scaleValue >= rangeElement ? <span key={rangeElement.toString()}>{scaleType}</span> : null
            )}
        </div>)
}

export default CareScale