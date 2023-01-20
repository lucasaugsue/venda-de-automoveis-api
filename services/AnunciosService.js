import { Donos } from '../lib/models/Donos'
import { Anuncios } from '../lib/models/Anuncios'
import { DonosAnuncios } from '../lib/models/DonosAnuncios'

class AnunciosService{

    static getAllAnuncios(){
        return new Promise(async (resolve, reject) => {
            try{
                const anuncios = await Anuncios.query()
                .eager("donos_anuncios.donos")

                resolve(anuncios)
            }catch(err){
                reject(err)
            }
        })
    }

    static createAnuncio({params}){
        return new Promise(async (resolve, reject) => {
            try{

                if((params.donos_anuncios || []).length > 0) {
                    await Anuncios.query().insertAndFetch({
                        ...params,
                    }).then(async (data) => {

                        await DonosAnuncios.query().insertAndFetch(params.donos_anuncios.map(item => ({
                            anuncios_id: data.id,
                            donos_id: item.donos_id
                        })))
                    })

                } else await Anuncios.query().insertAndFetch(params)

                resolve("Criado com sucesso!")
            }catch(err){
                reject(err)
            }
        })
    }

    static editAnuncio({anuncioId, params}){
        return new Promise(async (resolve, reject) => {
            try{
                const anuncio = await Anuncios.query()
                .patchAndFetchById(anuncioId, params)

                resolve(anuncio)
            }catch(err){
                reject(err)
            }
        })
    }

    static deleteAnuncio({anuncioId}){
        return new Promise(async (resolve, reject) => {
            try{
                await Anuncios.query().deleteById(anuncioId)

                resolve("Deletado com sucesso!")
            }catch(err){
                reject(err)
            }
        })
    }

}

export default AnunciosService