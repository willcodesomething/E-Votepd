## Steps for running above code 
```
1.have git installed and set it up 
2.install latest node package
3.clone the repo with gitbash in whatever directory you want
   type the command : git clone https://github.com/willcodesomething/E-Votepd.git


4.with "node js command prompt " navigate to the the directory where you cloned the repo ( " cd "command ) and run the command :" npm install "

5. open the current directory in visual studio code with command :" code ."
6. in the visual studios terminal run these commands (just for installing packages to make it convinient to have live update while coding ): 

     a)run 'npx webpack'
     b)run `npm run hotloader` in a terminal

7.visit `http://localhost:5000` in any browser you have

Wallah keep going bros , add whatever you feel there should be (team ka naam PS3 ho skata hai waise )

8. Add code and push to repo if it works great  (commit only if you are sure that there are no bugs )
9. Steps to do step 8 will be :
         In git bash ' cd ' to the evote directory 
         run "git status"//for the changes you made 
         run "git add ."//for adding those changes 
         run " git commit -m "whatever you have to comment on this commit or what changes you made " "
         //for adding those chages to repo locally (git recognizes the changes you made  and changes it to add new version with its mathematics ) do discuss changes that you made with the team before commiting or pushing to the repo onthe same day at 9 pm sharp .

         run " git push "//for updating the repo in the github server (in this step git will promt you to login to github , so just login in the default browser by clicking on "sign in with browser "or optionally you cn create a access token )






```



## Bin matlab ki but matlab ki filein

these contain helper code and package to run hotloader for feature of live updating so don't worry about the code in them and feel free to read if you want to  (smjh me nhi ayega pr ,mereko bhi nhi aya)

```
client/dist/index.html
client/src/index.js
client/src/utilities.js
server/validator.js
.babelrc
.npmrc
.prettierrc
package-lock.json
webpack.config.js
```
