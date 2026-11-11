const bubbleSort = (arr: number[], n: number): void => {
    for (let i = n-1; i >= 0; i--) {
        let didSwap: number = 0;
        for (let j = 0; j <= i-1 ; j++) {
            if (arr[j]! > arr[j+1]!) {
                let temp:number= arr[j+1]!;
                arr[j+1] = arr[j]!;
                arr[j] = temp;
                didSwap = 1;
            }
        }
        if(didSwap === 0){
            break;
        }
    }
}

const arr: number[] = [13, 46, 24, 52, 20, 9];
bubbleSort(arr, arr.length);
console.log(arr);

// Complexity of both versions:
// - Worst Time Complexity: (O(n^2))
// - Space: (O(1))
// - Best Time Complexity: O(n)