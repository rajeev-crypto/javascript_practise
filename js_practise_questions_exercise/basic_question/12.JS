const evenoradd  = arr => 
arr.reduce((acc,cur) => acc+cur, 0) %2 !== 0 ? 'odd' : 'even';