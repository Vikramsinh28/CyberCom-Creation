let str ='<html><head><p></p></head><body></body></html>';

if (str && str.length > 0) {
    let i = 0;
    let arr = []
    while (i < str.length - 1) {
        if (str[i] === '<') {
            let j = i + 1;
            let temp = '';
            while (j < str.length && str[j] !== '>') {
                temp += str[j];
                j++;
            }
            if(temp.substring(temp.length - 1) === "/"){   
            }
            else {
                if(temp.startsWith("/")){
                    let poppedValue = arr.pop()
                    if(poppedValue !== temp.substring(1)){
                          console.log('Invalid')
                          break;
                    }
                }else{
                    arr.push(temp)
                }
            }
            i = j + 1;
        } else {
            i++;
        }
    }
    if(arr.length != 0){
        console.log("Invalid")
    }else{
        console.log("Valid")
    }
}

