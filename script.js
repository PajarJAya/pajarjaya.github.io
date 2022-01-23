
const scriptURL = "https://script.google.com/macros/s/AKfycbxhlo5_45-VVWMjIF_B8tcFGUswajoVr2DlzCX9yMIwJKNsQsh_6VUFGL3YqsmlWWwDDA/exec"
const form = document.forms['pajarjaya'];



 form.addEventListener('submit', e => {
     e.preventDefault()

     //ketika tombol disubmit 
     //tampilkan tombol loading hilangkan tombol kirim 

     
     fetch(scriptURL, { method: 'POST', body: new FormData(form)})
     .then(response =>{ 
         console.log('Success!', response) 
         form.reset();
         
        })
     .catch(error => console.error('Error!', error.message))
     });

     