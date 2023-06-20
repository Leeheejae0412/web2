let state = false; //변수를 초기화하고 기본 상태를 false로 설정

let btn = document.querySelector(".btn"); //버튼 이벤트 연결
let record = document.querySelector(".recordd"); //레코드 이벤트 연결
let toneArm = document.querySelector(".tone-arm"); //톤암 이벤트 연결
let song = document.querySelector(".my-song"); //노래 이벤트 연결
let slider = document.querySelector(".slider"); //슬라이더 이벤트 연결

btn.addEventListener("click",() => {
    if (state == false) {
        record.classList.add("on");
        toneArm.classList.add("play"); //기본 상태가 false라면 아래의 이벤트를 실행시킨다
        setTimeout(() => {
            song.play();
            
        }, 1000); //setTimeout을 활용하여 이벤트 실행
    }   else {
        record.classList.remove("on");
        toneArm.classList.remove("play");
        song.pause(); //클릭시 노래 재생을 중지시키는 이벤트
    }
    state = !state; //클릭에 따른 상태 제어를 돕는 함수
    


    });

    slider.addEventListener("input", (e) => {
        song.volume = Number(e.target.value);


    }); //슬라이더의 위치에 따라 노래의 크기를 줄였다 키울 수 있는 함수