class Cars
# or attr_accessor :make, :model, :year, :color, :miles instead of getter/setter
  def initialize(make, model, year, color)
    @make = make
    @model = model
    @year = year
    @color = color
    @description = ""
    @miles = 0
  end

  def make
    @make
  end

  def make=(mk)
    @make = make
  end

  def model
    @model
  end

  def model=(mod)
    @model = model
  end

  def year
    @year
  end

  def year=(yr)
    @year = year
  end

  def color
    @color
  end

  def color=(col)
    @color = color
  end

  def description
    @description
  end

  def description=(desc)
    @description= description
  end

  def miles
    @miles
  end

  def miles=(m)
    @miles = miles
  end

  def another_year
    @miles += 15,000
  end

  def details
    puts @description = "This #{@year} #{@make} #{@model} has #{@miles} on it"
    if @miles > 50,000
      puts @description = "#{@description} and that #{@color} paint looks like shite"
    end
  end

  def new_paint(new_color)
    @color = new_color
    ahh_fresh_paint

  end

  def ahh_fresh_paint
    puts puts "The new #{new_color} color was a good choice"
  end




end

c1 = Car.new("Nissan", "Sentra", 2000, "Black")
