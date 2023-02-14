// let arr = []
// const xhr = new XMLHttpRequest();
// xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts');
// xhr.onreadystatechange = function() {
//     if (xhr.status === 200) {
//         console.log(xhr.responseText);
//         arr = JSON.parse(xhr.responseText)
//     } else {
//         console.log('Request failed.  Returned status of ' + xhr.status);
//     }
// };
// xhr.send();


// Post api 

const xhr = new XMLHttpRequest();
xhr.open('POST', 'https://jsonplaceholder.typicode.com/posts/1', true);
xhr.setRequestHeader('Content-Type', 'application/json');
xhr.onload = function() {
    if (xhr.status === 200) {
        console.log(xhr.responseText);
    } else {
        console.log('Request failed.  Returned status of ' + xhr.status);
    }
};
xhr.send(JSON.stringify({
    id: 1,
    title: 'foo',
    body: 'bar',
    userId: 1,
}));
