const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryEl =document.querySelector('.gallery');

const makeImages=({url,alt}={})=>{
  return `<li><img src='${url}' alt='${alt}'width=600px height=400px></li>`
  
}

const arrOfimages = images.map(el=>makeImages(el))
console.log(arrOfimages)
galleryEl.style.display='Flex'
galleryEl.style.flexWrap='Wrap'
galleryEl.insertAdjacentHTML('afterbegin',arrOfimages)