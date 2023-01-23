import { Donos } from '../lib/models/Donos'

class DonosService{

    static getAllDonos(){
        return new Promise(async (resolve, reject) => {
            try{
                const donos = await Donos.query()
                .eager("donos_anuncios.donos")
                
                resolve(donos.sort((a, b) => a.id - b.id))
            }catch(err){
                reject(err)
            }
        })
    }
}

export default DonosService