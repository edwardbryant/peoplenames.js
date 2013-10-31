
var Name = function(first,middle,last){

	var first = first;
	var middle = middle;
	var last = last;
	
	this.getName = function(type){
		if ((typeof first == 'string' || first instanceof String) && (typeof middle == 'string' || middle instanceof String) && (typeof last == 'string' || last instanceof String)){
			switch(type){
			case "f":
				return first.substring(0,1)+".";
				break;
			case "f-last":
				return first.substring(0,1)+"."+" "+last;
				break;
			case "flast":
				return first.substring(0,1)+"."+last;
				break;
			case "f-middle-last":
				return first.substring(0,1)+"."+" "+middle+" "+last;
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
			case "m":
				return middle.substring(0,1)+".";
				break;
			case "l":
				return last.substring(0,1)+".";
				break;
			case "first":
				return first;
				break;
			case "first-last":
				return first+" "+last;
				break;
			case "first-middle-last":
				return first+" "+middle+" "+last;
				break;
			case "first-m-last":
				return first+" "+middle.substring(0,1)+"."+" "+last;
				break;
			case "middle":
				return middle;
				break;
			case "last":
				return last;
				break;
			case "last-first":
				return last+", "+first;
				break;
			case "last-first-middle":
				return last+", "+first+" "+middle;
				break;
			case "last-first-m":
				return last+", "+first+" "+middle.substring(0,1)+".";
				break;
			default:
				return first+" "+middle.substring(0,1)+"."+" "+last;
				break;	
			}
		}
	};
	
	var display = this.getName();

	this.getDisplay = function(){ return display; };

	this.setDisplay = function(type){
		display = this.getName(type);
	};
	
};