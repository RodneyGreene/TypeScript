
let message;
message = 'abc';
let endsWithC = message.endsWith('c');
let endsWithC_asserted = (<string> message).endsWith('c');
let endsWithC_altAsserted = (message as string).endsWith('c');