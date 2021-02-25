import { IReturnDto, ResultDto } from 'fl-framework-angular';
import { MstUser } from './mst-user';

export class ParamDto {
  locale: string;
}
export class ReturnDto implements IReturnDto {
  result: ResultDto;
}

export class LoginParamDto extends ParamDto {
  bookId: string;
  bookNo: string;
}

export class LoginReturnDto extends ReturnDto {
  userInfo: MstUser;
}
