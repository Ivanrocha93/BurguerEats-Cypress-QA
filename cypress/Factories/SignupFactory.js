var faker = require('faker')
var cpf = require('gerador-validador-cpf')

export default {

    deliver: function () {

        var firstName = faker.name.firstName()
        var lastName = faker.name.lastName()

        var data = {

            name: `${firstName} ${lastName}`,
            cpf: cpf.generate(),
            email: faker.internet.email(firstName),
            whatsapp: '71988741501',
            endereco: {

                postalCode: '40231250',
                address: 'Avenida Cardeal da Silva',
                addressNumber: '45',
                addressDetails: 'AP 102',
                district: 'Federação',
                city_Uf: 'Salvador/BA'
            },

            delivery_method: 'Moto',
            cnh: 'cnh-digital.jpg'
        }

        return data
    }
}