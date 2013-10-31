peoplenames.js
==============

a detailed JS object with methods for manipulating the names of people.

PURPOSE

In some situations, you may be required to manipulate the names of people in a very detailed manner (e.g., family tree web app, etc.) and this object and accompanying methods are designed to be a utility for making those tasks easier.  

CURRENT USAGE

Create an object and supply a first name, middle name, and last name:

ex., [var me = new Name("Firstus","Middleton","Lastingson");] 

You can then get the name back in the desired format: 

- me.getName("first"); # "Firstus"
- me.getName("middle"); # "Middleton"
- me.getName("last"); # "Lastingson"
- me.getName("f"); # "F."
- me.getName("m"); # "M."
- me.getName("l"); # "L."
- me.getName("first-last"); # "Firstus Lastington"
- me.getName("last-first"); # "Lastington, Firstus"
- me.getName("first-middle-last"); # "Firstus Middleton Lastington"
- me.getName("first-m-last"); # "Firstus M. Lastington"
- me.getName("f-m-last"); # "F. M. Lastington"
- me.getName("f-last"); # "F. Lastington"
- me.getName("fm-last"); # "F.M. Lastington"
- me.getName("f-m-l"); # "F. M. L."
- me.getName("fml"); # "F.M.L."

PLANNED FEATURES

I expect to add the following features:

- type / null testing and validation
- display name property for designating a default string value 
- suffix usage (e.g., "II" "Jr.")
- maiden names 
- nicknames
- intercalation (e.g., "van" "de" etc.)  
- incomplete names
- anonymous names (e.g., "living Smith" "[redacted] Smith")
- international / foreign naming conventions, lexical order (e.g., East Asian / Western Ordering 

