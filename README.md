# README
<!-- TODO: UPDATE THIS!!! -->

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

# Installation steps
1. Instal rbenv
1. `rbenv --version`
1. rbenv returned: ```rbenv: version `2.5.1' is not installed (set by /Users/kevingarcia/repos/fruit_map/.ruby-version)```
1. run `rbenv install 2.5.1`
1. run `gem install bundler`
1. run `rbenv rehash`
1. run `brew install postgresql`
1. See note below 
1. run `bundle install`
1. run `rails db:create`
1. run `rails db:migrate`
1. run `rails db:seed`
1. add api key to `rails credentials:edit`
1. run ``
1. run ``
1. run ``


*note from postgres:
```
To migrate existing data from a previous major version of PostgreSQL run: 
`brew postgresql-upgrade-database`
   
To have launchd start postgresql now and restart at login: 
`brew services start postgresql`
   
Or, if you don't want/need a background service you can just run: 
`pg_ctl -D /usr/local/var/postgres start`
```