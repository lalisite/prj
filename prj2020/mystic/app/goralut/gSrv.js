app.factory("gSrv", function ($http, $q) {
    
     
            async function getGoralById(goral,gId) 
            {
                
                    let res= await  $http.get("db/"+goral+".json").then(function(response) {
                    let myData = response.data.data;
                    return myData[gId-1].meaning;
                    
                    });

                    return res;
            }

            async function getGoralById2(goral,gId) 
            {
                
                    let res= await  $http.get("db/"+goral+".json").then(function(response) {
                    let myData = response.data.data;
                   // let s=myData[gId-1].idname+" \n\n  "+myData[gId-1].title+" \n\n  "+myData[gId-1].meaning ;
                    return myData[gId-1];
                    
                    });

                    return res;
            }
    
            
    return {

        getGoralById:getGoralById,
        getGoralById2:getGoralById2
    }


})