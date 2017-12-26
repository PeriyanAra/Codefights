function isCryptSolution(crypt, solution) {
    const store = new Map(solution);
    let a = '';
    let b = '';
    let c = '';
    
    
    for(let i = 0; i < crypt[2].length; i++){
        if(crypt[0][i]){a += store.get(crypt[0][i]);}
        if(crypt[1][i]){b += store.get(crypt[1][i]);}
        c += store.get(crypt[2][i]);
    }
    
    if(Number(a) + Number(b) == Number(c) && ((a[0] != 0 && b[0] != 0) || (a.length == 1 && b.length == 1))){
        return true;
    }
    else{
        return false;
    }
    
    
}