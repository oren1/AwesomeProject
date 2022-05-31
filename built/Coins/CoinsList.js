import React, { useState, useEffect } from 'react';
import { FlatList, ActivityIndicator } from 'react-native';
import CoinRow from './CoinRow';
import { getCoinsForPage, page } from '../Network/NetworkManager';
import { SafeAreaView } from 'react-native-safe-area-context';
const CoinsList = ({ navigation }) => {
    const [getCoins, setCoins] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const getMoreCoins = async () => {
        setIsLoading(true);
        try {
            let moreCoins = await getCoinsForPage();
            // setCoins(oldCoins => [...oldCoins, ...moreCoins] )
            setCoins([...getCoins, ...moreCoins]);
        }
        catch (error) {
            console.log(`getMoreCoins error ${error}`);
        }
        finally {
            setIsLoading(false);
        }
    };
    useEffect(() => {
        getMoreCoins();
    }, []);
    function showDetails(index) {
        let coin = getCoins[index];
        return () => { navigation.navigate("CoinDetail", coin); };
    }
    const renderItem = ({ item, index }) => {
        return <CoinRow onPress={showDetails(index)} coinName={item.coinName} imageUrl={item.imageUrl}></CoinRow>;
    };
    return (<SafeAreaView edges={['bottom']} style={{ flex: 1, backgroundColor: "white" }}>
                {isLoading && page == 0
            ? <ActivityIndicator size="large" style={{ flex: 1 }}></ActivityIndicator>
            : <FlatList data={getCoins} renderItem={renderItem} keyExtractor={({ id }, index) => id} ListFooterComponent={<ActivityIndicator style={{ height: 20, paddingBottom: 30 }}></ActivityIndicator>} onEndReachedThreshold={0} getItemLayout={(data, index) => ({ length: 75, offset: 75 * index, index })} maxToRenderPerBatch={20} onEndReached={getMoreCoins}/>}
        </SafeAreaView>);
};
export default CoinsList;
