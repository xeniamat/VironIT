let arr2 = [12, 5, 3, 17, 128, 45, 1, 64];
arr2.sort(function(a, b){
    return b - a;
});
console.log(arr2);


const arr = [26, 15, 33, 27, 136, 1045, 1, 65];
const bubbleSort = arr => {
    const endI = arr.length - 1;
    for (let i = 0; i < endI; i++) {
        let wasSwap = false;

        const endJ = endI - i; 
        for (let j = 0; j < endJ; j++) {  
            if (arr[j] > arr[j + 1]) { 
                const swap = arr[j + 1];
                arr[j + 1] = arr[j];
                arr[j] = swap;
                
                wasSwap = true;
            }
        }
        if (!wasSwap) {
            break;
        }
    }
    return arr;
};
console.log(bubbleSort(arr));