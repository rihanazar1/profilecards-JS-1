function mainFunction(){
    var str = " ";

users.forEach(function(dets,idx){
    str += `<div class="card">
        <img src="${dets.image}" alt="">
        <h1>${dets.userName}</h1>
        <h3>${dets.age}</h3>
        <h4>${dets.status}</h4>
        <button id="${idx}">Add Friend</button>
    </div>`

var body = document.querySelector("body");
body.innerHTML = str
})
}

mainFunction();

var body = document.querySelector("body");

body.addEventListener("click", function(dets){
    // console.log(users[dets.target.id]);
    if(users[dets.target.id].status === "Stranger"){
        users[dets.target.id].status = "Friends";
        users[dets.target.id].isfriend = true;
    } else {
        // console.log("else condition")
        users[dets.target.id].status = "Stranger";
        users[dets.target.id].isfriend = false;
    }
    
    
    mainFunction()
})