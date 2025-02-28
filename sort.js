let arr =  [6,13,22,18,0,3,45,57,5,12];

function findSecondLargeNumber(x, position){
    let i=0;
    while(i < x.length){
        if(i===0 || x[i] <= x[i-1]){
            i++;
        }else{
            [x[i], x[i-1]] = [x[i-1], x[i]];
            i--;
        }
    }
    console.log(x[position-1]);
}

findSecondLargeNumber(arr, 2)




