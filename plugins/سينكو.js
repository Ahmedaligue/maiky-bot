let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender];
    let name = conn.getName(m.sender);
    let taguser = '@' + m.sender.split("@s.whatsapp.net")[0];
    let message = `*⎔⋅• ━ ╼╃ ⌬〔🐦‍🔥〕⌬ ╄╾ ━ •⋅⎔
*الا ان يشرق الامل وتحقق* *الاماني وينال كل دي حق حقه*... *سيكون الحساب عسير على من كان صادقا*👋✌️
*وشكرا*
*ملاحظة: قد تُنْــعَــمُ بالامل... انت✌️👌*`;


    conn.sendFile(m.chat, 'https://telegra.ph/file/817e807b798172f5b0399.jpg', 'image.jpg', message, m);
};

handler.customPrefix = /^(سينكو)$/i;
handler.command = new RegExp;

export default handler;
