
PeopleNames.js 
==============

created - 10/30/2013

last updated - 11/11/2013 

Intro
-----

PeopleNames.js is a framework for formatting and manipulating the names of people.

In some situations, you may be required to manipulate the names of people in a very detailed manner (e.g., family tree web app, etc.) and this object and accompanying methods are designed to be a utility for making those tasks easier.  

Quick Usage Examples
--------------------

`
    
    var dude = new Name('Edward','Montgomery','Proudfoot'); // create obj
    var initials = dude.getName('f-last'); // returns str with first initial and last name 'E. Proudfoot' 
    var reverse = dude.getName('last-first'); // returns str of name in reverse order 'Proudfoot, Edward'  
    
`    

See the documentation for a complete list of methods and available format types.

FUTURE PLANS

I number of additional features (beyond name formatting) are planned, including:

- display name property for designating a default string value 
- suffix usage (e.g., "II" "Jr.")
- maiden names 
- nicknames
- intercalation (e.g., "van" "de" etc.)
- incomplete names (missing name components) 
- anonymous names (e.g., "living Smith" "[redacted] Smith")
- foreign lexical ordering (e.g., Eastern vs. Western ordering) 
- capitalization settings

LICENSE

PeopleNames.js is licensed under the MIT license.
