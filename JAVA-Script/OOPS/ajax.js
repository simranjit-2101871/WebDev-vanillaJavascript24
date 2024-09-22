/*AJAX use of the built-in browser XMLHttpRequest (XHR) objects to send and receive information to and from a web server asynchronously, in the 
background, without blocking the page or interfering with the user's experience.

Ajax uses XHTML for the content, CSS for designing, along with Document Object Model and JavaScript for dynamic content display. Before AJAX 
technology, the web applications transmit information to and from the server using synchronous requests. It this we fill out a form, hit submit, 
and get directed to a new page with new information from the server. But with AJAX, when we hit submit, JavaScript will make a request to the 
server, interpret the results, and update the current screen. */



//NOTE=VANILLA JAVASCRIPT MEANS PURE JAVASCRIPT ,wihtoust any library
let fetchBtn=document.getElementById('fetchBtn');
fetchBtn.addEventListener('click',buttonClickHandler);

function buttonClickHandler(){
    console.log("Button dba diya");

    //xhr object banao
    const xhr = new XMLHttpRequest();

    //1.) open the object // try to use post request as we cansend bigger data with that
    xhr.open('GET','simran.txt',true);//request for gettingte data from the simran file in asynchronus manner(true) //get mai sirf url jayega simple

    //2.) Nxt three objects are optional
    xhr.onprogress=function(){
        console.log("On progress");
    }

    //3.) xhr.onreadystatechange=fucntion(){          //codes for a states  0-4
      //  console.log('ready state is',xhr.readyState);
    //}




    //4.) when data is ready ,tab kya karega
    xhr.onload=function(){
        if(this.status===200){
            console.log(this.responseText);//Yes, that's correct. When you make an XMLHttpRequest and the server responds, the data sent back by the server is stored in the this.responseText property of the XMLHttpRequest object. This property contains the response as a text string.
        }
        else{
            console.log("Some error ocurred");
        }
        
    }


    //5.) ab request send bhi karni padegi after get request
    xhr.send();
}








// 6.) now we wnat he data in object form not in string so lets wrote another codelet popBtn = document.getElementById('popBtn');



let popBtn = document.getElementById('popBtn');

popBtn.addEventListener('click', popHandler);

function popHandler() {
    console.log('You have clicked the pop handler');

    //1.) Instantiate an xhr object
    const xhr1 = new XMLHttpRequest();

    // 2.) Open the object
    xhr1.open('GET', 'http://dummy.restapiexample.com/api/v1/employees', true);


    //3.) What to do when response is ready
    xhr1.onload = function () {
        if(this.status === 200){
            let obj = JSON.parse(this.responseText);
            console.log(obj);
            let list = document.getElementById('list');
            str = "";
            for (key in obj)
            {
                str += `<li>${obj[key].employee_name} </li>`;
            }
            list.innerHTML = str;
        }
        else{
            console.log("Some error occured")
        }
    }
     // 4.) send the request
     xhr1.send();
     console.log("We are done fetching employees!");
}
