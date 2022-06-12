const router = require('express').Router();
const sectionRouter = require('./section');
const teacherRouter = require('./teacher');
const stuentRouter = require('./student');


router.use('/section',sectionRouter);
router.use('/teacher',teacherRouter);
router.use('/student',stuentRouter);

module.exports = router;