// You can find info about complexity in README.md

function findMissingNumbers(sequence) {
    if (!Array.isArray(sequence)) {
        throw new Error("Input sequence is not an array.");
    }

    if (!sequence.length) {
        throw new Error("Input sequence is empty.");
    }

    if (sequence[0] !== 1) {
        throw new Error("Input sequence must start with 1.");
    }

    const missingNumbers = [];
  
    const binarySearch = (arr, target) => {
        let left = 0;
        let right = arr.length - 1;
    
        while (left <= right) {
            const mid = Math.floor((left + right) / 2);
    
            if (arr[mid] === target) {
                return mid;
            } else if (arr[mid] < target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }
    
        return -1;
    };
  
    const n = sequence.length + 2;
  
    for (let i = 1; i <= n; i++) {
        if (binarySearch(sequence, i) === -1) {
            missingNumbers.push(i);
        }
    
        if (missingNumbers.length === 2) {
            break;
        }
    }

    const lastElement = sequence[sequence.length - 1];

    if (missingNumbers[0] > lastElement) {
        throw new Error('There are no missing elements in your sequence.');
    }
    
    if (missingNumbers[1] > lastElement) {
        throw new Error(`There is only one missing element in your sequence: ${missingNumbers[0]}.`);
    }
  
    return missingNumbers;
}
  
const sequence = [1, 3, 4, 5, 6, 7, 9, 10].sort((a, b) => a - b); // Add your sequence here

try {
    const missingNumbers = findMissingNumbers(sequence);
    console.log("Missing numbers:", missingNumbers);
} catch (error) {
    console.error(error.message);
}
