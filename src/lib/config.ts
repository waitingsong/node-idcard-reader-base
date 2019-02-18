import {
  join,
  tmpdir,
} from '@waiting/shared-core'

import {
  CompositeOpts,
  Config,
  DeviceOpts,
  IDData,
  Options,
} from './model'


export const config: Config = {
  appDir: '',  // update by entry point index.js
  tmpDir: join(tmpdir(), 'idcard-reader'),
}

/** 二代证信息 */
export const initialDataBase = {
  name: '',
  gender: 0,
  genderName: '未知',
  nation: '',
  nationName: '',
  birth: '',
  address: '',
  idc: '',
  regorg: '',
  startdate: '',
  enddate: '',
}

export const initialCompositeOpts: CompositeOpts = {
  useComposite: false,
  compositeDir: config.tmpDir,
  compositeQuality: 35,
  compositeType: 'jpg',
  textColor: '#303030',
  fontHwxhei: '',
  fontOcrb: '',
  fontSimhei: '',
}

/** 默认初始化参数 */
export const initialDeviceOpts: DeviceOpts = {
  dllTxt: '',
  dllImage: '',
  findCardRetryTimes: 1,
  imgSaveDir: config.tmpDir,
  debug: false,
  searchAll: false,
}

/** 默认初始化参数 */
export const initialOpts: Required<Options> = {
  ...initialDeviceOpts,
  ...initialCompositeOpts,
}


export const initialIDData: IDData = {
  compositePath: '',
  base: null, // object
  imagePath: '',  // image file path
}


/** 民族列表 */
export const nationMap: Map<string, string> = new Map([
  ['01', '汉'],
  ['02', '蒙古'],
  ['03', '回'],
  ['04', '藏'],
  ['05', '维吾尔'],
  ['06', '苗'],
  ['07', '彝'],
  ['08', '壮'],
  ['09', '布依'],
  ['10', '朝鲜'],
  ['11', '满'],
  ['12', '侗'],
  ['13', '瑶'],
  ['14', '白'],
  ['15', '土家'],
  ['16', '哈尼'],
  ['17', '哈萨克'],
  ['18', '傣'],
  ['19', '黎'],
  ['20', '傈僳'],
  ['21', '佤'],
  ['22', '畲'],
  ['23', '高山'],
  ['24', '拉祜'],
  ['25', '水'],
  ['26', '东乡'],
  ['27', '纳西'],
  ['28', '景颇'],
  ['29', '柯尔克孜'],
  ['30', '土'],
  ['31', '达翰尔'],
  ['32', '仫佬'],
  ['33', '羌'],
  ['34', '布朗'],
  ['35', '撒拉'],
  ['36', '毛南'],
  ['37', '仡佬'],
  ['38', '锡伯'],
  ['39', '阿昌'],
  ['40', '普米'],
  ['41', '塔吉克'],
  ['42', '怒'],
  ['43', '乌孜别克'],
  ['44', '俄罗斯'],
  ['45', '鄂温克'],
  ['46', '德昂'],
  ['47', '保安'],
  ['48', '裕固'],
  ['49', '京'],
  ['50', '塔塔尔'],
  ['51', '独龙'],
  ['52', '鄂伦春'],
  ['53', '赫哲'],
  ['54', '门巴'],
  ['55', '珞巴'],
  ['56', '基诺'],
  ['57', '其它'],
  ['98', '外国人入籍'],
])
