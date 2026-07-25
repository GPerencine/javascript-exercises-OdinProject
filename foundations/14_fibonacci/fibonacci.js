const fibonacci = function(position) {
    if (position < 0) return 'OOPS';
    
    let current = 0;
    let next = 1;
    
    for (let i = 0; i < Number(position); i++){
        let temp = current;   //0 1 1 2
        current = next;       //1 1 2 3
        next = current + temp;//1 2 3 5
        
        //[current, next] = [next, current + next];
    }
    return current;
};

// Do not edit below this line
module.exports = fibonacci;
