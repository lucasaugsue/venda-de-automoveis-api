import AnunciosService from "../../services/AnunciosService"

export const Anuncios = (router) => {
    router.get('/', async (ctx, next) => {
        try{
            ctx.status = 200
            ctx.body = await AnunciosService.getAllAnuncios()

        }catch(err){
            ctx.status = 400
            ctx.body = { erro: err.message }
        }
    })

    router.post('/create', async (ctx, next) => {
        try{
            const params = ctx.data
            ctx.status = 201
            ctx.body = await AnunciosService.createAnuncio({params})

        }catch(err){
            ctx.status = 400
            ctx.body = { erro: err.message }
        }
    })

    router.patch('/edit/:anuncioId', async (ctx, next) => {
        try{
            const params = ctx.data
            const anuncioId = parseInt(ctx.params.anuncioId) 
            ctx.status = 201
            ctx.body = await AnunciosService.editAnuncio({anuncioId, params})

        }catch(err){
            ctx.status = 400
            ctx.body = { erro: err.message }
        }
    })

    router.delete('/delete/:anuncioId', async (ctx, next) => {
        try{
            const anuncioId = parseInt(ctx.params.anuncioId) 
            ctx.status = 201
            ctx.body = await AnunciosService.deleteAnuncio({anuncioId})

        }catch(err){
            ctx.status = 400
            ctx.body = { erro: err.message }
        }
    })
}