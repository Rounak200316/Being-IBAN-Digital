import express from "express";

import {
  createMeeting,
  getMeetings,
} from "../controllers/meetingController.js";


const meetingRouter = express.Router();


// =====================================================
// CREATE MEETING REQUEST
// =====================================================

meetingRouter.post(
  "/create",
  createMeeting
);


// =====================================================
// GET ALL MEETING REQUESTS
// =====================================================

meetingRouter.get(
  "/list",
  getMeetings
);


export default meetingRouter;

