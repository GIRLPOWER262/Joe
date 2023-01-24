import fetch from 'node-fetch';

it ("Should get a bad login", async() => {

    const loginResponse = await fetch('https://dev.stedi.me/login', {

        method: 'POST',
        headers:{
            'Content-Type': 'application/text'
        },

        body:JSON.stringify({

            "username":"hawkins@byui.edu",
            "password":"WrongPassword!"

        })

    })

    expect(loginResponse.status).toBe(500);

})