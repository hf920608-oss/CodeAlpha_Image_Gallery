/** @type {HTMLImageElement} */
  
  let gallery_container = document.getElementById('gallery_container');
  let gallery_img = document.querySelectorAll('.gallery-item');
  let lightbox = document.getElementById('lightbox'); 
  let light_box_image = document.getElementById('lightbox-img');
  let close_button = document.getElementById('close_btn'); 
  let prev_btn = document.getElementById('prev-btn'); 
  let next_btn = document.getElementById('next-btn'); 



let = gallery_index = 0;

  gallery_img.forEach((img , index) => {
   img.addEventListener('click', ()=>{
    gallery_index += index;
        gallery_container.style.display="none";
  lightbox.style.display="flex";
   light_box_image.src = img.src;
   console.log(light_box_image,index);
   })

  });
    next_btn.addEventListener('click' ,()=>{
     gallery_index = gallery_index +1;
     if(gallery_index >= gallery_img.length){
          gallery_index = 0;
     }
     light_box_image.src = gallery_img[gallery_index].src
   })
       prev_btn.addEventListener('click' ,()=>{
     gallery_index = gallery_index -1;
     if(gallery_index < 0){
          gallery_index = gallery_img.length - 1;
     }
     light_box_image.src = gallery_img[gallery_index].src
   })
  function close_btn() {
    gallery_container.style.display="flex";
  lightbox.style.display="none";
  }
