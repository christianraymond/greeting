describe("The greets function", function(){
    it('should greet a person in English language', function(){
        assert.equal(greets('William', 'english'), ' Hello William')
    });

     it('should greet a person in French language', function(){
        assert.equal(greets('John', 'french'), ' Salut John')
    });

    it('should greet a person in Xhosa language', function(){
      assert.equal(greets('Samuel', 'xhosa'), ' Molo Samuel')
    })
});
