// Exercise 1: Capitalize the first letter of each word of a given string.
function capitalizeWords(str) {
    return str.replace(/\b\w/g, (ch) => ch.toUpperCase());
}
// Exercise 2: Find the largest of three given integers.
function max(a, b, c) {
    return Math.max(a, b, c);
}

// Exercise 3: Move last three characters to the start of a given string.
// If length < 3, return the string unchanged.
function right(str) {
    if (str.length < 3) return str;
    return str.slice(-3) + str.slice(0, str.length - 3);
}
// Exercise 4: Find the type of a given angle.
function angle_Type(angle) {
    if (angle < 90) return "Acute angle";
    if (angle === 90) return "Right angle";
    if (angle < 180) return "Obtuse angle";
    if (angle === 180) return "Straight angle";
    return "Invalid angle";
}

// Exercise 5: Max possible sum of k consecutive numbers in an array of positive integers.
function array_max_sum(arr, k) {
    if (k <= 0 || k > arr.length) return null;

    // Sliding window
    let windowSum = 0;
    for (let i = 0; i < k; i++) windowSum += arr[i];
    let maxSum = windowSum;

    for (let i = k; i < arr.length; i++) {
        windowSum += arr[i] - arr[i - k];
        if (windowSum > maxSum) maxSum = windowSum;
    }
    return maxSum;
}

console.log("Exercise 1:");
console.log(capitalizeWords("hello world from javascript"));
// Output: Hello World From Javascript

console.log("\nExercise 2:");
console.log(max(1, 0, 1));        // 1
console.log(max(0, -10, -20));    // 0
console.log(max(1000, 510, 440)); // 1000

console.log("\nExercise 3:");
console.log(right("Python"));     // honPyt
console.log(right("JavaScript")); // iptJavaScr
console.log(right("Hi"));         // Hi

console.log("\nExercise 4:");
console.log(angle_Type(47));   // Acute angle
console.log(angle_Type(90));   // Right angle
console.log(angle_Type(145));  // Obtuse angle
console.log(angle_Type(180));  // Straight angle

console.log("\nExercise 5:");
console.log(array_max_sum([1, 2, 3, 14, 5], 2)); // 19
console.log(array_max_sum([2, 3, 5, 1, 6], 3));  // 12
console.log(array_max_sum([9, 3, 5, 1, 7], 2));  // 12
