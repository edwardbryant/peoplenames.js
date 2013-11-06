
/*

PeopleNames.js
--------------
created: 2013-10-31
updated: 2013-11-06

LIC: PeopleNames.js is licensed under the MIT license.

*/

var Name = function(firstGiven,secondGiven,surname){

	this.setFirstGiven(firstGiven);
	this.setSecondGiven(secondGiven);
	this.setThirdGiven("");
	this.setFourthGiven("");
	this.setSurname(surname);
	this.setSuffix("");
	this.setDisplay("first-m-last");
	
	this.isComplete = false;
	this.isMononymous = false;
	
	this.isWesternOrder = true;
	this.isEasternOrder = false;
	
};

Name.prototype.getName = function(type){
	switch(type){
		case "f":
			return this.firstGiven.substring(0,1)+".";
			break;
		case "f-last":
			return this.firstGiven.substring(0,1)+"."+" "+this.surname;
			break;
		case "flast":
			return this.firstGiven.substring(0,1)+"."+this.surname;
			break;
		case "f-middle-last":
			return this.firstGiven.substring(0,1)+"."+" "+this.secondGiven+" "+this.surname;
			break;
		case "f-m-last":
			return this.firstGiven.substring(0,1)+"."+" "+this.secondGiven.substring(0,1)+"."+" "+this.surname;
			break;
		case "fm-last":
			return this.firstGiven.substring(0,1)+"."+this.secondGiven.substring(0,1)+"."+" "+this.surname;
			break;
		case "fml":
			return this.firstGiven.substring(0,1)+"."+this.secondGiven.substring(0,1)+"."+this.surname.substring(0,1)+".";
			break;
		case "f-m-l":
			return this.firstGiven.substring(0,1)+"."+" "+this.secondGiven.substring(0,1)+"."+" "+this.surname.substring(0,1)+".";
			break;
		case "m":
			return this.secondGiven.substring(0,1)+".";
			break;
		case "l":
			return this.surname.substring(0,1)+".";
			break;
		case "first":
			return this.firstGiven;
			break;
		case "first-last":
			return this.firstGiven+" "+this.surname;
			break;
		case "first-middle-last":
			return this.firstGiven+" "+this.secondGiven+" "+this.surname;
			break;
		case "first-m-last":
			return this.firstGiven+" "+this.secondGiven.substring(0,1)+"."+" "+this.surname;
			break;
		case "middle":
			return this.secondGiven;
			break;
		case "last":
			return this.surname;
			break;
		case "last-first":
			return this.surname+", "+this.firstGiven;
			break;
		case "last-first-middle":
			return this.surname+", "+this.firstGiven+" "+this.secondGiven;
			break;
		case "last-first-m":
			return this.surname+", "+this.firstGiven+" "+this.secondGiven.substring(0,1)+".";
			break;
		case "display":
			return this.display;
			break;
		default:
			return this.display;
			break;	
	}
};

Name.prototype.setFirstGiven = function(name){
	this.hasFirstGiven = false;
	this.firstGiven = "";
	if(typeof name == 'string' || name instanceof String){
		if (name.length > 0){
			this.hasFirstGiven = true;
			this.firstGiven = name;
		}
	}	
};

Name.prototype.setSecondGiven = function(name){
	this.hasSecondGiven = false;
	this.secondGiven = "";
	if(typeof name == 'string' || name instanceof String){
		if (name.length > 0){
			this.hasSecondGiven = true;
			this.secondGiven = name;
		}
	}	
};

Name.prototype.setThirdGiven = function(name){
	this.hasThirdGiven = false;
	this.thirdGiven = "";
	if(typeof name == 'string' || name instanceof String){
		if (name.length > 0){
			this.hasThirdGiven = true;
			this.thirdGiven = name;
		}
	}	
};

Name.prototype.setFourthGiven = function(name){
	this.hasFourthGiven = false;
	this.fourthGiven = "";
	if(typeof name == 'string' || name instanceof String){
		if (name.length > 0){
			this.hasFourthGiven = true;
			this.fourthGiven = name;
		}
	}	
};

Name.prototype.setSurname = function(name){
	this.hasSurname = false;
	this.surname = "";
	if(typeof name == 'string' || name instanceof String){
		if (name.length > 0){
			this.hasSurname = true;
			this.surname = name;
		}
	}	
};

Name.prototype.setSuffix = function(name){
	this.hasSuffix = false;
	this.suffix = "";
	if(typeof name == 'string' || name instanceof String){
		if (name.length > 0){
			this.hasSuffix = true;
			this.suffix = name;
		}
	}	
};

Name.prototype.setDisplay = function(type){
	this.display = this.getName(type);
};

