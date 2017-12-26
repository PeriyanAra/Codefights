function firstDuplicate(a) {
    let hash = {};
    
    for(let i = 0; i < a.length; i++){
        if(hash[a[i]] != undefined){
            return a[i];
        }
        else{
            hash[a[i]] = i;
        }
    }
    return -1;
    
    
}

console.log(firstDuplicate);
