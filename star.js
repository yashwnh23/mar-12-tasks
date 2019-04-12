var z=" ";
for(var i=1;i<=10;i++){
	z=" ";
	for(var k=1;k<=10;k++){
		if(k<=i){
			
			z="*"+" "+z;
		}
		else{
			
			z="  "+z;
		}
		
	}
console.log(z);
} 
