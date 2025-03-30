// @@ -1,2 +1,134 @@
 let data = [
     {
         id: 1,
         imageUrl: 'https://images.bolt.eu/store/2022/2022-07-20/289e90b8-fa1c-4fb9-b90a-6758a016d650.jpeg',
         // title: '1. Flamingo',
         url: 'https://www.google.com/search?q=flamingo&sxsrf=ALiCzsYljkbPSNkNuKNn37zWGfgz4Aew9g:1652188105534&source=lnms&tbm=isch&sa=X&ved=2ahUKEwito4epgNX3AhVSSvEDHXIiB2sQ_AUoAXoECAMQAw&biw=1920&bih=969&dpr=1',
     },
     {
         id: 2,
         imageUrl: 'https://thumbs.dreamstime.com/z/traditional-georgian-sweets-called-churchkhela-churchela-candle-shaped-grape-juice-candy-nuts-inside-traditional-georgian-161801425.jpg',
         // title: '2. Giraffe',
         url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0lwHzvnxdwvb7S9D4wHAlqDBJoxRRQZ5re5Et0xmLnExan2nhtXTn9CUxJzF9Wp_RtG0&usqp=CAU'
     },
     {
         id: 3,
         imageUrl: 'https://images.bolt.eu/store/2022/2022-07-20/65c4b4ec-6829-4d24-8c98-9171219e8ab8.jpeg',
         // title: '3. Elephant',
         url: 'https://www.google.com/search?q=elephant&tbm=isch&ved=2ahUKEwig85LVgNX3AhUZgv0HHcikCMIQ2-cCegQIABAA&oq=elephant&gs_lcp=CgNpbWcQAzIHCCMQ7wMQJzIHCCMQ7wMQJzIFCAAQgAQyBAgAEEMyBQgAEIAEMgUIABCABDIFCAAQgAQyBQgAEIAEMgUIABCABDIFCAAQgARQ2A9YuRRg4h1oAHAAeACAAZ4CiAGIBZIBBTAuMi4xmAEAoAEBqgELZ3dzLXdpei1pbWfAAQE&sclient=img&ei=JWR6YuDMPJmE9u8PyMmikAw&bih=969&biw=1920'
     },
     {
         id: 4,
         imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTO3qVvhp-R6h7fon6se5p53lJNXTNrnVZyTIfUth8xhSirtinFVoypfTP11noeF29E3Tc&usqp=CAU',
         // title: '4. Crowned Crane',
         url: 'https://www.google.com/search?q=crowned+crane&hl=en&sxsrf=ALiCzsZnbFDyz6pgK7rb45KuI7I_g2f1lQ:1652188368850&source=lnms&tbm=isch&sa=X&ved=2ahUKEwjU4M6mgdX3AhVbQvEDHYQHDTkQ_AUoAXoECAIQAw&biw=1920&bih=969&dpr=1'
     },
     {
         id: 5,
         imageUrl: 'https://www.dolceconfections.com/wp-content/uploads/2020/03/Mixed-Dreid-Fruit.jpg',
         // title: '5. Mandarin duck',
         url: 'https://www.google.com/search?q=Mandarin+duck&sxsrf=ALiCzsYalOgGWVkNRzipbE5oN3aQ0EFoiA:1652188480823&source=lnms&tbm=isch&sa=X&ved=2ahUKEwiwi4HcgdX3AhWvQvEDHSgxDv0Q_AUoAXoECAIQAw&biw=1920&bih=969&dpr=1'
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