// let todoSec = document.getElementById("todos");

// function getApi(){

// todoSec.innerHTML="";
//  fetch("https://6adda9db4e88f1bba4a48a73.mockapi.io/product")

//  .then((res) => res.json())
//     .then((res) => {
//       console.log(res);
//           res.forEach((item) => {
//         todoSec.innerHTML += `
//             <task> ${item.todo} <div><i class="fa-solid fa-pen-to-square"></i> <i onclick="getDelete(${item.id})" class="fa-solid fa-trash"></i></div></task>
//             `;
//       });
//     });
// }
// getApi();

// let getPost = document.getElementById("getPost");
// let inp = document.getElementById("inp");
// getPost.addEventListener("click", postSend);

// function postSend() {
//   fetch("https://6adda9db4e88f1bba4a48a73.mockapi.io/product", {
//     headers: {
//       "Content-Type": "application/json",
//     },
//     method: "POST",
//     body: JSON.stringify({ todo: inp.value }),
//   }).then(() => {
//     getApi();
//     inp.value = "";
//   });
// }



// function getDelete(id) {
//   fetch(`https://6adda9db4e88f1bba4a48a73.mockapi.io/product/${id}`, { method: "DELETE" })
//   .then(() => {
//     getApi();
//     alert("ugurla silindi ")
//   });
// }





