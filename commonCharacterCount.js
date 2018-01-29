function commonCharacterCount(s1, s2) {
    // strings to arrays
    s1 = s1.split('');
    s2 = s2.split('');
    let count = 0;
    
    for ( let i = 0; i < 26; i++ ) {
        if ( s1[i] == undefined && s2[i] == undefined ) {
            return count++
        } else {
            if ( s1.indexOf(s2[i]) > -1 ) {
                count++;
                s1[s1.indexOf(s2[i])] = ""; 
            }
            console.log(s1)
            console.log(s2)
        }
    }
    return count
}