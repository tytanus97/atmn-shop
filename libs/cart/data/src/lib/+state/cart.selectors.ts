import { cartFeature } from './cart.reducers';

const {
  selectElementsCount,
  selectProductsInCart,
  selectTotal,
} = cartFeature;

export const fromCart = {
  selectElementsCount,
  selectProductsInCart,
  selectTotal,
};
