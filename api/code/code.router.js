var express = require("express");
var router = express.Router();
var code = require("./code.controller");

/**
 *@swagger
 * /code:
 *  get:
 *    summary: "코드 리스트 조회"
 *    description: "그룹코드로 코드 리스트를 조회한다."
 *    tags:
 *    - /code
 *    produces:
 *    - application/json
 *    parameters:
 *      - in: query
 *        name: groupCode
 *        example: RootClass
 *        required: false
 *        schema:
 *          type: string
 *          description: 그룹코드
 *    responses:
 *     200:
 *      description: 조회 성공
 */
router.get("/", code.getCode);
module.exports = router;
