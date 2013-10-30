
var Name = function(first,middle,last){

	var first = first;
	var middle = middle;
	var last = last;
	var display = "";

	this.getName = function(type){
		switch(type){
			case "f":
				return first.substring(0,1)+".";
				break;
			case "first":
				return first;
				break;
			case "m":
				return middle.substring(0,1)+".";
				break;
			case "middle":
				return middle;
				break;
			case "l":
				return last.substring(0,1)+".";
				break;
			case "last":
				return last;
				break;
			case "first-last":
				return first+" "+last;
				break;
			case "last-first":
				return last+", "+first;
				break;
			case "first-middle-last":
				return first+" "+middle+" "+last;
				break;
			case "f-last":
				return first.substring(0,1)+"."+" "+last;
				break;
			case "first-m-last":
				return first+" "+middle.substring(0,1)+"."+" "+last;
				break;
			case "f-m-last":
				return first.substring(0,1)+"."+" "+middle.substring(0,1)+"."+" "+last;
				break;
			case "fm-last":
				return first.substring(0,1)+"."+middle.substring(0,1)+"."+" "+last;
				break;
			case "fml":
				return first.substring(0,1)+"."+middle.substring(0,1)+"."+last.substring(0,1)+".";
				break;
			case "f-m-l":
				return first.substring(0,1)+"."+" "+middle.substring(0,1)+"."+" "+last.substring(0,1)+".";
				break;
			default:
				return first+" "+middle.substring(0,1)+"."+" "+last;
				break;	
		}
	};

	
	
};