const { Router } = require("express");
const router = Router();

router.get("/", (req, res) => res.json({ message: "hello world in live" }));

module.exports = router;