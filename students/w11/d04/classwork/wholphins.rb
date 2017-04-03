class Wholphin
# attr_accessor :name, :has_glasses, :likes, :skills, :gender
# shortcut to writing all defs

  def initialize(name, has_glasses, likes, skills, grades)
# can set these four itmes when creating a new instance
    @@name = name
# @@ gives global scope among all instances of wholphin
    @has_glasses = has_glasses
    @likes = likes
    @skills = skills
    @grades = grades
  end

  def name
    # "Kevin"
    @name
  end
# getter methods
# wholphin.name returns name

  def name=(n)
    @name = name
  end
# setter method
# wholphin.name ="Bill" - changes name to bill

  def has_glasses
    # true
    @has_glasses
  end

  def skills
    # ["watching Matt play slither", "JavaScript", "Not reading directons"]
    @skills
  end

  def likes
    # "belly rubbing my dawg"
    @likes
  end

  def display_grades
    puts grades
  end


  private
  # everything underneath is a private method
  def talk
    "I really like slither"
  end

  def grades
    ["A", "B", "B"]
  end

end


# kevin = wholphin.new - creates new object called kevin thats within the class Wholphin
