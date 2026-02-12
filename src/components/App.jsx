import {Hello} from './Hello.jsx';
import { SnowRemoval } from './SnowRemoval.jsx';
import { View } from 'react-native';
import { SqftToAcres } from './SqftToAcres.jsx';
import { LawnTime } from './LawnTime.jsx';
import { AirQuality } from './AirQuality.jsx';
import { YeeHa } from './components/YeeHa.jsx';
import { Slope } from './Slope.jsx';

export default function App() {
  return (
    <View>
      <Hello name="Rich" />
      <Hello />
      <Hello name="Biff" />
      <SnowRemoval cm={3} />

      {/* Question 1 */}
      <SqftToAcres squareFeet={43560} />np
      <SqftToAcres squareFeet={87120} />
      <SqftToAcres squareFeet={21780} />
      
      {/* Question 2 */}
      <LawnTime width={10} length={10} rate={5} />
      <LawnTime width={20} length={30} rate={10} />
      <LawnTime width={5} length={8} rate={4} />

      {/* Question 3 */}
      <AirQuality aqi={25} />
      <AirQuality aqi={75} />
      <AirQuality aqi={125} />
      <AirQuality aqi={175} />
      <AirQuality aqi={250} />
      <AirQuality aqi={350} />

      {/* Question 4 */}
      <YeeHa number={9} />
      <YeeHa number={14} />
      <YeeHa number={21} />
      <YeeHa number={10} />

       {/* Question 5 */}
       <Slope x1={0} y1={0} x2={1} y2={1} />
       <Slope x1={0} y1={0} x2={2} y2={4} />
       <Slope x1={1} y1={5} x2={3} y2={1} />
    </View>
  );
}

