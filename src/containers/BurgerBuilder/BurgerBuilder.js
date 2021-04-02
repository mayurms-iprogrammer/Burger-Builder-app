import React, { Component } from 'react';
import Aux from "../../hoc/Aux";
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControlers/BuildControls';
const INGREDIENTPRICE = {
    salad: 0.5,
    cheese: 0.9,
    bacon: 1,
    meat: 1.4
}
export class BurgerBuilder extends Component {
    constructor(props) {
        super(props)

        this.state = {
            ingredients: {
                salad: 0,
                bacon: 0,
                cheese: 0,
                meat: 0,
            },
            totalPrice: 4,
        }

    }
    addIngredientHandler = (type) => {
        
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount + 1;
        const updateIngredients = {
            ...this.state.ingredients
        };
        updateIngredients[type] = updatedCount;
        const priceAddition = INGREDIENTPRICE[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice + priceAddition;
        this.setState({ totalPrice: newPrice, ingredients: updateIngredients });
    
    };

    removeIngredientHandler = (type) => {
    if(!this.state.ingredients[type]==0){
        const oldCount = this.state.ingredients[type];
        const updatedCount = oldCount - 1;
        const updateIngredients = {
            ...this.state.ingredients
        };
        updateIngredients[type] = updatedCount;
        const priceDeduction = INGREDIENTPRICE[type];
        const oldPrice = this.state.totalPrice;
        const newPrice = oldPrice - priceDeduction;
        this.setState({ totalPrice: newPrice, ingredients: updateIngredients });
    }
    };


    render() {
        disableInfo={
            
        }

        return (
            <Aux>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    ingredientRemoved={this.removeIngredientHandler}
                    ingredientAdded={this.addIngredientHandler}
                />

            </Aux>

        )
    }
}

export default BurgerBuilder
