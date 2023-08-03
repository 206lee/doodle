// Login page
const Loginpage = document.querySelector("#Loginpage")
const loginid = document.querySelector("#loginid")
const loginpassword = document.querySelector("#loginpassword")
const loginbtn = document.querySelector("#loginbtn")

const loginmodal = document.querySelector('#loginmodal')

// Sign page

const sign = document.querySelector("#sign")
const signmodal = document.querySelector("#signmodal")
const modallogin = document.querySelector("#modallogin")
const signup = document.querySelector("#signup")

const id = document.querySelector("#id")
const fullname = document.querySelector("#fullname")
const username = document.querySelector("#username")
const password = document.querySelector("#password")

const ex = document.querySelector("#ex")

// // Main page
// const mainpage = document.querySelector("#mainpage")
// const usernameex = document.querySelector("#usernameex")
// const useridex = document.querySelector("#useridex")

// // Doodle
// const doodlecontent = document.querySelector("#doodlecontent")
// const doodlebtn = document.querySelector("#doodlebtn")

loginbtn.addEventListener('click', ()=>{
    if(loginid.value === JSON.parse(localStorage.getItem("user1")).id
    && loginpassword.value === JSON.parse(localStorage.getItem("user1")).password
    ){
       console.log('로그인성공')
       Loginpage.style.display = "none"
       mainpage.style.display = "flex"
    //    usernameex.innerHTML = JSON.parse(localStorage.getItem("user1")).username
       useridex.innerHTML = "@" + JSON.parse(localStorage.getItem("user1")).id
    }else{console.log('로그인실패')}
})

sign.addEventListener('click', ()=>{
    loginmodal.style.display = "none"
    signmodal.style.display = "flex"

})
modallogin.addEventListener('click', ()=>{
    signmodal.style.display = "none"
    loginmodal.style.display = "flex"
})


signup.addEventListener('click', ()=>{
    if(id.value.length = 11 && fullname.value.length > 0 && username.value.length > 0 && password.value.length > 7 ){
        var user = {
            id : id.value,
            fullname : fullname.value,
            username : username.value,
            password : password.value,
        }
        let user1 = JSON.stringify(user)
        localStorage.setItem('user1', user1);
        console.log(localStorage.getItem("user1"));
        console.log(JSON.parse(localStorage.getItem("user1")))
        console.log("id=" , JSON.parse(localStorage.getItem("user1")).id)
        console.log("pasword=" , JSON.parse(localStorage.getItem("user1")).password)
        // ex.innerHTML = localStorage.getItem("user1");
        signmodal.style.display = "none"
    }
})


function signupbtnchange(){
    if((id.value.length > 10 || id.value.includes('@') === true) && (fullname.value.length > 0 && typeof(fullname.value) === 'string') && username.value.length > 0 && password.value.length > 7 ){
        signup.style.background = "rgb(255, 207, 144)"
        signup.style.cursor = "pointer"
    }else{
        signup.style.background = "rgb(212, 212, 212)"
        signup.style.cursor = "default"
    }
}


function random(min, max){
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function randomRGB(){
    return 'rgb(' + random(0, 255) + ',' + random(0, 255) + ',' + random(0, 255) + ')';
}

const logo = document.querySelector('#logo');
const logolist = logo.querySelectorAll('p');
for(let i = 0; i < logolist.length; i++){
    logolist[i].style.color = randomRGB();
}


// Main page

const mainpage = document.querySelector('#mainpage')

const doodlebtn1 = document.querySelector('#doodlebtn1')
const doodlebtn2 = document.querySelector('#doodlebtn2')
const doodlepage = document.querySelector('#doodlepage')
const CloseDoodle = document.querySelector('#CloseDoodle')

const realupload = document.querySelector('#realupload')
const upload = document.querySelector('#upload')


doodlebtn1.addEventListener('click', ()=>{
    doodlepage.style.display = 'flex'
})
doodlebtn2.addEventListener('click', ()=>{
    doodlepage.style.display = 'flex'
})


// Doodle Page
CloseDoodle.addEventListener('click', ()=>{
    doodlepage.style.display = 'none'
})
upload.addEventListener('click', ()=>{
    realupload.click();
})


// const Xbtn = document.querySelector("#Xbtn")
// const 끄적btn = document.querySelector("#끄적btn")
// const 끄적 = document.querySelector("#끄적")


// 끄적btn.addEventListener('click', ()=>{
//     끄적.style.display = "flex"
// })
// Xbtn.addEventListener('click', ()=>{
//     끄적.style.display = "none"
// })

// // doodle

// const section = document.querySelector('section');

// const panel0 = document.createElement('div');
// const panel1 = document.createElement('div');
// const panel2 = document.createElement('div');

// const panel2n1 = document.createElement('div');
// const panel2n1n1 = document.createElement('div');
// const panel2n1n2 = document.createElement('div');
// const panel2n1n1n1 = document.createElement('div');
// const panel2n1n1n2 = document.createElement('div');
// const img1 = document.createElement('img');

// const panel2n2 = document.createElement('div');
// const panel2n3 = document.createElement('div');

// const img2 = document.createElement('img');
// const img3 = document.createElement('img');
// const img4 = document.createElement('img');

// const panel2n3n1 = document.createElement('div');
// const panel2n3n2 = document.createElement('div');
// const panel2n3n3 = document.createElement('div');

// const panel2n4 = document.createElement('div');
// const p1 = document.createElement('p');

// // let doodlenumb = 0
// // const doodlenset = 'doodle' + doodlenumb 
// // const doodlenset1 = "'" + doodlenset + "'" 
// // const doodlensetid = "'" + '#' + doodlenset + "'"
// // console.log(doodlenset)
// // console.log(doodlenset1)
// // console.log(doodlensetid)
// // const doodleexset = 'doodleex' + doodlenumb

// doodlebtn.addEventListener('click', ()=>{
//     if(doodlecontent.value.length > 2){
//         console.log("글작성")
//         localStorage.setItem("doodle", doodlecontent.value)
//         console.log(doodlecontent.value)
//         console.log(localStorage.getItem("doodle"))
//         doodle();
//         끄적.style.display = "none"
//     }else{
//         console.log("글작성실패")
//     }
// })

// function doodle(){
    
//     section.appendChild(panel0);

//     panel1.setAttribute('class', 'section-container top10');
//     panel1.setAttribute('id', "doodlensetid")
//     section.querySelector('div').appendChild(panel1);
//     panel2.setAttribute('class', 'section-main minwidth470');
//     document.querySelector('#doodlensetid').appendChild(panel2);

//     panel2n1.setAttribute('class', 'section-top');
//     panel2n1.setAttribute('id', 'sectiontop1');
//     document.querySelector("#doodlensetid").querySelector('div').appendChild(panel2n1);
//     panel2n1n1.setAttribute('class', "section-profile top5");
//     document.querySelector('#sectiontop1').appendChild(panel2n1n1);
//     panel2n1n2.setAttribute('class', "around right10 top5 cursor");
//     panel2n1n2.setAttribute('id', "morhoriz");
//     document.querySelector('#sectiontop1').appendChild(panel2n1n2);
//     img1.setAttribute('src', 'img/morehoriz.png');
//     img1.setAttribute('width', '30px');
//     document.querySelector('#morhoriz').appendChild(img1);
    
//     panel2n2.setAttribute('class', 'section-body minwidth470'); // IMGE
//     document.querySelector('#doodlensetid').querySelector('div').appendChild(panel2n2);

//     panel2n3.setAttribute('class', 'cursor'); //icon
//     panel2n3.setAttribute('id', 'icons');
//     document.querySelector('#doodlensetid').querySelector('div').appendChild(panel2n3);
//     // panel2n3n1.setAttribute('class', 'cursor') //icon
//     // panel2n3n1.setAttribute('id', 'icon1')
//     // panel2n3n2.setAttribute('class', 'cursor') //icon
//     // panel2n3n2.setAttribute('id', 'icon2')
//     // panel2n3n3.setAttribute('class', 'cursor') //icon
//     // panel2n3n3.setAttribute('id', 'icon3')

//     img2.setAttribute('src', 'img/favorite.png');
//     img2.setAttribute('class', 'cursor left10');
//     img2.setAttribute('width', '25px');
//     document.querySelector('#icons').appendChild(img2);
//     img3.setAttribute('src', 'img/chatbubble.png');
//     img3.setAttribute('width', '25px');
//     img3.setAttribute('class', 'cursor left10');
//     document.querySelector('#icons').appendChild(img3);
//     img4.setAttribute('src', 'img/send.png');
//     img4.setAttribute('width', '25px');
//     img4.setAttribute('class', 'cursor left10');
//     document.querySelector('#icons').appendChild(img4);

//     panel2n4.setAttribute('class', 'left10 bottom10'); //Content
//     panel2n4.setAttribute('id', 'doodleex');
//     document.querySelector('#doodlensetid').querySelector('div').appendChild(panel2n4);


//     let doodletext = document.createTextNode(localStorage.getItem('doodle'))
//     p1.appendChild(doodletext)
//     document.querySelector('#doodleex').append(p1);

// }



function main(){
    requestAnimationFrame(main)
    signupbtnchange();
}

main();