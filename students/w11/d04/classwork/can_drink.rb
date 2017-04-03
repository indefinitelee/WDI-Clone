puts "what's your age?"
age_prompt = $stdin.gets.chomp.to_i

if (age_prompt >= 21)
  puts "You can drink"
  else
    puts "Alcohol is bad for you"
end
