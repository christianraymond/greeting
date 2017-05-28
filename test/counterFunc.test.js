describe('The counter function', function(){
  it("should count from zero to one when someone types the name", function() {
    assert.equal(checkIfNameExist(person, "Laetitia"), 1);
  })

it('should increase the number when another name is added', function(){
  assert.equal(checkIfNameExist(person, 'Mark'), 1);
  assert.equal(checkIfNameExist(person, 'Mark'), 2);
})

it('should not count when nothing is entered', function(){
    // assert.equal(checkIfNameExist(person, ...), 0);
 })
})
