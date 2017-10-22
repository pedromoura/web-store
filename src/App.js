import React, { Component } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import MainContent from './components/MainContent/MainContent';
import BagList from './components/BagList/BagList';
import WishList from './components/WishList/WishList';

import ShoppingActions from './actions/ShoppingActions';
import ShoppingStore from './stores/ShoppingStore';

class App extends Component {
    constructor() {
        super();

        this.state = {
            store: {
                products: [],
                bag: [],
                wishList: [],
            },
        };

        this._shoppingStore = new ShoppingStore();
        [
            '_onStoreChange'
        ].forEach(fn => { this[fn] = this[fn].bind(this); });
    }

    componentWillMount() {
        this.unsubscribe = this._shoppingStore.listen(this._onStoreChange);
    }

    componentDidMount() {
        ShoppingActions.GetProductsList(1);
    }

    _onStoreChange(store) {
        this.setState({ store });
    }

    render() {
        const { products, bag, wishList } = this.state.store;
        return (
            <div>
                <Header>
                    <BagList
                        bagList={bag}
                    />
                    <WishList
                        wishList={wishList}
                    />
                </Header>
                <MainContent
                    bagList={bag}
                    wishList={wishList}
                    productsList={products}
                />
                <Footer />
            </div>
        )
    }
}

export default App;
