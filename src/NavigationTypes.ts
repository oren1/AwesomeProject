import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Coin } from './AwesomeTypes' 

export type RootStackParamList = {
    TopList: undefined
    CoinDetail: Coin
}

export type TopListScreenNavigationProp = NativeStackScreenProps<
  RootStackParamList,
  'TopList'
>

export type CoinDetailScreenNavigationProp = NativeStackScreenProps<
  RootStackParamList,
  'CoinDetail'
>
