# # Section 1

# # Create 2 local variables and assign them your 2 favorite childhood characters.

# char1 = "Optimus Prime"
# char2 = "Peter Venkman"

# # Create a constant variable with the value of your last name

# LASTNAME = "Wilson"

# # Output the first 5 verses of your favorite song.

#song = """Home is where I want to be
# Pick me up and turn me around
# I feel numb, born with a weak heart
# Guess I must be having fun"""
# puts song

# # Using string interpolation, insert the following calculation: 86400 / 60 / 60 in this sentence:
# # "There are ___ hours in a day."

# puts "There are #{86400 / 60 / 60} hours in a day"


# Create 5 local variables. Their values, must be of the following data types:
# String, NilClass, Fixnum, Float, TrueClass, and FalseClass

# str_class = "cool"
# nilclass = nil
# int = 3
# float = 2.2
# tru = !false
# fls = !true


# Create a new file named me.rb
# Given the following variables (paste them in me.rb):
# write_handler = me.rb
# write_handler.puts(
# my_name = 'Slim Shady'
# my_age = 38
# my_height = 67 # inches
# my_weight = 180 # lbs
# my_eyes = 'Blue'
# my_teeth = 'White'
# my_hair = 'Blonde'
# )
# Write the necessary code so when you run ruby me.rb in the terminal, the output will be:
#   Let's talk about Slim Shady.
#   He's 67 inches tall.
#   He's 180 pounds heavy.
#   Actually that's not too heavy.
#   He's got Blue eyes and Blonde hair.
#   His teeth are usually White depending on the coffee.
#   If I add 38, 67, and 180 I get 285.

# Section 2

# Create a new file named can_drink.rb.

# The file should prompt you for your age. (Research: $stdin.gets.chomp)
# puts "what's your age?"
# age_prompt = $stdin.gets.chomp
# puts age_prompt

# if (age >= 21) puts "You can drink"
#   else puts "Alchohol is bad for you"
# end

# If you are 21 or older, it should output You cool., otherwise, Time to go nite nite.
# Write the necessary code so when you run ruby can_drink.rb the output will be:
#   How old are you?
#   21
#   You cool.
# OR
#   How old are you?
#   20
#   Time to go nite nite.

# puts "what's your age?"
# age_prompt = $stdin.gets.chomp.to_i

# if (age_prompt >= 21)
#   puts "You can drink"
#   else
#     puts "Alcohol is bad for you"
# end
# output I can do this! 100 times with no more than 3 lines of code.

# 100.times do
#   puts "I can do this"
# end

# or
# 100.times { puts "I can do this"}


# define a function that outputs the class and object id of the argument passed.

# def output (arg)
#   puts arg.class, arg.objct_id
# end
# output (1)
# output("1")
# output(nil)

# define a function for each operation:

# adds two numbers
# subtract two numbers
# divide two numbers
# multiply two numbers

# create a function that breaks up a sentence into words

# @string1 = "hello my name is, what my name is, who, my name is"
# puts @string1.split(/\W+/)

# Create an array with 5 movie titles, then create a function that sorts the array of movie titles
# movies = ["Ghostbusters", "Airplane!", "Top Secret!", "Adaptation", "Zoolander" ]
# def moveis_sorter array
#   array.sort
# end

# Section 3

# Create an array with 5 drink names, then create a function returns a random drink

# drinks = ["Gin and tonic", "Moscow Mule", "Dark and Stormy", "Old Fashioned", "Root Beer"]
# puts drinks.sample(2)
#def random_drink(array)
#   array.sample
# end


# Create 4 Hashes/Objects with at least 5 properties that represent: (You can nest objects and/or arrays )

# yourself.
# your favorite TV show.
# an Instagram picture.
# a Facebook friend.

# me = {name: "Lee",
#       age: "36",
#       eyes: 2,
#       beard: True,
#       moms: "spaghetti"}


# Create a function that returns the largest number in an array of numbers
# arr = [2,6,788,9,0,6,44,3,22,2,4,5,6,88,9,6,45,43,2,434,5,6,66,8,8,89,9,0]
# puts arr.max
# or
# def max(arg)
#   puts arg.max
# end
# max(arr)


# Implement a FizzBuzz solution

# (1..100).each do |num|
#   if num %15 == 0
#     puts 'FizzBuzz'
#   elsif num %3 ==0
#     puts 'fizz'
#   elsif  num %5 == 0
#     puts 'buzz'
#   elsif num
#     puts 'num'
#   end


#   def fizzbuzz(num)
#     i = 1
#     while i <= num
#       if i%15 == 0
#         puts 'FizzBuzz'
#         i += 1
#       elsif i%3 == 0
#         puts "Fizz"
#         i += 1
#       elsif i%5 == 0
#         puts "Buzz"
#         i += 1
#       else
#         puts i
#         i += 1
#       end
#     end
#   end

#Project Euler

# https://projecteuler.net/problem=2
# Array (1..4000000)
#   array.each do |i|
#     while arr.i <= 4000000
#     arr[i] + arr[i+1]
#     i+=1


# https://projecteuler.net/problem=17

# unique words
# one, two, three, four, five, six, seven, eight, nine, ten, eleven,
# twelve, thirteen, teen, twenty, thirty, fourty, fifty, sixty, seventy,
# eighty, ninety, hundred, thousand























