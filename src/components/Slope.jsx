import { Text, View } from 'react-native';
import { slope } from '../slope.js';

export function Slope({ x1, y1, x2, y2 }) {
    return (
        <View>
            <Text>
              slope({x1}, {y1}, {x2}, {y2}) returned {slope(x1, y1, x2, y2)}
            </Text>
        </View>
    );
}