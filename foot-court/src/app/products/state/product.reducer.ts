import { Product } from '../product';

import * as fromRoot from '../../state/app.state';
import { createFeatureSelector, createSelector } from '@ngrx/store';

export interface State extends fromRoot.State {
    products: ProductState;
}

export interface ProductState {
    showProductCode: boolean;
    currentProduct: Product;
    products: Product[];
}

const initialState: ProductState = {
    showProductCode: true,
    currentProduct: null,
    products: []
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

export function reducer(state = initialState, action): ProductState {
    switch (action.type) {

        case 'TOGGLE_PRODUCT_CODE':
            console.log('existing state: ' + JSON.stringify(state));

            return {
                ...state,
                showProductCode: action.payload
            };

        default:
            return state;
    }
}