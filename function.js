nums = [5, 12, 89, 45, 18, 8];
for (let i = 0; i < nums.length; i++) {
    const num = nums[i];
    console.log(num*2);
}

function evenify(num) {
    var result;
    if (num % 2 == 0) {
        result = num;
    }
    else{
        result = num*2;
    }
    return result;
}
var result = evenify(13);
console.log('Result: ', result);
var square = result*result;
console.log('Square: ', square);

for (let j = 0; j < nums.length; j++) {
    const num = nums[j];
    evenify(num);
}

friends_age = [13, 17, 19, 20, 18];
for (let k = 0; k < friends_age.length; k++) {
    const age = friends_age[k];
    evenify(age);
}
function evenify_all(nums) {
    var even_array = [];
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        var result = evenify(num);
        even_array.push(result);
    }
    return even_array;
}
nums = [5, 12, 89, 45, 18, 8];
var nums_even = evenify_all(nums);
console.log(nums_even);

friends_age = [13, 17, 18, 20, 18];
evenify_all(friends_age);
