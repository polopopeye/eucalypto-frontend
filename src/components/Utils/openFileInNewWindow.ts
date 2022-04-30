// This open the large base64 files in a new tab // ...and any other file in a new tab

const openFileInNewWindow = (dataUri: string) => {
  const win = window.open();
  win!.document.write(
    '<iframe src="' +
      dataUri +
      '" frameborder="0" style="border:0; top:0px; left:0px; bottom:0px; right:0px; width:100%; height:100%;" allowfullscreen></iframe>'
  );
};

export default openFileInNewWindow;
