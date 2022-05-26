/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  // SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen'

import CoinsList from './Coins/CoinsList'
import CoinDetail from './Coins/CoinDetail'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

const Stack = createNativeStackNavigator();


const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Top List" screenOptions={{headerTransparent: false}}>
          <Stack.Screen name="Top List" component={CoinsList}></Stack.Screen>
          <Stack.Screen name="CoinDetail" component={CoinDetail} options={ ( {route} ) => ({ title: route.params?.coinName }) }></Stack.Screen>
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
      // <SafeAreaView style={{flex: 1, backgroundColor: isDarkMode ? Colors.darker : Colors.lighter}}>
      //       <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
          
      //       <View style={{ flex: 1}}>
      //           <CoinsList ></CoinsList>
      //       </View>

      // </SafeAreaView>
    
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
