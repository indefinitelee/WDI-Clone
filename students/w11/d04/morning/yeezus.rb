kanye_records = [
{ year: 2016, title: "The Life of Pablo" },
{ year: 2013, title: "Yeezus" },
{ year: 2011, title: "Watch the Throne" },
{ year: 2010, title: "My Beautiful Dark Twisted Fantasy" },
{ year: 2008, title: "808s and Heartbreak" },
{ year: 2007, title: "Graduation" },
{ year: 2005, title: "Late Registration" },
{ year: 2004, title: "The College Dropout" }
]

# Write the following code:
# Part 1
# print the name of every Kanye record

# kanye_records.each do |title|
#   puts title[:title]
# end
# OR
# kanye_records.each {|record| puts record[:title] }
# OR
# for record in kanye_records
#   puts record[:title]
# end

# Part 2
# print the year every Kanye record was released

# kanye_records.each do |year|
#   puts {year}
# end

# look into the future and add a forthcoming Kanye record into our array. It should be released in 2017 and have a title that is completely asinine.

# kanye_records.push({:year => 2525, :title => "Make Kanye Great Again"})
# puts kanye_records

# or
# kanye_records.unshift({:year => 2017, :title => "Titles"})
# unshift adds it to beginning of array

# iterate through Kanye's record collection and print out the titles of all the records released after Kanye's ego exploded (this happened in 2007).



# iterate through the collection. For each record, print out a sentence detailing each record. For example, " 'Graduation' was released in 2007"

# kanye_records.each do |record|
#     puts "#{record[:title]} was realease in #{record[:year]}"
# end

# puts kanye_records.select{|taco| taco[:year] > 2007}

# iterate through collection. add a key value pair to each record with the key as :label and the value as "def jam".

# puts kanye_records.each{|record| record[:label] ='def jam'}



# iterate through the collection. if a record's title contains more than 15 letters, print 'that's a long title' to the screen.

# iterate through the collection. replace the letter 'o' in each record title with the number 0.






