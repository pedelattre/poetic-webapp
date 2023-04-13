import '../styles/Cart.css'

function Cart() {
    const price1 = "10"
    const price2 = "100"
    const price3 = "1000"
    return (<div className='pw-cart'>
        <h2>Liste des poèmes</h2>
        <ul className='pw-poemList'>
            <li>Rosa fâchée. Victor Hugo. Prix = { price1 }€</li>
            <li>Il n'y a pas d'amour heureux. Louis Aragon. Prix = { price2 }€</li>
            <li>Quand vous serez bien vieille. Pierre de Ronsard. Prix = { price3 }€</li>
        </ul>
    </div>)
}

export default Cart