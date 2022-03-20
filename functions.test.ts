const {shuffleArray} = require('./utils')


let dummyArr = [1, 2, 3, 4]

describe('shuffleArray should', () => {
    // CODE HERE

    test('should return an array of the same length', async () => {
        let returnedArr = shuffleArray(dummyArr)

        expect(returnedArr.length).toEqual(dummyArr.length)
    });

    test('shuffleArray returns the data type of array', async () => {
        let arr1 = shuffleArray(dummyArr)
        let arr2 = Array.isArray(arr1)

        expect(arr2).toEqual(true)
    });
})
