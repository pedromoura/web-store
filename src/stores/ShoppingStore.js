import Reflux from 'reflux';
import ShoppingActions from '../actions/ShoppingActions';
import Products from '../datasource/products.json';

class ShoppingStore extends Reflux.Store {
    constructor() {
        super();
        this.listenables = ShoppingActions;
        this._productsDataSource = Products;
        this.store = {
            products: [],
            bag: [],
            wishList: [],
        };
    }

    onAddProductToBag(product) {
        const { bag } = this.store;
        const newBag = bag.concat([product]);
        this.store.bag = newBag;
        this.trigger(this.store);
    }

    onRemoveProductFromBag(product) {
        const { bag } = this.store;
        const newBag = bag.filter(prod => prod.id !== product.id);
        this.store.bag = newBag;
        this.trigger(this.store);
    }

    onAddProductToWishList(product) {
        const { wishList } = this.store;
        const newWishList = wishList.concat([product]);
        this.store.wishList = newWishList;
        this.trigger(this.store);
    }

    onRemoveProductFromWishList(product) {
        const { wishList } = this.store;
        const newWishList = wishList.filter(prod => prod.id !== product.id);
        this.store.wishList = newWishList;
        this.trigger(this.store);
    }

    onGetProductsList(pageNr) {
        pageNr--;
        this.store.products = this._productsDataSource.slice(pageNr * 6, (pageNr + 1) * 6);
        this.trigger(this.store);
    }
}

export default ShoppingStore;