// Date

let date = new Date();

let clock = date.getHours();

if( clock < 13){
    console.log('iyi günler!')
} else {
    console.log('günaydın')
}


// DARK MODE

{

   
    function follow(id, el){
        // ajax isteği yaptıktan sonra aşağıdakileri çalıştır
        el.innerText = '☀️';
        el.setAttribute('onclick', `unfollow(${id}, this)`);
        document.querySelector('body').style.background = "black";

    }
    
    function unfollow(id, el){
        // takibi bırakmak için gerekli ajax requesti
        el.innerText = '🌙';
        el.setAttribute('onclick', `follow(${id}, this)`);
        document.querySelector('body').style.background = "white";
    }

    let btn = document.querySelector('button');



}

