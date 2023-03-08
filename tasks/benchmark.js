
/* IMPORT */

import benchmark from 'benchloop';
import inRange from '../dist/index.js';

/* MAIN */

benchmark.config ({
  iterations: 100_000
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
