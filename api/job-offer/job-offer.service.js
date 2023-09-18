const mysql = require("../../public/javascripts/mysql");
const crypto = require("../../public/javascripts/crypto");
module.exports = {
  addJobOfferMst: async (param, callback) => {
  
    
    if (param.body == null) {
      callback("파라미터가 누락되었습니다.", null);
      return;
    }
    if ((param.body?.userId ?? "") == "") {
      callback("아이디가 누락되었습니다.", null);
      return;
    }

    if ((param.body?.characterId ?? "") == "") {
      callback("캐릭터ID가 누락되었습니다.", null);
      return;
    }
    if ((param.body?.title ?? "") == "") {
      callback("제목이 누락되었습니다.", null);
      return;
    }
    if ((param.body?.contents ?? "") == "") {
      callback("내용이 누락되었습니다.", null);
      return;
    }

    var offerId = null;
    
    try {
      await mysql.conn.query(
        "call AddJobOfferMst(?,?,?,?)", //
        [param.body.userId ?? "",
        param.body.characterId ?? "",
        param.body.title ?? "",
        param.body.contents ?? ""], // ? 에 들어갈 param 배열.
        (err, rows, fields) => {
          
          if (err) {
            callback(err, null);
            
            return;
          }
          if (
            rows != undefined &&
            rows[0].length > 0 &&
            rows[0][0].offerId != undefined
          ) {
            offerId=rows[0][0].offerId;
            if(offerId!=null){
              callback(null, {offerId:offerId});
            }
            else
            {
              // 반환받은 offerId 정보가 없을 경우
              
              console.error('등록실패1');
  
              callback('등록실패 : ',{offerId:-1}); // controller에서 넘겨준 callback 함수에 값을 넣어준다.
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
  getJobOfferMst: async (param, callback)=>{
    
   var offerId = param.body?.offerId??-1;
  //  if ((param.body?.offerId ??-1) <=0) {
  //    callback("offerId가 누락되었습니다.", null);
  //    return;
  //  }
  
  try{
        await mysql.conn.query(
          "call GetJobOfferList(?)", 
          [offerId], // ? 에 들어갈 param 배열.
          (err, rows, fields) => {
            
            if (err) {
              callback(err,null);
             return;
            }
            callback(null, rows[0]); // controller에서 넘겨준 callback 함수에 값을 넣어준다.
            return;
             
          }
        );
        }
        catch(err){
          callback(err,null);
        }
    
  },
  deleteJobOfferMst: async (param, callback) => {
  
    
    if (param.body == null) {
      callback("파라미터가 누락되었습니다.", null);
      return;
    }
    if ((param.body?.jobOfferId ?? -1) <0) {
      callback("아이디가 누락되었습니다.", null);
      return;
    }

    var offerId = null;
    
    try {
      await mysql.conn.query(
        "call DeleteJobOfferMst(?)", //
        [param.body.jobOfferId], // ? 에 들어갈 param 배열.
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
          
            if(rows[0][0].cnt>0){
              callback(null, {cnt : rows[0][0].cnt});
            }
            else
            {
              // 반환받은 offerId 정보가 없을 경우
              
  
              callback('삭제실패 !',{cnt: rows[0][0].cnt}); // controller에서 넘겨준 callback 함수에 값을 넣어준다.
            }
          } else {
            // 반환받은 offerId 정보가 없을 경우
            console.error('등록실패2');
            callback('(undefined)삭제실패 : ',{cnt:-1}); // controller에서 넘겨준 callback 함수에 값을 넣어준다.
          }
          
        }
        
      );
     
    } catch (err) {
      callback(err, null);
    }

  },
  updateJobOfferMst: async (param, callback)=>{
    
    if (param.body == null) {
     callback("파라미터가 누락되었습니다.", null);
     return;
   }
   if ((param.body?.offerId ??-1) <=0) {
     callback("offerId가 누락되었습니다.", null);
     return;
   }
  if ((param.body?.characterId ?? "") == "") {
    callback("캐릭터ID가 누락되었습니다.", null);
    return;
  }
  if ((param.body?.title ?? "") == "") {
    callback("제목이 누락되었습니다.", null);
    return;
  }
  if ((param.body?.contents ?? "") == "") {
    callback("내용이 누락되었습니다.", null);
    return;
  }
  try{
        await mysql.conn.query(
          "call UpdateJobOfferMst(?,?,?,?)", 
          [param.body.offerId ?? "",
          param.body.characterId ?? "",
          param.body.title ?? "",
          param.body.contents ?? ""], // ? 에 들어갈 param 배열.
          (err, rows, fields) => {
            
            if (err) {
              callback(err,null);
             return;
            }
            else if (
              rows != undefined &&
              rows[0].length > 0 &&
              rows[0][0].cnt != undefined
            ) {
              // 정상등록
              if(rows[0][0].cnt>0){
                callback(null,{message: ('완료되었습니다.(수정 '+rows[0][0].cnt+'건)')});
              }
              else{
                callback(null,{message:'완료되었습니다.(수정 0건)'});
              }
            }
            else{
              callback('반환값이 없습니다. 관리자에게 문의부탁드립니다.',null);
            }
          }
        );
        }
        catch(err){
          callback(err,null);
        }
    
  },
  
  addJobOfferHashTagMst: async (param, callback)=>{
     //var hashArr = JSON.parse(param.body?.hashTagArr??'[]');
     if (param.body == null) {
      callback("파라미터가 누락되었습니다.", null);
      return;
    }
    if ((param.body?.offerId ??-1) <=0) {
      callback("offerId가 누락되었습니다.", null);
      return;
    }
    if((param.body?.hashTagArr??[]).length <= 0 ){
      callback("hashTagArr가 누락되었습니다.", null);
      return;

    }
       //console.log('offer ID : ',rows[0][0])
       console.log(param.body?.hashTagArr);
       for(var i=0;i< param.body?.hashTagArr.length ;i++){
         console.log(param.body?.hashTagArr[i]);
         mysql.conn.query(
           "call AddJobOfferHashTagMst(?,?)", 
           [param.body?.hashTagArr[i],
           param.body?.offerId
           ], // ? 에 들어갈 param 배열.
           (err, rows, fields) => {
             
             if (err) {
               console.error('hash 등록실패 건',err);
               //callback(err,null);
              return;
             }
             else if (
               rows != undefined &&
               rows[0].length > 0 
             ) {
               // 정상등록
               console.log('정상등록');
             } else {
               // 반환받은 hasId 정보가 없을 경우
               console.error("HashID 등록에 실패하였습니다.");
             }
           }
         );
        
       }
       callback(null,{message:'완료되었습니다.'});
       
     
  },
  deleteJobOfferHashTag: async (param, callback)=>{
    
    if (param.body == null) {
     callback("파라미터가 누락되었습니다.", null);
     return;
   }
   if ((param.body?.offerId ??-1) <=0) {
     callback("offerId가 누락되었습니다.", null);
     return;
   }
   
  try{
        await mysql.conn.query(
          "call DeleteJobOfferHashTag(?)", 
          [ param.body?.offerId], // ? 에 들어갈 param 배열.
          (err, rows, fields) => {
            
            if (err) {
              console.error('hash 삭제실패 건');
              //callback(err,null);
             return;
            }
            else if (
              rows != undefined &&
              rows[0].length > 0 &&
              rows[0][0].cnt != undefined
            ) {
              // 정상등록
              if(rows[0][0].cnt>0){
                console.log('정상삭제');
                callback(null,{message: ('완료되었습니다.(삭제 '+rows[0][0].cnt+')')});
              }
              else{
                callback(null,{message:'완료되었습니다.(삭제 0건)'});
                console.log('삭제 없음');
              }
            } else {
              // 반환받은 hasId 정보가 없을 경우
              console.error("HashID 삭제에 실패하였습니다.");
             
              
            }
          }
        );
        }
        catch(err){
          callback(err,null);
        }
    
 }
  
};
