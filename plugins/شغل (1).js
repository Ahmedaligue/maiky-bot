import yts from 'yt-search'

const MAX_SECONDS = 60 * 60 

const API_BASE = `https://api.darkcore.xyz/api/youtube`

let handler = async (m, { conn, text, usedPrefix, command }) => {

    const chatId = m.chat

    if (!text) return conn.sendMessage(chatId, { text: `「✦」Ingresa el nombre o link de YouTube.` }, { quoted: m })

    await conn.sendMessage(chatId, { react: { text: '🕒', key: m.key } })

    try {

        let videoUrl = text.trim()

        if (!/youtu\.be|youtube\.com/i.test(videoUrl)) {

            const search = await yts(videoUrl)

            if (!search.videos.length) return conn.sendMessage(chatId, { text: '「✦」No se encontró el video.' }, { quoted: m })

            videoUrl = search.videos[0].url

        }

        const infoRes = await fetch(`${API_BASE}/info?url=${encodeURIComponent(videoUrl)}`)

        const apiData = await infoRes.json()

        if (!apiData.status) throw new Error('API Info falló')

        const durParts = apiData.duracion.split(':').reverse()

        const durSecs = parseInt(durParts[0]) + (parseInt(durParts[1] || 0) * 60) + (parseInt(durParts[2] || 0) * 3600)

        

        if (durSecs > MAX_SECONDS) return conn.sendMessage(chatId, { text: '「✦」El audio supera el límite de 1 hora.' }, { quoted: m })

        const option = apiData.opciones.find(o => o.quality === "128") || apiData.opciones[0]

        const caption = `「✦」*YOUTUBE PLAY*\n\n` +

                        `> 📚 *Título:* ${apiData.titulo}\n` +

                        `> ⏳ *Duración:* ${apiData.duracion}\n` +

                        `> ⚖️ *Peso:* ${option.size}\n\n` +

                        `_Procesando audio, un momento por favor..._`

        await conn.sendMessage(chatId, { image: { url: apiData.imagen }, caption }, { quoted: m })

        const waitTime = Math.min(15000, (3000 + (durSecs / 120) * 1000))

        await new Promise(resolve => setTimeout(resolve, waitTime))

        await conn.sendMessage(chatId, {

            audio: { url: option.dl_url },

            mimetype: 'audio/mpeg',

            fileName: `${apiData.titulo}.mp3`,

            ptt: false 

        }, { quoted: m })

        await conn.sendMessage(chatId, { react: { text: '✔️', key: m.key } })

    } catch (e) {

        console.error(e)

        await conn.sendMessage(chatId, { react: { text: '❌', key: m.key } })

        conn.sendMessage(chatId, { text: `「✦」Error: No se pudo procesar el audio en este momento.` }, { quoted: m })

    }

}

handler.help = ['play']

handler.tags = ['multimedia']

handler.command = ['play', 'yta', 'audio']

export default handler