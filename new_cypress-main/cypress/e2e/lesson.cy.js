describe('Проверка авторизации', function () {

    it('Верный пароль и верный логин', function () {
        cy.visit('https://shuragan.github.io/authorization_form/');
        cy.get('#email').type('tmt@mail.ru');
        cy.get('#password').type('tmt');
        cy.get('#loginForm > .btn').click();
        cy.get('.popup-content').contains('Авторизация успешна');
        cy.get('.close-btn').click();
    })

    it('Неверный пароль и верный логин', function () {
        cy.visit('https://shuragan.github.io/authorization_form/');
        cy.get('#email').type('tmt@mail.ru');
        cy.get('#password').type('tmt1');
        cy.get('#loginForm > .btn').click();
        cy.get('.popup-content').contains('Неверный логин или пароль');
        cy.get('.close-btn').click();
    })

    it('Верный пароль и неверный логин', function () {
        cy.visit('https://shuragan.github.io/authorization_form/');
        cy.get('#email').type('tmt1@mail.ru');
        cy.get('#password').type('tmt');
        cy.get('#loginForm > .btn').click();
        cy.get('.popup-content').contains('Неверный логин или пароль');
        cy.get('.close-btn').click();
    })

    it('Восстановление пароля c неверным логином', function () {
        cy.visit('https://shuragan.github.io/authorization_form/');
        cy.get('#forgotPasswordLink').should('have.css', 'color', 'rgb(52, 152, 219)');
        cy.get('#forgotPasswordLink').click();
        cy.get('#resetEmail').type('tmt1@mail.ru');
        cy.get('#resetPasswordForm > .btn').click();
        cy.get('.popup-content').contains('E-mail не найден');
        cy.get('.close-btn').click();
        cy.get('#backToLoginLink').click();
    })

    it('Восстановление пароля c верным логином', function () {
        cy.visit('https://shuragan.github.io/authorization_form/');
        cy.get('#forgotPasswordLink').should('have.css', 'color', 'rgb(52, 152, 219)');
        cy.get('#forgotPasswordLink').click();
        cy.get('#resetEmail').type('tmt@mail.ru');
        cy.get('#resetPasswordForm > .btn').click();
        cy.get('.popup-content').contains('Код отправлен');
        cy.get('.close-btn').click();
        cy.get('#backToLoginLink').click();
    })
})


// запуск через теринал: npx cypress run --spec cypress/e2e/poke.cy.js --browser chrome
