const selectionSort = (arr: number[], n: number): void => {
    for (let i = 0; i <= n - 2; i++) {
        let mini: number = i;
        for (let j = i; j <= n - 1; j++) {
            if (arr[j] < arr[mini]) {
                mini = j;
            }
        }
        let temp: number = arr[i];
        arr[i] = arr[mini];
        arr[mini] = temp;
    }
}

const arr: number[] = [13, 46, 24, 52, 20, 9];
selectionSort(arr, arr.length);
console.log(arr);

// Remember the Selection Sort logic
// - i → Position where the minimum element should go.
// - j → Traverses the unsorted portion.
// - mini → Stores the index of the smallest element found.
// - Swap arr[i] with arr[mini].

// Time complexity: (O(n^2))
// Space complexity: (O(1))