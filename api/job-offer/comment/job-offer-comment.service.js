const mysql = require("../../../public/javascripts/mysql");
const crypto = require("../../../public/javascripts/crypto");
module.exports = {
  getJobOfferComments: async (param, callback) => {
  
    
   
    if ((param.query?.jobOfferId ?? "") == "") {
      callback("jobOfferId가 누락되었습니다.", null);
      return;
    }
    
    try {
      await mysql.conn.query(
        "call GetJobOfferComment(?)", //
        [param.query.jobOfferId], // ? 에 들어갈 param 배열.
        (err, rows, fields) => {
          if (err) {
            callback(err, null);
            
            return;
          }
          
          //var commentDetails = 
          //if(rows[0][0].CommentDetails)
          // 대댓글 처리
          if(rows[0][0]?.CommentDetails!=undefined){
          rows[0][0].CommentDetails = JSON.parse(rows[0][0]?.CommentDetails);
          }
            callback(null, rows[0]); // controller에서 넘겨준 callback 함수에 값을 넣어준다.
          
        }
        
      );
     
    } catch (err) {
      callback(err, null);
    }

  },
  addJobOfferComment: async (param, callback) => {
  
    
    if (param.body == null) {
      callback("파라미터가 누락되었습니다.", null);
      return;
    }
    if ((param.body?.jobOfferId ?? -1) <0) {
      callback("jobOfferId가 누락되었습니다.", null);
      return;
    }
    if ((param.body?.userId ?? "") == "") {
      callback("아이디가 누락되었습니다.", null);
      return;
    }

    if ((param.body?.comment ?? "") == "") {
      callback("댓글내용이 누락되었습니다.", null);
      return;
    }
   

    var commentId = null;
    
    try {
      await mysql.conn.query(
        "call AddJobOfferCommentMst(?,?,?)", //
        [param.body.jobOfferId ,
        param.body.userId ,
        param.body.comment ?? ""], // ? 에 들어갈 param 배열.
        (err, rows, fields) => {
          
          if (err) {
            callback(err, null);
            
            return;
          }
          if (
            rows != undefined &&
            rows[0].length > 0 &&
            rows[0][0].commentId != undefined
          ) {
            commentId=rows[0][0].commentId;
            if(commentId!=null){
              callback(null, {commentId:commentId});
            }
            else
            {
              // 반환받은 offerId 정보가 없을 경우
              
              console.error('등록실패1');
  
              callback('등록실패 : ',{commentId:-1}); // controller에서 넘겨준 callback 함수에 값을 넣어준다.
            }
          } else {
            // 반환받은 offerId 정보가 없을 경우
            console.error('등록실패2');
            callback('등록실패 : ',{offerId:-1}); // controller에서 넘겨준 callback 함수에 값을 넣어준다.
          }
          
        }
        
      );
     
    } catch (err) {
      callback(err, null);
    }

  },
  updateJobOfferComment: async (param, callback) => {
  
    
    if (param.body == null) {
      callback("파라미터가 누락되었습니다.", null);
      return;
    }
    if ((param.body?.commentId ?? "") == "") {
      callback("commentId가 누락되었습니다.", null);
      return;
    }

    if ((param.body?.jobOfferId ?? "") == "") {
      callback("jobOfferId가 누락되었습니다.", null);
      return;
    }

    if ((param.body?.comment ?? "") == "") {
      callback("내용이 누락되었습니다.", null);
      return;
    }

    
    try {
      await mysql.conn.query(
        "call UpdateJobOfferCommentMst(?,?,?)", //
        [param.body.commentId,
        param.body.jobOfferId,
        param.body.comment], // ? 에 들어갈 param 배열.
        (err, rows, fields) => {
          
          if (err) {
            callback(err, null);
            
            return;
          }
          if (
            rows != undefined &&
            rows[0].length > 0 &&
            rows[0][0].cnt != undefined
          ) {
           
              callback(null, {cnt:rows[0][0].cnt});
            
          } else {
            // 반환받은  정보가 없을 경우
            callback('수정실패 : ',{cnt:-1}); // controller에서 넘겨준 callback 함수에 값을 넣어준다.
          }
          
        }
        
      );
     
    } catch (err) {
      callback(err, null);
    }

  },
  deleteJobOfferComment: async (param, callback) => {
  
    
    if (param.body == null) {
      callback("파라미터가 누락되었습니다.", null);
      return;
    }
    if ((param.body?.jobOfferId ?? "") == "") {
      callback("jobOfferId가 누락되었습니다.", null);
      return;
    }

    if ((param.body?.commentId ?? "") == "") {
      callback("commentId가 누락되었습니다.", null);
      return;
    }
   
    
    try {
      await mysql.conn.query(
        "call DeleteJobOfferCommentMst(?,?)", //
        [param.body.jobOfferId ,
        param.body.commentId ], // ? 에 들어갈 param 배열.
        (err, rows, fields) => {
          
          if (err) {
            callback(err, null);
            
            return;
          }
          if (
            rows != undefined &&
            rows[0].length > 0 &&
            rows[0][0].cnt != undefined
          ) {
          
              callback(null, {cnt:rows[0][0].cnt});
           
          } else {
            // 반환받은 offerId 정보가 없을 경우
            console.error('등록실패2');
            callback('등록실패 : ',{cnt:-1}); // controller에서 넘겨준 callback 함수에 값을 넣어준다.
          }
          
        }
        
      );
     
    } catch (err) {
      callback(err, null);
    }

  },
  addJobOfferCommentDetail: async (param, callback) => {
  
    
    if (param.body == null) {
      callback("파라미터가 누락되었습니다.", null);
      return;
    }
    if ((param.body?.jobOfferId ?? -1) <0) {
      callback("jobOfferId가 누락되었습니다.", null);
      return;
    }
    if ((param.body?.commentId ?? -1) <0) {
      callback("commentId가 누락되었습니다.", null);
      return;
    }
    if ((param.body?.userId ?? "") == "") {
      callback("아이디가 누락되었습니다.", null);
      return;
    }

    if ((param.body?.commentDetail ?? "") == "") {
      callback("대댓글내용이 누락되었습니다.", null);
      return;
    }
   

    var commentId = null;
    
    try {
      await mysql.conn.query(
        "call AddJobOfferCommentDetail(?,?,?,?)", //
        [param.body.jobOfferId ,
          param.body.commentId ,
        param.body.userId ,
        param.body.commentDetail ?? ""], // ? 에 들어갈 param 배열.
        (err, rows, fields) => {
          
          if (err) {
            callback(err, null);
            
            return;
          }
          if (
            rows != undefined &&
            rows[0].length > 0 &&
            rows[0][0].commentDetailId != undefined
          ) {
          
              callback(null, {commentDetailId:rows[0][0].commentDetailId});
           
          } else {
            callback('등록실패 : ',{commentDetailId:-1}); // controller에서 넘겨준 callback 함수에 값을 넣어준다.
          }
          
        }
        
      );
     
    } catch (err) {
      callback(err, null);
    }

  },
  updateJobOfferCommentDetail: async (param, callback) => {
  
    
    if (param.body == null) {
      callback("파라미터가 누락되었습니다.", null);
      return;
    }
    if ((param.body?.jobOfferId ?? -1) <0) {
      callback("jobOfferId가 누락되었습니다.", null);
      return;
    }
    if ((param.body?.commentDetailId ?? "") == "") {
      callback("commentDetailId가 누락되었습니다.", null);
      return;
    }

    if ((param.body?.commentId ?? "") == "") {
      callback("commentId가 누락되었습니다.", null);
      return;
    }

    if ((param.body?.commentDetail ?? "") == "") {
      callback("대댓글 내용이 누락되었습니다.", null);
      return;
    }

    
    try {
      await mysql.conn.query(
        "call UpdateJobOfferCommentDetail(?,?,?,?)", //
        [param.body.jobOfferId,
        param.body.commentDetailId,
        param.body.commentId,
        param.body.commentDetail], // ? 에 들어갈 param 배열.
        (err, rows, fields) => {
          
          if (err) {
            callback(err, null);
            
            return;
          }
          if (
            rows != undefined &&
            rows[0].length > 0 &&
            rows[0][0].cnt != undefined
          ) {
           
              callback(null, {cnt:rows[0][0].cnt});
            
          } else {
            // 반환받은  정보가 없을 경우
            callback('수정실패 : ',{cnt:-1}); // controller에서 넘겨준 callback 함수에 값을 넣어준다.
          }
          
        }
        
      );
     
    } catch (err) {
      callback(err, null);
    }

  },
  deleteJobOfferCommentDetail: async (param, callback) => {
  
    
    if (param.body == null) {
      callback("파라미터가 누락되었습니다.", null);
      return;
    }
    if ((param.body?.jobOfferId ?? -1) <0) {
      callback("jobOfferId가 누락되었습니다.", null);
      return;
    }
    if ((param.body?.commentDetailId ?? "") == "") {
      callback("commentDetailId가 누락되었습니다.", null);
      return;
    }

    if ((param.body?.commentId ?? "") == "") {
      callback("commentId가 누락되었습니다.", null);
      return;
    }
   
    
    try {
      await mysql.conn.query(
        "call deleteJobOfferCommentDetail(?,?,?)", //
        [param.body.jobOfferId ,
        param.body.commentDetailId ,
        param.body.commentId ], // ? 에 들어갈 param 배열.
        (err, rows, fields) => {
          
          if (err) {
            callback(err, null);
            
            return;
          }
          if (
            rows != undefined &&
            rows[0].length > 0 &&
            rows[0][0].cnt != undefined
          ) {
          
              callback(null, {cnt:rows[0][0].cnt});
           
          } else {
            callback('삭제실패 : ',{cnt:-1}); // controller에서 넘겨준 callback 함수에 값을 넣어준다.
          }
          
        }
        
      );
     
    } catch (err) {
      callback(err, null);
    }

  },

  
};
