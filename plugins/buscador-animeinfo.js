import translate from '@vitalets/google-translate-api';
import {Anime} from '@shineiichijo/marika';
const client = new Anime();
const handler = async (m, {conn, text, usedPrefix}) => {
  if (!text) return m.reply(`*[❗𝐈𝐍𝐅𝐎❗] INGRESE EL NOMBRE DE ALGUN ANIME A BUSCAR*`);
  try {
    const anime = await client.searchAnime(text);
    const result = anime.data[0];
    const resultes = await translate(`${result.background}`, {to: 'es', autoCorrect: true});
    const resultes2 = await translate(`${result.synopsis}`, {to: 'es', autoCorrect: true});
    const AnimeInfo = `
╭࣭࣭࣭࣭࣭࣭ٜ۫┄̸࣭࣭࣭࣭࣭ٜ۫☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎⃪𐇽۫۬《■》⃘⃪۪֟፝֯۫۫۫۬◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫╮
┊┃ ➢ • *Título:* ${result.title}
┊┃ ➢ • *Formato:* ${result.type}
┊┃ ➢ • *Estado:* ${result.status.toUpperCase().replace(/\_/g, ' ')}
┊┃ ➢ • *Episodios totales:* ${result.episodes}
┊┃ ➢ • *Duración: ${result.duration}*
┊┃ ➢ • *Basado en:* ${result.source.toUpperCase()}
┊┃ ➢ • *Estrenado:* ${result.aired.from}
┊┃ ➢ • *Finalizado:* ${result.aired.to}
┊┃ ➢ • *Popularidad:* ${result.popularity}
┊┃ ➢ • *Favoritos:* ${result.favorites}
┊┃ ➢ • *Clasificación:* ${result.rating}
┊┃ ➢ • *Rango:* ${result.rank}
┊┃ ➢ • *Trailer:* ${result.trailer.url}
┊┃ ➢ • *URL:* ${result.url}
┊┃ ➢ • *Background:* ${resultes.text}
┊┃ ➢ • *Ringkasan:* ${resultes2.text}
┊┣┅ ━━━━━━━━━━━━ ┅ ━
┊┃ ➢ *𝙱𝚢: 𝙽𝚒𝚐𝚛𝚘𝚖𝚊𝚗𝚝𝚎𝙱𝚘𝚝-𝙼𝙳*
╰┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫┄̸࣭۫┄̸࣭࣭࣭࣭࣭ٜ۫┄̸࣭࣭࣭࣭࣭ٜ۫┄࣭࣭࣭۫☪︎︎︎̸⃘̸࣭ٜ࣪࣪࣪۬◌⃘۪֟፝֯۫۫︎⃪𐇽۫۬《□》⃘⃪۪֟፝֯۫۫۫۬◌⃘࣭ٜ࣪࣪࣪۬☪︎︎︎︎̸┄̸࣭࣭࣭࣭࣭ٜ۫╯`;
    conn.sendFile(m.chat, result.images.jpg.image_url, 'error.jpg', AnimeInfo, m);
  } catch {
    throw `*[❗] ERROR, INTENTELO DE NUEVO*`;
  }
};
handler.command = /^(anime|animeinfo)$/i;
export default handler;
