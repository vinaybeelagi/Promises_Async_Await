import {sayHi, sayBye} from './say.js';

sayHi('John'); // Hello, John!
sayBye('John'); // Bye, John!

// export default before the entity to export:
import * as user from './say.js';

let User = user.default; // the default export
new User('John');