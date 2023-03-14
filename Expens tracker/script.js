const balence = document .getElementById(
    "balaence"
    );

    const money_plus = document.getElementById(`money-plus`);
    const money_minus = document.getElementById('money-minus');
    const list = document.getElementById("list");
    const form = document.getElementById('from');
    const text = document.getElementById('text');
    const amount = document.getElementById('amount');

    
    let Transactions = [];

    //Add transaction
    function addTranasaction(e){
        e.preventDefault();
        if(
            text.Value.trim() === "" || amount.value.trim() === ""
        ){
            alert("please enter text and value");
        }else{
            const tranasaction ={
                id:generatreid(),
                text:text.value,
                amount: +amount.value,
            };

            tranasaction.push(tranasaction);
            addTranasactionDOM(tranasaction);
            updatevalues();
            text.value="";
            amount.value="";
        }

    }
      //Generate id
      function generateid(){
        return Math.floor(Math.random()*100000000);
      }
    function addTranasaction(tranasaction){
        const sign = tranasaction.amount< 0 ? "-" : "+";
        const item = document.createElement("li");


        item.classList.add(
            tranasaction.amount < 0 ? "minus" : "plus"
            )

            item.innerHTML =`
            $(transaction.text)<span>4(sign)$(Math.abs(transcation.amount))</span>
            <button class="delete-btn" onclick ="">X</button> 
            `;
            list.appendChild(items);
    

     //update  updateValues

     function updateValues(){
        const amounts = tranasaction.map(tranasaction => tranasaction.amount);
        const total = amounts .reduce((acc,item)=>(acc += item),0).toFixed(2);
        const income = amounts.filter(item => item > 0).reduce((acc , item)=> (acc =+ item) ).toFixed(2);
        const expens = (amounts.filter(item => item< 0).reduce((acc , item)=>(acc += item),0)* -1 ).toFixed(2);

         balance.innerText=`$${total}`;
         money_plus.innerText=`$${income}`;
         money_minus.innerText=`$${expens}`
      }

     //Init app
     function Init(){
        list.innerHTML="";
        tranasactions.foreach(addTranasactionDOM);
        updateValue();
     }
     Init();
    from.addEventlistener("submit",addtransaction);

    }
    