import Reflux from 'reflux';

const Actions = Reflux.createActions([
    'AddProductToBag',
    'AddProductToWishList',
    'GetProductsList',
    'RemoveProductFromBag',
    'RemoveProductFromWishList'
]);

export default Actions;