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
        body: JSON.stringify({query: "{ hello }"})
      })
        .then(r => r.json())
        .then(data => console.log('data returned:', data));
    }

