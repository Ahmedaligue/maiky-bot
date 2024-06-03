let handler = async (m, { conn, args, usedPrefix, command }) => {
    const taguser = '@' + m.sender.split("@s.whatsapp.net")[0];
    const time = moment.tz('Africa/Egypt').format('HH');
    let wib = moment.tz('Africa/Cairo').format('HH:mm:ss');
    let date = new Date().toLocaleDateString('en-EG', { day: 'numeric', month: 'long', year: 'numeric' });

    await conn.sendMessage(m.chat, { react: { text: '📂', key: m.key } });

    // Fetch the image and send it as an image message
    const imageBuffer = await fetch('https://telegra.ph/file/2bcdd8e6cc7a486803d88.jpg').then(res => res.buffer())

    // Send the interactive message
    const buttonMessage = {
        viewOnceMessage: {
            message: {
                imageMessage: {
                    jpegThumbnail: imageBuffer, // The image to be sent
                    caption: `┈┈┈┈┈⟢┈┈┈⟣┈┈┈┈┈┈┈⟢        
*🐉✬⃝╿↵ مرحــبـا ⌊ ${m.pushName} ⌉*
── • ◈ • ──

┏━━🤖 *『』ī معلومات البوت ī《* 🤖━━┓
┃ ✨  *اسـم البـوت: 𝒁𝒆𝒛𝒐 𝑩𝒐𝒕*
┃ 💻  *المـنصـة:* 𝑯𝑬𝑹𝑶𝑲𝑼💀 
┃ 📍  *رقم المطور: 201508628077*
┃ 📚  *اسم المطور: 『➳ᴹᴿ᭄𝒁𝒆𝒛𝒐➳ᴹᴿ᭄』* 
┗━━━━━━━━━━━━━┛

┏━━⏰ *『』التاريخ والوقت《* ⏰━┓
┃ 📆  *تـاريـخ اليـوم:* 『』${date}《 
┃ ⏲️  *الـوقـت الـحالـي:* 『』${wib}《 
┗━━━━━━━━━━━━━┛
⟣┈┈┈┈┈┈⟢┈┈┈⟣┈┈┈┈┈┈┈⟢`,
                    buttons: [
                        {
                            buttonId: '.المطور',
                            buttonText: { displayText: '⌬ ❛╏المطور' },
                            type: 1
                        },
                        {
                            buttonId: '.4',
                            buttonText: { displayText: '⌬ ❛╏التنزيلات' },
                            type: 1
                        },
                        {
                            buttonId: '.5',
                            buttonText: { displayText: '⌬ ❛╏قائمه الجروب' },
                            type: 1
                        },
                        {
                            buttonId: '.6',
                            buttonText: { displayText: '⌬ ❛╏الالعاب' },
                            type: 1
                        },
                        {
                            buttonId: '.6',
                            buttonText: { displayText: '⌬ ❛╏الترفيه' },
                            type: 1
                        },
                        {
                            buttonId: '.2',
                            buttonText: { displayText: '⌬ ❛╏الصور' },
                            type: 1
                        },
                        {
                            buttonId: '.20',
                            buttonText: { displayText: '⌬ ❛╏شروط' },
                            type: 1
                        },
                        {
                            buttonId: '.الدعم',
                            buttonText: { displayText: '⌬ ❛╏الدعم' },
                            type: 1
                        },
                        {
                            buttonId: '.10',
                            buttonText: { displayText: '⌬ ❛╏قائمة الاوامر' },
                            type: 1
                        }
                    ],
                    footerText: 'اذا واجهتك مشكله اكتب ابلاغ واكتب رسالتك\n ➳ᴹᴿ᭄𝒁𝒆𝒛𝒐➳ᴹᴿ᭄'
                }
            }
        }
    };

    await conn.sendMessage(m.chat, buttonMessage, { quoted: m });
};

handler.help = ['info'];
handler.tags = ['main'];
handler.command = ['لول'];

export default handler;
