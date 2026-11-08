const bubbleSort = (arr: number[], n: number): void => {
    for (let i = n-1; i >= 0; i--) {
        for (let j = 0; j <= i-1 ; j++) {
            if (arr[j] > arr[j+1]) {
                let temp= arr[j+1];
                arr[j+1] = arr[j];
                arr[j] = temp;
            }
        }
    }
}

const arr: number[] = [13, 46, 24, 52, 20, 9];
bubbleSort(arr, arr.length);
console.log(arr);