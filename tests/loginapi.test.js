import fetch from 'node-fetch';

it ("Should get a login token", async() => {

    const loginResponse = await fetch('https://dev.stedi.me', {

        method: 'POST',
        headers:{
            'Content-Type': 'application/text'
        },

        body:JSON.stringify({

            "username":"hawkins@byui.edu",
            "password":"Moonpeanu75!"

        })

    })

    expect(loginResponse.status).toBe(200);

})