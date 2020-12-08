app.controller('gCtrl', function($scope,gSrv) {
   // $scope.s="";

   $scope.res_idname="";
   $scope.res_title="";

    $scope.goral="";
    $scope.goral2="";
    
    var rndNum=0;
    
    $scope.result="";
    $scope.result2="";
    //console.log();

    $scope.goral=async function(g,n){
            //rnd num 
            rndNum=Math.floor((Math.random()*n)+1);
           
            await  gSrv.getGoralById(g,rndNum.toString()).then(function (res) {
                $scope.result=res;

                $scope.$apply();
        })
    } ;
 

    $scope.goral2=async function(g,n){
        //rnd num 
        rndNum=Math.floor((Math.random()*n)+1);
       
        await  gSrv.getGoralById2(g,rndNum.toString()).then(function (res2) {
            $scope.res_idname=res2.idname;
            $scope.res_title=res2.title;
            
            $scope.result2=res2.meaning ;

            $scope.$apply();
    })
} ;


});