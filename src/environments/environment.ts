// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
    production: true,
    domain: 'http://mdm.hitecloud.net/',
    wwwdomain: 'http://www.hitecloud.net/', // 用于登录
    shuangshidomain: 'http://shuangshi.hitecloud.net/', // 用于获取图文验证码
    ixuedomain: 'http://ixuecloud.hitecloud.net/', // 扫码登录
    // ixuedomain: 'https://www.aixuebanban.com/',
    // weixinTag: 'https://www.hitecloud.cn/weixin/wechat/login?wxcode=teacher' // 获取二维码
    weixinTag: 'http://www.hitecloud.net/weixin/wechat/login?wxcode=dxxold' // 获取二维码
  };
  