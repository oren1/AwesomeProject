import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { LineChart } from 'react-native-charts-wrapper';
import { getHistory } from '../Network/NetworkManager';
const CoinDetail = ({ route }) => {
    let { id, symbol, coinName, imageUrl } = route.params;
    const [graphPoints, setGraphPoints] = useState([]);
    const [isLoading, setLoding] = useState(true);
    useEffect(() => {
        setLoding(true);
        getHistory(symbol, 'USD', (graphPoints, error) => {
            if (graphPoints != null) {
                console.log(graphPoints);
                setGraphPoints(graphPoints);
            }
            setLoding(false);
        });
    }, []);
    return (<View style={{ flex: 1, alignItems: "stretch", justifyContent: "flex-start", backgroundColor: "white" }}>
            {isLoading
            ? <ActivityIndicator style={{ height: 350 }} size="small"></ActivityIndicator>
            : <LineChart style={styles.chart} chartDescription={{ text: '' }} data={{ dataSets: [{ label: "Coin History",
                            values: graphPoints,
                            config: { drawCircles: false } }] }} xAxis={config.xAxis} yAxis={config.yAxis} drawBorders={false} legend={config.legend} marker={config.marker}/>}

        </View>);
};
const config = {
    xAxis: {
        axisLineWidth: 0,
        drawLabels: false,
        position: 'BOTTOM',
        drawGridLines: false
    },
    yAxis: {
        left: {
            enabled: false,
            drawGridLines: false,
            drawLabels: false,
        },
        right: {
            drawGridLines: false,
            enabled: true,
            drawLabels: true
        },
    },
    legend: {
        enabled: false
    },
    marker: {
        enabled: false
    }
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF'
    },
    chart: {
        height: 350
    }
});
export default CoinDetail;
