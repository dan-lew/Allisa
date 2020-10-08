document.getElementById("app").innerHTML = `
<h1>File Upload & FormData Example</h1>
<div>
<input type="file" id="fileInput" />
<input type="file" id="fileInput" multiple />
</div>
`;

const fileInput = document.querySelector("#fileInput");

const uploadFile = (files) => {
    console.log("Uploading file...");
    const API_ENDPOINT = "https://file.io";
    const request = new XMLHttpRequest();
    const formData = new FormData();
  
    request.open("POST", API_ENDPOINT, true);
    request.onreadystatechange = () => {
      if (request.readyState === 4 && request.status === 200) {
        console.log(request.responseText);
      }
    };
    
    for (let i = 0; i < files.length; i++) {
      formData.append(files[i].name, files[i])
    }
    request.send(formData);
  };
  fileInput.addEventListener("change", event => {
    const files = event.target.files;
    uploadFile(files);
  });

// const uploadFile = file => {
//   console.log("Uploading file...");
//   const API_ENDPOINT = "https://file.io";
//   const request = new XMLHttpRequest();
//   const formData = new FormData();

//   request.open("POST", API_ENDPOINT, true);
//   request.onreadystatechange = () => {
//     if (request.readyState === 4 && request.status === 200) {
//       console.log(request.responseText);
//     }
//   };
//   formData.append("file", file);
//   request.send(formData);
// };

// fileInput.addEventListener("change", event => {
//   const files = event.target.files;
//   uploadFile(files[0]);
// });