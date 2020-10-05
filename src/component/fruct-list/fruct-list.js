import React, { Component } from 'react';
import './fruct-list.css';
import { compose } from 'redux';
import { connect } from 'react-redux';

import { withFructstoreService } from '../hoc'
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import FructListElement from '../fruct-list-element';

import {
    fructsRequresd,
    fructsLoaded,
    fructsError,
    onAddToCart
} from '../actions';

const FructList = ({fructs, onAddToCart }) => {
    
    const fructElement = fructs.map((fruct) => {
            const { id, title} = fruct;

            return (
                <FructListElement
                    key={id}
                    onAddToCart={onAddToCart}
                    { ...fruct }>
                    {title}
                </FructListElement> 
            )
        })
    return (
        <ul className="fruct-list">
            {fructElement}
        </ul>
    );
};

class FructListContainer extends Component{

    componentDidMount() {
        this.props.fetchFructs();
    }

    render() {

        const { fructs, loading, error, onAddToCart } = this.props

        if(loading) {
            return <Spinner />;
        }
        if(error) {
            return <ErrorIndicator />;
        }

        return ( 
        
            <FructList 
                className="fruct-list"
                fructs={fructs} 
                onAddToCart={onAddToCart}/>
        );  
    }
};

const mapStateToProps = ({ fructs, loading, error}) => {
    return { fructs, loading, error }
};

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        fetchFructs: () => {
            const { fructstoreService } = ownProps;

            dispatch(fructsRequresd());

            fructstoreService.getFructs()
                .then((data) => {
                    dispatch(fructsLoaded(data))
                })
                .catch((err) => dispatch(fructsError(err)));
        },
        onAddToCart: (id) => dispatch(onAddToCart(id)) 
    }
}

export default compose(
    withFructstoreService(),
    connect(mapStateToProps, mapDispatchToProps)
    )(FructListContainer);