function findPairs(nums, target) {
    let pairs = [];
    for (let i = 0; i < nums.length; i++) {
        for (let j = i + 1; j < nums.length; j++) {
            if (nums[i] + nums[j] === target) {
                pairs.push([nums[i], nums[j]]);
            }
        }
    }
    return pairs;
}

// Test cases
let nums1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let target1 = 10;
console.log( "Number for Test1:", nums1, "Target for Test1:", target1);
let pairs1 = findPairs(nums1, target1);
if (pairs1.length > 0) {
    console.log("Pairs that meet the target are:");
    pairs1.forEach(pair => console.log(`(${pair[0]}, ${pair[1]})`));
} else {
    console.log("Pair not found which meet the given target.");
}


let nums2 = [1, 2, 6, 7, 9, 50, 6, 7];
let target2 = 120;
console.log("Number for Test2:", nums2, "Target for Test2:", target2);
let pairs2 = findPairs(nums2, target2);
if (pairs2.length > 0) {
    console.log("Pairs that meet the target are:");
    pairs2.forEach(pair => console.log(`(${pair[0]}, ${pair[1]})`));
} else {
    console.log("Pair not found which meet the given target.");
}