import { poemList } from '../datas/poemList'
import '../styles/ShoppingList.css'
import PoemItem from './PoemItem'

function ShoppingList() {
    
    const categories = poemList.reduce(
		(accumulator, poem) =>
			accumulator.includes(poem.category) ? accumulator : accumulator.concat(poem.category),
		[]
    )

    return(
        <div>
            <h2>Catégories de poèmes</h2>
            <ul className='pw-categoryList'>
                {categories.map((cat) => (
                    <li key={cat}>{cat}</li>
                ))}
            </ul>
            <h2>Liste des poèmes</h2>
            <ul className='pw-poem-list'>
                {poemList.map(({name, id, cover, isBestSale, light, water}) => (
                    <PoemItem 
                        name={name} 
                        cover={cover} 
                        id={id} 
                        sales={isBestSale} 
                        light={light} 
                        water={water}/>
                ))}
            </ul>
        </div>
    )
}

export default ShoppingList