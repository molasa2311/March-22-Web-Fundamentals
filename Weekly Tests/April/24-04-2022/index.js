// function getusers(){
    fetch('https://reqres.in/api/users?page=2')
      .then((data)=>{
         console.log(data.json);
        return data.json();
    })
       .then((completedata)=>{
        console.log(completedata.data)
        // console.log(completedata.data[3].first_name);
        let data1="";
        completedata.data.map((values)=>{
          data1+=`
          <div class="details">
         <h1 class="Id">${values.id}</h1>
          <img src=${values.avatar} alt="img" class="image">
          <p class="firstname">first_Name : ${ values.first_name}</p>
          <p class="lastname">Last_Name : ${values.last_name}</p>
          <p class="email">email Id : ${values.email}</p>
         </div>
           `
       });
       document.getElementById("card").innerHTML=data1

      }).catch((err)=>{
          console.log(err);
         })
      // .then((fulldata)=>{
      //     console.log(fulldata[2].first_name);
      //   })
        
        // let data1="";
        // fulldata.map((values)=>{
        //   data1+=`
        //   <div class="details">
        //  <h1 class="Id">${values.id}</h1>
        //   <img src=${values.avatar} alt="img" class="image">
        //   <p class="firstname">${values.first_name}</p>
        //   <p class="lastname">${values.last_name}</p>
        //   <p class="email">${values.email}</p>
        //  </div>
          
          
        //    `

  //       });
  //       document.getElementsByClassName("users").innerHTML=data1;
  //  }).catch((err)=>{
  //    console.log(err)
  //  })
  //  }
        
        