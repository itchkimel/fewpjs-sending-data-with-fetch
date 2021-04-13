// Add your code here
let body = document.querySelector('body')
let newDiv = document.createElement('div')
body.append(newDiv)

function submitData(userName, userEmail){
  return fetch('http://localhost:3000/users',{
  method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json"
    },
    body: JSON.stringify({
      name: (userName),
      email: (userEmail)
    })})
    .then(resp => resp.json()
    )
    .then((objData) => {
      for(const key in objData){
        let returnedId = objData[key]
        // console.log(returnedId)
        let newLi = document.createElement('li')
        newLi.innerText = returnedId
        newDiv.appendChild(newLi)
      }
      // debugger
    })
  }
  submitData()











// const configurationObject = {
//   method: "POST",
//   headers: {
//     "Content-Type": "application/json",
//     "Accept": "application/json"
//   },
//   body: JSON.stringify({
//     dogName: "Byron",
//     dogBreed: "Poodle"
//   })
// };
// fetch('http://localhost:3000/dogs', configurationObject)