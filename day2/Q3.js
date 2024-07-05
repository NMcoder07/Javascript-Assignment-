function checkInteger(number) {
    if (!Number.isInteger(number)) {
        throw new Error('The provided value is not an integer.');
    }
    console.log('The provided value is an integer.');
}


try {
    checkInteger(4); // This will log: The provided value is an integer.
    checkInteger(4.5); // This will throw an error: The provided value is not an integer.
} catch (error) {
    console.error(error.message);
}
