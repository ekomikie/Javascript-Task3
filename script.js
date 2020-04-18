function divisor(number){

    let divisibleArr = [];
    for (i=1; i<=number; i++){
         if ( i%30===0){
            divisibleArr.push('yu-gi-oh');
            }
         else if(i%15===0){
             divisibleArr.push('gi-oh');
            }
         else if(i%10===0){
             divisibleArr.push('yu-oh');
            }
         else if(i%6===0){
             divisibleArr.push('yu-gi');
            }
         else if(i%5===0){
             divisibleArr.push('oh');
            }
         else if (i%3===0){
             divisibleArr.push('gi'); 
            }
         else if(i%2===0){
             divisibleArr.push('yu');
            }
         else{
             divisibleArr.push(i); 
             }
     }
    console.log(divisibleArr);
    return divisibleArr;
}
 
   divisor(100);
   divisor(34);