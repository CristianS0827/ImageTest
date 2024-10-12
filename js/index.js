document.getElementById('button1').addEventListener('click', function() {
    showImage('image1');
  });
  
  document.getElementById('button2').addEventListener('click', function() {
    showImage('image2');
  });
  
  document.getElementById('button3').addEventListener('click', function() {
    showImage('image3');
  });
  
  function showImage(imageId) {

    document.getElementById('image1').style.display = 'none';
    document.getElementById('image2').style.display = 'none';
    document.getElementById('image3').style.display = 'none';
    document.getElementById(imageId).style.display = 'block';
  }