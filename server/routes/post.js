import express from "express";
import { getFeedPosts, getUserPosts, likePost } from "../controllers/posts.js";
import { verifyToken } from "../middleware/auth";
const router = express.Router();

// * READ*//
router.get("/", verifyToken, getFeedPosts);


//* UPDATE *//

export default router;
