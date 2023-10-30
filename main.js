let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

let cardNumber = id("card-number"),
    expMonth = id("month"),
    expYear = id("year"),
    expCvc = id("security"),
    confirmBtn = id("confirmbtn"),
    form = id("form"),
    modal = id("modal"),
    
    nameError = classes("name-error"),
    numberError = classes("number-error"),
    expError = classes("error2"),
    errorBlank = classes("error-blank");

    const re = /([a-zA-Z])/; // /^[a-zA-Z](.+[.0-9])*\d$/;
    const numb = /^\d+/;

    form.addEventListener("submit", (e) => {
        e.preventDefault();
          
        if(inputName.value.trim() === ''){
            nameError[0].innerHTML = "Can not be empty";
            inputName.style.border = "1px solid hsl(0, 100%, 66%)";
            modal.style.display = 'none';

        }/*else if(inputName.value.match(numb)){
            numberError[0].innerHTML = "Wrong format, letters only";
            inputName.style.border = "1px solid hsl(0, 100%, 66%)";
        }*/
        
        else{
            nameError[0].innerHTML = '';
            inputName.style.border = '';
            modal.style.display = 'block';
         
        }

        if(cardNumber.value.trim() === ''){     //&& cardNumber.value.match(re)){
            numberError[0].innerHTML = "Wrong format, numbers only";
            cardNumber.style.border = "1px solid hsl(0, 100%, 66%)";
            
        }else{
            numberError[0].innerHTML = '';
            cardNumber.style.border = ''; 
            thankYou.style.display = 'block';
            form.style.display = 'none';
        }

        if(expMonth.value.trim() === ''){
            expError[0].innerHTML = "Can't be blank";
            expMonth.style.border = "1px solid hsl(0, 100%, 66%)";
           
        }else{
            expError[0].innerHTML = '';
            expMonth.style.border = '';
            
        }

        if(expYear.value.trim() === ''){
            expYear.style.border = "1px solid hsl(0, 100%, 66%)";
        }else{
            expYear.style.border = '';
        }

        if(expCvc.value.trim() === ''){
           errorBlank[0].innerHTML = "Can't be blank";
           expCvc.style.border = "1px solid hsl(0, 100%, 66%)";
        }else{
            errorBlank[0].innerHTML = '';
            expCvc.style.border = '';
        }  

    });

    const cardName = document.querySelector(".acct-holder");
    const inputName = document.querySelector("#cardholder");

    const creditNumber = document.querySelector(".acct-number");
    const inputCard = document.querySelector("#card-number");

    const expDate = document.querySelector(".mm");
    const inputDate = document.querySelector("#month");

    const cardYear = document.querySelector(".yy");
    const yYear = document.querySelector("#year");

    const zero = document.querySelector(".triple-zero");
    const inputZero = document.querySelector("#security");

   // const cardHolder = document.querySelector("#cardHolder");

    
   

       inputName.addEventListener("input", () => {
           cardName.innerHTML = inputName.value;
        });

        inputCard.addEventListener("input", () => {
            creditNumber.innerHTML = inputCard.value.match(/.{1,4}/g).join(" ");
        });

      

        inputDate.addEventListener("input",() => {
            expDate.innerHTML = inputDate.value;
        });

        yYear.addEventListener("input",() => {
            cardYear.innerHTML = yYear.value;
        });

        inputZero.addEventListener("input",() => {
            zero.innerHTML = inputZero.value;
        });

        
            
      //THANK YOU SECTION

      let thankYou = document.getElementById('modal');
      let btnModal = document.getElementById('thankbtn'); //thankyou button
      let thanks = document.getElementsByClassName('thanks')[0];
      
        //OPEN MODAL
        
        confirmBtn.addEventListener('click', openModal);

        btnModal.addEventListener('click', closeForm);

        function openModal(){
                                                 // console.log(123); test
           thanks.style.display = 'block';

        }
        // TO CLOSE FORM ON CLICK

        //confirmBtn.addEventListener('click', closeForm);

        function closeForm(){
            thanks.style.display = 'none';
            form.style.display = 'block';
        }
        
   
    