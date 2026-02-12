import { Text, View } from 'react-native';
import { lawnTime } from '../lawnTime.js';

export function LawnTime({ width, length, rate }) {
    return (
        <View>
            <Text>
              lawnTime({width}, {length}, {rate}) returned {lawnTime(width, length, rate)} minutes
            </Text>
        </View>
    );
}