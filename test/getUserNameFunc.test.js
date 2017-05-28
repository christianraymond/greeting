describe('The getInputedName function', function(){
  it("should print the person's name correctelly and greet them", function(){
    assert.equal(getNameFunc('John'), 'Hello, John')
  })

  it("shoud greet as different people as possible", function(){
    assert.equal(getNameFunc('Jeremy'), 'Hello, Jeremy')
  })

  it("shoud be able to greet any name inputed", function(){
    assert.equal(getNameFunc('Tabangakdjkfjskdjksjjkdjfksksdjjkajdkfjfd'), 'Hello, Tabangakdjkfjskdjksjjkdjfksksdjjkajdkfjfd')
  })

  it("should greet person's name and surname", function(){
    assert.equal(getNameFunc('Cara Turne'), 'Hello, Cara Turne')
  })
})
