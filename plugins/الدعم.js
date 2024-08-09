import axios from "axios";

let handler = async (m, { command, conn, usedPrefix }) => {
  // جلب بيانات JSON من الرابط المحدد
  let res = (await axios.get(`https://raw.githubusercontent.com/socona12/TheMystic-Bot-MD/master/src/JSON/anime-Venom.json`)).data;  
  let haha = await res[Math.floor(res.length * Math.random())];  
  const taguser = '@' + m.sender.split("@s.whatsapp.net")[0];
  
  // استخدم حقل الصورة من البيانات التي تم جلبها
//  let imagen4 = haha.image;

  // إرسال الصورة
  await conn.sendFile(m.chat, imagen4, 'image.jpg', `*◉═• ❁ 『』WELCOME 《 ❁ •═◉*
WELCOME ➳『 ${m.pushName} 』
*『 ️اليك قائمه بمعلومات المطور  』*

*『☯️』ī وتسابي ī《*

*⊱≼ https://wa.me/+212658594530 ≽⊰⊹*

*『🥱انستا المطور 《*
*https://www.instagram.com/irin_yeger1?igsh=OGQ5ZDc2ODk2ZA==*

*『👀』ī جروب الوتساب ī《*

*⊱≼ سيتم اضافته قريبا ≽⊰⊹*
*『』SENKU 𝑩𝒐𝒕《*
*◉═══ • ❁ BAY ❁ • ═══◉* 
`);

}

handler.command = handler.help = ['معلومات', 'الدعم'];
handler.tags = ['kaneki'];

export default handler;
