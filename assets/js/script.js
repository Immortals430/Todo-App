var arr = ["Personal", "School", "Work", "Sports", "Other"];
var filterlink = document.getElementById('filterlink');
var rightbtn = document.getElementById('rightbtn');
var leftbtn = document.getElementById('leftbtn')
var num = 1;

rightbtn.addEventListener('click', ()=>{
    if(num > 4){
        num = 0;
    }
    else{

    filterlink.setAttribute('href', `/filter/${arr[num]}`);
    filterlink.innerHTML = arr[num];

    num = num + 1;

};
});

leftbtn.addEventListener('click', ()=>{
    if(num < 0){
        num = 4;
    }

    else{

        filterlink.setAttribute('href', `/filter/${arr[num]}`);
        filterlink.innerHTML = arr[num];

    num = num - 1;
    }
});