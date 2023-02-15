const { faker } = require('@faker-js/faker');

let datos=[];
let datosCompany=[];

const ramdomUser = ()=> {
    return({'_id' : (datos.length+1),'name' : faker.name.firstName(),'apellido': faker.name.lastName(),'numeroTelefono': faker.phone.number(),'email':faker.internet.email(),'password':faker.internet.password()}
    )};

const ramdomCompani = ()=> {
    return({'_id' : (datosCompany.length+1),'name' : faker.company.companyName(),
            'direccion':{
                'calle':faker.address.street(),
                'ciudad':faker.address.city() ,
                'estado':faker.address.state(),
                'codigo_postal':faker.finance.account(),
                'pais':faker.address.country()
            }
    })};

const user = (req, res) => {
    let aux=ramdomUser();
    datos.push(aux);
    res.json(aux);
}
const company=( req,res)=>{
    let aux=ramdomCompani();
    datosCompany.push(aux);
    res.json(aux);
}

const companys=( req,res)=>{
    datos.push(ramdomUser);
    datosCompany.push(ramdomCompani());
    res.json({'Companies':ramdomCompani(),'User':ramdomUser()});
}
module.exports ={
    user,company,companys
}