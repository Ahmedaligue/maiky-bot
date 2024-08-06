let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender];
    let name = conn.getName(m.sender);
    let taguser = '@' + m.sender.split("@s.whatsapp.net")[0];
    let message = `*⎔⋅• ━ ╼╃ ⌬〔🐦‍🔥〕⌬ ╄╾ ━ •⋅⎔
*مشغول يهطف 🐤*`;


    conn.sendFile(m.chat, 'https://telegra.ph/file/d0cbd8f9043ec66b540b3.jpg', 'image.jpg', message, m);
};

handler.customPrefix = /^(بيروس)$/i;
handler.command = new RegExp;

export default handler;
