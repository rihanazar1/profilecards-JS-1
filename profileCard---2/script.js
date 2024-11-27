var users = [{
    image: "https://images.unsplash.com/photo-1503443207922-dff7d543fd0e?q=80&w=1827&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    userName: "Jakob Owens",
    age: "28",
    status: "Stranger",
    isfriend: false,
    },{
    image: "https://images.unsplash.com/photo-1519058082700-08a0b56da9b4?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    userName: "Mubariz",
    age: "30",
    status: "Stranger",
    isfriend: false,
    },{
    image: "https://plus.unsplash.com/premium_photo-1672239496290-5061cfee7ebb?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    userName: "Beyza Kaplan",
    age: "25",
    status: "Stranger",
    isfriend: false,
    },{
    image: "https://images.unsplash.com/photo-1499996860823-5214fcc65f8f?q=80&w=1666&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    userName: "Erik",
    age: "32",
    status: "Stranger",
    isfriend: false,
    },{
    image: "https://images.unsplash.com/photo-1463453091185-61582044d556?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    userName: "Ayo Ogunseinde",
    age: "35",
    status: "Stranger",
    isfriend: false,
    },{
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    userName: "Albert",
    age: "22",
    status: "Stranger",
    isfriend: false,
}];


function eventBublling(){
    var str = "";

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
});
};

eventBublling();

var body = document.querySelector("body")

body.addEventListener("click",function(dets){
    if(users[dets.target.id].status === "Stranger"){
        users[dets.target.id].status = "Friends"
        // users[dets.target.id].isfriend = true;
    } else {
        users[dets.target.id].status = "Stranger"
        // users[dets.target.id].isfriend = false;
    }

    eventBublling();
})