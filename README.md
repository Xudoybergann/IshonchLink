# 🛡️ IshonichLink

> Fishing havolalarni aniqlash va xavfsizlik tahlili tizimi

**IshonichLink** — bu O'zbekistondagi foydalanuvchilar uchun maxsus moslangan, ko'p qatlamli URL xavfsizlik tahlilchisi. Sayt har bir havolani 4 bosqichli algoritm orqali tekshiradi va 0-100 oralig'ida xavf bahosini chiqaradi.

## ✨ Imkoniyatlar

- 🔍 **DNS tekshiruvi** — Cloudflare DNS-over-HTTPS orqali domen mavjudligi
- 🚫 **Google Safe Browsing** — global qora ro'yxat tekshiruvi
- 🎭 **Brend taqlidi aniqlash** — Levenshtein masofasi, kirill homograf, leetspeak
- 📱 **Ruxsat tahlili** — kamera, mikrofon, lokatsiya, APK fayl so'rovlari
- 🇺🇿 **Mahalliy brendlar** — click.uz, payme.uz, uzcard.uz va 30+ rasmiy domen
- 📊 **Xavf bali** — 0-100 oralig'ida vizual progress bar
- 🌙 **Real-time analiz** — bosqichlar parallel ishlaydi (Promise.all)
- 📱 **Mobil moslashuv** — barcha qurilmalarda chiroyli ko'rinadi

## 🛠️ Texnologiyalar

- Vanilla **HTML5, CSS3, JavaScript** (framework yo'q)
- **Cloudflare DNS-over-HTTPS** — domen tekshiruvi
- **Google Safe Browsing API v4** — qora ro'yxat
- **CORS proxy** (allorigins.win, corsproxy.io) — sayt kontentini olish
- **localStorage** — API kalit va sozlamalar

## 🚀 Sozlash

### 1. Loyihani yuklab oling

```bash
git clone https://github.com/USERNAME/ishonichlink.git
cd ishonichlink
```

### 2. Saytni oching

Faqat `index.html` faylni brauzerda oching. Hech qanday server kerak emas.

Yoki **GitHub Pages** orqali:

```
https://USERNAME.github.io/ishonichlink/
```

### 3. Google API kalitini olish

Saytni to'liq ishlatish uchun Google Safe Browsing API kaliti kerak (bepul):

1. [console.cloud.google.com](https://console.cloud.google.com) saytiga kiring
2. Yangi loyiha yarating
3. **APIs & Services** → **Library** → **Safe Browsing API** → **Enable**
4. **Credentials** → **Create Credentials** → **API key**
5. Olingan kalitni saytdagi ⚙️ (Sozlamalar) tugmasi orqali kiriting

**Eslatma:** API kalit faqat sizning brauzeringizning lokal xotirasida (localStorage) saqlanadi. Hech qaerga yuborilmaydi.

## 📖 Ishlatish

1. Saytni oching
2. ⚙️ Sozlamalar orqali Google API kalitingizni kiriting
3. URL kiriting (masalan, `click.uz`) va "Tekshirish" tugmasini bosing
4. Natija 4 bosqichli tahlil bilan chiqadi

## 🔬 Algoritm

```
Foydalanuvchi URL kiritdi
      ↓
[1] DNS tekshiruvi — domen mavjudmi?
      ↓ ha
[2] Google Safe Browsing — qora ro'yxatda bormi?
      ↓ toza
[3] Sayt kontent tahlili:
    • Kamera/mikrofon ruxsati
    • Lokatsiya so'rovi
    • APK fayl yuklash
    • Avtomatik yo'naltirish
    • Bildirishnoma, clipboard, to'lov
[4] Domen tahlili:
    • Brend taqlidi (Levenshtein)
    • Kirill homograf
    • Leetspeak
    • Shubhali TLD (.tk, .xyz, .ml)
    • Domen entropiyasi
    • Subdomen ko'pligi
      ↓
Yakuniy xavf bali (0-100) + verdikt
```

## ⚠️ Cheklovlar

- **Faqat asosiy HTML** tekshiriladi. Tashqi `.js` fayllaridagi xavfli kod aniqlanmaydi.
- **CORS proxy'lariga bog'liq** — agar proxy o'chsa, 3-bosqich ishlamaydi.
- **WHOIS yo'q** — domen yoshi tekshirilmaydi.
- **Dinamik JS** orqali yashiringan APK havolalari aniqlanmaydi.
- API kalit kvotasi: kuniga 10,000 so'rov bepul (Google Cloud).

## 🎓 Diplom loyihasi haqida

Bu sayt **Toshkent davlat iqtisodiyot universiteti** (TDIU) "Raqamli iqtisodiyot va axborot texnologiyalari" fakulteti diplom loyihasi (BMI) doirasida ishlab chiqilgan.

**Mavzu:** "Elektron to'lov tizimlarida axborot xavfsizligini ta'minlash mexanizmlari va zamonaviy texnologiyalar tahlili"

**Muallif:** Kadirbergenov Xudoybergan Axmet o'g'li
**Guruh:** AT-61
**Rahbar:** PhD K. Haydarov
**Yil:** 2026

## 📄 Litsenziya

MIT License — istalgancha foydalaning, lekin muallif nomini saqlang.

---

**IshonichLink** © 2026 Kadirbergenov Xudoybergan · TDIU
