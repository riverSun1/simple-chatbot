var app = document.getElementById("type");

var typewriter = new Typewriter(app, {
    loop: false,
});

var question = ""; //사용자의 질문을 임시 저장할 변수
var answer = ""; //사용자의 대답을 임시 저장할 변수

var key = 0; // 키 값을 이용하여 말을 배우는 상황인지 아닌지 판별합니다.

var json = 
[
	{
		"question" : "생선",
		"answer" : "냥♥"
	},
	{
		"question" : "강아지",
		"answer" : "냥..."
	}
]

function push_json(){
	json.push({question: `${question}`, answer: `${answer}`}); //json이라는 데이터에 값을 추가하는 push함수
	document.getElementById("cat_console").innerHTML = "말을 배웠다 냥! (방금 했던 질문을 다시해보세요!)";
	key = 0; //키 값 0으로 초기화
}

function check_text() {
    var value = document.getElementById("console").value;
	var reply = document.getElementById("cat_console");

    if(key == 1){
        if(value == "네"){
            reply.innerHTML = "방금전 질문에 대한 '대답'을 입력해주세요!";
            key = 2;
        }
        else {
            reply.innerHTML = "냐~!!!";
            key = 0;
        }
        return;
    }

    if(key == 2){
        answer = value; //전역변수 answer값에 사용자의 입력을 저장
        push_json(); //json 데이터에 값을 추가하는 함수 (추후 생성)
        return;
    }

    for(let i = 0; i < json.length; i++){
        if(value == json[i].question){
            reply.innerHTML = json[i].answer;
            return;
        }
    }

    reply.innerHTML = "말을 가르쳐 줄래냥?(네 or 아니요)";
    question = value;
    key = 1;

	if(value == "불꺼"){
        reply.innerHTML = "냥!";
	    document.body.style.backgroundColor = '#606060';
	}
	else if(value == "불켜"){
			reply.innerHTML = "냥?";
            reply.style.background = '#FFFFFF';
    }
    else if(value == "불다켜"){
			reply.innerHTML = "냐앙~!";
			document.body.style.backgroundColor = '#FFFFFF';
	}
    else{
        reply.innerHTML = "말을 가르쳐 줄래냥?(네 or 아니요)";
        type.style.color = "black"; 
        type.style.backgroundColor = "#76b3fa";

        typewriter
            .typeString('코묘가 알아듣지 못한 것 같다')
            .pauseFor(1300)
            .deleteAll()
            .start();
    }
}