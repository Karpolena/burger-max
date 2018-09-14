import React, { Component } from "react";
import PropTypes from "prop-types";


import Button from "../../../component/UI/button/Button";
import axios from "../../../axios-order";
import Spinner from "../../../component/UI/spinner/Spinner";

class ContactData extends Component {
    state = {
        name: "",
        email: "",
        address: {
            street: "",
            postalCode: ""
        },
        loading: false
    }
    orderHandler = (event) => {
        event.preventDefault();
        this.setState({loading: true});
        const order = {
            ingredients: this.props.ingredients,
            price: this.props.price,
            customer: {
                name: "Max",
                adress: {
                    street: "Teststreet",
                    zipCode: "35425",
                    country: " Germany"
                },
                email: "test@test.com",
            },
            deliveryMethod: "fastest"
        }
        axios.post("/orders.json", order)
        .then(response => {
            this.setState({loading: false});
            this.props.history.push("/");
        })
        .catch(error => {
            this.setState({loading: false});
        });
    }
    render () {
        let form = (
            <form>
                <input className="Input" type="text" name="name" placeholder="Your Name" />
                <input className="Input" type="email" name="email" placeholder="Your Mail" />
                <input className="Input" type="text" name="street" placeholder="Street" />
                <input className="Input" type="text" name="postal" placeholder="Postal Code" />
                <Button btnType="Success" clicked={this.orderHandler}>ORDER</Button>
            </form>
        );
        if (this.state.loading) {
            form = <Spinner />
        }
        return (
            <div className="ContactData">
                <h4>Enter your Contact Data</h4>
                {form}                
            </div>
        );
    }
}

ContactData.propTypes = {
    ingredients: PropTypes.array,
    totalPrice: PropTypes.number,
    history: PropTypes.object,
    price: PropTypes.number

} 

export default ContactData;