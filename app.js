const fetchBtn = document.getElementById('btn');
const displayInfo = document.getElementById('displayInfo');


fetchBtn.addEventListener('click', ()=>{
    
    let request = new XMLHttpRequest();
    request.open('GET', 'https://api.github.com/users', true);

    request.onload = ()=> {
        data = JSON.parse(request.responseText);
        searchData();
    }



    request.send()
})


 searchData = ()=> {

    let display = '';

    for(let i in data){

        display += '<div class="finalOutput">'+'<img src="'+data[i].avatar_url+'" width="50px" height: "50px">'+'<ul>'+'<li>'+'ID: '+data[i].id+'</li>'+'<li>'+'Login: '+data[i].login+'</li>'+'</div>';
    }

    displayInfo.innerHTML = display;
 }