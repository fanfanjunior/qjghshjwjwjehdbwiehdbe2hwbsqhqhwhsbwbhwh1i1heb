global.port = 3000;
global.auto_open_browser = false;
global.advertising_for_free_users = true;
global.chatgpt_free_mode = true;
global.max_sign_up = 3;
global.body_parser_urlencoded_extended = true;
global.json_spaces = 2;
global.password_admin = 'Fannn112';

// Connection database MySql
global.connection = {
  host: 'db4free.net',
  user: 'apifannn',
  password: '_V5PNnKtv7pLUu7',
  database: 'restfull_api_fan'
};

/*
global.connection = {
  host: 'localhost',
  user: 'dang2331_danitechno',
  password: 'Dani12345#',
  database: 'dang2331_api'
};
*/

// Email SMTP
global.email_smtp = {
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: 'irfanchasper112@gmail.com',
    pass: 'nnvcaqaqvzbgvuii'
  }
};

// Google reCAPTCHA
global.google_recaptcha = {
  active: false,
  site_key: '6LeH7JEoAAAAANv5xUOhc-fyoU189dTvV7vbgjmE',
  secret_key: '6LeH7JEoAAAAAHQ1yV1cmqP3zvYFApdRFIobS1IQ'
};

// Web settings
global.web_set = {
  author: 'Fannn.',
  ads: {
    verify: 'gq1dwktwsmwrwp08wpuera',
    ads_area: {
      banner: '7354caf0-08a9-477d-8bc5-c40e26d435e4',
      native: '560d1d36-2776-4263-90e1-913c60402f7b'
    }
  },
  head: {
    title: 'Fannn API',
    description: 'Fannn API adalah mitra terpercaya yang menyediakan solusi API inovatif, dari layanan RESTful hingga integrasi interaktif dengan bot WhatsApp. Prioritas kami adalah kehandalan, kinerja, dan fleksibilitas. Bergabunglah dalam perjalanan teknologi kami untuk meraih potensi penuh teknologi Anda melalui layanan API terbaik yang dapat disesuaikan.',
    author: 'Fannn.',
    keywords: 'Web API, Solusi Lengkap Layanan Web API, Layanan RESTful, JSON API, Image API, API Endpoint, Data JSON, Pengambilan Data Gambar, Integrasi API, Pemanggilan API, Penggunaan Layanan API, Pengembangan Aplikasi dengan API, Integrasi JSON dan Image API, Pemrograman Web, Koneksi Data, Mengambil Data dari Web, Mengelola Data API, Manajemen API, Menggunakan API untuk Aplikasi, Ekstraksi Data JSON, Pemrosesan Data Gambar dengan API, ChatGPT API, GBard API, Anime Filter API, AI Chat API, YouTube Downloader API, Audio Downloader API, TikTok Downloader API, Facebook Downloader API, Searcher API, YouTube Search API, Stack Overflow Search API, Google Search API, Image Search API, Tools API, Base64 Encode API, Base64 Decode API, Base32 Encode API, Base32 Decode API, Translate API, AI-powered Tools API',
    site_name: 'Fannn API - Solusi Lengkap Layanan Web API',
    site_url: 'https://apifannn.biz.id',
    favicon: 'assets/img/favicon.png',
    image: 'https://cdn.danitechno.com/daniapi/img/banner.jpeg',
    image_type: 'image/jpg',
    image_width: 400,
    image_height: 300,
    image_alt: 'Fannn API'
  },
  body: {
    header: {
      name: 'Fannn API',
      chat_url: 'https://wa.me/qr/JX2BYBSOQ3YEN1'
    },
    plan: {
      payment_method: {
        qris: {
          image_url: '/assets/img/qris-all-payment.jpg'
        },
        dana: {
          number: '0877 5370 3416',
          image_url: '/assets/img/qr-code-dana.jpg'
        },
        gopay: {
          number: '0895 1254 5999',
          image_url: '/assets/img/qr-code-gopay.jpg'
        }
      },
      monthly: {
        basic: {
          price: 'Rp 4.999',
          price_code: 4999,
          payment_url: '/orders/plan/checkout?plan=Basic&expired_plan_date=1+month'
          //payment_url: 'https://wa.me/+6289512545999?text=Permisi, mau upgrade akun (Account type: Free to Basic), seharga Rp 10.000 (10rb/10k), pembayaran nya bisa VIA apa saja?'
        },
        standard: {
          price: 'Rp 9.999',
          price_code: 9999,
          payment_url: '/orders/plan/checkout?plan=Standard&expired_plan_date=1+month'
          //payment_url: 'https://wa.me/+6289512545999?text=Permisi, mau upgrade akun (Account type: Free to Standar), seharga Rp 15.000 (15rb/15k), pembayaran nya bisa VIA apa saja?'
        },
        premium: {
          price: 'Rp 19.999',
          price_code: 19999,
          payment_url: '/orders/plan/checkout?plan=Premium&expired_plan_date=1+month'
          //payment_url: 'https://wa.me/+6289512545999?text=Permisi, mau upgrade akun (Account type: Free to Premium), seharga Rp 20.000 (20rb/20k), pembayaran nya bisa VIA apa saja?'
        },
        enterprise: {
          price: 'Rp 29.999',
          price_code: 29999,
          payment_url: '/orders/plan/checkout?plan=Enterprise&expired_plan_date=1+month'
          //payment_url: 'https://wa.me/+6289512545999?text=Permisi, mau upgrade akun (Account type: Free to Enterprise), seharga Rp 50.000 (50rb/50k), pembayaran nya bisa VIA apa saja?'
        },
        custom: {
          price: 'Rp -',
          payment_url: '/orders/plan/checkout?plan=Custom&expired_plan_date=Custom'
          //payment_url: 'https://wa.me/+6289512545999?text=Permisi, mau upgrade akun (Account type: Free to Custom), benefit yg saya mau: [jelaskan benefit yg anda mau], harganya jadi berapa, dan pembayaran nya bisa VIA apa saja?'
        }
      },
      yearly: {
        basic: {
          price: 'Rp 59.988',
          price_code: 59988,
          payment_url: '/orders/plan/checkout?plan=Basic&expired_plan_date=1+year'
          //payment_url: 'https://wa.me/+6289512545999?text=Permisi, mau upgrade akun (Account type: Free to Basic), seharga Rp 60.000 (60rb/60k), pembayaran nya bisa VIA apa saja?'
        },
        standard: {
          price: 'Rp 119.988',
          price_code: 119988,
          payment_url: '/orders/plan/checkout?plan=Standard&expired_plan_date=1+year'
          //payment_url: 'https://wa.me/+6289512545999?text=Permisi, mau upgrade akun (Account type: Free to Standar), seharga Rp 90.000 (90rb/90k), pembayaran nya bisa VIA apa saja?'
        },
        premium: {
          price: 'Rp 239.988',
          price_code: 239988,
          payment_url: '/orders/plan/checkout?plan=Premium&expired_plan_date=1+year'
          //payment_url: 'https://wa.me/+6289512545999?text=Permisi, mau upgrade akun (Account type: Free to Premium), seharga Rp 120.000 (120rb/120k), pembayaran nya bisa VIA apa saja?'
        },
        enterprise: {
          price: 'Rp 359.988',
          price_code: 359988,
          payment_url: '/orders/plan/checkout?plan=Enterprise&expired_plan_date=1+year'
          //payment_url: 'https://wa.me/+6289512545999?text=Permisi, mau upgrade akun (Account type: Free to Enterprise), seharga Rp 150.000 (150rb/150k), pembayaran nya bisa VIA apa saja?'
        },
        custom: {
          price: 'Rp -',
          payment_url: '/orders/plan/checkout?plan=Custom&expired_plan_date=Custom'
          //payment_url: 'https://wa.me/+6289512545999?text=Permisi, mau upgrade akun (Account type: Free to Custom), benefit yg saya mau: [jelaskan benefit yg anda mau], harganya jadi berapa, dan pembayaran nya bisa VIA apa saja?'
        }
      }
    },
    contact_support: {
      email: 'irfanchasper112@gmail.com',
      phone_number: '+62 877-5370-3416',
      live_chat: 'coming soon',
    },
    footer: {
      name: 'Fannn API',
      contact: {
        address: 'Manyar, Gresik, Jawa Timur 61151, Indonesia',
        phone_number: '+62 877-5370-3416',
        email_address: 'irfanchasper112@gmail.com'
      }
    }
  }
};

// Cron job
global.cron_schedule = {
  timezone: 'Asia/Jakarta',
  usage_limit: '0 0 * * *',
  daily_requests: '0 0 * * *'
};

// Usage limit
global.usage_limit_amount = {
  free: 10,
  basic: 500,
  standard: 1000,
  premium: -1, // ∞/Unlimited/Infinity
  enterprise: -1 // ∞/Unlimited/Infinity
};

// Max edit API key
global.max_edit_api_key = {
  free: 0,
  basic: 3,
  standard: 5,
  premium: 10,
  enterprise: Infinity
};

// Session
global.session = {
  secret: 'Fannn',
  resave: true,
  save_uninitialized: true,
  cookie: {
    max_age: 24 * 60 * 60 * 1000
  }
};

// Secret key
global.secret_key = {
  openai: 'your-secret-key',
  hf: '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',
  remove_bg: [
    "Y1qTFXsPAFvr3LzJEaRbeBgL"
  ],
  bitly: [
    "2243940c230ad0d748059aee58ddf126b65fd8e7", "6cfc18e9bfa554714fadc10a1f6aff7555642348", "c71b6658a1d271ddaf2a5077de3dcb9d67f68025", "cddbceccdc2f1c9d11e4cdd0d2b1d1078e447c43", "7915c671fbd90eca96310e5c9442d761225a1080", "e5dee46eb2d69fc9f4b0057266226a52a3555356", "f09ab8db9cf778b37a1cf8bc406eee5063816dec", "964080579f959c0cc3226b4b2053cd6520bb60ad", "a4f429289bf8bf6291be4b1661df57dde5066525", "3d48e2601f25800f375ba388c30266aad54544ae", "4854cb9fbad67724a2ef9c27a9d1a4e9ded62faa", "d375cf1fafb3dc17e711870524ef4589995c4f69", "43f58e789d57247b2cf285d7d24ab755ba383a28", "971f6c6c2efe6cb5d278b4164acef11c5f21b637", "ae128b3094c96bf5fd1a349e7ac03113e21d82c9", "e65f2948f584ffd4c568bf248705eee2714abdd2", "08425cf957368db9136484145aa6771e1171e232", "dc4bec42a64749b0f23f1a8f525a69184227e301", "0f9eb729a7a08ff5e73fe1860c6dc587cc523035", "037c5017712c8f5f154ebbe6f91db1f82793c375"
  ],
  cuttly: ["b21fd60e1270f003474834bf1b645888ab8c3"]
};