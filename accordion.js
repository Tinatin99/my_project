// "use etrict"
// 1. script mode "use strict"

// "accordion.js"
@@ -1,71 +1,77 @@
 
 
 
 // 2.accordion  მეორე გზა for ით
 // let accordion = document.getElementsByClassName('accordion-container')
 
 // for(let i=0; i< accordion.length; i++){
 //     accordion[i].addEventListener('click',function(){
 //         this.classList.toggle('active')
 //     })
 // }
 
 // ლექციის შემდეგ დაწერილი კოდი
 let accordion = document.querySelectorAll('.accordion-container');
 
 
 accordion.forEach(item => {
     item.addEventListener('click', function() {
         this.classList.toggle('active');
     });
 });
 
 
 
 // ეს ლექციაზე დაწერილი კოდია 
 
 
 // accordion.forEach(item => {
 //     item.addEventListener('click', function() {
 //         this.classList.toggle('active');
 //     });
 // });
 
 
 
 // 3.slider
 
 // სხვა სურათის ლინკები შემოვიტანე
 
 let data = [
     {
         id: 1,
         title:'dried fruit',
         imageUrl: 'https://images.bolt.eu/store/2022/2022-07-20/289e90b8-fa1c-4fb9-b90a-6758a016d650.jpeg',
         title:'Tusheti',
         imageUrl: 'https://www.turebi.ge/uploads/photos/tours1/large/62149_11.jpg?v=1',
 
     },
     {
         id: 2,
         title:'sweetpaste',
         imageUrl: 'https://thumbs.dreamstime.com/z/traditional-georgian-sweets-called-churchkhela-churchela-candle-shaped-grape-juice-candy-nuts-inside-traditional-georgian-161801425.jpg',
         title:'Mountain',
         imageUrl: 'https://i.pinimg.com/736x/3c/27/5d/3c275d5f27a7d093c96a6fec825c9f7b.jpg',
 
     },
     {
         id: 3,
         title:'churchkhela',
         imageUrl: 'https://images.bolt.eu/store/2022/2022-07-20/65c4b4ec-6829-4d24-8c98-9171219e8ab8.jpeg',
         title:'hello spring',
         imageUrl: 'https://www.farmersalmanac.com/wp-content/uploads/2025/01/first-day-of-spring-2025.webp',
 
     },
     {
         id:4,
         title:'flower',
         imageUrl:'https://cdn.mos.cms.futurecdn.net/tXr5UjKDsDBrYBQM9znb2c-1200-80.jpg'
 
     }
 
 
 
 ];
 let sliderContainer = document.getElementById('slider')
 let arrowLeft =document.getElementById('arrow-left')
 let arrowRight =document.getElementById('arrow-right')
 let arrowLeftBtn =document.getElementById('arrow-left')
 let arrowRightBtn=document.getElementById('arrow-right')
 
 let sliderIndex = 0
 
 
 
 function createImg (item){
     sliderContainer.style.backgroundImage = `url(${item.imageUrl})`
     sliderContainer.style.backgroundRepeat= 'no-repeat'
 @@ -80,42 +86,138 @@
 
 }
 
 
 
 function setSlider(){
     createImg(data[sliderIndex])
     sliderContainer.innerText=''
      createImg(data[sliderIndex])
     let title= createH2tag(data[sliderIndex])
     let dots = createDots()
 
     sliderContainer.appendChild(title)
     sliderContainer.appendChild(dots)
     let dotElements = dots.querySelectorAll('.dot')
     dotElements[sliderIndex].classList.add('active') 
 }
 
 function arrowLeft(){
     if(sliderIndex === 0){
         sliderIndex = data.length-1
     }else{
         sliderIndex --
     }
     setSlider()
 }
 
 function arrowRight(){
     if(sliderIndex === data.length-1){
         sliderIndex = 0
     }else{
         sliderIndex ++
     }
     setSlider()
 }
 arrowLeftBtn.addEventListener('click',arrowLeft)
 arrowRightBtn.addEventListener('click',arrowRight)
 
 // setInterval(()=>{
 //     arrowRight()
 // },2000)
 
 function createDots(){
     let dots =document.createElement('div')
     dots.classList.add('dots')
     data.forEach((element)=>{
         let dot = document.createElement('div')
         dot.classList.add('dot')
         dot.setAttribute('data-id',element.id-1)
         dot.onclick= function(event){
            let id = event.target.getAttribute('data-id')
            sliderIndex = id
            setSlider()
         }
         dots.appendChild(dot)
 
     })
 
     return dots
 
 }
 
 // function arrowLeft(){
 //     if(sliderIndex === 0){
 //         sliderIndex = data.length-1
 //     }else{
 //         sliderIndex --
 //     }
 //     setSlider()
 setSlider()



//  05.03.2025



// 2.accordion  მეორე გზა for ით
// let accordion = document.getElementsByClassName('accordion-container')

// for(let i=0; i< accordion.length; i++){
//     accordion[i].addEventListener('click',function(){
//         this.classList.toggle('active')
//     })
// }

// ლექციის შემდეგ დაწერილი კოდი
let accordion = document.querySelectorAll('.accordion-container');


accordion.forEach(item => {
    item.addEventListener('click', function() {
        this.classList.toggle('active');
    });
});



// ეს ლექციაზე დაწერილი კოდია 


accordion.forEach(item => {
    item.addEventListener('click', function() {
        this.classList.toggle('active');
    });
});



// 3.slider

// სხვა სურათის ლინკები შემოვიტანე

let data = [
    {
        id: 1,
        title:'Tusheti',
        imageUrl: 'https://www.turebi.ge/uploads/photos/tours1/large/62149_11.jpg?v=1',
       
    },
    {
        id: 2,
        title:'Mountain',
        imageUrl: 'https://i.pinimg.com/736x/3c/27/5d/3c275d5f27a7d093c96a6fec825c9f7b.jpg',
        
    },
    {
        id: 3,
        title:'hello spring',
        imageUrl: 'https://www.farmersalmanac.com/wp-content/uploads/2025/01/first-day-of-spring-2025.webp',
        
    },
    {
        id:4,
        title:'flower',
        imageUrl:'https://cdn.mos.cms.futurecdn.net/tXr5UjKDsDBrYBQM9znb2c-1200-80.jpg'

    }

    
   
];
let sliderContainer = document.getElementById('slider')
let arrowLeftBtn =document.getElementById('arrow-left')
let arrowRightBtn=document.getElementById('arrow-right')

let sliderIndex = 0

function createImg (item){
    sliderContainer.style.backgroundImage = `url(${item.imageUrl})`
    sliderContainer.style.backgroundRepeat= 'no-repeat'
    sliderContainer.style.backgroundSize= 'cover'
 }
 
function createH2tag(item){
    let h2tag = document.createElement('h2')
    h2tag.innerText =item.title
    h2tag.classList.add('slider-title')
    return h2tag

}



function setSlider(){
    sliderContainer.innerText=''
     createImg(data[sliderIndex])
    let title= createH2tag(data[sliderIndex])
    let dots = createDots()

    sliderContainer.appendChild(title)
    sliderContainer.appendChild(dots)
    let dotElements = dots.querySelectorAll('.dot')
    dotElements[sliderIndex].classList.add('active') 
}

function arrowLeft(){
    if(sliderIndex === 0){
        sliderIndex = data.length-1
    }else{
        sliderIndex --
    }
    setSlider()
}

function arrowRight(){
    if(sliderIndex === data.length-1){
        sliderIndex = 0
    }else{
        sliderIndex ++
    }
    setSlider()
}
arrowLeftBtn.addEventListener('click',arrowLeft)
arrowRightBtn.addEventListener('click',arrowRight)

// setInterval(()=>{
//     arrowRight()
// },2000)

function createDots(){
    let dots =document.createElement('div')
    dots.classList.add('dots')
    data.forEach((element)=>{
        let dot = document.createElement('div')
        dot.classList.add('dot')
        dot.setAttribute('data-id',element.id-1)
        dot.onclick= function(event){
           let id = event.target.getAttribute('data-id')
           sliderIndex = id
           setSlider()
        }
        dots.appendChild(dot)

    })

    return dots

}

setSlider()


// registration form  validation-  რეგისტრაციის ფორმის ვალიდაცია

document.getElementById('registration').addEventListener('submit',function(event){
    
    event.preventDefault()

    let errors ={
        // username:" დაწერეთ მომხმარებლის სახელი"
        // password:"nvdnkmnkhxmphgx,mpl"
        // agree = 'you must check'
        
    }

    let form = event.target

    let userName= document.getElementById('username').value

    if(userName.length < 2 || userName == ''){
        errors.username = " დაწერეთ მომხმარებლის სახელი"

    }

    let password =document.getElementById('password').value
    let password2 = document.getElementById('password2').value

    if(password != password2 || password == ''){
        errors.password = 'password can not be empty'
        errors.password2 = 'passwords do not match'

    }

    let agree = document.getElementById('checkAgree').checked
    if(!agree){
        errors.agree = 'you must check'

    }

    let age =false
    form.querySelectorAll('[name ="age"]').forEach(element=>{
        if(element.checked){
            age = true
        }
    })

    if(!age){
        errors.age = 'select your age'
    }


    

    for(let item in errors){
        let errorSpan= document.getElementById('error_' + item)
        if(errorSpan){
            errorSpan.innerText = errors[item]

        }

    }


// form.querySelectorAll('.errorText').forEach(item =>{
//     item.textContent = ''

// })

if(Object.keys(errors).length == 0){
    form.submit()
}
    
})