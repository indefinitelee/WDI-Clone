user_1 = User.create(name: Faker::Name.name)
user_2 = User.create(name: Faker::Name.name)

4.times do
  post = user_1.posts.create(
    title: [Faker::Hacker.adjective, Faker::Hacker.noun].join(' '),
    body: Faker::Hacker.say_something_smart
    )
post.comments.create(body: Faker::Hipster.sentence, user: user_2)

end

