<div align="center">
<a href="https://kyouka-live.web.app/">
  <img src="https://i.ibb.co/G3TPb76/mangazuna.png" alt="logo" width="180"/>
</a>
</div>

<h1 align="center">
  <a href="https://kyouka-live.web.app/">Mangazuna Read Any Manga For Free</a>
</h1>

<p align="center">

 <a href="https://github.com/LuckyIndraEfendi/Mangazuna/blob/main/LICENSE.md">
    <img src="https://img.shields.io/github/license/LuckyIndraEfendi/Mangazuna" alt="license"/>
  </a>
  <a href="https://github.com/LuckyIndraEfendi/Mangazuna/fork">
    <img src="https://img.shields.io/github/forks/LuckyIndraEfendi/Mangazuna?style=social" alt="fork"/>
  </a>
  <a href="https://github.com/LuckyIndraEfendi/Mangazuna">
    <img src="https://img.shields.io/github/stars/LuckyIndraEfendi/Mangazuna?style=social" alt="stars"/>
  </a>
  
</p>

# Preview Mangazuna

<p align="center">
 <img src="https://i.ibb.co/MCZMskG/social-banner.png" alt="main" width="100%">
</p>

<details>
<summary>More Screenshots</summary>

<h5 align="center">Home page after you login</h5>
<img src="https://i.ibb.co/MCZMskG/social-banner.png" alt="main" width="100%"/>

<h5 align="center">Profile Page</h5>
<img src="https://i.ibb.co/yBgBYxT/profile.png"/>

<h5 align="center">Detail Page</h5>
<p align="center">
<img src="https://i.ibb.co/3h3NmsN/detailpage.png" width="100%"/>
</p>

<h5 align="center">Read Page</h5>
<img src="https://i.ibb.co/ZgFmGTd/readpage.png" width="100%"/>
 
</details>

## Introduction

<p><a href="https://kyouka-live.web.app/">Mangazuna</a> is an Manga,Manhwa,Manhua Reader website made possible by Mangazuna API build with <a href="https://github.com/vercel/next.js">NextJS</a> and <a href="https://github.com/tailwindlabs/tailwindcss">Tailwind</a> with a sleek and modern design that offers Mangazuna integration to help you keep track of your favorite anime series. Moopa is entirely free and does not feature any ads, making it a great option for you who want an uninterrupted viewing experience.</p>

## Features

- General
  - User-friendly interface
  - Free ad-supported Reading service
  - Mobile-responsive design
  - Next Auth Login
  - Auto Sync with MangazunaAPI
  - PWA Supported Features
  - OpenGraph Supported Features
- Watch Page
  - Player
    - Autoplay next episode
    - Skip op/ed button
    - Theater mode
  - Comment section
- Profile page to see your watch list

## API URL For Mangazuna

1. API URL For Mangazuna :

```bash
NEXT_MANGAZUNA_APIURL="https://mangazuna.luckyindraefendi.me"
```

## For Local Development

1. Clone this repository using :

```bash
git clone https://github.com/LuckyIndraEfendi/Mangazuna.git
```

2. Install package using npm :

```bash
npm install
```

3. Create `.env` file in the root folder and put this inside the file :

```bash
NODE_ENV="change NODE_ENV to production if you want to deploy"
NEXT_PUBLIC_DOMAIN="http://example/com"
DATABASE_URL="Using Provider MySQL Prisma"
NEXTAUTH_URL="Your Domain or localhost for Development"
NEXTAUTH_JWT_SECRET="Your Next Auth JWT Secret"
NEXTAUTH_SECRET="Your Next Auth Secret"
NEXT_MANGAZUNA_APIURL="https://mangazuna.luckyindraefendi.me"
NEXT_PUBLIC_DISQUS_SHORTNAME="Your Disqus Shortname"
```

5. Generate Prisma :

```bash
npx prisma migrate dev
npx prisma generate

### NOTE
# If you get a vercel build error related to prisma that says prisma detected but no initialized just change the following line in package.json line number 8
"build": "next build" to > "build": "npx prisma migrate deploy && npx prisma generate && next build"
```

6. Add this endpoint Rest API Anime Indo :
   Deploy your Rest API Mangazuna Using Vercel or other platform

```bash
https://{your-website-api-url}
```

7. Start local server :

```bash
npm run dev
```

## Credits

- MangazunaAPI
- [moopa](https://github.com/Ani-Moopa/Moopa) for inspiring me making this site

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## Contact

Thank You for passing by!!
If you have any questions or feedback, please reach out to us at [contact@mangazuna.xyz](mailto:hayasaka592@gmail.com?subject=[Kyouka]%20-%20Your%20Subject), or you can join our [discord sever](https://discord.gg/XpWMNdVg)
<br>
or you can DM me on Discord `KyoukaLive` or Instagram `lucz.code`. (just contact me on one of these account)

[![Discord Banner](https://discordapp.com/api/guilds/1124682003850199121/widget.png?style=banner3)](https://discord.gg/XpWMNdVg)

## Support This Project

✨ [Star this project](https://github.com/LuckyIndraEfendi/KyoukaLive)

[![ko-fi](https://ko-fi.com/img/githubbutton_sm.svg)](https://ko-fi.com/E1E6F9XZ3)  
<a href="https://trakteer.id/lucky-indra-efendi-lpwhg" target="_blank"><img id="wse-buttons-preview" src="https://cdn.trakteer.id/images/embed/trbtn-red-5.png" height="36" style="border: 0px; height: 36px;" alt="Trakteer Saya"></a>
