if (process.argv.includes('a')) {
    console.log('A');
    let a = require('a');
    console.log(new a.TestA().test().log);
}

if (process.argv.includes('b')) {
    console.log('B');
    let b = require('b');
    console.log(new b.TestB().test().log);
}
