function getRandomValue(arr) {
    // Generate a random index between 0 (inclusive) and the length of the array (exclusive)
    const randomIndex = Math.floor(Math.random() * arr.length);
    // Return the element at the randomly generated index
    return arr[randomIndex];
}


function doSomeHeavyTask() {
    const ms = getRandomValue([100, 150, 200, 300, 600, 500, 1000, 1400, 2500]);

    const randomVal = getRandomValue([1, 2, 3, 4, 5, 6, 7, 8])
    console.log('randomVal == ', randomVal);
    const shouldThrowError = randomVal === 8;
    console.log('shouldThrowError == ', shouldThrowError);


    if (shouldThrowError) {

        const randomError = getRandomValue([
            "DB Payment Failure",
            "DB Server is Down",
            "Access Denied",
            "Not Found Error",
        ]);
        throw new Error(randomError);
    }
    return new Promise((resolve, reject) => setTimeout(() => resolve(ms), ms))


}
module.exports = { doSomeHeavyTask };
