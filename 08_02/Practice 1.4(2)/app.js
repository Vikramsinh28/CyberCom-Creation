let str = '<html><head>Vikramsinh</head><body>Parmar</body></html>';

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
            if(temp.startsWith("/")){
                let poppedValue = arr.pop()
                if(poppedValue !== temp.substring(1)){
                      break;
                }
            }else{
                arr.push(temp)
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

