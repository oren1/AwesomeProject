import React, {useEffect} from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';
import {LineChart} from 'react-native-charts-wrapper';
// import {getHistory} from '../Network/NetworkManager';
import {CoinDetailScreenNavigationProp} from '../NavigationTypes';
import {Point} from '../AwesomeTypes';
import {useLazyQuery} from '@apollo/client';
import {queries} from '../Network/Queries';
/**
 * 'route' prop
 * the 'route' prop let us receive the params passed from the previous screen. 'route.params'
 * */

const CoinDetail = ({route}: CoinDetailScreenNavigationProp) => {
  const [getHistory, {data, loading}] = useLazyQuery(queries.GET_HISTORY);

  useEffect(() => {
    async function fetchData() {
      getHistory();
    }
    fetchData();
  }, [getHistory]);

  return (
    <View style={styles.container}>
      {loading ? (
        <ActivityIndicator style={styles.activityIndicator} size="small" />
      ) : (
        <LineChart
          style={styles.chart}
          chartDescription={{text: ''}}
          data={{
            dataSets: [
              {
                label: 'Coin History',
                values: data.listHistory.map(({y}: {y: number}) => y),
                config: {drawCircles: false},
              },
            ],
          }}
          xAxis={{
            axisLineWidth: 0,
            drawLabels: false,
            position: 'BOTTOM',
            drawGridLines: false,
          }}
          yAxis={config.yAxis}
          drawBorders={false}
          legend={config.legend}
          marker={config.marker}
        />
      )}
    </View>
  );
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
