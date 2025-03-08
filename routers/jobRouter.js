import { Router } from "express";
const router = Router();

import {
  getAllJobs,
  getJob,
  createJob,
  updateJob,
  deleteJob,
  showStats,
} from "../controllers/jobController.js";

// router.get('/', getAllJobs);
// router.post('/', createJob);

import {
  validateJobInput,
  validateIdParam,
} from "../middleware/validationMiddleware.js";
import { checkForTestUser } from "../middleware/authMiddleware.js";

router
  .route("/")
  .get(getAllJobs)
  .post(validateJobInput, checkForTestUser, createJob);

router.route("/stats").get(showStats);
router
  .route("/:id")
  .get(validateIdParam, getJob)
  .patch(validateIdParam, validateJobInput, checkForTestUser, updateJob)
  .delete(validateIdParam, checkForTestUser, deleteJob);

export default router;
