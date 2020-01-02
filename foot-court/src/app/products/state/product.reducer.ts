import { Product } from '../product';

import * as fromRoot from '../../state/app.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ProductActions, ProductActionTypes } from './product.actions';

export interface State extends fromRoot.State {
    products: ProductState;
}

export interface ProductState {
    showProductCode: boolean;
    currentProduct: Product;
    products: Product[];
    error: string;
}

const initialState: ProductState = {
    showProductCode: true,
    currentProduct: null,
    products: [],
    error: ''
};

// we do not export it because we want to use it in this reducer only
const getProductFeatureState = createFeatureSelector<ProductState>('products');

// we want our general selectors to be available everywhere so we export it
export const getShowProductCode = createSelector(
    getProductFeatureState,
    state => state.showProductCode
);

export const getCurrentProduct = createSelector(
    getProductFeatureState,
    state => state.currentProduct
);

export const getProducts = createSelector(
    getProductFeatureState,
    state => state.products
);

export const getError = createSelector(
    getProductFeatureState,
    state => state.error
)

export function reducer(state = initialState, action: ProductActions): ProductState {
    switch (action.type) {

        case ProductActionTypes.ToggleProductCode:
            console.log('existing state: ' + JSON.stringify(state));

            return {
                ...state,
                showProductCode: action.payload
            };

        case ProductActionTypes.SetCurrentProduct:
            return {
                ...state,
                // we are passing a reference to our current product into the store; that means if we update a property of the object in our component 
                // we mutate the product in the store as well. to prevent this we make a copy of the object here using the spread operator
                currentProduct: {...action.payload}
            };

        case ProductActionTypes.ClearCurrentProduct:
            return {
                ...state,
                currentProduct: null
            };

        case ProductActionTypes.InitializeCurrentProduct:
            return {
                ...state,
                currentProduct: {
                    id: 0,
                    productName: '',
                    productCode: '',
                    description: '',
                    starRating: 0
                }
            };

        case ProductActionTypes.LoadSuccess:
            return {
                ...state,
                products: action.payload,
                error: ''
            };

        case ProductActionTypes.LoadFail:
            return {
                ...state,
                products: [],
                error: action.payload
            }

        default:
            return state;
    }
}