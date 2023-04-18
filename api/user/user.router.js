var express = require("express");
var router = express.Router();
var user = require("./user.controller");

/**
 *@swagger
 * /user:
 *  get:
 *    summary: "유저조회"
 *    description: "유저를 조회한다."
 *    tags:
 *    - /user
 *    produces:
 *    - application/json
 *    parameters:
 *      - in: query
 *        name: userName
 *        example: 유저명
 *        required: false
 *        schema:
 *          type: string
 *          description: 유저이름
 *    responses:
 *     200:
 *      description: 조회 성공
 */
router.get("/", user.getUser);
/**
 * @swagger
 *
 * /user:
 *  post:
 *    summary: "유저 등록"
 *    description: "유저를 등록한다."
 *    tags: 
 *      - /user
 *    requestBody:
 *      description: 사용자가 서버로 전달하는 값에 따라 결과 값은 다릅니다. (유저 등록)
 *      required: true
 *      content:
 *        application/x-www-form-urlencoded:
 *          schema:
 *            type: object
 *            properties:
 *              userName:
 *                type: string
 *                description: "유저 이름"
 *                example: "유저명"
 *              userGrant:
 *                type: string
 *                description: "유저 권한"
 *                example: "User"
 */
router.post("/", user.addUser);

module.exports = router;
