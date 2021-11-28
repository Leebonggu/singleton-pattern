import { Router } from 'express';
import { addCat, deleteCat, patchCat, putCat, readAllCat, readCat } from './cats.service';

const router = Router();

router.get('/', readAllCat);
router.get('/:id', readCat);
router.post('/', addCat);
router.put('/:id', putCat);
router.patch('/:id', patchCat);
router.delete('/:id', deleteCat);

export default router;
