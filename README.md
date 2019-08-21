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
1. If you don't have postgres install, install it (https://postgresapp.com/)
1. Postgres must be configured to work with ruby/rails. In the case of `postgresapp` above, this means the following commands (Per the installation instructions)
* Add postgressapp to your paths
1. run ` sudo mkdir -p /etc/paths.d`
1. run `echo /Applications/Postgres.app/Contents/Versions/latest/bin | sudo tee /etc/paths.d/postgresapp`
* Configure postgres to work with rails
1. run `sudo ARCHFLAGS="-arch x86_64" gem install pg` (one time. In order to make rails work with posgres)
* If you don't have a ruby environment manager, install rbenv
1. Instal rbenv
1. `rbenv --version`
1. rbenv returned: ```rbenv: version `2.5.1' is not installed (set by /Users/kevingarcia/repos/fruit_map/.ruby-version)```
1. run `rbenv install 2.5.1`
* If you don't have bundler, install it
1. run `gem install bundler`
1. run `rbenv rehash`
* install NPM, Rails and Gem packages
1. run `npm install`
1. run `bundle install`
1. run `rails db:create`
1. run `rails db:migrate`
1. run `rails db:seed`
1. add api key to `rails credentials:edit`
