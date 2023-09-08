
const inputarray=JSON.parse(localStorage.getItem("itemslist"));

function call()
{
  const input1=document.getElementById("input1");
  const inputitems = input1.value;
  inputarray.push(inputitems);
  
  loopArray();
  input1.value=' ';
  locals();
  const fed = document.getElementById("trans");
  fed.style.backgroundColor="#F31559"
    fed.innerText="Loading...."
    
  setTimeout(function(){
    
    fed.innerText="added..!"
    fed.style.backgroundColor="green"
  },500)
  setTimeout(function(){
    fed.innerText="Add"
    fed.style.backgroundColor="white"
  },1500)
  
}

function loopArray()
{
    let listItems =' '
    for(let i=0;i<=inputarray.length-1;i++)
    {
        const res = inputarray[i];
        const htmlcode = `<p>${res}
        <button onclick =" 
        inputarray.splice(${i},1)
        loopArray()
        locals();
        ">Remove
  
        
        <i class="fa-solid fa-trash"></i></button>
        </p> `
        listItems +=htmlcode;
    }
    const html = document.getElementById("output");
    html.innerHTML=listItems;
}


function locals (){
  localStorage.setItem("itemslist", JSON.stringify(inputarray));
}
const www = document.getElementById("look");





