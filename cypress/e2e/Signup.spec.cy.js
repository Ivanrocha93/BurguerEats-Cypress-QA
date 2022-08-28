
import signup from '../Pages/SignupPage'

import SignupFactory from '../Factories/SignupFactory'

describe('test', function () {



    it('Usuário deve se tornar entregador Moto', function () {

        var deliver = SignupFactory.deliver()


        signup.go()
        signup.fillForms(deliver)
        signup.submit()
        signup.contentShouldBe()
    })

    it('Usuário deve se tornar entregador Bicicleta', function () {

        var deliver = SignupFactory.deliver()

        deliver.delivery_method = 'Bicicleta'


        signup.go()
        signup.fillForms(deliver)
        signup.submit()
        signup.contentShouldBe()
    })

    it('Usuário deve se tornar entregador Van/Carro', function () {

        var deliver = SignupFactory.deliver()

        deliver.delivery_method = 'Van/Carro'

        signup.go()
        signup.fillForms(deliver)
        signup.submit()
        signup.contentShouldBe()
    })



    it('CPF inválido', function () {

        var deliver = SignupFactory.deliver()

        deliver.cpf = '1254785469AA'

        signup.go()
        signup.fillForms(deliver)
        signup.submit()
        signup.alertMessage('Oops! CPF inválido')
    })

    it('e-mail inválido', function () {

        var deliver = SignupFactory.deliver()

        deliver.email = 'ivan.@com.br'

        signup.go()
        signup.fillForms(deliver)
        signup.submit()
        signup.alertMessage('Oops! Email com formato inválido.')
    })

    it('campos obrigatórios', function () {



        signup.go()
        signup.submit()
        signup.alertMessage('É necessário informar o nome')
        signup.alertMessage('É necessário informar o CPF')
        signup.alertMessage('É necessário informar o email')
        signup.alertMessage('É necessário informar o CEP')
        signup.alertMessage('É necessário informar o número do endereço')
        signup.alertMessage('Selecione o método de entrega')
        signup.alertMessage('Adicione uma foto da sua CNH')

    })
})

