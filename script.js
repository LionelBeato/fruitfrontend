const myFunc = () => {
  // fetch('https://rocky-forest-78029.herokuapp.com/data', {
  // })
  //     .then(response => response.json())
  //     // .then(json => console.log(json))
  //     .then(json => document.getElementById("apples").innerHTML = `there are ${json.amount} ${json.name}`)



  fetch('https://rocky-forest-78029.herokuapp.com/graphql', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({ query: "{ hello }" })
  })
    .then(r => r.json())
    .then(data => console.log('data returned:', data));
}

const otherFunc = () => {


  fetch('https://rocky-forest-78029.herokuapp.com/')
    .then(r => r.json())
    .then(data => console.log(data))

}




const postFunc = () => {

  // this input maps to the value of my input tag 
  let input = document.getElementById("input").value
  // this creates a new object with the name value being my input 
  let newApple = { name: `${input}` }
  console.log(newApple)
  fetch('http://localhost:3000', {
    method: 'POST', // or 'PUT'
    headers: {
      'Content-Type': 'application/json',
    },
    //this actually sends new apple object to the backend
    body: JSON.stringify(newApple),
  })
    // .then((response) => response.json())
    //this takes a response from the server and logs it 
    .then(response => console.log(response))
}

