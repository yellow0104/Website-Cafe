// var name = prompt("what are you name?");
// alert(name + " 님,안녕하세요?")



var btn = document.getElementById('box_ice');
btn.addEventListener('click', function (){
    if(confirm("아메리카노 를 주문하시겠습니까?") == true){
        alert("아메리카노 한잔 주문되었습니다.")
    };
})


var btn = document.getElementById('box_latte');
btn.addEventListener('click', function (){
    if(confirm("카페라떼 를 주문하시겠습니까?") == true){
        alert("카페라떼 한잔 주문되었습니다.")
    };
})



var btn = document.getElementById('box_poop');
btn.addEventListener('click', function (){
    if(confirm("똥맛커피 를 주문하시겠습니까?") == true){
        alert("똥맛커피 한잔 주문되었습니다.")
    };
})

var btn = document.getElementById('box_cocoa');
btn.addEventListener("click", function(){
    if(confirm("코코아 를 주문하시겠습니까?") == true){
        alert("코코아 한잔 주문되었습니다.")
    };
})