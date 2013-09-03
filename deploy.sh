#!/bin/bash
git remote add heroku git@heroku.com:trizza.git
git subtree push --prefix web heroku master

# http://stackoverflow.com/questions/12644855/how-do-i-reset-a-heroku-git-repository-to-its-initial-state
# git push heroku `git subtree split --prefix web master`:master --force

