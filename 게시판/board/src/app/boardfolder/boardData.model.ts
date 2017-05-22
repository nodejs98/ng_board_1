 

export class boardData{

  constructor(
      public num:number,
      public title:String,
      public writer:String,
      public date:Date,
      public upvote:number,
      public downvote:number,
      public hits:number
      ) { }
}