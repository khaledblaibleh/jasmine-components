import { Text, View } from 'react-native';
import { yeeHa } from '../../yeeHa.js';

export function YeeHa({ number }) {
    return (
        <View>
            <Text>
              yeeHa({number}) returned {yeeHa(number)}
            </Text>
        </View>
    );
}