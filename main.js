/*function f1(){
    event.preventDefault();
let username=document.getElementById('name');
let usermail=document.getElementById('email');

localStorage.setItem('name',username.value);
localStorage.setItem('mail',usermail.value);
}*/
function f1()
{
    
  event.preventDefault();
  const emailId = document.getElementById("email").value;
  const name = document.getElementById("name").value;
  if (emailId.length > 0 && name.length > 0) {
    const obj = {
      name: name,
      emailId: emailId
    };
    axios.post('https://crudcrud.com/api/d93533bc97274e18b0849629a0df5c2d/appointmentdata',obj)
    .then((response)=>console.log(response))
    .catch((err)=>{console.log(err)})
    //localStorage.setItem("userDetails" + emailId, JSON.stringify(obj));
    // localStorage.setItem("userDetailEmail" + emailId, emailId);
    // listOfPeople.push(object)
    axios.get('https://crudcrud.com/api/d93533bc97274e18b0849629a0df5c2d/appointmentdata',obj)
    .then((response)=>
    {
      console.log(response)
      for(var i=0;i<response.data.length;i++)
      {
        showOutput(response.data[i])
      }
    })
    .catch((err)=>{console.log(err)})
}

}
function addNewLineElement(object) {
    const ul = document.getElementById("users");
    const li = document.createElement("li");
    li.appendChild(
      document.createTextNode(object.name + " " + object.emailId + " ")
    );
    //li.appendChild();
    ul.appendChild(li);
    const btn=document.createElement("button");
    btn.innerHTML="Edit";
    li.appendChild(btn);
    btn.addEventListener("click", () => {
        console.log(object);
        document.getElementById("name").value = object.name;
        document.getElementById("email").value = object.emailId;
        li.remove();
      }); 

      const delbtn=document.createElement("button");
      delbtn.innerHTML="Delete";
      li.appendChild(delbtn);
      delbtn.addEventListener("click", () => {
          localStorage.removeItem("userDetails" + object.emailId);
          li.remove();
        }); 

  }
  function showOutput(res) {
    document.getElementById('users').innerHTML = `
    <div class="card card-body mb-4">
      <h5>Name: ${res}</h5>
    </div>
    <div class="card card-body mb-4">
      <h5>Email: ${res}</h5>
    </div>
  `;
  }
