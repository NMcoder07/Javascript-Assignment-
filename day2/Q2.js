function invokeAfterDelay(callback) {
    setTimeout(callback, 2000); // 2000 milliseconds = 2 seconds
}


invokeAfterDelay(() => {
    console.log('This message is displayed after a delay of 2 seconds.');
});
