
/* IMPORT */

const {default: inRange} = require ( '../dist' );
const benchmark = require ( 'benchloop' );

/* MAIN */

benchmark.defaultOptions = Object.assign ( benchmark.defaultOptions, {
  iterations: 100000,
  log: 'compact'
});

benchmark ({
  name: '0:100',
  fn: () => {
    inRange ( 0, 100 );
  }
});

benchmark ({
  name: '0:1000',
  fn: () => {
    inRange ( 0, 1000 );
  }
});

benchmark ({
  name: '1000:1000000',
  fn: () => {
    inRange ( 1000, 1000000 );
  }
});

benchmark.summary ();
