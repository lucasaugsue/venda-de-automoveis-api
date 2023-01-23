import DonosService from "../../services/DonosService"

export const Donos = (router) => {
    router.get('/', async (ctx, next) => {
        try{
            ctx.status = 200
            ctx.body = await DonosService.getAllDonos()

        }catch(err){
            ctx.status = 400
            ctx.body = { erro: err.message }
        }
    })
}