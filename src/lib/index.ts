import { createDirAsync, createFileAsync, isDirExists, isFileExists, join } from '@waiting/shared-core'
import { Observable } from 'rxjs'
import {
  concatMap,
} from 'rxjs/operators'

import { handleAvatar, handleBaseInfo } from './composite'
import { nationMap } from './config'
import {
  CompositeOpts,
  DataBase,
  IDData,
} from './model'


export function formatBaseData(data: DataBase): DataBase {
  const ret: DataBase = { ...data }

  switch (ret.gender) {
    case 1:
      ret.genderName = '男'
      break
    case 2:
      ret.genderName = '女'
      break
    default:
      ret.genderName = '未知'
      break
  }
  const str = nationMap.get(ret.nation)

  ret.nationName = str ? str.trim() : '未知'
  ret.startdate = ret.startdate.trim()
  ret.enddate = ret.enddate.trim()

  return ret
}


/* Composite image with data. Return result path */
export function composite(data: IDData, options: CompositeOpts): Observable<string> {
  if (! data || ! data.base) {
    throw new TypeError('data value invalid')
  }
  const ret$ = handleAvatar(data.imagePath).pipe(
    concatMap(avatar => {
      return handleBaseInfo(<DataBase> data.base, avatar, options)
    }),
  )

  return ret$
}


export async function validateDllFile(path: string): Promise<void> {
  if (! await isFileExists(path)) {
    throw new Error('File not exists: ' + path)
  }
}


export async function testWrite(dir: string | void): Promise<void> {
  if (!dir) {
    throw new Error('value of imgSaveDir empty')
  }
  if (! await isDirExists(dir)) {
    await createDirAsync(dir)
    await createFileAsync(join(dir, '.test'), 'idctest') // 创建测试文件
  }
}
