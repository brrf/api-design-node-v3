import { Router } from 'express'

const router = Router()
const controller = (req, res) => {
	res.send({response: 'got it!'})
}

router.route('/')
	.get(controller)
	.post(controller)

router.route('/:id')
	.put(controller)
	.delete(controller)
	.get(controller)

export default router
