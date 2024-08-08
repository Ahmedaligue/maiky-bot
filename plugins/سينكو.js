let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender];
    let name = conn.getName(m.sender);
    let taguser = '@' + m.sender.split("@s.whatsapp.net")[0];
    let message = `*⎔⋅• ━ ╼╃ ⌬〔🐦‍🔥〕⌬ ╄╾ ━ •⋅⎔
*الا ان يشرق الامل وتحقق* *الاماني وينال كل دي حق حقه*... *سسكون الحساب عسير على من كان صادقا*👋✌️
*وشكرا*
*By-senku devloper 🙂✌️*`;


    conn.sendFile(m.chat, 'https://telegra.ph/file/d0cbd8f9043ec66b540b3.jpg', 'image.jpg', message, m);
};

handler.customPrefix = /^(سينكو)$/i;
handler.command = new RegExp;

export default handler;
