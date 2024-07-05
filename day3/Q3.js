function greet(name, greeting = "Hello") {
    console.log(`${greeting}, ${name}!`);
}


greet("John"); // Prints: Hello, John!
greet("Alice", "Hi"); // Prints: Hi, Alice!
