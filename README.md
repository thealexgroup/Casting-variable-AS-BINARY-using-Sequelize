# Casting-variable-AS-BINARY-using-Sequelize

I couldn't find any documentation on how to search for a case sensitive string using Sequelize.  I 
found CAST and $like as separate items, but couldn't find anything to help with syntax to put together.

I worked with a TA in my class, this example is what we came up with.  It works great to search a string 
as case-sensitive.

For example: Searching for the string "BbWWLSTtXX" could return from database "BBWWLSTTXX" when you 
really would like an exact match with lower b and lower t.  

Hope this helps someone.  