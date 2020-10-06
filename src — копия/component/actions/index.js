export const fructsLoaded = ( newFructs ) => {
    return {
        type: 'FETCH_FRUCTS_SUCCESS',
        payload: newFructs
    }
}

export const fructsRequresd = () => {
    return {
        type: 'FETCH_FRUCTS_REQUREST'
    }
}

export const fructsError = (error) => {
    return {
        type: 'FETCH_FRUCTS_FAILURE',
        payload: error
    }
}

export const onAddToCart = ( fructId ) => {
    return {
        type: 'FRUCT_ADDED_TO_CART',
        payload: fructId
    }
}

export const onIncrease = ( fructId ) => {
    return {
        type: 'INCREASE_FRUCT_COUNT',
        payload: fructId
    }
}
export const onDecrease = ( fructId ) => {
    return {
        type: 'DECREASE_FRUCT_COUNT',
        payload: fructId
    }
}

export const onDelete = ( fructId ) => {
    return {
        type: 'DELETE_FRUCT',
        payload: fructId
    }
}