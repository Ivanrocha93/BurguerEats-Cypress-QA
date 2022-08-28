

class SignupPage {

    go() {

        cy.viewport(1440, 900)
        cy.visit("https://buger-eats.vercel.app/deliver")
        cy.get('a[href="/"]').click()
        cy.get('#page-home .content main h1').should('have.text', 'Seja um parceiro entregador pela Buger Eats')

        cy.get('a[href="/deliver"]').click()
        cy.get('#page-deliver form h1').should('have.text', 'Cadastre-se para  fazer entregas')
    }

    fillForms(deliver) {

        cy.get('input[name="name"]').type(deliver.name)
        cy.get('input[name="email"]').type(deliver.email)
        cy.get('input[name="cpf"]').type(deliver.cpf)
        cy.get('input[name="whatsapp"]').type(deliver.whatsapp)

        cy.get('input[name="postalcode"]').type(deliver.endereco.postalCode)
        cy.get('input[value="Buscar CEP"]').click()

        cy.get('input[name="address"]').should('have.value', 'Avenida Cardeal da Silva')
        cy.get('input[name="district"]').should('have.value', 'Federação')
        cy.get('input[name="city-uf"]').should('have.value', 'Salvador/BA')

        cy.get('input[name="address-number"]').type(deliver.endereco.addressNumber)
        cy.get('input[name="address-details"]').type(deliver.endereco.addressDetails)

        cy.contains('.delivery-method li', deliver.delivery_method).click()

        cy.get('input[accept="image/*"]').attachFile('/images/' + deliver.cnh)
    }

    submit() {

        cy.get('button[type="submit"]').click()


    }

    contentShouldBe() {

        cy.get('div[id="swal2-html-container"]').should('have.text', 'Recebemos os seus dados. Fique de olho na sua caixa de email, pois e em breve retornamos o contato.')

        cy.get('button[class="swal2-confirm swal2-styled"]').click()
        cy.get('#page-home .content main h1').should('have.text', 'Seja um parceiro entregador pela Buger Eats')
    }

    alertMessage(expectadeMessage) {


        cy.contains('span[class="alert-error"]', expectadeMessage).should('be.visible')
    }



}

export default new SignupPage;