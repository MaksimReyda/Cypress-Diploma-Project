/// <reference types="cypress" />

describe('IDZ, API testing', function(){
    let result
    it('Positive scenario: GET Request, get all posts', function(){
        cy.request('GET', 'https://jsonplaceholder.typicode.com/posts').then(function(response){
            // console.log(response)
            expect(response.status).eq(200)
            expect(response.statusText).eq('OK')
            expect(response.body.length).eq(100)
            expect(response.isOkStatusCode).eq(true)
        })

    })

    it('Negative scenario: GET Request, get all posts. Use wrong endpoint', function(){
        cy.request({
            method: 'GET',
            url: 'https://jsonplaceholder.typicode.com/posts/qweq',
            failOnStatusCode: false
        }).then(function(response){
            console.log(response)
            expect(response.status).eq(404)
            expect(response.statusText).eq('Not Found')
            expect(response.isOkStatusCode).eq(false)
        })

    })

    it('Positive scenario: GET Request, get post 5', function(){
        let checkData = {
            body: 'repudiandae veniam quaerat sunt sed alias aut fugiat sit autem sed est voluptatem omnis possimus esse voluptatibus quis est aut tenetur dolor neque',
            id: '5',
            title: 'nesciunt quas odio',
            userId: '1'
        }
        cy.request('GET', 'https://jsonplaceholder.typicode.com/posts/5').then(function(response){
            console.log(response)
            expect(response.status).eq(200)
            expect(response.statusText).eq('OK')
            expect(response.isOkStatusCode).eq(true)
            expect(response.body.title).contains(checkData.title)
            expect(JSON.stringify(response.body.id)).contains(checkData.id)
            expect(JSON.stringify(response.body.userId)).contains(checkData.userId)
            console.log(response.body.id)
            console.log(response.body.userId)

        })
    })


    it('Negative scenario: GET Request, get post 4, compare with post 5', function(){
        let checkData = {
            body: 'repudiandae veniam quaerat sunt sed alias aut fugiat sit autem sed est voluptatem omnis possimus esse voluptatibus quis est aut tenetur dolor neque',
            id: '5',
            title: 'nesciunt quas odio',
            userId: '1'
        }
        cy.request('GET', 'https://jsonplaceholder.typicode.com/posts/4').then(function(response){
            console.log(response)
            expect(response.status).eq(200)
            expect(response.statusText).eq('OK')
            expect(response.isOkStatusCode).eq(true)
            expect(response.body.title).contains(checkData.title)
            expect(JSON.stringify(response.body.id)).contains(checkData.id)
            expect(JSON.stringify(response.body.userId)).contains(checkData.userId)
            console.log(response.body.id)
            console.log(response.body.userId)

        })

    })


    it('Positive scenario: POST Request, create a new post', function(){
        let sendData = {
            body: 'Makym Reida test',
            title: 'test tets test',
            userId: '1'
        }

        cy.request({
            method: 'POST',
            url: 'https://jsonplaceholder.typicode.com/posts',
            body: JSON.stringify(sendData),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
              }
        }).then(function(response){
            console.log(response)
            expect(response.status).eq(201)
            expect(response.isOkStatusCode).eq(true)
            expect(response.statusText).eq('Created')
            expect(response.body.body).contains(sendData.body)   
            expect(response.body.title).contains(sendData.title)   
            
        })

    })


    it('Positive scenario: PUT Request, update post', function(){
        let sendData = {
            id: 1,
            body: 'Makym Reida test UPD',
            title: 'test tets test UPD',
            userId: 1
        }

        cy.request({
            method: 'PUT',
            url: 'https://jsonplaceholder.typicode.com/posts/1',
            body: JSON.stringify(sendData),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
              }
        }).then(function(response){
            console.log(response)
            expect(response.status).eq(200)
            expect(response.isOkStatusCode).eq(true)
            expect(response.statusText).eq('OK')
            expect(response.body.body).contains(sendData.body)   
            expect(response.body.title).contains(sendData.title)   
            
        })

    })


    it('Positive scenario: PATCH Request, update post', function(){
        let sendData = {
            id: 1,
            body: 'Makym Reida test UPD PATCH',
        }

        cy.request({
            method: 'PATCH',
            url: 'https://jsonplaceholder.typicode.com/posts/1',
            body: JSON.stringify(sendData),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
              }
        }).then(function(response){
            console.log(response)
            expect(response.status).eq(200)
            expect(response.isOkStatusCode).eq(true)
            expect(response.statusText).eq('OK')
            expect(response.body.body).contains(sendData.body)    
            
        })

    })


    it('Positive scenario: DELETE Request, delete post', function(){

    
        cy.request({
            method: 'DELETE',
            url: 'https://jsonplaceholder.typicode.com/posts/1',
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
              }
        }).then(function(response){
            console.log(response)
            expect(response.status).eq(200)
            expect(response.isOkStatusCode).eq(true)
            expect(response.statusText).eq('OK')            
        })

    })


})