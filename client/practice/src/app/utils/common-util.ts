import { QueryList } from '@angular/core';
import { NgModel } from '@angular/forms';
import { IReturnDto } from 'fl-framework-angular';

/**
 * 通信成功確認
 * @param value サーバーレスポンス
 */
export function isSuccess(value: IReturnDto): boolean {
  return (value && value.result && value.result.success);
}

/**
 * 文字列の左に文字列を加えて桁を揃える
 * @param value 値
 * @param length 長さ
 * @param ch 挿入したい文字列
 */
export function lpad(value: any, length: number, ch: string = '0'): string {
  return (Array(length).join(ch) + value).slice(-length);
}

/**
 * ファイル保存
 * @param blob ファイル実態
 * @param fileName ファイル名
 */
export function saveFile(blob: Blob, fileName: string): void {
  if (window.navigator.msSaveBlob) {
    window.navigator.msSaveBlob(blob, fileName);
  } else {
    const a = document.createElement('a');
    a.href = (window.URL).createObjectURL(blob);
    a.target = '_blank';
    a.download = fileName;
    a.click();
  }
}

/**
 * ファイルを開くor保存(IEのみ)
 * @param blob ファイル実態
 * @param fileName ファイル名
 */
export function saveOrOpenFile(blob: Blob, fileName: string): void {
  if (window.navigator.msSaveOrOpenBlob) {
    window.navigator.msSaveOrOpenBlob(blob, fileName);
  }
  else {
    const a = document.createElement('a');
    a.href = (window.URL).createObjectURL(blob);
    a.target = '_blank';
    a.download = fileName;
    a.click();
  }
}

/**
 *  バリデーションエラーチェック
 * @param ngModels 画面クラス内で定義したngModel
 */
export function isValidationError(ngModels: QueryList<NgModel>): boolean {
  let result = false;
  if (ngModels == null) {
    return result;
  }
  ngModels.forEach(item => {
    item.control.markAllAsTouched();
    if (!result && item.invalid) {
      result = true;
    }
  });
  return result;
}
