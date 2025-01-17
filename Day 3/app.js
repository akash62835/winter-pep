function calculateDiscount(price, discount = 10) {
    return price - (price * discount / 100);
}
function mergeArrays(array1, array2) {
    return [...array1, ...array2];
}
function logArguments(...args) {
    console.log("Logged Arguments:", ...args);
}
function createMessage(defaultMessage, ...names) {
    return names.map(name => `${defaultMessage}, ${name}!`);
}
function sum(a, b, c) {
    return a + b + c;
}
function createUserProfile(username, age = 25, country = "Unknown") {
    return { username, age, country };
}

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function showMenu() {
    console.log(`
    Choose an option:
    1. Calculate Discount
    2. Merge Arrays
    3. Log Arguments
    4. Create Messages
    5. Sum Three Numbers
    6. Create User Profile
    0. Exit
    `);

    rl.question('Enter your choice: ', handleChoice);
}

function handleChoice(choice) {
    switch (choice) {
        case '1':
            rl.question('Enter price: ', price => {
                rl.question('Enter discount (default is 10): ', discount => {
                    const result = calculateDiscount(parseFloat(price), parseFloat(discount) || 10);
                    console.log(`Final Price: $${result}`);
                    showMenu();
                });
            });
            break;

        case '2':
            rl.question('Enter first array (comma-separated): ', array1 => {
                rl.question('Enter second array (comma-separated): ', array2 => {
                    const mergedArray = mergeArrays(array1.split(','), array2.split(','));
                    console.log(`Merged Array: [${mergedArray.join(', ')}]`);
                    showMenu();
                });
            });
            break;

        case '3':
            rl.question('Enter arguments (comma-separated): ', args => {
                logArguments(...args.split(','));
                console.log('Arguments logged to console.');
                showMenu();
            });
            break;

        case '4':
            rl.question('Enter default message: ', message => {
                rl.question('Enter names (comma-separated): ', names => {
                    const personalizedMessages = createMessage(message, ...names.split(','));
                    console.log('Personalized Messages:', personalizedMessages);
                    showMenu();
                });
            });
            break;

        case '5':
            rl.question('Enter three numbers (comma-separated): ', numbers => {
                const numArray = numbers.split(',').map(num => parseFloat(num));
                const total = sum(...numArray);
                console.log(`Sum: ${total}`);
                showMenu();
            });
            break;

        case '6':
            rl.question('Enter username: ', username => {
                rl.question('Enter age (default is 25): ', age => {
                    rl.question('Enter country (default is Unknown): ', country => {
                        const profile = createUserProfile(username, parseInt(age) || 25, country || 'Unknown');
                        console.log('User Profile:', profile);
                        showMenu();
                    });
                });
            });
            break;

        case '0':
            console.log('Exiting the application.');
            rl.close();
            break;

        default:
            console.log('Invalid choice. Please try again.');
            showMenu();
            break;
    }
}

showMenu();
