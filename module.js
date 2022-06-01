// const complex = require('./complexmeth');
// const prime = require('./complex');
// for(datum of prime){
//     console.log(complex(datum));
// }
const os = require('os');
// console.log(os.hostname());
// console.log(os.platform());
// console.log(os.arch());
// console.log(os.uptime());
// console.log(os.userInfo());

const currentOs = {
    name:os.type(),
    release:os.release(),
    totalMemory:os.totalmem(),
    freeMemory:os.freemem(),
}
console.log(currentOs);