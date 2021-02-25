import { FlComponentBase, isEmpty } from 'fl-framework-angular';
import * as _ from 'lodash';

/**
 * ベースコンポーネント
 */
export abstract class ComponentBase extends FlComponentBase {

  constructor() {
    super();
  }

  /**
   * json→base64文字列
   * @param param json
   */
  public jsonToBase64Str(param: any): string {
    return btoa(unescape(encodeURIComponent(JSON.stringify(param))));
  }

  /**
   * base64文字列→json
   * @param param base64文字列
   */
  public base64StrToJson(param: string): any {
    return JSON.parse(decodeURIComponent(escape(atob(param))));
  }

  /**
   * 空判定
   * @param value 判定対象値
   */
  public isEmpty(value: any): boolean {
    return isEmpty(value);
  }

  /**
   * 空判定
   * @param list 判定対象List
   */
  public isEmptyList(list: Array<any>): boolean {
    return (list == null || list.length === 0);
  }

  /**
   * DeepCopy
   * @param param コピー対象インスタンス
   */
  protected cloneDeep<T>(param: T): T {
    return _.cloneDeep(param);
  }

}
