function findTriplets(arr, K) {
  let triplets = [];
  arr.sort((a, b) => a - b);

  for (let i = 0; i < arr.length - 2; i++) {
    let left = i + 1;
    let right = arr.length - 1;
    while (left < right) {

    let sum = arr[i] + arr[left] + arr[right];
    if (sum === K) {
      triplets.push([arr[i], arr[left], arr[right]]);
      left++;
      right--;
    } else if (sum < K) {
        left++;
    }
    else{
        right--;
    }
  }
}
  return triplets;
}

// Example usage
let arr = [-3, 2, 0, -5, 1, 5];
let K = 0;
let triplets = findTriplets(arr, K);
console.log(triplets); // Output: [ [-5, 0, 5], [-3, 1, 2] ]
