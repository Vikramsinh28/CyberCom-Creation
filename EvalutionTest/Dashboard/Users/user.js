function handleAddUser(){
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const dob = document.getElementById('dob').value;

    let dt = new Date(dob);
    var diff_ms = Date.now() - dt.getTime();
    var age_dt = new Date(diff_ms);
    var age = Math.abs(age_dt.getUTCFullYear() -1970);

    console.log(name, email, password, dob , age);

    const table = document.getElementById('table');


    if(name && email && password && dob && age){
          let data = [];

          let acceptData = () => {
                data.push({
                    name: name,
                    email: email,
                    password: password,
                    dob: dob,
                    age: age
                });
          }
          localStorage.setItem('data', JSON.stringify(data));

          console.log(data)
    }
}