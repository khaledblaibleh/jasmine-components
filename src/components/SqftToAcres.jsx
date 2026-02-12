import { Text, View } from 'react-native';
import { sqftToAcres } from '../sqftToAcres.js';

export function SqftToAcres({ squareFeet }) {
    return (
        <View>
            <Text>
              sqftToAcres({squareFeet}) returned {sqftToAcres(squareFeet)}
            </Text>
        </View>
    );
}