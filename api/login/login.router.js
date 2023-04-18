var express = require("express");
var router = express.Router();
var user = require("./login.controller");

/**
 *@swagger
 * /login:
 *  post:
 *    summary: "로그인"
 *    description: "유저ID로 로그인한다."
 *    tags:
 *    - /login
 *    produces:
 *    - application/json
 *    requestBody:
 *      description: 사용자가 서버로 전달하는 값에 따라 결과 값은 다릅니다. (유저 등록)
 *      required: true
 *      content:
 *        application/x-www-form-urlencoded:
 *          schema:
 *            type: object
 *            properties:
 *              userId:
 *                type: int
 *                description: "유저ID"
 *                example: "1"
 *    responses:
 *     200:
 *      description: 조회 성공
 */
router.post("/", user.loginUser);

module.exports = router;
