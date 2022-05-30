import uuid from 'react-native-uuid';
let page = 0;
const getCoinsForPage = async () => {
    console.log(`page ${page}`);
    let url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=20&page=${page}&tsym=USD`;
    console.log(`url ${url}`);
    let response = await fetch(url);
    let json = await response.json();
    let mappedCoins = json.Data.map((object, index) => {
        let { Id, Name, FullName, ImageUrl } = object.CoinInfo;
        let obj = {
            id: uuid.v4(),
            symbol: Name,
            coinName: `${FullName} (${Name})`,
            imageUrl: "https://www.cryptocompare.com/" + ImageUrl
        };
        return obj;
    });
    page++;
    console.log(`page ${page}`, mappedCoins);
    return mappedCoins;
};
const getHistory = async (fsym, tsym, callback) => {
    try {
        console.log(`page ${page}`);
        let limit = (90 * 24) / 10;
        let url = `https://min-api.cryptocompare.com/data/v2/histohour?fsym=${fsym}&tsym=${tsym}&limit=${limit}&aggregate=${10}`;
        console.log(`url ${url}`);
        let response = await fetch(url);
        let json = await response.json();
        let graphPoints = json.Data.Data.map(point => ({ x: point.time, y: point.close }));
        callback(graphPoints, null);
    }
    catch (error) {
        callback(null, error);
    }
};
export { getCoinsForPage, getHistory, page };
