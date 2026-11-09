const merge = (arr:number[], low:number, mid:number, high:number): void  =>{
    let temp:number[] = [];
    let left: number = low;
    let right: number = mid+1;

    while (left<=mid && right<=high) {
        if (arr[left]!<=arr[right]!) {
            temp.push(arr[left]!);
            left++;            
        } else {
            temp.push(arr[right]!);
            right++;
        }
    }

    while (left<=mid) {
        temp.push(arr[left]!);    
        left++;    
    }

    while (right<=high) {
        temp.push(arr[right]!);
        right++;
    }

    for (let i = low; i <= high; i++) {
        arr[i] = temp[i-low]!;        
    }
}

const mergeSort = (arr:number[], low:number, high:number): void =>{
    if(low>=high) return;
    const mid = Math.floor((low + high) / 2);
    mergeSort(arr, low, mid);
    mergeSort(arr, mid+1, high);
    merge(arr, low, mid, high);
}

const arr: number[] = [13, 46, 24, 52, 20, 9];
mergeSort(arr, 0, arr.length - 1);
console.log(arr); 