const insertionSort = (arr: number[], n: number): void => {
    for (let i = 0; i <= n - 1; i++) {
        let j:number = i;
        while (j>0 && arr[j-1] > arr[j]) {
            let temp:number = arr[j-1];
            arr[j-1] = arr[j];
            arr[j] = temp;
            j--;
        }
    }
}

const arr: number[] = [13, 46, 24, 52, 20, 9];
insertionSort(arr, arr.length);
console.log(arr);