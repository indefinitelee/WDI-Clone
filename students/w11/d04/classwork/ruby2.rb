class Easel
  def initialize(color, content, dirty)
    @color = color
    @content = content
    @dirty = dirty
  end

  def color
    @color
  end

  def color=(c)
    @color=c
  end

  def content
    @content
  end

  def content=(t)
    @content=t
  end

  def dirty
    @dirty
  end

  def dirty=(d)
    @dirty=d
  end

end
