
import Classes from './Burger.css';
import BurgerIngredient from './BurgerIngredient/BurgerIngredient';
const burger = (props) => {
    let transformedIngrediants = Object.keys(props.ingredients)
        .map(igkey => {

            return [...Array(props.ingredients[igkey])].map((_, i) => {

                return <BurgerIngredient key={igkey + i} type={igkey} />
            })
        }).reduce((arr, el) => {
            return arr.concat(el);
        }, [])
    if (transformedIngrediants.length ===0) {
        transformedIngrediants = <p>Please Add ingredient here</p>;
    }


    return (
        <div className={Classes.Burger}>

            <BurgerIngredient type='bread-top' />
            {transformedIngrediants}
            <BurgerIngredient type='bread-bottom' />


        </div>
    )

}
export default burger;