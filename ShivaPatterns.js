//5 X 1
var z=" ";
for(var i=1;i<=5;i++){
	z=" ";
	for(var k=5;k>=1;k--){
		if(k>=i){
			
			z=z+" "+k;
		}
	}
console.log(z);
} 
console.log("\n \n \n");
//5 4 3 2 1

var z=" ";
for(var i=1;i<=5;i++){
	z=" ";
	for(var k=5;k>=1;k--){
		
			z=z+" "+k;
	
	}
console.log(z);
} 
console.log("\n \n \n");

//E-----A
var z=" ";
for(var i=1;i<=5;i++){
	z=" ";
	for(var k=1;k<=5;k++){
		if(k<=i){
			when(i){
				case 1:z="A"+" "+z;
				case 2:z="B"+" "+z;
				case 3:z="C"+" "+z;
				case 4:z="D"+" "+z;
				case 5:z="E"+" "+z;
				default:z=" "+z;
			}	
		}
		else{
			
			z="  "+z;
		}
		
	}
console.log(z);
}


