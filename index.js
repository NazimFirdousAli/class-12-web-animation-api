var cloudElement = document.getElementById("cloud-div");
var planElement = document.getElementById("plane-div");

var cloudAnimationElement = cloudElement.animate([
    {transform: 'translate(80%,0)'},
    {transform: 'translate(-80%,0)'},
    
],{
    duration:5000,
    iterations: Infinity,
})

var planeAnimationElement = planElement.animate([
    
    {transform:' translate(0px,0)'},
    {transform:' translate(100px,0px)'},
    {transform:'rotate(-5deg) translate(300px,0)'},
    {transform:'rotate(-15deg) translate(500px,0)'},
    {transform:'rotate(-25deg) translate(800px,0)'},
    
    

    
],{
    duration:3000,
    iterations:Infinity
})

