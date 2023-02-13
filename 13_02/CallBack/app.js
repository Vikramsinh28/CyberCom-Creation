function makeTea(boilTeaLeaves, addMilk){
    setTimeout(function(){
      console.log("")
    },5000)
    boilTeaLeaves();
    addMilk();
}
function boilTeaLeaves(){
    setTimeout(function(){
        console.log("boil Tea Leaves")
    },2000)
}
function addMilk(){
    setTimeout(function(){
        console.log("add milk")
    },0)
}
