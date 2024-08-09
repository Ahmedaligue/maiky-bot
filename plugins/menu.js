let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems })  => {
const caption =`
*➻𒍜➻Đ『➳ᴹᴿ᭄SENKU BOT➳ᴹᴿ᭄』*
*⌬ ❛╏ بان*
*⌬ ❛╏ بانفك*
*⌬ ❛╏ بريم*
*⌬ ❛╏ حذف_بريم*
*⌬ ❛╏ حظر*
*⌬ ❛╏ فك_الحظر*
*⌬ ❛╏ رستر*
*⌬ ❛╏ ضيف_اكسبي*
*⌬ ❛╏ ادخل*
*⌬ ❛╏ اخرج*
*⌬ ❛╏ بانشات*
*⌬ ❛╏ بانشات_فك*
*⌬ ❛╏ بلوك*
*⌬ ❛╏ فك_بلوك*
 *➻𒍜➻Đ『➳ᴹᴿ᭄SENKU BOT➳ᴹᴿ᭄』*`

await conn.sendMessage( m.chat, {
        image: {
          url: 'https://telegra.ph/file/7eaa19b36e5f61f34ef3a.jpg'
       },
        caption: caption,
        gifPlayback: true,
        gifAttribution: Math.floor( Math.random( ) * 2 ) + 1
      }, {
        quoted: m
      } );
}

handler.help = ['allmenu']
handler.tags = ['main']
handler.command = ['قائمتي'] 
handler.rowner = true

export default handler
