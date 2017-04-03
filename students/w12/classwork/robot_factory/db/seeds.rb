10.times {
  new_robot = Robot.new
  new_robot.avatar = Faker::Avatar.image
  new_robot.name = Faker::Internet.user_name
  new_robot.skill = Faker::Superhero.power

  # Worth mentioning about integer max number (+/-)2^31
  new_robot.serial = Faker::Number.number(9)

  if new_robot.save
    puts "#{new_robot.name} was created"
  end
}

10.times {
  new_task = Task.new
  new_task.name = Faker::Hacker.verb
  new_task.description = Faker::Hipster
  new_task.completed = Faker::Boolean.boolean(0.5)
  new_task.serial = Faker::Number.number(9)

  if new_task.save
    puts "#{new_task.name} was created"
  end
}
