/* eslint-disable */

/**
 * 此项目配置为方便新人使用，已缩减至最简配置。
 * 如若想使用更多功能，请查考文档中的 【3. config参数说明】 
 * 自行添加属性，以支持更多个性化功能
 */
const USER_CONFIG = {

  // 使用微信测试号：公众号APP_ID
  APP_ID: 'wx6f6d48cdb70ab0a7',

  // 使用微信测试号：公众号APP_SECRET
  APP_SECRET: '1ac92240ae8806a12f57b9f5e833449d',

  PROVINCE: '广西',
  CITY: '南宁',
  
  TIAN_API: {
    // 天行API KEY，如果使用天行API则需要填写此项
    key: '2abe96e5a3b50a36fb461abd56aa4ca4',
    
    {{tian_api_weather_lowest_{offset}.DATA}},
  
    {{tian_api_weather_highest_{offset}.DATA}},

  },
  
  
  /** 是否给文字设置多彩颜色, 和emoji不兼容 */
  // 如果您使用了微信测试号的模板中含有emoji表情，请填 false
  IS_SHOW_COLOR: true,
  
  
  
  
  USERS: [
    {
      // 想要发送的人的名字
      name: '宝贝',
      // 使用微信测试号：扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'oiwEn6PTI7WLWCPmTH4RfmegIjmU',
      // 使用微信测试号：你想对他发送的模板消息的模板ID
      useTemplateId: 't0aTKIhbA037rmPJV-PujNM4gagUK3873xbUELIJv1g',
      // 新历生日, 仅用作获取星座运势, 格式必须为MM-DD
      horoscopeDate: '12-27',
      festivals: [
        // 注意：此条配置日期为阴历日期，因为`type`中 “生日” 之前有 * 符号
        {
          type: '*生日', name: '宝贝', year: '1996', date: '09-09',
        },
        // 注意：此条配置日期为阳历日期，因为`type`中 “生日” 之前没有 * 符号
        {
          type: '生日', name: '李四', year: '1996', date: '09-31',
        },
        {
          type: '节日', name: '相识纪念日', year: '2020', date: '09-03',
        },
      ],
      
      // 我们在一起已经有xxxx天了的配置
      customizedDateList: [
        // 在一起的日子
        { keyword: 'love_day', date: '2022-09-08' },
        // 结婚纪念日
        { keyword: 'marry_day', date: '2022-09-09' },
      ],
    },
  ],


  // 【推送完成提醒】模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: 'BlEHAL_IkygIvyCWDCtBvgf7tkgWL46DTBoZRwjwu0M',

  CALLBACK_USERS: [
    {
      name: '自己',
      // 使用微信测试号：自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: 'wx6f6d48cdb70ab0a7',
    }
  ],

}

module.exports = USER_CONFIG

