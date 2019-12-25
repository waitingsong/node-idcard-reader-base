import {
  createDirAsync, createFileAsync, isDirExists, isFileExists, join, normalize,
} from '@waiting/shared-core'
import { Observable } from 'rxjs'
import { concatMap } from 'rxjs/operators'

import { handleAvatar, handleBaseInfo } from './composite'
import { initialCompositeOpts, initialDeviceOpts, initialOpts, nationMap } from './config'
import {
  CompositeOpts,
  DataBase,
  DeviceOpts,
  Options,
} from './model'


export function formatBaseData(data: DataBase): DataBase {
  const ret: DataBase = { ...data }

  if (ret.gender) {
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
  }
  else if (ret.genderName && ! ret.gender) {
    switch (ret.genderName) {
      case '男':
        ret.gender = 1
        break
      case '女':
        ret.gender = 2
        break
      default:
        ret.gender = 0
        break
    }
  }

  if (ret.nation) {
    const str = nationMap.get(ret.nation)

    ret.nationName = str ? str.trim() : '未知'
    ret.startdate = ret.startdate.trim()
    ret.enddate = ret.enddate.trim()
  }
  else if (ret.nationName && ! ret.nation) {
    for (const [key, val] of nationMap) {
      if (val === ret.nationName) {
        ret.nation = key
        break
      }
    }
  }

  return ret
}


/* Composite image form base data. Return imagePath */
export function composite(
  avatarPath: string,
  base: DataBase,
  options: CompositeOpts,
): Observable<string> {

  if (! base) {
    throw new TypeError('base data value empty')
  }
  const ret$ = handleAvatar(avatarPath).pipe(
    concatMap((avatarPNG) => {
      return handleBaseInfo(base, avatarPNG, options)
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
  if (! dir) {
    throw new Error('value of imgSaveDir empty')
  }
  if (! await isDirExists(dir)) {
    await createDirAsync(dir)
    await createFileAsync(join(dir, '.test'), 'idctest') // 创建测试文件
  }
}


export function parseDeviceOpts(options: Options): DeviceOpts {
  const deviceOpts: DeviceOpts = { ...initialDeviceOpts }

  if (options.dllTxt) {
    deviceOpts.dllTxt = normalize(options.dllTxt)
  }
  else {
    throw new Error('params dllTxt undefined or blank')
  }

  if (typeof options.dllImage === 'string' && options.dllImage) {
    deviceOpts.dllImage = normalize(options.dllImage)
  }

  if (typeof options.imgSaveDir === 'string' && options.imgSaveDir) {
    deviceOpts.imgSaveDir = normalize(options.imgSaveDir)
  }

  if (typeof options.debug === 'boolean') {
    deviceOpts.debug = options.debug
  }

  if (typeof options.searchAll === 'boolean') {
    deviceOpts.searchAll = options.searchAll
  }

  if (typeof options.findCardRetryTimes === 'number') {
    deviceOpts.findCardRetryTimes = options.findCardRetryTimes
  }

  if (Number.isNaN(deviceOpts.findCardRetryTimes) || deviceOpts.findCardRetryTimes < 0) {
    deviceOpts.findCardRetryTimes = initialOpts.findCardRetryTimes
  }

  if (typeof options.port === 'number' && options.port > 0) {
    deviceOpts.port = options.port
  }

  return deviceOpts
}

export function parseCompositeOpts(options: Options): CompositeOpts {
  const compositeOpts: CompositeOpts = { ...initialCompositeOpts }

  if (options.dllImage && options.useComposite) {
    compositeOpts.useComposite = true
  }

  if (options.compositeDir && typeof options.compositeDir === 'string') {
    compositeOpts.compositeDir = normalize(options.compositeDir)
  }

  if (typeof options.compositeQuality === 'number'
    && options.compositeQuality >= 1 && options.compositeQuality <= 100
  ) {
    compositeOpts.compositeQuality = options.compositeQuality
  }

  if (options.textColor) {
    compositeOpts.textColor = options.textColor
  }

  if (options.compositeType) {
    if (! ['bmp', 'gif', 'jpg', 'png', 'webp'].includes(options.compositeType)) {
      throw new TypeError('compositeType value invalid')
    }
    compositeOpts.compositeType = options.compositeType
  }
  else {
    compositeOpts.compositeType = initialOpts.compositeType
  }

  if (options.fontHwxhei) {
    compositeOpts.fontHwxhei = options.fontHwxhei
  }

  if (options.fontOcrb) {
    compositeOpts.fontOcrb = options.fontOcrb
  }

  if (options.fontSimhei) {
    compositeOpts.fontSimhei = options.fontSimhei
  }

  return compositeOpts
}
