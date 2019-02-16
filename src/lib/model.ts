/** 初始化参数 */
export type Options = Partial<DeviceOpts> & Partial<CompositeOpts>

export interface Config {
  appDir: string  // base directory of this module
  tmpDir: string
}

/** 设备配置参数 */
export interface DeviceOpts {
  /* path of sdtapi.dll */
  dllTxt: string
  /* path of wltrs.dll */
  dllImage: string
  /* 找卡重试数量，间隔 1sec */
  findCardRetryTimes: number
  /* 头像图片保存目录 空则使用 {系统临时目录}/idcard-reader */
  imgSaveDir: string
  debug: boolean
  /* search all available device , stop searching at first device found if false */
  searchAll: boolean
}

/**
 * 合成图片参数
 * 需要安装 ImageMagick 图像处理程序以及相关字体
 * url: https://www.imagemagick.org/script/download.php
 * fonts: fontHwxhei.ttf, fontOcrb.ttf, fontSimhei.ttf
 */
export interface CompositeOpts {
  /* whether composeite image. Default false */
  useComposite: boolean,
  /* 合成图片保存目录. 默认 系统临时目录/idcard-reader */
  compositeDir: string
  /* 1-100 (percent) Default 35 */
  compositeQuality: number
  /* output image full path name. Default jpg */
  compositeType: 'bmp' | 'gif' | 'jpg' | 'png' | 'webp'
  /* CSS style. Default: #303030 */
  textColor: string
  /* font path */
  fontHwxhei: string
  fontOcrb: string
  fontSimhei: string
}

/** 读卡原始结果 */
export interface RawData {
  /* 读取错误标识 0表示读取成功 */
  err: number
  /* 读卡结果码 */
  code: number
  /* 文本信息 */
  text: Buffer
  /* 头像图片信息 需要解码 */
  image: Buffer
  /* 头像图片文件地址 */
  imagePath: string
}

/** 二代证综合信息 */
export interface IDData {
  /* 合成图片文件路径 */
  compositePath: string
  /* base info */
  base: DataBase | null
  /* avatar image file path */
  imagePath: string
}

/** 二代证信息 */
export interface DataBase {
  /** 姓名 */
  name: string
  /** 1男，2女 */
  gender: number
  genderName: string
  /** 民族代码 */
  nation: string
  /** 民族中文 */
  nationName: string
  /** 出生日期 */
  birth: string
  /** 住址 */
  address: string
  /** 身份证号 */
  idc: string
  /** 签发机关 */
  regorg: string
  /** 有效期开始 */
  startdate: string
  /** 有效期结束 日期或者'长期' */
  enddate: string
}
