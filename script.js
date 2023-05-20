const BLANKIMAGE = 'data:image/gif;base64,R0lGODlhAQABAAAAACwAAAAAAQABAAA=';

const mainContainer = document.querySelector('main');
const uploadLogoContainer = document.querySelector('.upload-logo-container');

const COLORSCHEME = {
  pinkTheme: {
    color: '#d8338b',
    background: '#f1c2db',
  },

  blueTheme: {
    color: '#2ab2e4',
    background: '#b5e4f5',
  },

  yellowTheme: {
    color: '#fed24b',
    background: '#feeebe',
  },
};

function changeUmbrellaColor(color) {
  const umbrella = document.getElementById('umbrella-img');
  umbrella.src = 'assets/images/umb-' + color + '.png';
  uploadLogoContainer.style.backgroundColor =
    COLORSCHEME[color + 'Theme'].color;
  mainContainer.style.backgroundColor = COLORSCHEME[color + 'Theme'].background;
}

const colorSelectors = document.querySelectorAll('.color-selector');

for (let colorButton of colorSelectors) {
  colorButton.addEventListener('click', function () {
    changeUmbrellaColor(colorButton.dataset.color);
  });
}

//  upload logo button logic
const imageInput = document.getElementById('inputUploadLogo');
const imageName = document.getElementById('imageName');
const resetLogoUpload = document.getElementById('resetLogoUpload');
const uploadedLogoImg = document.getElementById('uploadedLogoImg');

imageInput.addEventListener('change', () => {
  if (imageInput.files.length === 0) return;
  const currFile = imageInput.files[0];

  if (currFile.size > 5242880) {
    alert('File size should be less than 5MB');
    return;
  }

  imageName.innerText = currFile.name;
  resetLogoUpload.style.display = 'block';
  uploadedLogoImg.src = URL.createObjectURL(currFile);
});

resetLogoUpload.addEventListener('click', () => {
  imageInput.value = '';
  imageName.innerText = 'UPLOAD LOGO';
  uploadedLogoImg.src = BLANKIMAGE;
  resetLogoUpload.style.display = 'none';
});
