export function snowRemoval(cm){
   let equipment = "";
   if(cm <= 1){
    equipment = "Broom"
   }
   else if (cm <= 8){
    equipment = "shovel";
   }else if (cm <= 30){
    equipment = " electric snow blower";
   }else{
    equipment = " gas snowblower";
   }
   return equipment;
} 



if (import.meta.main){
    console.log('snowRemoval(3) = ${snowRemoval(3)}');
}