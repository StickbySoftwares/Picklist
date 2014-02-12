

var DataService=(function(){
var data = [{ ID: 1, SrNo: 123 }, { ID: 2, SrNo: 456 }, { ID: 3, SrNo: 789 }, { ID: 4, SrNo: 91011 }, { ID: 5, SrNo: 121314 }];
var dataFunc=function (){
return data;
}
return{
getData:dataFunc
};
}());