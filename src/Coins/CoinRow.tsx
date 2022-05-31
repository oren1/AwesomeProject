import React from 'react'
import {View, Text, StyleSheet, TouchableOpacity, TouchableHighlight} from 'react-native'
import FastImage from 'react-native-fast-image'


interface CoinRowProp {
    coinName: string,
    imageUrl: string,
    onPress: () => void
}

const meww = () => {
 console.log("meww")
}
meww()

const CoinRow = ({ onPress, coinName, imageUrl }: CoinRowProp) => {

    const CoinView = () => {
        return (<View style={styles.coinRowContainer}>
               <FastImage source={{uri: imageUrl}}
                            style= {{width: 75, height: 75}} />

                <Text style={styles.titleText}>
                        {coinName}
                </Text>
            </View>)
    }


    return  (<TouchableHighlight
                activeOpacity={0.6}
                underlayColor="#DDDDDD"              
                onPress={onPress}>

                    <CoinView></CoinView>
             </TouchableHighlight>)
}


const styles = StyleSheet.create({
    coinRowContainer: {
        margin: 0,
        flexDirection: "row",
    },
    titleText: {
        flex: 1, 
        margin: 10, 
        alignSelf: "center",
        fontSize: 20,
        fontWeight: "500"
    }
})

export default CoinRow