let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender];
    let name = conn.getName(m.sender);
    let taguser = '@' + m.sender.split("@s.whatsapp.net")[0];
    let message = `*⎔⋅• ━ ╼╃ ⌬〔🐦‍🔥〕⌬ ╄╾ ━ •⋅⎔*
*منشن⧉ ↵*@⁨ 
*~غمزة لروبين😉~*`;
    

    conn.sendFile(m.chat, 'https://telegra.ph/file/7eaa19b36e5f61f34ef3a.jpg', 'image.jpg', message, m);
};

handler.customPrefix = /^(روبين)$/i;
handler.command = new RegExp;

export default handler;
