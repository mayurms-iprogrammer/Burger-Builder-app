import React, { Component } from 'react';
import Aux from "../../hoc/Aux";
import Burger from '../../components/Burger/Burger';
import BuildControls from '../../components/Burger/BuildControlers/BuildControls';
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from '../../components/Burger/OrderSummary/OrederSummary'

const INGREDIENTPRICE = {
    salad: 0.5,
    cheese: 0.7,
    bacon: 1.2,
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
            purchasable: false,
            purchasing: false,
        }

    }
    updatePurchaseState(ingredients) {

        const sum = Object.keys(ingredients)
            .map(igkey => {
                return ingredients[igkey];
            }).reduce((sum, el) => {
                return sum + el;

            }, 0);
        this.setState({ purchasable: sum > 0 })
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
        this.updatePurchaseState(updateIngredients);
    };

    removeIngredientHandler = (type) => {
        if (!this.state.ingredients[type] ==0) {
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
            this.updatePurchaseState(updateIngredients);
        }
    };
    purchaseHandler = () => {
        this.setState({ purchasing: true });
    
    }
    
    purchaseCancelHandler=()=>{
        this.setState({purchasing: false})
    }

    purchaseContinueHandler=()=>{
        alert("You Continue!!")
    }
    render() {
        const disableInfo = {
            ...this.state.ingredients

        }
        for (let key in disableInfo) {
            disableInfo[key] = disableInfo[key] <= 0;

        }

        return (
            <Aux>
                <Modal show={this.state.purchasing}  modalClosed={this.purchaseCancelHandler}>
                    <OrderSummary 
                    price={this.state.totalPrice}
                    ingredients={this.state.ingredients} 
                    purchaseCanceled={this.purchaseCancelHandler}
                    purchaseContinued={this.purchaseContinueHandler}
                    /> 
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    ingredientRemoved={this.removeIngredientHandler}
                    ingredientAdded={this.addIngredientHandler}
                    disabled={disableInfo}
                    price={this.state.totalPrice}
                    ordered={this.purchaseHandler}
                    purchasable={this.state.purchasable}
                />

            </Aux>

        )
    }
}

export default BurgerBuilder
