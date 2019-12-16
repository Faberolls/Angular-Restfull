import *as express from 'express';
// Import contact controller
import * as memberController from './memberController';

// Initialize express router
// Export API routes
export const ApiRouter = express.Router();

//Set default API response
ApiRouter.get('/', (req: any, res: any) => {
    res.json({
        status:  'API Its Working',
        message: 'Welcome to Fafa Server'
    });
});

// Contact routes
ApiRouter.route('/members')
    .get(memberController.Index)
    .post(memberController.NewMember);

ApiRouter.route('/members/:member_id')
    .get(memberController.ViewMember)
    .patch(memberController.UpdateMember)
    .put(memberController.UpdateMember)
    .delete(memberController.DeleteMember);
