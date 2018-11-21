
const navigator = weex.requireModule('navigator')
const modal = weex.requireModule('modal')

export default function (name) {
  return name
}

export const imgUrl = 'http://storage-proxy.emas-poc.com:30090/emas-poc-private.oss-cn-beijing.aliyuncs.com/eweex/app/upload/'

// 是否是web端
export const isWeb = WXEnvironment.platform === 'Web';

/**
 * 弹出框
 * @param {string} message 弹出框信息
 */
export function toast(message) {
  modal.toast({ message, duration: 1 })
}

/** 页面跳转
 * @param {String} pageName 页面名
 */
export function jump(pageName) {
  const url = createLink(pageName, {
    param: 'abc'
  })
  if (isWeb) { // eslint-disable-line
    location.href = url
  } else {
    navigator.push({
      url,
      animated: 'true'
    })
  }
}

export function getQueryParams(url) {
  const splitedUrl = (url || '').split('?')
  if (splitedUrl.length < 2) {
    return {}
  }
  let qs = splitedUrl[1]
  qs = qs.split('#')[0]
  if (qs.length === 0) {
    return {}
  }

  const paramPairs = qs.split('&')
  const params = {}
  paramPairs.forEach((e) => {
    if (!e || e.length === 0) {
      return
    }
    const pair = e.split('=')
    if (pair.length < 2) {
      return
    }
    const key = pair[0]
    const value = pair.slice(1, pair.length).join('=')
    if (value.length === 0) {
      return
    }
    params[decodeURIComponent(key)] = decodeURIComponent(value)
  })
  return params
}

export function getUrlParam(key, url) {
  const reg = new RegExp(`[?|&]${key}=([^&]+)`)
  const match = url.match(reg)
  return match && match[1]
}

export function createLink(page, params = {}) {
  const args = []
  Object.keys(params).forEach((key) => {
    if (typeof params[key] === 'string') {
      args.push(`${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`)
    }
  })
  if (WXEnvironment.platform === 'Web') { // eslint-disable-line
    const tplPathList = (getUrlParam('_wx_tpl', location.href) || '').split('/')
    tplPathList[tplPathList.length - 2] = page
    args.unshift(`_wx_tpl=${tplPathList.join('/')}`) // eslint-disable-line
    return `${location.origin}${location.pathname}?${args.join('&')}`
  }

  const bundlePathList = weex.config.bundleUrl.split('/')
  bundlePathList[bundlePathList.length - 2] = page
  return `${bundlePathList.join('/')}?${args.join('&')}`
}
