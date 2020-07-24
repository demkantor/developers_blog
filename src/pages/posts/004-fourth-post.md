---
title: 'Using GitHub'
date: 2020-06-12 20:00:00
author: 'David Kantor'
image: '../../images/git.png'
tags:
- git
- github
---

## How important is version control?

I first was introduced to github in 2011, prior to this I did what anyone would do, save every change to a seprate folder in my file explorer. Wow did that stink! Looking for the right file, figuring out what changed between versions... it was a mess. Since I didnt really do much of coding back then I could manage, but it was far from ideal going into 20 deep folders to find what I had attempted to organize. I began doing more work on android in 2013 again, to the point where i had to figure out github better but forgot my passwords so created a new account. would it be worth bringing in my old repos? at this point no, but i wish i did so i could look back on them better, just for nostalgia sake.

## How to begin the right way
If you're just starting out learn software development git and github right away, you will thank yourself later. So let's do it! first go to the docs [here](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git), there are different methods for windows, mac and linux so choose the appropriate one. If you get stuck let me know otherwise lets run some tests.

---
Run this in your terminal

    git --version

If you get a response like < git version 2.27.0 > then you're good to go. 
Next setup an account on [github](https://github.com/) once that is complete we need to connect your local machine to your new online repository.

But first you may be asking yourself why git and github? What's the diffrence? git is a cli (command line interface) that allows you to connect to github easily, you're online version controlled repository. Sure you could not use git but you will be far more productive if you do.

## Some basic setup and commands
First thing to do when you start a new project is connect your local source to git hub. Open a terminal in the root directory of your project and type:

    git init

The init command initializes your repo, then you can start adding to it... but initializing isn't connecting, so for this let's head to your github profile and create a new repository. Most often select no template, give a name, description if you'd like, keep it public unless you have reason not to. and skip the readme for now. after you hit *create* copy the second code block and paste this into your terminal. This will connect your local files to your github repo. Now in a terminal type:

    git add .
    git commit -m "explain your changes inbetween quotes"
    git push -u origin master

Now depending on how you set up git it will either automatically upload or you may need to type in username and password at this point. you can refresh your github and see if its there, you can also look locally what has not yet been commited with 

    git status

This will give you a list of files that have changed and if they have been commited or not. congradulations you have now made your first commit! From this point on when you make changes and want to save that version (do this often) you can commit all files with:

    git add .

Or you can specify just the files you want to push. Until you're comfortable selecting what you need just add all as to keep errors to a minimum. As for pushing your commit up to github, after the initial commit you wont need to specify (unless pushing to another branch than master) so:

    git push

Will send the commited files to github and to the master branch specifically.

## What are branches?
Great question! Let's say you are working on a project and want to test some changes that will require you to change a lot of working code. Create a branch and test!

    git checkout -b name-of-new-branch

This will create a new branch (copy of repo) and automatically bring you into that branch. This is super helpful when working on solo projects but an absolute necesity when working on group projects. The master branch is your main code, what you'll likely use in production. Any sub branch will need to be merged into the master **never polute the master** as in do not push direct to master in group projects and likely in your own smaller ones once you learn the branching. To merge the new branch you will need to commit and push your branch, create a pr (pull request) then merge.
The easiest way to do these steps depends a bit on prefrence, it can all be done in cli or in the repo, or with extentions in your ide (intergrated development enviroment)

    git add .
    git commit "describe changes in this branch"
    git push branch-name

So just like when pushing to master you add, commit and then push, but you need to push to the correct branch. From here let's go to your github profile as it may be easier to see whats going on. In your project you'll see that new branch created with an option to create a pull request, click that and then you'll see if there are any merge conflicts. This is where merging the branch will dirrectly replace current code in the master branch. from here click the *compare to master* you will see both current code and changes, this can be looked at by you or any contributor with the proper access. You can now make any changes you need, refuse the pr with a message to the submitter, or merge this branch to master.

Once the branch is commited to master it is likely stale and can be deleted from github as well as from your local. this can be done with

    git branch -d branch-name

### More tips!
There is so much more to learn about github, and the more you learn the more productive you will be. On my next post about github I'll share how some github actions and show you some methods to automate a ton of your tasks! For now take a look at this:
[git cheat sheet](https://www.atlassian.com/dam/jcr:e7e22f25-bba2-4ef1-a197-53f46b6df4a5/SWTM-2088_Atlassian-Git-Cheatsheet.pdf)

And as always,
**Happy Coding!**