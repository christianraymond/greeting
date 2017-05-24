describe('The greet function', function(){

    it('should greet the person in french', function(){
        const i = 'Salut'
        const nameEntered = 'Andre'
        switch (i){ 
        case 0 : "Hello, " + nameEntered.value + ' !';
        break;
    }
      assert.equal(greet(), "Salut, " + nameEntered.value + ' !');
  });
    
    it('should greet the person in english', function(){
        const i = 'Hello'
        switch (i){ 
        case 1 : "Hello, " + nameEntered.value + ' !';
        break;
    }
        assert.equal(greet(), "Hello, " + nameEntered.value + ' !');
 });
    
    it('should greet the person in Xhosa', function(){
        const i = 'Hello'
        switch (i){ 
        case 2 : "Molo, " + nameEntered.value + ' !';
        break;
    }
        assert.equal(greet(), "Molo, " + nameEntered.value + ' !');
    });
});

