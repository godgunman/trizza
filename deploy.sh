#!/bin/bash
git remote add heroku git@heroku.com:trizza.git
git subtree push --prefix web heroku master
