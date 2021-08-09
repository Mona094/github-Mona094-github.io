let data = {
    photo: 'images/photo1.jpg',
    title: 'kep 1',
    description: 'What happened here, why is this a very nice image'
  };
  
  $('#photo').attr('src', data.photo);
  // ...


let currentPhoto = 0;
let imagesData = [...];
$('#photo').attr('src', imagesData[currentPhoto].photo);
// ...


let loadPhoto = (photoNumber) => {
    $('#photo').attr('src', imagesData[photoNumber].photo);
    // ...
  }
  
  loadPhoto(currentPhoto);
  
  $('#right-arrow').click(() => {
    currentPhoto++;
    loadPhoto(currentPhoto);
  })