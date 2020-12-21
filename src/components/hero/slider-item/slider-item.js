import './slider-item.css';

const refs = {
  sliderItem: document.querySelector('.hero-wrapper')
}
const onItemClick = (event) => {
  const {target: { nodeName }} = event; //event.target destructuring 

  if (nodeName !== 'LI' && nodeName !== 'IMG') return;
  // openModal();
  console.log(nodeName);
  console.log(event.target);
}

refs.sliderItem.addEventListener('click', onItemClick)