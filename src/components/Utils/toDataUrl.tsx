export const toDataURL = (url: string) =>
  fetch(url)
    .then((response) => response.blob())
    .then(
      (blob) =>
        new Promise((resolve, reject) => {
          const reader = new FileReader();
          reader.onloadend = () => resolve(reader.result);
          reader.onerror = reject;
          reader.readAsDataURL(blob);
        })
    );

export const imageFiletoDataURL = async (element: any, callback: Function) => {
  const file = element.files[0];
  const reader = new FileReader();
  reader.onloadend = function () {
    if (typeof callback === "function") {
      callback(reader.result);
    }
  };
  reader.readAsDataURL(file);
};

// toDataURL('https://www.gravatar.com/avatar/d50c83cc0c6523b4d3f6085295c953e0')
//   .then(dataUrl => {
//     console.log('RESULT:', dataUrl)
//   })
