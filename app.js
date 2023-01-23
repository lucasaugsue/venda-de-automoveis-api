import http from 'http';
import Knex from 'knex';
import koa from 'koa';
import body from 'koa-body';
import Router from 'koa-router';
import moment from 'moment';
import { Model } from "objection";
import { Check } from './lib/general/Check';
import { Anuncios } from './lib/general/Anuncios';
import { Donos } from './lib/general/Donos';
import ActionLogMiddleware from './middlewares/ActionLog';

const koaServer = new koa();

require('dotenv').config()

const server = http.createServer(koaServer.callback())
server.setTimeout(0);

const knex = Knex(require('./knexfile'))
Model.knex(knex)

server.listen(8181)
console.log('Server running in http://localhost:' + (8181))

koaServer.use(body())
koaServer.use(async (ctx, next) => {
	ctx.started_at = moment()

	ctx.logs = {
		send_mail_error: false,
		save_db: true,
	}
    if(ctx.method === "GET") ctx.data = {...require('url').parse(ctx.request.url, true).query, ...ctx.params};
    else ctx.data = {...ctx.request.body};

    console.log(ctx.method, ctx.url)

	ctx.set('Access-Control-Allow-Origin', ctx.request.header.origin || '*')
	ctx.set('Access-Control-Allow-Headers', ctx.request.header['access-control-request-headers'] || '*')
	ctx.set('Access-Control-Allow-Methods', 'POST, GET, OPTIONS, PUT, PATCH, DELETE')
	ctx.set('Access-Control-Allow-Credentials', 'true')
	ctx.set('Allow', 'POST, GET, OPTIONS, PUT, PATCH, DELETE')
	ctx.set('Server', 'ApiServer')
	if (ctx.method === 'OPTIONS') {
		ctx.body = ''
		return
	}
	await next();
})

koaServer.use(ActionLogMiddleware)

const checkRouter = new Router({ prefix: '/check' })
Check(checkRouter)
koaServer.use(checkRouter.routes())

const anunciosRouter = new Router({ prefix: '/anuncios' })
Anuncios(anunciosRouter)
koaServer.use(anunciosRouter.routes())

const donosRouter = new Router({ prefix: '/donos' })
Donos(donosRouter)
koaServer.use(donosRouter.routes())