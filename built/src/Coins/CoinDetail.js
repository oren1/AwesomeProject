import React, { useState, useEffect } from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import { LineChart } from 'react-native-charts-wrapper';
import { getHistory } from '../Network/NetworkManager';
/**
 * 'route' prop
 * the 'route' prop let us receive the params passed from the previous screen. 'route.params'
 * */
const CoinDetail = ({ route }) => {
    let { symbol } = route.params;
    const [graphPoints, setGraphPoints] = useState([]);
    const [isLoading, setLoding] = useState(true);
    useEffect(() => {
        getHistory(symbol, 'USD', (graphPoints, error) => {
            if (graphPoints != null) {
                console.log(graphPoints);
                setGraphPoints(graphPoints);
            }
            setLoding(false);
        });
    }, []);
    return (<View style={styles.container}>
      {isLoading ? (<ActivityIndicator style={styles.activityIndicator} size="small"/>) : (<LineChart style={styles.chart} chartDescription={{ text: '' }} data={{
                dataSets: [
                    {
                        label: 'Coin History',
                        values: graphPoints.map(point => Number(point.y)),
                        config: { drawCircles: false },
                    },
                ],
            }} xAxis={{
                axisLineWidth: 0,
                drawLabels: false,
                position: 'BOTTOM',
                drawGridLines: false,
            }} yAxis={config.yAxis} drawBorders={false} legend={config.legend} marker={config.marker}/>)}
    </View>);
};
const config = {
    xAxis: {
        axisLineWidth: 0,
        drawLabels: false,
        position: 'BOTTOM',
        drawGridLines: false,
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
            drawLabels: true,
        },
    },
    legend: {
        enabled: false,
    },
    marker: {
        enabled: false,
    },
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'stretch',
        justifyContent: 'flex-start',
        backgroundColor: 'white',
    },
    activityIndicator: {
        height: 350,
    },
    chart: {
        height: 350,
    },
});
export default CoinDetail;
