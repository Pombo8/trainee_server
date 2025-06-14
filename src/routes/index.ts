import swaggerUi from 'swagger-ui-express'
import swaggerSpec from '../../swagger/swagger-config'

import {Router} from "express"

import listRoutes from './list'
import taskRoutes from './task'

const routes = Router();



routes.use('/lists',listRoutes)
routes.use('/tasks',taskRoutes)

export default routes;