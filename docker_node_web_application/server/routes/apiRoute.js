const express = require("express");
const router = express.Router();

const snapApiCtrl = require("../controllers/snapApi");


router
    .route("/snaps")
    .get(snapApiCtrl.indexSnaps)
    .post(snapApiCtrl.addSnap);
router
    .route("/snaps/:snapId")
    .get(snapApiCtrl.findSnap)
    .put(snapApiCtrl.editSnap)
    .delete(snapApiCtrl.deleteSnap);

module.exports = router;