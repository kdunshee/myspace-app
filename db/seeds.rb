# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)




2.times do |i|
  user = User.create(email: "person#{i}@gmail.com", password: "12345678")

  5.times do |j|
    user.posts.create(title: "Random Post-#{j}")
  end
end
