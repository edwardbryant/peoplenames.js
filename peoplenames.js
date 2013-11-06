/*
PeopleNames.js
--------------
VER: na 
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
	this.setNickname("");
	this.isComplete = false;
	this.isMononymous = false;
	this.isWesternOrder = true;
	this.isEasternOrder = false;
	this.setAnonymizedText("[redacted]"); 
	this.anonymizeFirstGiven = false;
	this.anonymizeSecondGiven = false;
	this.anonymizeThirdGiven = false;
	this.anonymizeFourthGiven = false;
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
Name.prototype.setId = function(id){
	this.id = id;
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
Name.prototype.setNickname = function(name){
	this.hasNickname = false;
	this.nickname = "";
	if(typeof name == 'string' || name instanceof String){
		if (name.length > 0){
			this.hasNickname = true;
			this.nickname = name;
		}
	}	
};
Name.prototype.setAnonymizedText = function(name){
	this.anonymizedText = "";
	if(typeof name == 'string' || name instanceof String){
		this.anonymizedText = name;
	}	
};
Name.prototype.anonymizeFirstGiven = function(name){
	this.anonymizeFirstGiven = true;
	this.FirstGiven = this.AnonymizedText;
};
Name.prototype.anonymizeSecondGiven = function(name){
	this.anonymizeSecondGiven = true;
	this.SecondGiven = this.AnonymizedText;
};
Name.prototype.anonymizeThirdGiven = function(name){
	this.anonymizeThirdGiven = true;
	this.ThirdGiven = this.AnonymizedText;
};
Name.prototype.anonymizeFourthGiven = function(name){
	this.anonymizeFourthGiven = true;
	this.FourthGiven = this.AnonymizedText;
};
Name.prototype.anonymizeAllGiven = function(name){
	this.anonymizeFirstGiven = true;
	this.FirstGiven = this.AnonymizedText;
	this.anonymizeSecondGiven = true;
	this.SecondGiven = this.AnonymizedText;
	this.anonymizeThirdGiven = true;
	this.ThirdGiven = this.AnonymizedText;
	this.anonymizeFourthGiven = true;
	this.FourthGiven = this.AnonymizedText;
};
