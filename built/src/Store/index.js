import CoinsStore from './CoinsStore/store';
export class Store {
    coinsStore;
    constructor() {
        this.coinsStore = new CoinsStore();
    }
}
export default new Store();
