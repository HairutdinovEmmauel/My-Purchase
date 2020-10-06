import React from 'react';
import { connect } from 'react-redux';
import './shopping-cart-table.css';
import {
    onDelete,
    onIncrease,
    onDecrease
} from '../actions'

const ShoppingCartTable = ({ elements, total, onIncrease, onDecrease, onDelete }) => {

    const renderRow = (element, idx) => {
        const { id, title, count, total } = element;

        return (
            <tr key={id}>  
                <td>{idx + 1}</td>
                <td>{title}</td>
                <td>{count}</td>
                <td>{total}$</td>
                <td>
                    <button
                        onClick={() => onDelete(id)}
                        className="btn btn-outline-danger btn-sm float-right">
                        <i className="fa fa-trash-o" />
                    </button>
                    <button
                        onClick={() => onIncrease(id)}
                        className="btn btn-outline-success btn-sm float-right">
                        <i className="fa fa-plus-circle" />
                    </button>
                    <button
                        onClick={() => onDecrease(id)}
                        className="btn btn-outline-warning btn-sm float-right">
                        <i className="fa fa-minus-circle" />
                    </button>
                </td>
            </tr>
        );
    }

    return (
        <div className="shopping-cart-table">
            <h2>Your Order</h2>
            <table className="table">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Product</th>
                        <th>kilogram</th>
                        <th>Price</th>
                        <th>Action</th>
                    </tr>
                    
                </thead>
                <tbody>
                    {
                        elements.map(renderRow)
                    }
                </tbody>
            </table>    
            {/* <div className="total">
                Total: ${total}
            </div> */}
        </div>
    );
}

const mapStateToProps = ( { cartElements, orderTotal } ) => {
    return { 
        elements: cartElements, 
        total: orderTotal 
    } 
}

const mapDispatchToProps = (dispatch) => {
    return {
        onDelete: (id) => dispatch(onDelete(id)),
        onDecrease: (id) => dispatch(onDecrease(id)),
        onIncrease:(id) => dispatch(onIncrease(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);
