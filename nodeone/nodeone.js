var prompt = require('prompt');

var schema = {
    properties: {
        numberone: {
            description: 'Your first number?',
            pattern: /^-?[.0-9]+$/,
            message: 'Input can be any positive or negative number without decimals.',
            required: true
        },
        numbertwo: {
            description: 'Your second number?',
            pattern: /^-?[.0-9]+$/,
            message: 'Input can be any positive or negative number without decimals.',
        }
    }
};

//
// Start the prompt
//
prompt.start();

//
// Get two properties from the user:  first number and second number
//
prompt.get(schema, function (err, result) {
    //
    // Log the results.
    //
    console.log('Command-line input received:');
    console.log('  number one: ' + result.numberone);
    console.log('  number two: ' + result.numbertwo);
    var added = Number(result.numberone) + Number(result.numbertwo);
    console.log('  We`re adding your damn numbers, okay... ');
    console.log(added)
});
