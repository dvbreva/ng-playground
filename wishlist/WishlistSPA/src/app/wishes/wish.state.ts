import Wish from './wish.model';

export default class WishState {
    Wishes: Array<Wish>;
    WishError: Error;
}

export const initializeState = (): WishState => {
    return { Wishes: Array<Wish>(), WishError: null };
};