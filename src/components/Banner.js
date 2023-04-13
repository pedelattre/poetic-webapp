import Header from './Header'
import Cart from './Cart'
import Description from './Description'
import ShoppingList from './ShoppingList'
import Recommendation from './Recommendation'

function Banner() {
    return (<div>
        <Header />
        <Recommendation />
        <ShoppingList />
        <Description />
    </div>)
}

export default Banner