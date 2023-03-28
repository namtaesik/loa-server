var express = require("express");
var router = express.Router();
var controller = require("./raid-calendar.controller");

/**
 *@swagger
 * /raid-calendar:
 *  get:
 *    summary: "레이드 캘린더 조회"
 *    description: "등록된 레이드 일정들을 조회한다"
 *    tags:
 *    - /raid-calendar
 *    produces:
 *    - application/json
 *    responses:
 *     200:
 *      description: 조회 성공
 */
router.get("/", controller.getRaidCalendar);
/**
 *@swagger
 * /raid-calendar/detail:
 *  get:
 *    summary: "레이드 캘린더 상세 조회"
 *    description: "특정 레이드 일정의 상세 내용을 조회한다"
 *    tags:
 *    - /raid-calendar
 *    produces:
 *    - application/json
 *    parameters:
 *      - in: query
 *        name: attackId
 *        example: 1
 *        required: false
 *        schema:
 *          type: integer
 *          description: 레이드번호
 *    responses:
 *     200:
 *      description: 조회 성공
 */
router.get("/detail", controller.getRaidCalendarDetail);
/**
 *@swagger
 * /raid-calendar:
 *  post:
 *    summary: "레이드 일정등록"
 *    description: "레이드 일정을 등록한다"
 *    tags:
 *    - /raid-calendar
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
 *              attackDate:
 *                type: string
 *                description: "일자(yyyy-MM-dd HH:mm)"
 *                example: "2023-03-27 10:15"
 *                required: true
 *              bossCode:
 *                type: string
 *                description: "보스코드"
 *                example: "Illiakan"
 *    responses:
 *     200:
 *      description: 등록 성공
 */
router.post("/", controller.addRaidCalendar);
/**
 *@swagger
 * /raid-calendar/join:
 *  post:
 *    summary: "레이드 일정참가"
 *    description: "레이드 일정에 참가한다"
 *    tags:
 *    - /raid-calendar
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
 *              attackId:
 *                type: int
 *                description: "레이드 일정 ID"
 *                example: "1"
 *                required: true
 *              userId:
 *                type: int
 *                description: "유저ID"
 *                example: "1"
 *              characterId:
 *                type: int
 *                description: "캐릭터ID"
 *                example: "1"
 *    responses:
 *     200:
 *      description: 참가 성공
 */
router.post("/join", controller.addJoinRaid);
/**
 *@swagger
 * /raid-calendar/quit:
 *  post:
 *    summary: "레이드 일정탈퇴"
 *    description: "레이드 일정에서 빠진다"
 *    tags:
 *    - /raid-calendar
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
 *              attackId:
 *                type: int
 *                description: "레이드 일정 ID"
 *                example: "1"
 *                required: true
 *              userId:
 *                type: int
 *                description: "유저ID"
 *                example: "1"
 *    responses:
 *     200:
 *      description: 탈퇴 성공
 */
router.post("/quit", controller.quitRaid);
router.post("/remove", controller.removeRaidCalendar);
module.exports = router;
