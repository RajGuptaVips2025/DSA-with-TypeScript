const swap = (arr: number[], a: number, b: number): void => {
    const temp: number = arr[a]!;
    arr[a] = arr[b]!;
    arr[b] = temp;
}

const partition = (arr: number[], low: number, high: number): number => {
    const pivot = arr[low]!;
    let i = low;
    let j = high;
    while (i < j) {
        while (arr[i]! <= pivot && i <= high - 1) {
            i++;
        }
        while (arr[j]! > pivot && j >= low + 1) {
            j--;
        }
        if (i < j) swap(arr, i, j);
    }
    swap(arr, low, j);
    return j;
}

const quickSort = (arr: number[], low: number, high: number): void => {
    if (low < high) {
        const pIndex = partition(arr, low, high);
        quickSort(arr, low, pIndex - 1);
        quickSort(arr, pIndex + 1, high);
    }
}

const arr: number[] = [13, 46, 24, 52, 20, 9, 3, 76, 12, 54];
quickSort(arr, 0, arr.length - 1);
console.log(arr);
