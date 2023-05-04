const y=document.querySelector(".r1");
const m=document.querySelector(".r2");
const d=document.querySelector(".r3");
const r=document.querySelector(".submit-arrow");
const i_d=document.querySelector("#day");
const i_m=document.querySelector("#Month");
const i_y=document.querySelector("#Year");
r.addEventListener('click',determineage)
function determineage(){
    var tod=new Date();
    let days = parseInt(i_d.value);
    let months = parseInt(i_m.value);
    let year = parseInt(i_y.value);
    if ((months==2 && days>29)||(days==29 && months==2 && year%4!=0)||((months==4 || months==6 || months==9 || months==11) && days>30)||(year>tod.getFullYear())||(year==tod.getFullYear() && months>tod.getMonth()+1)||(year==tod.getFullYear() && months==tod.getMonth()+1 && days>tod.getDate())){
        alert("Enter valid date");
        d.textContent="--";
        m.textContent="--";
        y.textContent="--";
    }else{
        if (isNaN(days) || isNaN(months) || isNaN(year)) {
            alert("Please enter valid date values!");
            return;
        }
        let dob=`${months}/${days}/${year}`;
        let ob=new Date(dob);
        let diff=Date.now()-ob;
        let nd=new Date(diff);
        let years=nd.getUTCFullYear()-1970;
        let month=nd.getUTCMonth();
        let day=nd.getUTCDate()-1;
        d.textContent=day;
        m.textContent=month;
        y.textContent=years;
    }
}