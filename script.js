//API.KEY/"3401546730a9c71d13ecc5c87c3ea8b9";
//API.KEY"a139e4c2efb9609c9514fe04f9555b";
//"https://api.openweathermap.org/data/2.5/weather?q=hyderabad&appid=";
//"https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid=";
//https://maps.google.com/maps?q=hyderabad&t=&z=13&ie=UTF8&iwloc=&output=embed";



function searchCity(){
    let city=document.getElementById("city").value;
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3401546730a9c71d13ecc5c87c3ea8b9`;

    fetch(url).then(function(res){
        return res.json();
    }).then(function(res){
      //  console.log(res);
        append(res);
        findLatLon(res);
    }).catch(function(err){
        console.log(err);
    });
}

let showdata=document.getElementById("showdata");
let gmap=document.getElementById("gmap_canvas");
let nextpage=document.getElementById("nextpage");

function append(data){
    console.log(data);
   if(data.cod=="404" || data.cod=="400"){
    showdata.innerHTML=null;
    gmap.src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxifuRnw5XUQVLCNYuadKYLLG0pUG8roX80A&s";
    gmap.append(img);
   }
   else{
  
    gmap.src=null;
    showdata.innerHTML=null;
    let link=`https://maps.google.com/maps?q=${data.name}&t=&z=13&ie=UTF8&iwloc=&output=embed`;
    showdata.style.backgroundColor="rgba(186, 182, 182, 0.118)";

    let city=document.createElement("h1");
    city.innerText=data.name;


    let div1=document.createElement("div");
    let img1=document.createElement("img");
    img1.src="https://cdn-icons-png.flaticon.com/128/869/869767.png";
    let temp=document.createElement("p");
    temp.innerText=`Temp : ${(data.main.temp-273).toFixed(2)} C`;
    div1.append(img1,temp);

    let div2=document.createElement("div");
    let img2=document.createElement("img");
    img2.src="https://cdn-icons-png.flaticon.com/128/7827/7827910.png";
    let mintemp=document.createElement("p");
    mintemp.innerText=`Min-Temp : ${(data.main.temp_min-276).toFixed(2)} C`;
    div2.append(img2,mintemp);

    let div3=document.createElement("div");
    let img3=document.createElement("img");
    img3.src="https://cdn-icons-png.flaticon.com/512/7828/7828315.png"
    let maxtemp=document.createElement("p");
    maxtemp.innerText=`Max-Temp : ${(data.main.temp_max-270).toFixed(2)} C`
    div3.append(img3,maxtemp);

    let div4=document.createElement("div");
    let img4=document.createElement("img");
    img4.src="https://cdn-icons-png.flaticon.com/128/959/959711.png"
    let wind=document.createElement("p");
    wind.innerText=`Wind-Speed : ${(data.wind.speed).toFixed(2)} mph`
    div4.append(img4,wind);

    let div5=document.createElement("div");
    let img5=document.createElement("img");
    img5.src="https://cdn-icons-png.flaticon.com/128/414/414927.png"
    let clouds=document.createElement("p");
    clouds.innerText=`Clouds : ${(data.clouds.all)}`;
    div5.append(img5,clouds);

    let div6=document.createElement("div");
    let img6=document.createElement("img");
    img6.src="https://cdn-icons-png.flaticon.com/512/709/709768.png"
    let sunrise=document.createElement("p");
    sunrise.innerText=`SunRise :  ${((data.sys.sunrise)/1000000).toFixed(0)-1034} IST`;
    div6.append(img6,sunrise);

    let div7=document.createElement("div");
    let img7=document.createElement("img");
    img7.src="https://cdn-icons-png.flaticon.com/512/4958/4958520.png"
    let sunset=document.createElement("p");
    sunset.innerText=`SunSet : ${(+((data.sys.sunset)/1000000).toFixed(0) + 200)} IST`;
    div7.append(img7,sunset);

    gmap.src=link;

showdata.append(city,div1,div2,div3,div4,div5,div6,div7);

   }


}