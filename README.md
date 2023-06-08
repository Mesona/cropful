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
* If you don't have postgres install, install it (https://postgresapp.com/).
* Postgres must be configured to work with ruby/rails. In the case of `postgresapp` above, this means the following commands (Per the installation instructions)
1. Set up required users / tables
2. sudo -u -i postgres
3. psql
4. CREATE ROLE Y WITH LOGIN ENCYPTED PASSWORD 'PASSWORD';
5. GRANT pg_read_all_data TO fruit_map;
6. GRANT pg_write_all_data TO fruit_map;
7. ALTER USER fruit_map createdb;
* Add postgressapp to your paths
8. run ` sudo mkdir -p /etc/paths.d`
9. run `echo /Applications/Postgres.app/Contents/Versions/latest/bin | sudo tee /etc/paths.d/postgresapp`
* Configure postgres to work with rails
10. run `sudo ARCHFLAGS="-arch x86_64" gem install pg` (one time. In order to make rails work with posgres)
* If you don't have a ruby environment manager, install rbenv
11. Instal rbenv
12. `rbenv --version`
13. rbenv returned: ```rbenv: version `2.5.1' is not installed (set by /Users/kevingarcia/repos/fruit_map/.ruby-version)```
14. run `rbenv install 2.5.1`
* If you don't have bundler, install it
15. run `gem install bundler`
16. run `rbenv rehash`
* install NPM, Rails and Gem packages
17. run `npm install`
18. run `bundle install`
19. run `rails db:create`
20. run `rails db:migrate`
21. run `rails db:seed`
22. Get a google maps api key from: https://developers.google.com/maps/documentation/javascript/get-api-key
23. add your api key to `rails credentials:edit` as
```
google:
  api_key: $API_KEY_HERE
```
1. run `rails s`
1. in a separate tab, run `npm run start`
1. the local webserver can be accessed at `http://localhost:3000/`
1. develop
