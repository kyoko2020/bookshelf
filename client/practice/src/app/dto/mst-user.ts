import { IReturnDto, ResultDto } from 'fl-framework-angular';
export class MstUser {
  bookId: string;
  bookName: string;
  bookNo: string;
  bookAuthor: string;
  bookPublisher: string;
  bookGenre: string;
  bookRelease: string;
  bookBuy: string;
  bookPosition: string;
  bookCheck: number;
  bookPicter:string;
}

export class UserParamDto {
  bookId: string;
  bookName: string;
  bookNo:string;
  bookAuthor: string;
  bookPublisher: string;
  bookGenre: string;
  bookRelease: string;
  bookBuy: string;
  bookPosition: string;
  bookCheck: number;
  bookPicter:string;
}

export class UserReturnDto implements IReturnDto {
  result: ResultDto;
  users: Array<MstUser>;
}

export class AllParamDto {
  bookId: string;
  bookName: string;
  bookNo: string;
  bookAuthor: string;
  bookPublisher: string;
  bookGenre: string;
  bookRelease: string;
  bookBuy: string;
  bookPosition: string;
  bookCheck: number;
  bookPicter:string;
}
export class AllReturnDto implements IReturnDto {
  result: ResultDto;
  users: AllParamDto;
  pass: AllParamDto;
}
