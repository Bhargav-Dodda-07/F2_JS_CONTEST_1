const data = [
    { name: "john", age: 24, profession: "developer" },
    { name: "jane", age: 27, profession: "admin" },
    { name: "Bhargav", age: 26, profession: "developer"},
    { name: "Raasi", age: 25, profession: "admin"}
  ];
  
  // 1. Print Developers
  function printDeveloper() {
    for(let i = 0; i < data.length; i++)
    {
        if(data[i].profession == "developer"){
            console.log(data[i]);
            

        }
    }
    console.log("Here are the Developers");
  }
  
  // 2. Add Data
  function addData() {
    let name = prompt("enter your name");
    let age = prompt("enter your age");
    let profession = prompt("enter your profession");

    let newData = {name: name, age: age, profession: profession};
    data.push(newData);

    console.log(newData);
    console.log(data);
    console.log("Data Added Successfully!");
  }
  
  // 3. Remove Admins
  function removeAdmin() {
    for(let i = 0; i < data.length; i++) {
        if(data[i].profession == "admin"){
            data.pop(data[i].profession)
        }
    }
    console.log(data);
    console.log("Removed admin successfully");
    
  }
  
  // 4. Concatenate Array
  function concatenateArray() {
    const example = [         
        {name: 'stoinis', age: 26, profession: 'developer'},
        {name: 'marcus', age: 25, profession: 'admin'}, 
        {name: 'shivam', age: 26, profession: 'developer'},
        {name: 'Dube', age: 25, profession: 'admin'}        
    ]

    for (let i = 0; i < example.length; i++) {
        data.push(example[i]);        
    }
    console.log(data);
    console.log("Concatinated Arrays Sucessfully!");
  }
  
  // 5. Average Age
  function averageAge() {
    let x = 0;
    for (let i = 0; i < data.length; i++) {
        x += data[i].age;
        
    }

    console.log("Average Age is " + x/data.length);
  }
  
  // 6. Age Check
  function checkAgeAbove25() {
    for (let i = 0; i < data.length; i++) {
        if(data[i].age > 25){
            console.log(data[i]);
        }
        
    }
  }
  
  // 7. Unique Professions
  function uniqueProfessions() {
    let arr = [];
    for (let i = 0; i < data.length; i++) {
        if(arr.includes(data[i].profession) == true){
            continue;
        }
        else{
            arr.push(data[i].profession);
        }
        
    }
    
    console.log(arr);
  }
  
  // 8. Sort by Age
  function sortByAge() {
    data.sort((a,b) => a.age - b.age);

    console.log(data);
    console.log("data sorted by age");
  }
  
  // 9. Update Profession
  function updateJohnsProfession() {
    for (let i = 0; i < data.length; i++) {
        if(data[i].name == "john")
        {
            data[i].profession = "manager";
        }
        
    }

    console.log(data);
    console.log("profession updated!");
  }
  
  // 10. Profession Count
  function getTotalProfessions() {
    let admins = 0;
    let devs = 0;
    
    for (let i = 0; i < data.length; i++) {
        if(data[i].profession == "admin"){
            admins++;
        }
        else if(data[i].profession == "developer"){
            devs++;
        }
    }

    console.log('Total no of admins = ' +admins);
    console.log("Total no of developers = " + devs);
  }