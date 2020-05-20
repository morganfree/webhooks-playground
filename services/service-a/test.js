const check = require( 'package' );

console.log('changed')
process.exit( check() ? 0 : 1 );
