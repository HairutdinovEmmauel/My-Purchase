const initialState = {
    fructs: [],
    loading: false,
    error: false,
    cartElements: []
};

const updateCartElements = (cartElements, { newElement, elementIndex }) => {

    if(newElement.count === 0) {
        return [
            ...cartElements.slice(0, elementIndex),
            ...cartElements.slice(elementIndex + 1 )
        ];
    }
    
    if (elementIndex === -1) {
        return [
            ...cartElements,
            newElement
        ];
    };

    return [
        ...cartElements.slice(0, elementIndex),
        newElement,
        ...cartElements.slice(elementIndex + 1 )
    ];
};

const updateCartElement =  (elementId, state, action) => {

    const { fructs, cartElements } = state;

    const fruct = fructs.find((fruct) => fruct.id === elementId);
    const elementIndex = cartElements.findIndex(({id}) => id === elementId);
    const element = cartElements[elementIndex];

    const {
        id, 
        title,
        infoDiscount,
        price,
    } = fruct;

    


    if(action === 'DECREASE_FRUCT_COUNT') {

        if(infoDiscount.discount && element.count % infoDiscount.count === 0) {
            return{
                newElement: {
                    id,
                    title,
                    infoDiscount,
                    count: element.count - 1,
                    total: element.total - infoDiscount.price
                },
                elementIndex
            } 
        }else {
            return {
                newElement: {
                    id,
                    title,
                    infoDiscount,
                    count: element.count - 1,
                    total: element.total - price
                },
                elementIndex
            }
        }
    }

    if(action === 'FRUCT_ADDED_TO_CART' || 'INCREASE_FRUCT_COUNT' ) {

        if(elementIndex === -1) {
            return {
                newElement: {
                    id,
                    title,
                    infoDiscount,
                    count: 1,
                    total: price
                },
                elementIndex
            }
        }else if(infoDiscount.discount && element.count % infoDiscount.count === 2) {
            console.log(element.count % infoDiscount.count)

            return{
                newElement: {
                    id,
                    title,
                    infoDiscount,
                    count: element.count + 1,
                    total: element.total + infoDiscount.price
                },
                elementIndex
            }
        }else {
            return{
                newElement: {
                    id,
                    title,
                    infoDiscount,
                    count: element.count + 1,
                    total: element.total + price
                },
                elementIndex
            }
        }
    
    }
};

const reducers = (state = initialState, action) => {

    switch(action.type) {
        case 'FETCH_FRUCTS_REQUREST': 
            return {
                ...state,
                fructs: [],
                loading: true,
                error: null
            };
        case 'FETCH_FRUCTS_SUCCESS': 
            return {
                ...state,
                fructs: action.payload,
                loading: false,
                error: null
            };
        case 'FETCH_FRUCTS_FAILURE': 
            return {
                ...state,
                fructs: [],
                loading: false,
                error: action.payload
            };
        case 'FRUCT_ADDED_TO_CART': 

            return {
                ...state,
                cartElements: updateCartElements( state.cartElements, updateCartElement(action.payload, state, action.type) )
            }
        case 'DECREASE_FRUCT_COUNT': 


            return {
                ...state,
                cartElements: updateCartElements( state.cartElements, updateCartElement(action.payload, state, action.type) )
            }
        case 'INCREASE_FRUCT_COUNT': 

            return {
                ...state,
                cartElements: updateCartElements( state.cartElements, updateCartElement(action.payload, state, action.type) )
            }
        case 'DELETE_FRUCT' :

            const { cartElements } = state;

            const id  = cartElements.findIndex(({ id }) => id === action.payload );

            return {
                ...state,
                cartElements: [
                    ...cartElements.slice(0, id),
                    ...cartElements.slice(id + 1)
                ]
            };

        default: 
            return state;
    };
};

export default reducers;