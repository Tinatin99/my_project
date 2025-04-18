// @@ -1,2 +1,134 @@
 let data = [
     {
         id: 1,
         imageUrl: 'https://gofreeai.com/asset/image/article/md/science-gofreeai.com-sfyggi.webp',
         // title: '1. Flamingo',
       
     },
     {
         id: 2,
         imageUrl: 'https://gofreeai.com/asset/image/article/md/physics-gofreeai.com-sfyfnp.webp',
         // title: '2. Giraffe',
         
     },
     {
         id: 3,
         imageUrl: 'https://bakuradzebeqa.wordpress.com/wp-content/uploads/2012/05/1298149685_1295186884_nature1407ot3hm.jpg',
         // title: '3. Elephant',
        
     },
     {
         id: 4,
         imageUrl: 'https://monica.on.ge/2021/03/25/e253c6b42131435a73fee95ec86f5aaa.jpg',
         // title: '4. Crowned Crane',
        
     },
     {
         id: 5,
         imageUrl: 'https://cdn.kastatic.org/ka-perseus-images/54d7f06b50a03aecbf724c6727d4d266f58a1444.jpg',
         // title: '5. Mandarin duck',
       
     },
     {
        id: 6,
        imageUrl: '//upload.wikimedia.org/wikipedia/commons/thumb/9/9a/CollageFisica.jpg/500px-CollageFisica.jpg',
        // title: '1. Flamingo',
      
    },
    {
        id: 7,
        imageUrl: '//upload.wikimedia.org/wikipedia/commons/2/22/Archimedes-screw_one-screw-threads_with-ball_3D-view_animated_small.gif',
        // title: '2. Giraffe',
        
    },
    {
        id: 8,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/8/8a/Triple_expansion_engine_animation.gif',
        // title: '3. Elephant',
       
    },
    {
        id: 9,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/7d/Magnet_4.jpg',
        // title: '4. Crowned Crane',
       
    },
    {
        id: 10,
        imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Niels_Bohr_Albert_Einstein_by_Ehrenfest.jpg/800px-Niels_Bohr_Albert_Einstein_by_Ehrenfest.jpg',
        // title: '5. Mandarin duck',
      
    },
 ];
 
 let arrowLeft = document.getElementById ('arrow-left');
 let arrowRight = document.getElementById ('arrow-right');
 let sliderContainer = document.getElementById ('slider');
 let dotsList = document.getElementsByClassName ('dot');
 
 let sliderIndex = 0;
 
 function createATag (item) {
     let aTag = document.createElement('a');
     aTag.setAttribute('href', item.url);
     aTag.classList.add('slider-a');
 
     return aTag;
 }
 
 function createImgTag(item) {
     // let imgTag = document.body.style.backgroundImage = 'url(' + item.imageUrl + ')';
     sliderContainer.style.backgroundImage = 'url('+ item.imageUrl +')';
     sliderContainer.style.backgroundRepeat = "no-repeat";
     sliderContainer.style.backgroundSize = "cover";
 }
 
 
 function createH2Tag (item) {
     let h2Tag = document.createElement('a');
     h2Tag.setAttribute.href = item.url;
     h2Tag.classList.add('slider-title');
     h2Tag.append(item.title);
 
     return h2Tag;
 }
 
 function createDots() {
     let dots = document.createElement('div');
     dots.classList.add('dots');
 
     data.forEach((element) => {
         let dot = document.createElement('div');
         dot.classList.add('dot');
         dot.setAttribute('data-id', element.id-1);
 
         dot.onclick = () => {
             let id = event.target.getAttribute('data-id');
             sliderIndex = id;
             setSlider();
         }
         dots.appendChild(dot);
     })
     return dots;
 }
 
 function setSlider() {
     sliderContainer.innerText = '';
     createImgTag(data[sliderIndex]);
     let sliderItem = createATag (data[sliderIndex]);
     let title = createH2Tag (data[sliderIndex]);
     let dots = createDots();
     sliderItem.appendChild(title);
     sliderContainer.appendChild(sliderItem);
     sliderContainer.appendChild(dots);
     currentDotActive();
     
 }
 
 function currentDotActive () {
     dotsList[sliderIndex].classList.add('active')
 }
 
 function arrowLeftClick () {
     if (sliderIndex == 0) {
         sliderIndex = data.length;
      }
     sliderIndex--;
     setSlider();
 }
 
 function arrowRightClick () {   
     if(sliderIndex == data.length-1) {
         sliderIndex = -1;
     }
     sliderIndex++;
     setSlider();
 }
 //1.
 arrowLeft.addEventListener('click', arrowLeftClick)
 arrowRight.addEventListener('click', arrowRightClick)
 //2.
 document.addEventListener('keydown', function(event) {
     if (event.keyCode == 37) {
         arrowLeftClick();
     } else if (event.keyCode == 39) {
         arrowRightClick();
     }
 })
 //3.
 setInterval( () => {
     arrowRightClick ();
 }, 4000);
 
 setSlider();