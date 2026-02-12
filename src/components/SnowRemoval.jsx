import {
  Text,
  View,
} from 'react-native';
import { snowRemoval } from '../snowRemoval.js';


export function SnowRemoval({cm}){

    let equipment = snowRemoval(cm);
    return(
        <View>
            <Text>snowRemoval{(cm)} returned {equipment} </Text>
        </View>
    );
}