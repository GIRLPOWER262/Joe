function helloWorld(){

    return 'Hello, World'

}

it ("Should show hello world", ()=>{

    let result = "";

    result += helloWorld();


    expect(result).toBe("Hello, World");


});