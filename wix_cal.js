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
    post.innerHTML = cat+" "+name;
    post.className="personalSchedule";
    post.setAttribute("onclick","changeDisplay('personalSchedule','block')");

    // 달력의 어디에 추가 되는 것인지 확인
    const fullDate = new Date(month+' '+date+', 2020');
    const week = fullDate.getDay();
    tbCalendar.rows[Math.floor(fullDate.getDate()/7)+2].cells[week].appendChild(post);

    detailedSchedule();
    // 스케쥴 추가 창 없애기
    changeDisplay("pop","none");
}

function detailedSchedule(){
    var miniPop = document.createElement("DIV");
    miniPop.className="detailed";
    miniPop.id="personalSchedule";
    miniPop.innerHTML = "WOW";
    miniPop.style="right:280px;top:50px;";
    document.body.appendChild(miniPop);
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