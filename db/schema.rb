# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2019_08_27_194147) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "harvest_types", force: :cascade do |t|
    t.string "classification", null: false
    t.string "harvest_name", null: false
    t.string "seasonal_status", null: false
    t.string "image_url"
    t.text "description"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["classification"], name: "index_harvest_types_on_classification"
    t.index ["harvest_name"], name: "index_harvest_types_on_harvest_name"
  end

  create_table "harvests", force: :cascade do |t|
    t.string "harvest_type_id", null: false
    t.boolean "ripe", null: false
    t.float "lat", null: false
    t.float "lng", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "harvest_name", null: false
    t.string "seasonal_overwrite"
    t.index ["harvest_name"], name: "index_harvests_on_harvest_name"
    t.index ["harvest_type_id"], name: "index_harvests_on_harvest_type_id"
    t.index ["lat"], name: "index_harvests_on_lat"
    t.index ["lng"], name: "index_harvests_on_lng"
    t.index ["ripe"], name: "index_harvests_on_ripe"
  end

  create_table "subscribers", force: :cascade do |t|
    t.string "email", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "email", null: false
    t.string "session_token", null: false
    t.string "password_digest", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["email"], name: "index_users_on_email", unique: true
    t.index ["session_token"], name: "index_users_on_session_token"
    t.index ["username"], name: "index_users_on_username", unique: true
  end

end
