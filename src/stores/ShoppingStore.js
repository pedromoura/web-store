import Reflux from 'reflux';
import ShoppingActions from '../actions/ShoppingActions';
import Products from '../datasource/products.json';

const PAGESIZE = 6;

class ShoppingStore extends Reflux.Store {
    constructor() {
        super();
        this.listenables = ShoppingActions;
        this._productsDataSource = Products;
        this.store = {
            products: [],
            bag: [],
            wishList: [],
            pagination: {
                totalResults: this._productsDataSource.length,
                pageSize: PAGESIZE,
                pageNr: 1,
            }
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
        this.store.pagination = Object.assign(this.store.pagination, { pageNr });
        const arrayPager = pageNr - 1;
        this.store.products = this._productsDataSource.slice(arrayPager * PAGESIZE, (arrayPager + 1) * PAGESIZE);
        this.trigger(this.store);
    }
}

export default ShoppingStore;