var express = require("express");
var router = express.Router();
var controller = require("./character.controller");

/**
 *@swagger
 * /character:
 *  get:
 *    summary: "캐릭터조회"
 *    description: "유저의 캐릭터들을 조회한다."
 *    tags:
 *    - /character
 *    produces:
 *    - application/json
 *    parameters:
 *      - in: query
 *        name: userId
 *        example: 1
 *        required: false
 *        schema:
 *          type: integer
 *          description: 유저ID
 *    responses:
 *     200:
 *      description: 조회 성공
 */
router.get("/", controller.getCharacter);
/**
 *@swagger
 * /character/add:
 *  post:
 *    summary: "캐릭터등록"
 *    description: "유저의 캐릭터를 등록한다."
 *    tags:
 *    - /character
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
 *                type: integer
 *                description: "유저 ID"
 *                example: "1"
 *                required: true
 *              characterName:
 *                type: string
 *                description: "캐릭터명"
 *                example: "캐릭터명"
 *              class:
 *                type: string
 *                description: "클래스코드"
 *              characterLevel:
 *                type: float
 *                description: "캐릭터레벨"
 *    responses:
 *     200:
 *      description: 조회 성공
 */
router.post("/add", controller.addCharacter);
/**
 *@swagger
 * /character/delete:
 *  post:
 *    summary: "캐릭터 삭제"
 *    description: "유저의 캐릭터를 삭제한다."
 *    tags:
 *    - /character
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
 *                type: integer
 *                description: "유저 ID"
 *                example: "1"
 *                required: true
 *              characterId:
 *                type: integer
 *                description: "캐릭터ID"
 *                example: "1"
 *    responses:
 *     200:
 *      description: 조회 성공
 */
router.post("/delete", controller.deleteCharacter);

module.exports = router;
