var today = new Date();//오늘 날짜//내 컴퓨터 로컬을 기준으로 today에 Date 객체를 넣어줌
var date = new Date();//today의 Date를 세어주는 역할

// When the user clicks the button, open the modal 
function changeDisplay(id, option) {
  var modal = document.getElementById(id);
  modal.style.display = option;
}

// 달력에 일정 추가하기
function addSchedule(){
    var month = document.getElementsByName("month")[0].value;
    var date = document.getElementsByName("date")[0].value;
    var hour = document.getElementsByName("hour")[0].value;
    var minute = document.getElementsByName("minute")[0].value;
    var category = document.getElementsByName("category")[0].value;
    var name = document.getElementsByName("name")[0].value;

    // 달력 가져오기
    var tbCalendar = document.getElementById("calendar"); 
    
    // DIV 만들어서 날짜 아래 추가하기 (label button 등 다른거 가능)
    var post = document.createElement("DIV");
    var cat = "";
    if(category =="quiz") cat = "[퀴]";
    else if(category=="assignment") cat = "[과]";
    else if(category=="lecture") cat = "[강]";
    cat = cat+" "+name;
    post.innerHTML = cat;
    post.className="personalSchedule";
    post.setAttribute("onclick","changeDisplay("+cat+date+",'table')");

    // 달력에 일정 추가
    const fullDate = new Date(month+' '+date+', 2020');
    const week = fullDate.getDay();
    const row = Math.floor(fullDate.getDate()/7)+2;
    tbCalendar.rows[row].cells[week].appendChild(post);

    // 상세정보 생성
    detailedSchedule(cat, month, date,hour, minute);
    // 스케쥴 추가 창 없애기
    changeDisplay("pop","none");
}

function detailedSchedule(name, month, date,hour, minute){
    var miniView = document.getElementById("right_side");

    var miniPop = document.createElement("tbody");
    miniPop.setAttribute("class","detailed");
    miniPop.setAttribute("id",name+date);

    var nn=document.createElement("th");nn.innerHTML = name;
    var mm=document.createElement("td");mm.innerHTML = "날짜: "+month+"월 "+date+"일";
    var tt=document.createElement("td");tt.innerHTML = "시간: "+hour+"시 "+minute+"분";
    
    var tr=document.createElement("tr");
    tr.appendChild(nn);
    miniPop.appendChild(tr);

    tr=document.createElement("tr");
    tr.appendChild(mm);
    miniPop.appendChild(tr);

    tr=document.createElement("tr");
    tr.appendChild(tt);
    miniPop.appendChild(tr);    
    miniView.appendChild(miniPop);

    /*
    var left = 18+week*58;
    var top = 160+row*60;
    miniPop.style="left:"+left+"px;top:"+top+"px;";
    */
}


function dateOption(){
    var month = document.getElementsByName("month")[0].value;
    var tbCalendar = document.getElementById("pop");

    var date = document.getElementById("date");

    // 30일 옵션에 넣기
    if (month == "April" || month == "June"){ // 30일
        if(date.length != 30) {date.remove(30);}
    }

    // 31일 옵션에 넣기
    else {
        if(date.length != 31) {
            var z = document.createElement("option");        
            z.setAttribute("value", "31");
            var t = document.createTextNode("31");
            z.appendChild(t);
            date.appendChild(z);
        }
    }
}