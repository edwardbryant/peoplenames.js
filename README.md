peoplenames.js
==============

a detailed JS object with methods for manipulating the names of people.

created 10/30/2013

PURPOSE

In some situations, you may be required to manipulate the names of people in a very detailed manner (e.g., family tree web app, etc.) and this object and accompanying methods are designed to be a utility for making those tasks easier.  

DOCUMENTATION 

The most up-to-date version of the documentation can be found in documentation.html which is included with the files.

EXAMPLE USAGE

dude = new Name("Edward","Montgomery","Proudfoot"); // create obj

initials = dude.getName("f-last"); // returns str with first initial and last name "E. Proudfoot" 

reverse = dude.getName("last-first"); // returns str of name in reverse order "Proudfoot, Edward"  

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
- international / foreign naming conventions, lexical order (e.g., East Asian / Western ordering) 
- name length method
- capitalization settings

LICENSE

PeopleNames.js is licensed under the MIT license.
