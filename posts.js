// // // // 14 მარტი
// // // //  პოსტების წამოღება სერვერიდან

// // // //1. დავასელექთოთ ელემენტები
// let mainWrapperPost = document.getElementById('post-block')
// let overLayContent = document.getElementById('overlay')
// let closeOverLay = document.getElementById('close')
// let content = document.getElementById('content')
// // https://jsonplaceholder.typicode.com/posts

// // 2.შევქმნათ ფუნქცია, სადაც გამოვიძახებთ new XMLHttpRequest() -ს,გადავიყვანთ მონაცემებს ჯავასკრიპტის ობიექტში,გადავუვლით forEach-ით და შევქმნით პოსტებს (გამოვიძახებთ createPost(element)-ს )
// function ajax(url,callback){
//     let request = new XMLHttpRequest()
//     request.open('GET',url)
//     request.addEventListener('load', function(){
//         let data = JSON.parse(request.responseText);
//        callback(data) 
//     })
//     request.send()
// }

// ajax('https://jsonplaceholder.typicode.com/posts',function(data){
//     data.forEach(element => {
//         createPost(element)
        
//     });

// })
// //3. შევქმნათ createPost(item) ფუნქცია,(div, მივანიჭოთ კლასი, data-id ატრიბუტი h2, h3 მივანიჭოთ ტექსტი, ჩავაეფენდოთ დივში, დივს კლიკის დროს მივანიჭოთ data-id და გამოვიძახოთ openOverLay(id) , mainWraper ში ჩავაეფენდოთ divWraper  )
// function createPost(item){
   

//     let divWrapper = document.createElement('div')
//     divWrapper.classList.add('posts')
//     divWrapper.setAttribute('data-id',item.id)
    
//     let h2Tag = document.createElement('h2')
//     h2Tag.innerText = item.id

//     let h3Tag = document.createElement('h3')
//     h3Tag.innerText = item.title

//     divWrapper.appendChild(h2Tag)
//     divWrapper.appendChild(h3Tag)
//     divWrapper.addEventListener('click',function(){
//         let id = divWrapper.getAttribute('data-id')
//         console.log(id);
//         openOverLay(id)
//     })



//     mainWrapperPost.appendChild(divWrapper)


// }

// // // 4.შექმენით openOverLay(id)ფუნქცია, მივნიჭეთ კლასის სახელი .კლიკის დროს შესაბამისი ფანჯარა გამოჩნდება.
//      function openOverLay(id){
//         overLayContent.classList.add('activePost')
//         let url = `https://jsonplaceholder.typicode.com/posts/${id}`
//         ajax(url,function(data){
//             overlayFunction(data)
//         })

//      }
// // // 5. X აიქონზე კლიკის დროს  დაიხუროს შესაბამისი ფანჯარა
//       closeOverLay.addEventListener('click', function(){
//         overLayContent.classList.remove('activePost')

//       })


// // // 6.დინამიური  გავხადოთ ლინკი

// // //7.openoverlay ში ვიძახებ ajax(url,function(data)-ს,რომ შესაბამისი პოსტის აღწერილობა გამოჩნდეს ვლოგავ დატას,ნეთვორქში ვნახულობთ პოსტებს , ვიძახებ   overlayFunction(data))
// // // ვქმნი overlayFunction(item)-s , ვასუფთავებ კონტენტს, ვქმნი ელემენტებს ,ვანიჭებ კონტენტს და ვაეფენდებ content =ში

// function overlayFunction(item){
//     content.innerHTML =''
//     let title = document.createElement('h4')
//     title.innerText = item.title

//     let description = document.createElement('p')
//     description.innerText =item.body
//     content.appendChild(title)
//     content.appendChild(description)


// }




// debugge

// დებაგინგი

debugger
for (let i = 0; i < 2; i++) {
    console.log("ამჟამინდელი i:", i);
 
}

function calculate(a, b) {
    let result = a + b;
    return result;
}

let answer = calculate(5, "10"); 

console.log("შედეგი:", answer);