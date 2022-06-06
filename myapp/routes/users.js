var express = require("express");
const db = require("../database");
var router = express.Router();

/* GET users listing. */
// router.get("/", function (req, res, next) {
//     res.send("respond with a resource");
// });

router.get("/", async (req, res) => {
    const results = await db.promise().query(`SELECT * FROM USERS`);
    // console.log(results);
    // console.log("-----------------------------")
    // console.log(results[0][1].username);
    // res.send(200);
    res.status(200).send(results[0]);
});

router.post("/", (req, res) => {
    const { username, password } = req.body;
    if (username && password) {
        // console.log(username, password);
        // console.log(username, password, password);
        try {
            db.promise().query(
                `INSERT INTO USERS VALUES('${username}','${password}')`
            );
            res.status(201).send({ msg: "Created User" });
        } catch (err) {
            console.log(err);
        }
    }
});

module.exports = router;
