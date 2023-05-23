# InfusionTestFrontEnd

This is the readme for a test front end I am completing for Infusion.

This simulates a back end using json-server.
In order to run it locally, open two cmd prompts in the projects saved location.
After running NPM install to get the node packages it uses, run the command "json-server db.json". 
In the second prompt, run the command "ng serve" to run the webapp.
Navigate to `http://localhost:4200/`

There are two accounts set up for this project.

username=customer1
password=customer

username=admin
password=admin


# Unit Tests
Provide correct username, correct password. check that correct user account is signed into.
Provide correct username, incorrect password. check that user isn't signed into.
Provide incorrect username, correct password. check that user isn't signed into.
Provide correct username, correct password for different user. check that user isn't signed into.
