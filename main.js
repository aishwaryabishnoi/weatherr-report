var getlocation = "";
function checkweather()
 {
    var location = document.querySelector("#cityname").value;
    if(location==""){
        alert("Please enter a valid location");
    }
    else{
        getlocation = location;
        let searchURL = "http://localhost:3000/" + location;
        fetch(searchURL)
        .then(function(response){
            return response.json();
        })
        .then(function(result){
            displayLocationResult(result);
        })
        .catch(function(error){
            console.log(error.message);
        });
    }
 }   
    
function displayLocationResult(result){
    let msgDiv = document.querySelector("#message");
    let div = document.querySelector("#result");
    //test
    console.log(result);

     if(result.message){
         div.innerHTML = "";
         msgDiv.innerHTML = `<div class="alert alert-danger alert-dismissible" role="alert">\
                             <strong>oops!</strong>${result.messsage}\
                             <button type="button" class="close" data-dismiss="alert" aria-label="Close">\
                             <span aria-hidden="true">&times;</span>\
                             </button>\</div>`;
     }
     else{

        msgDiv.innerHTML =   `<div class="alert alert-danger alert-dismissible" role="alert">\
                              <h3 style="text-align:center";>Weather of ${getlocation}</h3>\
                              <button type="button" class="close" data-dismiss="alert" aria-label="Close">\
                              <span aria-hidden="true">&times;</span>\
                              </button>\</div>`;
        div.innerHTML = "";
        const weather = result.consolidated_weather;
        console.log(weather);
        
        for(let i = 0;i<weather.length;i++){
            console.log(weather[i].weather_state_name);
            var elements = `<div>${weather[i]}`;
            var getdata =` <div class="row">
                              <div class="col-sm-6 col-md-4">
                                 <div class="thumbnail">
                                     <img src="..." alt="...">
                                     <div class="caption">
                                        <h3>Thumbnail label</h3>
                                        <p>...</p>
                                      </div>
                                  </div>
                              </div>
                         </div>`
        }
     }
    

    
    
}

    
