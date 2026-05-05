/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export type Language = 'ar' | 'en' | 'fr' | 'es' | 'ur' | 'id' | 'tr' | 'de' | 'ru' | 'bn';

export const CAPITALS: Record<Language, { city: string; country: string }> = {
  ar: { city: 'Riyadh', country: 'Saudi Arabia' },
  en: { city: 'London', country: 'United Kingdom' },
  fr: { city: 'Paris', country: 'France' },
  es: { city: 'Madrid', country: 'Spain' },
  ur: { city: 'Islamabad', country: 'Pakistan' },
  id: { city: 'Jakarta', country: 'Indonesia' },
  tr: { city: 'Istanbul', country: 'Turkey' },
  de: { city: 'Berlin', country: 'Germany' },
  ru: { city: 'Moscow', country: 'Russia' },
  bn: { city: 'Dhaka', country: 'Bangladesh' }
};

export const TRANSLATIONS: any = {
  ar: {
    intro: "الصلاة هي عماد الدين وصلة العبد بربه، تمنح القلب السكينة والطمأنينة.",
    wudu: {
      title: "كيفية الوضوء",
      steps: [
        { title: "النية", desc: "استحضار النية في القلب (دون التلفظ بها)." },
        { title: "غسل الكفين", desc: "غسل الكفين ثلاث مرات." },
        { title: "المضمضة", desc: "التمضمض بالماء ثلاث مرات." },
        { title: "الاستنشاق", desc: "استنشاق الماء وتنظيف الأنف ثلاث مرات." },
        { title: "غسل الوجه", desc: "غسل الوجه كاملاً ثلاث مرات." },
        { title: "غسل اليدين", desc: "غسل اليدين إلى المرفقين ثلاث مرات (البدء باليمنى)." },
        { title: "مسح الرأس", desc: "مسح الرأس مرة واحدة بماء جديد." },
        { title: "مسح الأذنين", desc: "مسح الأذنين مرة واحدة." },
        { title: "غسل القدمين", desc: "غسل القدمين إلى الكعبين ثلاث مرات (البدء باليمنى)." }
      ],
      doneBtn: "تم"
    },
    pillars: {
      title: "أركان الصلاة",
      pillarNote: "تنبيه: هذه الأركان تُؤدى في كل ركعة، ما عدا النية فهي في بداية الصلاة فقط.",
      items: [
        { id: 'niyah', title: "النية" },
        { id: 'takbir', title: "تكبيرة الإحرام", text: "الله أكبر" },
        { id: 'fatiha', title: "قراءة الفاتحة" },
        { id: 'ruku', title: "الركوع", text: "سبحان ربي العظيم" },
        { id: 'rising', title: "الرفع من الركوع", text: "سمع الله لمن حمده" },
        { id: 'sujud1', title: "السجود الأول", text: "سبحان ربي الأعلى" },
        { id: 'sitting', title: "الجلسة بين السجدتين", text: "رب اغفر لي" },
        { id: 'sujud2', title: "السجود الثاني", text: "سبحان ربي الأعلى" },
        { id: 'standing', title: "القيام للركعة التالية", text: "الله أكبر" },
        { id: 'tashahhud', title: "التشهد" },
        { id: 'salam', title: "التسليم", text: "السلام عليكم ورحمة الله" }
      ]
    },
    fard: {
        title: "الصلوات المفروضة",
        selectPrayer: "اختر صلاة",
        rakats: "ركعات",
        items: [
            { id: 'fajr', title: "الفجر", rakats: 2, desc: "صلاة الصبح." },
            { id: 'dhuhr', title: "الظهر", rakats: 4, desc: "صلاة الظهيرة." },
            { id: 'asr', title: "العصر", rakats: 4, desc: "صلاة العصر." },
            { id: 'maghrib', title: "المغرب", rakats: 3, desc: "صلاة الغروب." },
            { id: 'isha', title: "العشاء", rakats: 4, desc: "صلاة العشاء." }
        ]
    },
    sunnah: {
        title: "الصلوات النافلة",
        selectPrayer: "اختر صلاة",
        rakats: "ركعات",
        items: [
            { id: 'witr', title: "الوتر", rakats: "1 أو 3", desc: "بعد العشاء." },
            { id: 'duha', title: "الضحى", rakats: "2-8", desc: "بعد شروق الشمس." }
        ]
    },
    trainer: {
      title: "التدريب التفاعلي",
      selectPrayer: "اختر الصلاة",
      rakats: "ركعات",
      prayers: {
        fajr: "الفجر",
        dhuhr: "الظهر",
        asr: "العصر",
        maghrib: "المغرب",
        isha: "العشاء",
        sunrise: "شروق الشمس"
      },
      next: "التالي",
      prev: "السابق",
      finish: "إنهاء",
      error: "خطأ، حاول مرة أخرى",
      retry: "إعادة",
      success: "أحسنت! تقبل الله صلاتك."
    },
    settings: {
      title: "الإعدادات",
      fontSize: "حجم الخط",
      fontScale: {
        small: "صغير",
        medium: "متوسط",
        large: "كبير",
        extraLarge: "كبير جداً"
      }
    },
    prayerTimes: {
      title: "مواقيت الصلاة",
      locationDesc: (city: string) => `الأوقات بناءً على توقيت مدينة ${city}`,
      reminder: "تذكير",
      reminderEnabled: "التذكير مفعل",
      reminderDisabled: "التذكير معطل",
      notificationTitle: "وقت الصلاة",
      notificationBody: (name: string) => `حان الآن موعد صلاة ${name}`,
      loading: "جاري تحميل المواقيت...",
      notificationMsg: "رسالة التنبيه"
    },
    nav: {
      home: "الرئيسية",
      fard: "الفروض",
      wudu: "الوضوء",
      pillars: "الأركان",
      sunnah: "النوافل",
      times: "المواقيت",
      duas: "الأدعية",
      train: "تدريب"
    },
    duas: {
      title: "الأدعية والأذكار",
      categories: {
        morning: "أذكار الصباح",
        evening: "أذكار المساء",
        afterSalah: "أذكار بعد الصلاة",
        beforeSleep: "أذكار النوم",
        tasbih: "تسابيح",
        ruqyah: "الرقية الشرعية",
        daily: "أدعية يومية"
      },
      count: "العدد",
      transliteration: "النطق",
      translation: "الترجمة",
      copy: "نسخ",
      copied: "تم النسخ"
    }
  },
  en: {
    intro: "Prayer is the pillar of religion and the connection between a servant and their Lord, granting the heart peace and tranquility.",
    wudu: {
      title: "How to perform Wudu",
      steps: [
        { title: "Intention", desc: "Make the intention in your heart (without saying it aloud)." },
        { title: "Wash Hands", desc: "Wash your hands up to the wrists three times." },
        { title: "Rinse Mouth", desc: "Rinse your mouth three times." },
        { title: "Clean Nose", desc: "Sniff water into your nose and blow it out three times." },
        { title: "Wash Face", desc: "Wash your entire face three times." },
        { title: "Wash Arms", desc: "Wash your arms up to the elbows three times (start with right)." },
        { title: "Wipe Head", desc: "Wipe your head once with wet hands." },
        { title: "Wipe Ears", desc: "Wipe your ears once with the remaining water." },
        { title: "Wash Feet", desc: "Wash your feet up to the ankles three times (start with right)." }
      ],
      doneBtn: "Done"
    },
    pillars: {
      title: "Pillars of Prayer",
      pillarNote: "Note: These pillars are performed in every Raka'ah, except for the Intention, which is only at the beginning of the entire prayer.",
      items: [
        { id: 'niyah', title: "Intention" },
        { id: 'takbir', title: "Takbir al-Ihram", text: "Allahu Akbar" },
        { id: 'fatiha', title: "Reciting Al-Fatiha" },
        { id: 'ruku', title: "Ruku (Bowing)", text: "Subhana Rabbiyal Azeem" },
        { id: 'rising', title: "Rising from Ruku", text: "Sami Allahu liman hamidah" },
        { id: 'sujud1', title: "First Sujud", text: "Subhana Rabbiyal A'la" },
        { id: 'sitting', title: "Sitting between Sujud", text: "Rabbighfir li" },
        { id: 'sujud2', title: "Second Sujud", text: "Subhana Rabbiyal A'la" },
        { id: 'standing', title: "Standing up", text: "Allahu Akbar" },
        { id: 'tashahhud', title: "Tashahhud" },
        { id: 'salam', title: "Salam", text: "Assalamu alaikum wa rahmatullah" }
      ]
    },
    fard: {
        title: "Fard Prayers",
        selectPrayer: "Select Prayer",
        rakats: "Rakats",
        items: [
            { id: 'fajr', title: "Fajr", rakats: 2, desc: "Dawn prayer." },
            { id: 'dhuhr', title: "Dhuhr", rakats: 4, desc: "Noon prayer." },
            { id: 'asr', title: "Asr", rakats: 4, desc: "Afternoon prayer." },
            { id: 'maghrib', title: "Maghrib", rakats: 3, desc: "Sunset prayer." },
            { id: 'isha', title: "Isha", rakats: 4, desc: "Night prayer." }
        ]
    },
    sunnah: {
        title: "Sunnah Prayers",
        selectPrayer: "Select Prayer",
        rakats: "Rakats",
        items: [
            { id: 'witr', title: "Witr", rakats: "1 or 3", desc: "After Isha prayer." },
            { id: 'duha', title: "Duha", rakats: "2-8", desc: "After sunrise." }
        ]
    },
    trainer: {
      title: "Interactive Training",
      selectPrayer: "Select Prayer",
      rakats: "Rakats",
      prayers: {
        fajr: "Fajr",
        dhuhr: "Dhuhr",
        asr: "Asr",
        maghrib: "Maghrib",
        isha: "Isha",
        sunrise: "Sunrise"
      },
      next: "Next",
      prev: "Prev",
      finish: "Finish",
      error: "Wrong posture, try again",
      retry: "Retry",
      success: "Great! May Allah accept your prayer."
    },
    settings: {
      title: "Settings",
      fontSize: "Font Size",
      fontScale: {
        small: "Small",
        medium: "Medium",
        large: "Large",
        extraLarge: "Extra Large"
      }
    },
    prayerTimes: {
      title: "Prayer Times",
      locationDesc: (city: string) => `Times based on city time of ${city}`,
      reminder: "Reminder",
      reminderEnabled: "Reminder Enabled",
      reminderDisabled: "Reminder Disabled",
      notificationTitle: "Prayer Time",
      notificationBody: (name: string) => `It is now time for ${name} prayer`,
      loading: "Loading times...",
      notificationMsg: "Reminder Message"
    },
    nav: {
      home: "Home",
      fard: "Fard",
      wudu: "Wudu",
      pillars: "Pillars",
      sunnah: "Sunnah",
      times: "Times",
      duas: "Duas",
      train: "Train"
    },
    duas: {
      title: "Supplications",
      categories: {
        morning: "Morning Adhkar",
        evening: "Evening Adhkar",
        afterSalah: "After Prayer",
        beforeSleep: "Before Sleep",
        tasbih: "Tasbih",
        ruqyah: "Ruqyah",
        daily: "Daily Life"
      },
      count: "Repeat",
      transliteration: "Transliteration",
      translation: "Translation",
      copy: "Copy",
      copied: "Copied"
    }
  },
  fr: {
    intro: "La prière est le pilier de la religion et le lien entre le serviteur et son Seigneur, accordant au cœur paix et tranquillité.",
    wudu: {
      title: "Comment faire le Wudu",
      steps: [
        { title: "Intention", desc: "Faites l'intention dans votre cœur (sans la prononcer)." },
        { title: "Laver les mains", desc: "Lavez vos mains jusqu'aux poignets trois fois." },
        { title: "Rincer la bouche", desc: "Rincez votre bouche trois fois." },
        { title: "Nettoyer le nez", desc: "Reniflez de l'eau dans votre nez et mouchez-vous trois fois." },
        { title: "Laver le visage", desc: "Lavez tout votre visage trois fois." },
        { title: "Laver les bras", desc: "Lavez vos bras jusqu'aux coudes trois fois (commencez par la droite)." },
        { title: "Passer sur la tête", desc: "Passez vos mains mouillées sur votre tête une fois." },
        { title: "Passer sur les oreilles", desc: "Passez sur vos oreilles une fois." },
        { title: "Laver les pieds", desc: "Lavez vos pieds jusqu'aux chevilles trois fois (commencez par la droite)." }
      ],
      doneBtn: "Terminé"
    },
    pillars: {
      title: "Piliers de la Prière",
      pillarNote: "Note: Ces piliers sont accomplis dans chaque Raka'ah, sauf l'Intention qui se fait uniquement au début de la prière.",
      items: [
        { id: 'niyah', title: "Intention" },
        { id: 'takbir', title: "Takbir al-Ihram", text: "Allahu Akbar" },
        { id: 'fatiha', title: "Réciter Al-Fatiha" },
        { id: 'ruku', title: "Ruku (Inclinaison)", text: "Subhana Rabbiyal Azeem" },
        { id: 'rising', title: "Se relever du Ruku", text: "Sami Allahu liman hamidah" },
        { id: 'sujud1', title: "Premier Sujud", text: "Subhana Rabbiyal A'la" },
        { id: 'sitting', title: "Assis entre Sujud", text: "Rabbighfir li" },
        { id: 'sujud2', title: "Second Sujud", text: "Subhana Rabbiyal A'la" },
        { id: 'standing', title: "Se lever", text: "Allahu Akbar" },
        { id: 'tashahhud', title: "Tashahhud" },
        { id: 'salam', title: "Salam", text: "Assalamu alaikum wa rahmatullah" }
      ]
    },
    fard: {
        title: "Prières Fard",
        selectPrayer: "Choisir Prière",
        rakats: "Rakats",
        items: [
            { id: 'fajr', title: "Fajr", rakats: 2, desc: "Prière de l'aube." },
            { id: 'dhuhr', title: "Dhuhr", rakats: 4, desc: "Prière de midi." },
            { id: 'asr', title: "Asr", rakats: 4, desc: "Prière de l'après-midi." },
            { id: 'maghrib', title: "Maghrib", rakats: 3, desc: "Prière du coucher du soleil." },
            { id: 'isha', title: "Isha", rakats: 4, desc: "Prière de la nuit." }
        ]
    },
    sunnah: {
        title: "Prières Sunnah",
        selectPrayer: "Choisir Prière",
        rakats: "Rakats",
        items: [
            { id: 'witr', title: "Witr", rakats: "1 ou 3", desc: "Après Isha." },
            { id: 'duha', title: "Duha", rakats: "2-8", desc: "Après le lever du soleil." }
        ]
    },
    trainer: {
      title: "Entraînement Interactif",
      selectPrayer: "Choisir Prière",
      rakats: "Rakats",
      prayers: {
        fajr: "Fajr",
        dhuhr: "Dhuhr",
        asr: "Asr",
        maghrib: "Maghrib",
        isha: "Isha",
        sunrise: "Lever du soleil"
      },
      next: "Suivant",
      prev: "Préc.",
      finish: "Terminer",
      error: "Mauvaise posture, réessayez",
      retry: "Réessayer",
      success: "Bien! Qu'Allah accepte votre prière."
    },
    prayerTimes: {
      title: "Horaires de Prière",
      locationDesc: (city: string) => `Basé sur l'heure de ${city}`,
      reminder: "Rappel",
      reminderEnabled: "Rappel Activé",
      reminderDisabled: "Rappel Désactivé",
      notificationTitle: "Heure de Prière",
      notificationBody: (name: string) => `C'est l'heure de la prière ${name}`,
      loading: "Chargement...",
      notificationMsg: "Message de Rappel"
    },
    settings: {
      title: "Paramètres",
      fontSize: "Taille de Police",
      fontScale: {
        small: "Petit",
        medium: "Moyen",
        large: "Grand",
        extraLarge: "Très Grand"
      }
    },
    nav: {
      home: "Accueil",
      fard: "Fard",
      wudu: "Wudu",
      pillars: "Piliers",
      sunnah: "Sunnah",
      times: "Horaires",
      duas: "Douas",
      train: "Entraînement"
    },
    duas: {
      title: "Supplications",
      categories: {
        morning: "Matin",
        evening: "Soir",
        afterSalah: "Après-Prière",
        beforeSleep: "Avant de dormir",
        tasbih: "Tasbih",
        ruqyah: "Ruqyah",
        daily: "Quotidien"
      },
      count: "Répéter",
      transliteration: "Transcription",
      translation: "Traduction",
      copy: "Copier",
      copied: "Copié"
    }
  },
  es: {
    intro: "La oración es el pilar de la religión y la conexión entre el siervo y su Señor, otorgando al corazón paz y tranquilidad.",
    wudu: {
      title: "Cómo realizar el Wudu",
      steps: [
        { title: "Intención", desc: "Haz la intención en tu corazón (sin decirla en voz alta)." },
        { title: "Lavar las manos", desc: "Lava tus manos hasta las muñecas tres veces." },
        { title: "Enjuagar la boca", desc: "Enjuaga tu boca tres veces." },
        { title: "Limpiar la nariz", desc: "Aspira agua por la nariz y expúlsala tres veces." },
        { title: "Lavar la cara", desc: "Lava toda tu cara tres veces." },
        { title: "Lavar los brazos", desc: "Lava tus brazos hasta los codos tres veces (empieza por la derecha)." },
        { title: "Pasar por la cabeza", desc: "Pasa tus manos mojadas por tu cabeza una vez." },
        { title: "Pasar por las orejas", desc: "Pasa por tus orejas una vez." },
        { title: "Lavar los pies", desc: "Lava tus pies hasta los tobillos tres veces (empieza por la derecha)." }
      ],
      doneBtn: "Hecho"
    },
    pillars: {
      title: "Pilares de la Oración",
      pillarNote: "Nota: Estos pilares se realizan en cada Raka'ah, excepto la Intención, que es solo al comienzo de la oración.",
      items: [
        { id: 'niyah', title: "Intención" },
        { id: 'takbir', title: "Takbir al-Ihram", text: "Allahu Akbar" },
        { id: 'fatiha', title: "Recitar Al-Fatiha" },
        { id: 'ruku', title: "Ruku (Inclinación)", text: "Subhana Rabbiyal Azeem" },
        { id: 'rising', title: "Levantarse del Ruku", text: "Sami Allahu liman hamidah" },
        { id: 'sujud1', title: "Primer Sujud", text: "Subhana Rabbiyal A'la" },
        { id: 'sitting', title: "Sentado entre Sujud", text: "Rabbighfir li" },
        { id: 'sujud2', title: "Segundo Sujud", text: "Subhana Rabbiyal A'la" },
        { id: 'standing', title: "Levantarse", text: "Allahu Akbar" },
        { id: 'tashahhud', title: "Tashahhud" },
        { id: 'salam', title: "Salam", text: "Assalamu alaikum wa rahmatullah" }
      ]
    },
    fard: {
        title: "Oraciones Fard",
        selectPrayer: "Elegir Oración",
        rakats: "Rakats",
        items: [
            { id: 'fajr', title: "Fajr", rakats: 2, desc: "Oración del alba." },
            { id: 'dhuhr', title: "Dhuhr", rakats: 4, desc: "Oración del mediodía." },
            { id: 'asr', title: "Asr", rakats: 4, desc: "Oración de la tarde." },
            { id: 'maghrib', title: "Maghrib", rakats: 3, desc: "Oración del ocaso." },
            { id: 'isha', title: "Isha", rakats: 4, desc: "Oración de la noche." }
        ]
    },
    sunnah: {
        title: "Oraciones Sunnah",
        selectPrayer: "Elegir Oración",
        rakats: "Rakats",
        items: [
            { id: 'witr', title: "Witr", rakats: "1 o 3", desc: "Después de Isha." },
            { id: 'duha', title: "Duha", rakats: "2-8", desc: "Después del amanecer." }
        ]
    },
    trainer: {
      title: "Entrenamiento Interactivo",
      selectPrayer: "Elegir Oración",
      rakats: "Rakats",
      prayers: {
        fajr: "Fajr",
        dhuhr: "Dhuhr",
        asr: "Asr",
        maghrib: "Maghrib",
        isha: "Isha",
        sunrise: "Amanecer"
      },
      next: "Siguiente",
      prev: "Ant.",
      finish: "Finalizar",
      error: "Postura incorrecta, intenta de nuevo",
      retry: "Reintentar",
      success: "¡Bien! Que Alá acepte tu oración."
    },
    prayerTimes: {
      title: "Horarios de Oración",
      locationDesc: (city: string) => `Basado en la hora de ${city}`,
      reminder: "Recordatorio",
      reminderEnabled: "Recordatorio Activado",
      reminderDisabled: "Recordatorio Desactivado",
      notificationTitle: "Hora de Oración",
      notificationBody: (name: string) => `Es hora de la oración ${name}`,
      loading: "Cargando...",
      notificationMsg: "Mensaje de Recordatorio"
    },
    settings: {
      title: "Ajustes",
      fontSize: "Tamaño de Fuente",
      fontScale: {
        small: "Pequeño",
        medium: "Mediano",
        large: "Grande",
        extraLarge: "Muy Grande"
      }
    },
    nav: {
      home: "Inicio",
      fard: "Fard",
      wudu: "Wudu",
      pillars: "Pilares",
      sunnah: "Sunnah",
      times: "Horarios",
      duas: "Súplicas",
      train: "Entrenamiento"
    },
    duas: {
      title: "Súplicas",
      categories: {
        morning: "Mañana",
        evening: "Tarde",
        afterSalah: "Después-Oración",
        beforeSleep: "Dormir",
        daily: "Diario"
      },
      count: "Repetir",
      transliteration: "Pronunciación",
      translation: "Traducción",
      copy: "Copiar",
      copied: "Copiado"
    }
  },
  ur: {
    intro: "نماز دین کا ستون اور بندے کا اپنے رب سے تعلق ہے، جو دل کو سکون اور اطمینان بخشتی ہے۔",
    wudu: {
      title: "وضو کا طریقہ",
      steps: [
        { title: "نیت", desc: "دل میں نیت کریں (زبان سے کہنا ضروری نہیں)۔" },
        { title: "ہاتھ دھونا", desc: "دونوں ہاتھوں کو کلائیوں تک تین بار دھوئیں" },
        { title: "کلی کرنا", desc: "تین بار کلی کریں۔" },
        { title: "ناک میں پانی ڈالنا", desc: "تین بار ناک میں پانی ڈالیں اور صاف کریں۔" },
        { title: "چہرہ دھونا", desc: "پورے چہرے کو تین بار دھوئیں" },
        { title: "ہاتھوں کو دھونا", desc: "دونوں ہاتھوں کو کہنیوں تک تین بار دھوئیں (دائیں سے شروع کریں)۔" },
        { title: "سر کا مسح", desc: "ایک بار پورے سر کا مسح کریں۔" },
        { title: "کانوں کا مسح", desc: "ایک بار کانوں کا مسح کریں۔" },
        { title: "پاؤں دھونا", desc: "دونوں پاؤں ٹخنوں تک تین بار دھوئیں (دائیں سے شروع کریں)۔" }
      ],
      doneBtn: "مکمل"
    },
    pillars: {
      title: "نماز کے ارکان",
      pillarNote: "نوٹ: یہ ارکان ہر رکعت میں ادا کیے جاتے ہیں، سوائے نیت کے جو صرف نماز کے آغاز میں ہوتی ہے۔",
      items: [
        { id: 'niyah', title: "نیت" },
        { id: 'takbir', title: "تکبیر تحریمہ", text: "اللہ اکبر" },
        { id: 'fatiha', title: "سورہ فاتحہ کی تلاوت" },
        { id: 'ruku', title: "رکوع", text: "سبحان ربی العظیم" },
        { id: 'rising', title: "رکوع سے اٹھنا", text: "سمع اللہ لمن حمدہ" },
        { id: 'sujud1', title: "سجدہ", text: "سبحان ربی الاعلی" },
        { id: 'sitting', title: "دو سجدوں کے درمیان بیٹھنا", text: "رب اغفر لی" },
        { id: 'sujud2', title: "دوسرا سجدہ", text: "سبحان ربی الاعلی" },
        { id: 'standing', title: "اگلی رکعت کے لیے کھڑے ہونا", text: "الله اكبر" },
        { id: 'tashahhud', title: "تشہد" },
        { id: 'salam', title: "سلام", text: "السلام علیکم ورحمۃ اللہ" }
      ]
    },
    fard: {
        title: "فرائض",
        selectPrayer: "نماز منتخب کریں",
        rakats: "رکعات",
        items: [
            { id: 'fajr', title: "فجر", rakats: 2, desc: "صبح کی نماز۔" },
            { id: 'dhuhr', title: "ظہر", rakats: 4, desc: "دوپہر کی نماز۔" },
            { id: 'asr', title: "عصر", rakats: 4, desc: "سہ پہر کی نماز۔" },
            { id: 'maghrib', title: "مغرب", rakats: 3, desc: "غروب آفتاب کی نماز۔" },
            { id: 'isha', title: "عشاء", rakats: 4, desc: "رات کی نماز۔" }
        ]
    },
    sunnah: {
        title: "نوافل",
        selectPrayer: "نماز منتخب کریں",
        rakats: "رکعات",
        items: [
            { id: 'witr', title: "وتر", rakats: "1 یا 3", desc: "عشاء کے بعد۔" },
            { id: 'duha', title: "اشراق/ضحی", rakats: "2-8", desc: "سورج نکلنے کے بعد۔" }
        ]
    },
    trainer: {
      title: "انٹرایکٹو ٹریننگ",
      selectPrayer: "نماز منتخب کریں",
      rakats: "رکعات",
      prayers: {
        fajr: "فجر",
        dhuhr: "ظہر",
        asr: "عصر",
        maghrib: "مغرب",
        isha: "عشاء",
        sunrise: "طلوع آفتاب"
      },
      next: "اگلا",
      prev: "پیچھے",
      finish: "ختم کریں",
      error: "غلط طریقہ، دوبارہ کوشش کریں",
      retry: "دوبارہ کوشش",
      success: "بہت خوب! اللہ آپ کی نماز قبول فرمائے۔"
    },
    prayerTimes: {
      title: "نماز کے اوقات",
      locationDesc: (city: string) => `اوقات ${city} کے وقت کے مطابق ہیں`,
      reminder: "یاد دہانی",
      reminderEnabled: "یاد دہانی فعال",
      reminderDisabled: "یاد دہانی غیر فعال",
      notificationTitle: "نماز کا وقت",
      notificationBody: (name: string) => `اب ${name} کی نماز کا وقت ہے`,
      loading: "اوقات لوڈ ہو رہے ہیں...",
      notificationMsg: "نوٹیفکیشن پیغام"
    },
    settings: {
      title: "ترتیبات",
      fontSize: "فونٹ کا سائز",
      fontScale: {
        small: "چھوٹا",
        medium: "درمیانہ",
        large: "بڑا",
        extraLarge: "بہت بڑا"
      }
    },
    nav: {
      home: "ہوم",
      fard: "فرائض",
      wudu: "وضو",
      pillars: "ارکان",
      sunnah: "نوافل",
      times: "اوقات",
      duas: "اذکار",
      train: "تربیت"
    },
    duas: {
      title: "دعائیں اور اذکار",
      categories: {
        morning: "صبح کے اذکار",
        evening: "شام کے اذکار",
        afterSalah: "نماز کے بعد",
        beforeSleep: "سونے سے پہلے",
        daily: "روزانہ کی دعائیں"
      },
      count: "تعداد",
      transliteration: "نطق",
      translation: "ترجمہ",
      copy: "نقل",
      copied: "نقل ہو گیا"
    }
  },
  id: {
    intro: "Shalat adalah tiang agama dan hubungan antara hamba dengan Tuhannya, memberikan ketenangan dan ketenteraman di hati.",
    wudu: {
      title: "Cara Berwudhu",
      steps: [
        { title: "Niat", desc: "Ucapkan niat dalam hati (tidak harus dilafalkan)." },
        { title: "Mencuci Tangan", desc: "Cuci tangan sampai pergelangan tangan tiga kali." },
        { title: "Berkumur", desc: "Berkumur-kumur tiga kali." },
        { title: "Membersihkan Hidung", desc: "Masukkan air ke hidung dan keluarkan tiga kali." },
        { title: "Membasuh Muka", desc: "Basuh seluruh wajah tiga kali." },
        { title: "Membasuh Tangan", desc: "Basuh tangan sampai siku tiga kali (mulai dari kanan)." },
        { title: "Mengusap Kepala", desc: "Usap kepala satu kali dengan tangan basah." },
        { title: "Mengusap Telinga", desc: "Usap telinga satu kali." },
        { title: "Mencuci Kaki", desc: "Cuci kaki sampai mata kaki tiga kali (mulai dari kanan)." }
      ],
      doneBtn: "Selesai"
    },
    pillars: {
      title: "Rukun Shalat",
      pillarNote: "Catatan: Rukun-rukun ini dilakukan di setiap Raka'at, kecuali Niat yang hanya dilakukan di awal shalat.",
      items: [
        { id: 'niyah', title: "Niat" },
        { id: 'takbir', title: "Takbiratul Ihram", text: "Allahu Akbar" },
        { id: 'fatiha', title: "Membaca Al-Fatihah" },
        { id: 'ruku', title: "Rukuk", text: "Subhana Rabbiyal Azeem" },
        { id: 'rising', title: "Bangun dari Rukuk", text: "Sami Allahu liman hamidah" },
        { id: 'sujud1', title: "Sujud Pertama", text: "Subhana Rabbiyal A'la" },
        { id: 'sitting', title: "Duduk Antara Dua Sujud", text: "Rabbighfir li" },
        { id: 'sujud2', title: "Sujud Kedua", text: "Subhana Rabbiyal A'la" },
        { id: 'standing', title: "Berdiri", text: "Allahu Akbar" },
        { id: 'tashahhud', title: "Tahiyat", text: "Attahiyyatulillahi..." },
        { id: 'salam', title: "Salam", text: "Assalamu alaikum wa rahmatullah" }
      ]
    },
    fard: {
        title: "Shalat Fardu",
        selectPrayer: "Pilih Shalat",
        rakats: "Rakaat",
        items: [
            { id: 'fajr', title: "Subuh", rakats: 2, desc: "Shalat fajar." },
            { id: 'dhuhr', title: "Zuhur", rakats: 4, desc: "Shalat siang." },
            { id: 'asr', title: "Asar", rakats: 4, desc: "Shalat sore." },
            { id: 'maghrib', title: "Maghrib", rakats: 3, desc: "Shalat petang." },
            { id: 'isha', title: "Isya", rakats: 4, desc: "Shalat malam." }
        ]
    },
    sunnah: {
        title: "Shalat Sunnah",
        selectPrayer: "Pilih Shalat",
        rakats: "Rakaat",
        items: [
            { id: 'witr', title: "Witir", rakats: "1 atau 3", desc: "Setelah Isya." },
            { id: 'duha', title: "Duha", rakats: "2-8", desc: "Setelah matahari terbit." }
        ]
    },
    trainer: {
      title: "Pelatihan Interaktif",
      selectPrayer: "Pilih Shalat",
      rakats: "Rakaat",
      prayers: {
        fajr: "Subuh",
        dhuhr: "Zuhur",
        asr: "Asar",
        maghrib: "Maghrib",
        isha: "Isya",
        sunrise: "Matahari Terbit"
      },
      next: "Lanjut",
      prev: "Kembali",
      finish: "Selesai",
      error: "Posisi salah, coba lagi",
      retry: "Coba Lagi",
      success: "Bagus! Semoga Allah menerima shalatmu."
    },
    prayerTimes: {
      title: "Jadwal Shalat",
      locationDesc: (city: string) => `Waktu berdasarkan kota ${city}`,
      reminder: "Pengingat",
      reminderEnabled: "Pengingat Aktif",
      reminderDisabled: "Pengingat Mati",
      notificationTitle: "Waktu Shalat",
      notificationBody: (name: string) => `Sekarang waktu shalat ${name}`,
      loading: "Memuat waktu...",
      notificationMsg: "Pesan Pengingat"
    },
    settings: {
      title: "Pengaturan",
      fontSize: "Ukuran Font",
      fontScale: {
        small: "Kecil",
        medium: "Sedang",
        large: "Besar",
        extraLarge: "Sangat Besar"
      }
    },
    nav: {
      home: "Beranda",
      fard: "Fardu",
      wudu: "Wudhu",
      pillars: "Rukun",
      sunnah: "Sunnah",
      times: "Waktu",
      duas: "Doa",
      train: "Latihan"
    },
    duas: {
      title: "Doa & Dzikir",
      categories: {
        morning: "Pagi",
        evening: "Petang",
        afterSalah: "Setelah Shalat",
        beforeSleep: "Sebelum Tidur",
        daily: "Harian"
      },
      count: "Ulangi",
      transliteration: "Pelafalan",
      translation: "Terjemahan",
      copy: "Salin",
      copied: "Disalin"
    }
  },
  tr: {
    intro: "Namaz dinin direğidir ve kulun Rabbiyle olan bağıdır, kalbe huzur ve sükun verir.",
    wudu: {
      title: "Abdest Nasıl Alınır?",
      steps: [
        { title: "Niyet", desc: "İçten niyet edin (dile getirmek şart değildir)." },
        { title: "Elleri Yıkamak", desc: "Elleri bileklere kadar üç kere yıkayın." },
        { title: "Ağza Su Vermek", desc: "Ağzınıza üç kere su verin ve çalkalayın." },
        { title: "Buruna Su Vermek", desc: "Burnunuza üç kere su verin ve temizleyin." },
        { title: "Yüzü Yıkamak", desc: "Tüm yüzü üç kere yıkayın." },
        { title: "Kolları Yıkamak", desc: "Kolları dirseklere kadar üç kere yıkayın (sağdan başlayın)." },
        { title: "Başın Meshi", desc: "Islak elle başın bir kısmını dokunun." },
        { title: "Kulakların Meshi", desc: "Kulakları bir kere mesh edin." },
        { title: "Ayakları Yıkamak", desc: "Ayakları topuklara kadar üç kere yıkayın (sağdan başlayın)." }
      ],
      doneBtn: "Tamam"
    },
    pillars: {
      title: "Namazın Rükünleri",
      pillarNote: "Not: Bu rükünler her rekatta yerine getirilir, niyet hariç; niyet sadece namazın başlangıcında yapılır.",
      items: [
        { id: 'niyah', title: "Niyet" },
        { id: 'takbir', title: "İftitah Tekbiri", text: "Allahu Ekber" },
        { id: 'fatiha', title: "Fatiha Suresi" },
        { id: 'ruku', title: "Rüku", text: "Subhane Rabbiyel Azim" },
        { id: 'rising', title: "Rükudan Doğrulma", text: "Semiallahu Limen Hamideh" },
        { id: 'sujud1', title: "Birinci Secde", text: "Subhane Rabbiyel Ala" },
        { id: 'sitting', title: "İki Secde Arası Oturuş", text: "Rabbigfir li" },
        { id: 'sujud2', title: "İkinci Secde", text: "Subhane Rabbiyel Ala" },
        { id: 'standing', title: "Ayağa Kalkış", text: "Allahu Ekber" },
        { id: 'tashahhud', title: "Teşehhüd" },
        { id: 'salam', title: "Selam", text: "Esselamu Aleykum ve Rahmetullah" }
      ]
    },
    fard: {
        title: "Farz Namazlar",
        selectPrayer: "Namaz Seç",
        rakats: "Rekat",
        items: [
            { id: 'fajr', title: "Sabah", rakats: 2, desc: "Sabah vaktinde." },
            { id: 'dhuhr', title: "Öğle", rakats: 4, desc: "Öğle vaktinde." },
            { id: 'asr', title: "İkindi", rakats: 4, desc: "İkindi vaktinde." },
            { id: 'maghrib', title: "Akşam", rakats: 3, desc: "Akşam vaktinde." },
            { id: 'isha', title: "Yatsı", rakats: 4, desc: "Yatsı vaktinde." }
        ]
    },
    sunnah: {
        title: "Nafile Namazlar",
        selectPrayer: "Namaz Seç",
        rakats: "Rekat",
        items: [
            { id: 'witr', title: "Vitir", rakats: "1 veya 3", desc: "Yatsıdan sonra." },
            { id: 'duha', title: "Kuşluk (Duha)", rakats: "2-8", desc: "Güneş doğduktan sonra." }
        ]
    },
    trainer: {
      title: "Etkileşimli Eğitim",
      selectPrayer: "Namaz Seçin",
      rakats: "Rekat",
      prayers: {
        fajr: "Sabah",
        dhuhr: "Öğle",
        asr: "İkindi",
        maghrib: "Akşam",
        isha: "Yatsı",
        sunrise: "Güneş Doğuşu"
      },
      next: "İleri",
      prev: "Geri",
      finish: "Bitir",
      error: "Yanlış pozisyon, tekrar dene",
      retry: "Tekrar",
      success: "Harika! Allah namazını kabul etsin."
    },
    prayerTimes: {
      title: "Namaz Vakitleri",
      locationDesc: (city: string) => `${city} şehri vaktine göre`,
      reminder: "Hatırlatıcı",
      reminderEnabled: "Aktif",
      reminderDisabled: "Pasif",
      notificationTitle: "Namaz Vakti",
      notificationBody: (name: string) => `Şimdi ${name} vakti`,
      loading: "Yükleniyor...",
      notificationMsg: "Hatırlatma Mesajı"
    },
    settings: {
      title: "Ayarlar",
      fontSize: "Yazı Tipi Boyutu",
      fontScale: {
        small: "Küçük",
        medium: "Orta",
        large: "Büyük",
        extraLarge: "Çok Büyük"
      }
    },
    nav: {
      home: "Ana Sayfa",
      fard: "Farz",
      wudu: "Abdest",
      pillars: "Rükünler",
      sunnah: "Nafile",
      times: "Vakitler",
      duas: "Dualar",
      train: "Eğitim"
    },
    duas: {
      title: "Dualar ve Zikirler",
      categories: {
        morning: "Sabah",
        evening: "Akşam",
        afterSalah: "Namaz Sonrası",
        beforeSleep: "Uykudan Önce",
        daily: "Günlük"
      },
      count: "Tekrar",
      transliteration: "Okunuş",
      translation: "Tercüme",
      copy: "Kopyala",
      copied: "Kopyalandı"
    }
  },
  de: {
    intro: "Das Gebet ist die Säule der Religion und die Verbindung zwischen dem Diener und seinem Herrn, die dem Herzen Ruhe und Frieden schenkt.",
    wudu: {
      title: "Wie man Wudu macht",
      steps: [
        { title: "Niyyah (Absicht)", desc: "Die Absicht im Herzen fassen (ohne sie auszusprechen)." },
        { title: "Hände waschen", desc: "Waschen Sie Ihre Hände dreimal bis zu den Handgelenken." },
        { title: "Mund ausspülen", desc: "Spülen Sie Ihren Mund dreimal aus." },
        { title: "Nase reinigen", desc: "Ziehen Sie dreimal Wasser in die Nase und stoßen Sie es wieder aus." },
        { title: "Gesicht waschen", desc: "Waschen Sie das gesamte Gesicht dreimal." },
        { title: "Arme waschen", desc: "Waschen Sie die Arme dreimal bis zu den Ellbogen (beginnend mit der rechten)." },
        { title: "Kopf streichen", desc: "Streichen Sie einmal mit nassen Händen über Ihren Kopf." },
        { title: "Ohren reinigen", desc: "Reinigen Sie Ihre Ohren einmal mit dem restlichen Wasser." },
        { title: "Füße waschen", desc: "Waschen Sie Ihre Füße dreimal bis zu den Knöcheln (beginnend mit der rechten)." }
      ],
      doneBtn: "Erledigt"
    },
    pillars: {
      title: "Säulen des Gebets",
      pillarNote: "Hinweis: Diese Säulen werden in jeder Raka'ah verrichtet, außer der Absicht, die nur zu Beginn des Gebets erfolgt.",
      items: [
        { id: 'niyah', title: "Absicht" },
        { id: 'takbir', title: "Takbir al-Ihram", text: "Allahu Akbar" },
        { id: 'fatiha', title: "Al-Fatiha lesen" },
        { id: 'ruku', title: "Ruku (Verbeugung)", text: "Subhana Rabbiyal Azeem" },
        { id: 'rising', title: "Aufstehen vom Ruku", text: "Sami Allahu liman hamidah" },
        { id: 'sujud1', title: "Sujud (Niederwerfung)", text: "Subhana Rabbiyal A'la" },
        { id: 'sitting', title: "Sitzen zwischen Sujud", text: "Rabbighfir li" },
        { id: 'sujud2', title: "Zweiter Sujud", text: "Subhana Rabbiyal A'la" },
        { id: 'standing', title: "Aufstehen", text: "Allahu Akbar" },
        { id: 'tashahhud', title: "Tashahhud" },
        { id: 'salam', title: "Salam (Friedensgruß)", text: "Assalamu alaikum wa rahmatullah" }
      ]
    },
    fard: {
        title: "Pflichtgebete",
        selectPrayer: "Gebet auswählen",
        rakats: "Rakats",
        items: [
            { id: 'fajr', title: "Fajr", rakats: 2, desc: "Morgengebet." },
            { id: 'dhuhr', title: "Dhuhr", rakats: 4, desc: "Mittagsgebet." },
            { id: 'asr', title: "Asr", rakats: 4, desc: "Nachmittagsgebet." },
            { id: 'maghrib', title: "Maghrib", rakats: 3, desc: "Abendgebet." },
            { id: 'isha', title: "Isha", rakats: 4, desc: "Nachtgebet." }
        ]
    },
    sunnah: {
        title: "Sunnah-Gebete",
        selectPrayer: "Gebet auswählen",
        rakats: "Rakats",
        items: [
            { id: 'witr', title: "Witr", rakats: "1 oder 3", desc: "Nach Isha." },
            { id: 'duha', title: "Duha", rakats: "2-8", desc: "Vormittagsgebet." }
        ]
    },
    trainer: {
      title: "Interaktives Training",
      selectPrayer: "Gebet auswählen",
      rakats: "Rakats",
      prayers: {
        fajr: "Fajr",
        dhuhr: "Dhuhr",
        asr: "Asr",
        maghrib: "Maghrib",
        isha: "Isha",
        sunrise: "Sonnenaufgang"
      },
      next: "Weiter",
      prev: "Zurück",
      finish: "Beenden",
      error: "Falsche Haltung, versuch es nochmal",
      retry: "Wiederholen",
      success: "Gut gemacht! Möge Allah dein Gebet annehmen."
    },
    prayerTimes: {
      title: "Gebetszeiten",
      locationDesc: (city: string) => `Zeiten basierend auf der Stadtzeit von ${city}`,
      reminder: "Erinnerung",
      reminderEnabled: "Erinnerung aktiviert",
      reminderDisabled: "Erinnerung deaktiviert",
      notificationTitle: "Gebetszeit",
      notificationBody: (name: string) => `Es ist jetzt Zeit für das ${name}-Gebet`,
      loading: "Gebetszeiten werden geladen...",
      notificationMsg: "Benachrichtigungsnachricht"
    },
    settings: {
      title: "Einstellungen",
      fontSize: "Schriftgröße",
      fontScale: {
        small: "Klein",
        medium: "Mittel",
        large: "Groß",
        extraLarge: "Extragroß"
      }
    },
    nav: {
      home: "Startseite",
      fard: "Pflicht",
      wudu: "Wudu",
      pillars: "Säulen",
      sunnah: "Sunnah",
      times: "Zeiten",
      duas: "Bittgebete",
      train: "Training"
    },
    duas: {
      title: "Bittgebete & Adhkar",
      categories: {
        morning: "Morgens",
        evening: "Abends",
        afterSalah: "Nach dem Gebet",
        beforeSleep: "Vorm Schlafen",
        daily: "Täglich"
      },
      count: "Wiederholen",
      transliteration: "Aussprache",
      translation: "Übersetzung",
      copy: "Kopieren",
      copied: "Kopiert"
    }
  },
  ru: {
    intro: "Намаз — это опора религии и связь раба со своим Господом, дарующая сердцу спокойствие и умиротворение.",
    wudu: {
      title: "Как совершать омовение (Вуду)",
      steps: [
        { title: "Намерение", desc: "Сформулируйте намерение в сердце (не вслух)." },
        { title: "Мытье кистей рук", desc: "Вымойте кисти рук до запястий трижды." },
        { title: "Полоскание рта", desc: "Прополощите рот трижды." },
        { title: "Промывание носа", desc: "Наберите воду в нос и высморкайтесь трижды." },
        { title: "Мытье лица", desc: "Вымойте все лицо трижды." },
        { title: "Мытье рук", desc: "Вымойте руки от кончиков пальцев до локтей трижды (начиная с правой)." },
        { title: "Протирание головы", desc: "Протрите влажными руками голову один раз." },
        { title: "Протирание ушей", desc: "Протрите уши один раз оставшейся водой." },
        { title: "Мытье ног", desc: "Вымойте ноги до лодыжек трижды (начиная с правой)." }
      ],
      doneBtn: "Готово"
    },
    pillars: {
      title: "Столпы Намаза",
      pillarNote: "Примечание: Эти столпы выполняются в каждом ракаате, за исключением намерения, которое совершается только в начале молитвы.",
      items: [
        { id: 'niyah', title: "Намерение" },
        { id: 'takbir', title: "Такбир аль-Ихрам", text: "Аллаху Акбар" },
        { id: 'fatiha', title: "Чтение аль-Фатихи" },
        { id: 'ruku', title: "Поясной поклон", text: "Субхана Раббияль-Азим" },
        { id: 'rising', title: "Выпрямление после поклона", text: "Сами'аллаху лиман хамидах" },
        { id: 'sujud1', title: "Земной поклон", text: "Субхана Раббияль-А'ля" },
        { id: 'sitting', title: "Сидение между поклонами", text: "Рабби-гфир ли" },
        { id: 'sujud2', title: "Второй земной поклон", text: "Субхана Раббияль-А'ля" },
        { id: 'standing', title: "Вставание", text: "Аллаху Акбар" },
        { id: 'tashahhud', title: "Ташаххуд" },
        { id: 'salam', title: "Приветствие (Салям)", text: "Ассаляму алейкум ва рахматуллах" }
      ]
    },
    fard: {
        title: "Обязательные молитвы",
        selectPrayer: "Выбрать молитву",
        rakats: "Ракаатов",
        items: [
            { id: 'fajr', title: "Фаджр", rakats: 2, desc: "Утренняя молитва." },
            { id: 'dhuhr', title: "Зухр", rakats: 4, desc: "Полуденная молитва." },
            { id: 'asr', title: "Аср", rakats: 4, desc: "Послеполуденная молитва." },
            { id: 'maghrib', title: "Магриб", rakats: 3, desc: "Вечерняя молитва." },
            { id: 'isha', title: "Иша", rakats: 4, desc: "Ночная молитва." }
        ]
    },
    sunnah: {
        title: "Сунна молитвы",
        selectPrayer: "Выбрать молитву",
        rakats: "Ракаатов",
        items: [
            { id: 'witr', title: "Витр", rakats: "1 или 3", desc: "После Иша." },
            { id: 'duha', title: "Духа", rakats: "2-8", desc: "После восхода солнца." }
        ]
    },
    trainer: {
      title: "Интерактивное обучение",
      selectPrayer: "Выбрать молитву",
      rakats: "Ракаатов",
      prayers: {
        fajr: "Фаджр",
        dhuhr: "Зухр",
        asr: "Аср",
        maghrib: "Магриб",
        isha: "Иша",
        sunrise: "Восход солнца"
      },
      next: "Далее",
      prev: "Назад",
      finish: "Завершить",
      error: "Неверная поза, попробуйте еще раз",
      retry: "Повторить",
      success: "Отлично! Пусть Аллах примет ваш намаз."
    },
    prayerTimes: {
      title: "Время намаза",
      locationDesc: (city: string) => `Время указано по городскому времени ${city}`,
      reminder: "Напоминание",
      reminderEnabled: "Включено",
      reminderDisabled: "Выключено",
      notificationTitle: "Время намаза",
      notificationBody: (name: string) => `Наступило время для намаза ${name}`,
      loading: "Загрузка...",
      notificationMsg: "Сообщение уведомления"
    },
    settings: {
      title: "Настройки",
      fontSize: "Размер шрифта",
      fontScale: {
        small: "Маленький",
        medium: "Средний",
        large: "Большой",
        extraLarge: "Очень большой"
      }
    },
    nav: {
      home: "Главная",
      fard: "Фард",
      wudu: "Омовение",
      pillars: "Столпы",
      sunnah: "Сунна",
      times: "Время",
      duas: "Дуа",
      train: "Обучение"
    },
    duas: {
      title: "Дуа и азкары",
      categories: {
        morning: "Утренние",
        evening: "Вечерние",
        afterSalah: "После намаза",
        beforeSleep: "Перед сном",
        daily: "Ежедневные"
      },
      count: "Повтор",
      transliteration: "Транслитерация",
      translation: "Перевод",
      copy: "Копировать",
      copied: "Скопировано"
    }
  },
  bn: {
    intro: "নামাজ হলো দীনের স্তম্ভ এবং বান্দার সাথে তার প্রতিপালকের সম্পর্ক, যা অন্তরে প্রশান্তি ও স্থিরতা দান করে।",
    wudu: {
      title: "ওজু করার নিয়ম",
      steps: [
        { title: "নিয়ত", desc: "মনে মনে নিয়ত করা (মুখে উচ্চারণ অপরিহার্য নয়)।" },
        { title: "হাত ধোয়া", desc: "কবজি পর্যন্ত উভয় হাত তিনবার ধোয়া।" },
        { title: "কুলি করা", desc: "তিনবার কুলি করা।" },
        { title: "নাক পরিষ্কার করা", desc: "তিনবার নাকে পানি দেওয়া ও পরিষ্কার করা।" },
        { title: "মুখ ধোয়া", desc: "পুরো মুখমন্ডল তিনবার ধোয়া।" },
        { title: "হাত ধোয়া (কনুইসহ)", desc: "উভয় হাত কনুই পর্যন্ত তিনবার ধোয়া (ডান থেকে শুরু করে)।" },
        { title: "মাথা মাসেহ করা", desc: "একবার পুরো মাথা মাসেহ করা।" },
        { title: "কান মাসেহ করা", desc: "একবার কান মাসেহ করা।" },
        { title: "পা ধোয়া", desc: "উভয় পা গোড়ালি পর্যন্ত তিনবার ধোয়া (ডান থেকে শুরু করে)।" }
      ],
      doneBtn: "সম্পন্ন"
    },
    pillars: {
      title: "নামাজের আরকান",
      pillarNote: "দ্রষ্টব্য: এই আরকানগুলো প্রতিটি রাকাতে পালন করা হয়, শুধুমাত্র নিয়ত ছাড়া যা কেবল নামাজের শুরুতে করা হয়।",
      items: [
        { id: 'niyah', title: "নিয়ত" },
        { id: 'takbir', title: "তাকবিরে তাহরিমা", text: "আল্লাহু আকবার" },
        { id: 'fatiha', title: "সুরা ফাতিহা পাঠ" },
        { id: 'ruku', title: "রুকু", text: "সুবহানা রাব্বিয়াল আজিম" },
        { id: 'rising', title: "রুকু থেকে ওঠা", text: "সামিয়াল্লাহু লিমান হামিদা" },
        { id: 'sujud1', title: "সিজদা", text: "সুবহানা রাব্বিয়াল আলা" },
        { id: 'sitting', title: "দুই সিজদার মাঝে বসা", text: "রাব্বিগফির লি" },
        { id: 'sujud2', title: "দ্বিতীয় সিজদা", text: "সুবহানা রাব্বিয়াল আলা" },
        { id: 'tashahhud', title: "তাশাহহুদ" },
        { id: 'salam', title: "সালাম", text: "আসসালামু আলাইকুম ওয়া রহমতুল্লাহ" }
      ]
    },
    fard: {
        title: "ফরজ নামাজ",
        selectPrayer: "নামাজ নির্বাচন করুন",
        rakats: "রাকাত",
        items: [
            { id: 'fajr', title: "ফজর", rakats: 2, desc: "ভোরের নামাজ।" },
            { id: 'dhuhr', title: "যোহর", rakats: 4, desc: "দুপুরের নামাজ।" },
            { id: 'asr', title: "আসর", rakats: 4, desc: "বিকেলের নামাজ।" },
            { id: 'maghrib', title: "মাগরিব", rakats: 3, desc: "সন্ধ্যার নামাজ।" },
            { id: 'isha', title: "এশা", rakats: 4, desc: "রাতের নামাজ।" }
        ]
    },
    sunnah: {
        title: "নফল নামাজ",
        selectPrayer: "নামাজ নির্বাচন করুন",
        rakats: "রাকাত",
        items: [
            { id: 'witr', title: "বিতর", rakats: "১ বা ৩", desc: "এশার নামাজের পর।" },
            { id: 'duha', title: "চাশت (দুহা)", rakats: "২-৮", desc: "সূর্যোদয়ের পর।" }
        ]
    },
    trainer: {
      title: "ইন্টারেক্টিভ ট্রেনিং",
      selectPrayer: "নামাজ নির্বাচন করুন",
      rakats: "রাকাত",
      prayers: {
        fajr: "ফজর",
        dhuhr: "যোহর",
        asr: "আসর",
        maghrib: "মাগরিব",
        isha: "এশা",
        sunrise: "সূর্যোদয়"
      },
      next: "পরবর্তী",
      prev: "পূর্ববর্তী",
      finish: "শেষ করুন",
      error: "ভুল পদ্ধতি, আবার চেষ্টা করুন",
      retry: "আবার চেষ্টা",
      success: "খুব ভালো! আল্লাহ আপনার নামাজ কবুল করুন।"
    },
    prayerTimes: {
      title: "নামাজের সময়সূচী",
      locationDesc: (city: string) => `সময় ${city} শহরের সময়ের উপর ভিত্তি করে`,
      reminder: "অনুস্মারক",
      reminderEnabled: "অনুস্মারক চালু",
      reminderDisabled: "অনুস্মারক বন্ধ",
      notificationTitle: "নামাজের সময়",
      notificationBody: (name: string) => `এখন ${name} নামাজের সময়`,
      loading: "নামাজের সময় লোড হচ্ছে...",
      notificationMsg: "বিজ্ঞপ্তি বার্তা"
    },
    settings: {
      title: "সেটিংস",
      fontSize: "ফন্টের আকার",
      fontScale: {
        small: "ছোট",
        medium: "মাঝারি",
        large: "বড়",
        extraLarge: "খুব বড়"
      }
    },
    nav: {
      home: "হোম",
      fard: "ফরজ",
      wudu: "ওজু",
      pillars: "আরকান",
      sunnah: "নফল",
      times: "সময়",
      duas: "দুয়া",
      train: "ট্রেনিং"
    },
    duas: {
      title: "দুয়া ও জিকির",
      categories: {
        morning: "সকাল",
        evening: "সন্ধ্যা",
        afterSalah: "নামাজের পর",
        beforeSleep: "শোবার আগে",
        daily: "প্রতিদিনের"
      },
      count: "বার",
      transliteration: "উচ্চারণ",
      translation: "অনুবাদ",
      copy: "কপি",
      copied: "কপি হয়েছে"
    }
  }
};

export const FATIHA_AUDIO_URL = 'https://www.image2url.com/r2/default/audio/1777376008409-0dd6f925-670d-4433-8139-0b980df2c9d4.mp3';

export const SALAH_AUDIO: Record<string, string> = {
  takbir: 'https://github.com/Shahnawaz-Ali/Islamic-Audio/raw/main/takbeer.mp3',
  ruku: 'https://www.image2url.com/r2/default/audio/1777377321358-05e9eedf-552f-4285-91ba-0b79971b9583.mp3',
  rising: 'https://www.image2url.com/r2/default/audio/1777377643281-e1bb8a6b-af83-4b6d-a675-91af6594a05a.mp3',
  sujud: 'https://www.image2url.com/r2/default/audio/1777376875048-5c277266-094a-482e-8123-e063535b5c33.mp3',
  tashahhud: 'https://www.image2url.com/r2/default/audio/1777274043934-806506b8-4224-4957-a7d8-196ae4609d79.m4a',
  tashahhud_middle: 'https://www.image2url.com/r2/default/audio/1777434847691-88ac1286-baa8-4e56-93fd-1c0a1e7c6062.mp3',
  salam: 'https://www.image2url.com/r2/default/audio/1777377974711-3b10effe-c9b1-4d7b-8d6e-887a0c8b56a9.mp3'
};

export const PILLAR_IMAGES: Record<string, string> = {
  niyah: 'https://drive.google.com/thumbnail?id=1k9ZfKNC1Txuz_HgA6r8t4a5VFqO57j-8&sz=w1000',
  takbir: 'https://drive.google.com/thumbnail?id=1jlWoBHs0SJVG59zbnaojlM8d-FIC9bQ1&sz=w1000',
  fatiha: 'https://drive.google.com/thumbnail?id=1jlWoBHs0SJVG59zbnaojlM8d-FIC9bQ1&sz=w1000',
  ruku: 'https://drive.google.com/thumbnail?id=1cCHr1BmqjZ_QKL-OycprcTLYhc9Hv7B5&sz=w1000',
  rising: 'https://drive.google.com/thumbnail?id=1jlWoBHs0SJVG59zbnaojlM8d-FIC9bQ1&sz=w1000',
  sujud1: 'https://www.image2url.com/r2/default/images/1777806031814-ed08c0f9-dc67-430e-95c8-dbd3fcf32f38.png',
  sitting: 'https://drive.google.com/thumbnail?id=1Ntgr8gEDOEOJDElHB8aC99cYOPRjeaoB&sz=w1000',
  sujud2: 'https://www.image2url.com/r2/default/images/1777806031814-ed08c0f9-dc67-430e-95c8-dbd3fcf32f38.png',
  tashahhud: 'https://drive.google.com/thumbnail?id=1Ntgr8gEDOEOJDElHB8aC99cYOPRjeaoB&sz=w1000',
  standing: 'https://drive.google.com/thumbnail?id=1jlWoBHs0SJVG59zbnaojlM8d-FIC9bQ1&sz=w1000',
  salam: 'https://drive.google.com/thumbnail?id=1Ntgr8gEDOEOJDElHB8aC99cYOPRjeaoB&sz=w1000',
};

export const WUDU_IMAGES = [
  'https://drive.google.com/thumbnail?id=1wMUHkY3v_cgsQH5tIHTxxdrowqDhTzdn&sz=w1000',
  'https://drive.google.com/thumbnail?id=1I0lpWLXKf1BbhaxjYqy-izLgJtAsAV8A&sz=w1000',
  'https://drive.google.com/thumbnail?id=1jOfyhrOK6DHyxhEGcYYFi96Vs4gHeC9p&sz=w1000',
  'https://drive.google.com/thumbnail?id=1f6BBxsKI1tczvR8NtrJIWJjKMLWtuan_&sz=w1000',
  'https://drive.google.com/thumbnail?id=1eBL6wXLijcuOVU7_ljXIZ5EgUnStbDBI&sz=w1000',
  'https://drive.google.com/thumbnail?id=13ekE2XEUQGqldFgLaS9rUw-56SzGR8sB&sz=w1000',
  'https://drive.google.com/thumbnail?id=1zv7z_E6OppvhoGpMotoKC0y9-oc7LPB6&sz=w1000',
  'https://drive.google.com/thumbnail?id=1SRrN5n-mYidq0_yRWqMImXcIe8jvdtcD&sz=w1000',
  'https://drive.google.com/thumbnail?id=1vA6_dSTPg8JxmnA-IEQRhGvRkZKJSRcH&sz=w1000',
];

export const DUAS_DATA: Record<string, any> = {
  ar: [
    {
      id: "morning",
      title: "أذكار الصباح",
      items: [
        {
          id: "m1",
          arabic: "أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ: (اللَّهُ لاَ إِلَهَ إِلاَّ هُوَ الْحَيُّ الْقَيُّومُ لاَ تَأْخُذُهُ سِنَةٌ وَلاَ نَوْمٌ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الأَرْضِ مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلاَّ بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلاَ يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلاَّ بِمَا شَاءَ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالأَرْضَ وَلاَ يَئُودُهُ حِفْظُهما وَهُوَ الْعَلِيُّ الْعَظِيمُ)",
          virtue: "من قالها حين يصبح أجير من الجن حتى يمسي ومن قالها حين يمسي أجير منهم حتى يصبح",
          repeat: 1
        },
        {
          id: "m2",
          arabic: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ: (قُلْ هُوَ اللَّهُ أَحَدٌ * اللَّهُ الصَّمَدُ * لَمْ يَلِدْ وَلَمْ يُولَدْ * وَلَمْ يَكُنْ لَهُ كُفُوًا أَحَدٌ)، (قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ...)، (قُلْ أَعُوذُ بِرَبِّ النَّاسِ...)",
          virtue: "من قالها ثلاث مرات حين يصبح وحين يمسي كفته من كل شيء",
          repeat: 3
        },
        {
          id: "m3",
          arabic: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ: (قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ * مِنْ شَرِّ مَا خَلَقَ * وَمِنْ شَرِّ غَاسِقٍ إِذَا وَقَبَ * وَمِنْ شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ * وَمِنْ شَرِّ حَاسِدٍ إِذَا حَسَدَ)",
          transliteration: "Surah Al-Falaq",
          translation: "سورة الفلق",
          repeat: 3
        },
        {
          id: "m4",
          arabic: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ: (قُلْ أَعُوذُ بِرَبِّ النَّاسِ * مَلِكِ النَّاسِ * إِلَهِ النَّاسِ * مِنْ شَرِّ الْوَسْوَاسِ الْخَنَّاسِ * الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ * مِنَ الْجِنَّةِ وَالنَّاسِ)",
          transliteration: "Surah An-Nas",
          translation: "سورة الناس",
          repeat: 3
        },
        {
          id: "m5",
          arabic: "أَصْبَحْنَا وَأَصْبَحَ الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لاَ إِلَهَ إلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، رَبِّ أَسْأَلُكَ خَيْرَ مَا فِي هَذَا الْيَوْمِ وَخَيْرَ مَا بَعْدَهُ، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِي هَذَا الْيَوْمِ وَشَرِّ مَا بَعْدَهُ، رَبِّ أَعُوذُ بِكَ مِنَ الْكَسَلِ، وَسُوءِ الْكِبَرِ، رَبِّ أَعُوذُ بِكَ مِنْ عَذَابٍ فِي النَّارِ وَعَذَابٍ فِي الْقَبْرِ",
          transliteration: "Asbahna wa asbahal mulku lillah...",
          translation: "أصبحنا وأصبح الملك لله والحمد لله...",
          repeat: 1
        },
        {
          id: "m6",
          arabic: "اللَّهُمَّ بِكَ أَصْبَحْنَا، وَبِكَ أَمْسَيْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ، وَإِلَيْكَ النُّشُورُ",
          transliteration: "Allahumma bika asbahna...",
          translation: "اللهم بك أصبحنا وبك أمسينا...",
          repeat: 1
        },
        {
          id: "m7",
          arabic: "اللَّهُمَّ أَنْتَ رَبِّي لاَ إِلَهَ إلاَّ أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ بِذَنْبِي فَاغْفِرْ لِي فَإِنَّهُ لاَ يَغْفِرُ الذُّنُوبَ إلاَّ أَنْتَ",
          virtue: "من قالها موقنا بها حين يمسي فمات من ليلته دخل الجنة وكذلك إذا أصبح",
          repeat: 1
        },
        {
          id: "m8",
          arabic: "اللَّهُمَّ إِنِّي أَصْبَحْتُ أُشْهِدُكَ وَأُشْهِدُ حَمَلَةَ عَرْشِكَ، وَمَلاَئِكَتَكَ وَجَمِيعَ خَلْقِكَ، أَنَّكَ أَنْتَ اللَّهُ لاَ إِلَهَ إلاَّ أَنْتَ وَحْدَكَ لاَ شَرِيكَ لَكَ، وَأَنَّ مُحَمَّدًا عَبْدُكَ وَرَسُولُكَ",
          virtue: "من قالها حين يصبح أو يمسي أربع مرات أعتقه الله من النار",
          repeat: 4
        },
        {
          id: "m9",
          arabic: "بِسْمِ اللَّهِ الَّذِي لاَ يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الأَرْضِ وَلاَ فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ",
          virtue: "من قالها ثلاثاً إذا أصبح وثلاثاً إذا أمسى لم يضره شيء",
          repeat: 3
        },
        {
          id: "m10",
          arabic: "يَا حَيُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغِيثُ أَصْلِحْ لِي شأْنِي كُلَّهُ وَلاَ تَكِلْنِي إِلَى نَفْسِي طَرْفَةَ عَيْنٍ",
          virtue: "كان النبي صلى الله عليه وسلم يوصي فاطمة رضي الله عنها أن تقولها",
          repeat: 1
        },
        {
          id: "m11",
          arabic: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ: عَدَدَ خَلْقِهِ، وَرِضَا نَفْسِهِ، وَزِنَةَ عَرْشِهِ، وَمِدَادَ كَلِمَاتِهِ",
          virtue: "تعدل في الأجر الكثير من التسبيح والذكر",
          repeat: 3
        },
        {
          id: "m12",
          arabic: "اللَّهُمَّ عافِنِي في بَدَنِي، اللَّهُمَّ عافِنِي في سَمْعِي، اللَّهُمَّ عافِنِي في بَصَرِي، لا إِلهَ إلاَّ أَنْتَ. اللَّهُمَّ إِنِّي أَعُوذُ بِكَ مِنَ الْكُفْرِ، وَالفَقْرِ، وَأَعُوذُ بِكَ مِنْ عَذابِ القَبْرِ، لا إِلهَ إلاَّ أَنْتَ",
          transliteration: "Allahumma 'afini fi badani...",
          translation: "اللهم عافني في بدني...",
          repeat: 3
        },
        {
          id: "m13",
          arabic: "حَسْبِيَ اللَّهُ لا إِلهَ إلاَّ هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ العَرْشِ العَظِيمِ",
          transliteration: "HasbiyAllahu la ilaha illa hu...",
          translation: "حسبي الله لا إله إلا هو...",
          repeat: 7
        },
        {
          id: "m14",
          arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ فِي الدُّنْيَا وَالآخِرَةِ، اللَّهُمَّ إِنِّي أَسْأَلُكَ الْعَفْوَ وَالْعَافِيَةَ: فِي دِينِي وَدُنْيَايَ وَأَهْلِي، وَمَالِي، اللَّهُمَّ اسْتُرْ عَوْرَاتِي، وَآمِنْ رَوْعَاتِي، اللَّهُمَّ احْفَظْنِي مِنْ بَيْنِ يَدَيَّ، وَمِنْ خَلْفِي، وَعَنْ يَمِينِي، وَعَنْ شِمَالِي، وَمِنْ فَوْقِي، وَأَعُوذُ بِعَظَمَتِكَ أَنْ أُغْتَالَ مِنْ تَحْتِي",
          virtue: "يستحب قولها في الصباح والمساء طلباً للحفظ والعافية",
          repeat: 1
        },
        {
          id: "m15",
          arabic: "لا إِلهَ إِلاَّ اللَّهُ وَحْدَهُ لا شَرِيكَ لَهُ، لَهُ المُلْكُ وَلَهُ الحَمْدُ، وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
          virtue: "من قالها عشر مرات كانت له كعدل أربع رقاب من ولد إسماعيل",
          repeat: 10
        },
        {
          id: "m16",
          arabic: "أَصْبَحْنَا عَلَى فِطْرَةِ الإِسْلامِ، وَعَلَى كَلِمَةِ الإِخْلاصِ، وَعَلَى دِينِ نَبِيِّنَا مُحَمَّدٍ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ، وَعَلَى مِلَّةِ أَبِينَا إِبْرَاهِيمَ، حَنِيفًا مُسْلِمًا وَمَا كَانَ مِنَ الْمُشْرِكِينَ",
          transliteration: "Asbahna ala fitratil Islam...",
          translation: "أصبحنا على فطرة الإسلام...",
          repeat: 1
        },
        {
          id: "m17",
          arabic: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ",
          virtue: "من قالها مائة مرة حين يصبح وحين يمسي لم يأت أحد يوم القيامة بأفضل مما جاء به إلا أحد قال مثل ما قال أو زاد عليه",
          repeat: 100
        },
        {
          id: "m18",
          arabic: "أَسْتَغْفِرُ اللَّهَ وَأَتُوبُ إِلَيْهِ",
          virtue: "من فضل الاستغفار كثرة الرزق وتفريج الهموم",
          repeat: 100
        }
      ]
    },
    {
      id: "evening",
      title: "أذكار المساء",
      items: [
        {
          id: "e1",
          arabic: "أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ: (اللَّهُ لاَ إِلَهَ إِلاَّ هُوَ الْحَيُّ الْقَيُّومُ لاَ تَأْخُذُهُ سِنَةٌ وَلاَ نَوْمٌ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الأَرْضِ مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلاَّ بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلاَ يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلاَّ بِمَا شَاءَ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالأَرْضَ وَلاَ يَئُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ)",
          virtue: "من قالها حين يمسي أجير من الجن حتى يصبح",
          repeat: 1
        },
        {
          id: "e2",
          arabic: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ: (قُلْ هُوَ اللَّهُ أَحَدٌ * اللَّهُ الصَّمَدُ * لَمْ يَلِدْ وَلَمْ يُولَد * وَلَمْ يَكُنْ لَهُ كُفُوًا أَحَدٌ)",
          virtue: "من قالها ثلاث مرات حين يمسي كفته من كل شيء",
          repeat: 3
        },
        {
          id: "e3",
          arabic: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ: (قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ * مِنْ شَرِّ مَا خَلَقَ * وَمِنْ شَرِّ غَاسِقٍ إِذَا وَقَبَ * وَمِنْ شَرِّ النَّفَّاثَاتِ فِي الْعُقَدِ * وَمِنْ شَرِّ حَاسِدٍ إِذَا حَسَدَ)",
          transliteration: "Surah Al-Falaq",
          translation: "سورة الفلق",
          repeat: 3
        },
        {
          id: "e4",
          arabic: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ: (قُلْ أَعُوذُ بِرَبِّ النَّاسِ * مَلِكِ النَّاسِ * إِلَهِ النَّاسِ * مِنْ شَرِّ الْوَسْواسِ الْخَنَّاسِ * الَّذِي يُوَسْوِسُ فِي صُدُورِ النَّاسِ * مِنَ الْجِنَّةِ وَالنَّاسِ)",
          transliteration: "Surah An-Nas",
          translation: "سورة الناس",
          repeat: 3
        },
        {
          id: "e5",
          arabic: "أَمْسَيْنَا وَأَمْسَى الْمُلْكُ لِلَّهِ، وَالْحَمْدُ لِلَّهِ، لاَ إِلَهَ إلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، رَبِّ أَسْأَلُكَ خَيْرَ مَا فِي هَذِهِ اللَّيْلَةِ وَخَيْرَ مَا بَعْدَهَا، وَأَعُوذُ بِكَ مِنْ شَرِّ مَا فِي هَذِهِ اللَّيْلَةِ وَشَرِّ مَا بَعْدَهَا، رَبِّ أَعُوذُ بِكَ مِنَ الْكَسَلِ، وَسُوءِ الْكِبَرِ، رَبِّ أَعُوذُ بِكَ مِنْ عَذَابٍ فِي النَّارِ وَعَذَابٍ فِي الْقَبْرِ",
          transliteration: "Amsayna wa amsal mulku lillah...",
          translation: "أمسينا وأمسى الملك لله والحمد لله...",
          repeat: 1
        },
        {
          id: "e6",
          arabic: "اللَّهُمَّ بِكَ أَمْسَيْنَا، وَبِكَ أَصْبَحْنَا، وَبِكَ نَحْيَا، وَبِكَ نَمُوتُ، وَإِلَيْكَ الْمَصِيرُ",
          transliteration: "Allahumma bika amsayna...",
          translation: "اللهم بك أمسينا وبك أصبحنا...",
          repeat: 1
        },
        {
          id: "e7",
          arabic: "اللَّهُمَّ أَنْتَ رَبِّي لاَ إِلَهَ إلاَّ أَنْتَ، خَلَقْتَنِي وَأَنَا عَبْدُكَ، وَأَنَا عَلَى عَهْدِكَ وَوَعْدِكَ مَا اسْتَطَعْتُ، أَعُوذُ بِكَ مِنْ شَرِّ مَا صَنَعْتُ، أَبُوءُ لَكَ بِنِعْمَتِكَ عَلَيَّ، وَأَبُوءُ بِذَنْبِي فَاغْفِرْ لِي فَإِنَّهُ لاَ يَغْفِرُ الذُّنُوبَ إلاَّ أَنْتَ",
          transliteration: "Sayyid al-Istighfar",
          translation: "سيد الاستغفار",
          repeat: 1
        },
        {
          id: "e8",
          arabic: "اللَّهُمَّ إِنِّي أَمْسَيْتُ أُشْهِدُكَ وَأُشْهِدُ حَمَلَةَ عَرْشِكَ، وَمَلاَئِكَتَكَ وَجَمِيعَ خَلْقِكَ، أَنَّكَ أَنْتَ اللَّهُ لاَ إِلَهَ إلاَّ أَنْتَ وَحْدَكَ لاَ شَرِيكَ لَكَ، وَأَنَّ مُحَمَّدًا عَبْدُكَ وَرَسُولُكَ",
          transliteration: "Allahumma inni amsaytu ush-hiduka...",
          translation: "اللهم إني أمسيت أشهدك...",
          repeat: 4
        },
        {
          id: "e9",
          arabic: "اللَّهُمَّ مَا أَمْسَى بِي مِنْ نِعْمَةٍ أَوْ بِأَحَدٍ مِنْ خَلْقِكَ فَمِنْكَ وَحْدَكَ لاَ شَرِيكَ لَكَ، فَلَكَ الْحَمْدُ وَلَكَ الشُّكْرُ",
          transliteration: "Allahumma ma amsa bi...",
          translation: "اللهم ما أمسى بي من نعمة...",
          repeat: 1
        },
        {
          id: "e10",
          arabic: "بِسْمِ اللَّهِ الَّذِي لاَ يَضُرُّ مَعَ اسْمِهِ شَيْءٌ فِي الأَرْضِ وَلاَ فِي السَّمَاءِ وَهُوَ السَّمِيعُ الْعَلِيمُ",
          transliteration: "Bismillahilladhi la yadurru...",
          translation: "بسم الله الذي لا يضر مع اسمه شيء...",
          repeat: 3
        },
        {
          id: "e11",
          arabic: "رَضِيتُ بِاللَّهِ رَبًّا، وَبِالإِسْلَامِ دِينًا، وَبِمُحَمَّدٍ صَلَّى اللَّهُ عَلَيْهِ وَسَلَّمَ نَبِيًّا",
          transliteration: "Raditu Billahi Rabba...",
          translation: "رضيت بالله رباً وبالإسلام ديناً...",
          repeat: 3
        },
        {
          id: "e12",
          arabic: "يَا حَيُّ يَا قَيُّومُ بِرَحْمَتِكَ أَسْتَغِيثُ أَصْلِحْ لِي شَأْنِي كُلَّهُ وَلاَ تَكِلْنِي إِلَى نَفْسِي طَرْفَةَ عَيْنٍ",
          transliteration: "Ya Hayyu Ya Qayyum...",
          translation: "يا حي يا قيوم برحمتك أستغيث...",
          repeat: 1
        },
        {
          id: "e13",
          arabic: "اللَّهُمَّ عَالِمَ الغَيْبِ وَالشَّهَادَةِ فَاطِرَ السَّمَاوَاتِ وَالارْضِ، رَبَّ كُلِّ شَيْءٍ وَمَلِيكَهُ، أَشْهَدُ أَنْ لاَ إِلَهَ إِلاَّ أَنْتَ، أَعُوذُ بِكَ مِنْ شَرِّ نَفْسِي، وَمِنْ شَرِّ الشَّيْطَانِ وَشِرْكِهِ، وَأَنْ أَقْتَرِفَ عَلَى نَفْسِي سُوءًا، أَوْ أَجُرَّهُ إِلَى مُسْلِمٍ",
          transliteration: "Allahumma Alimal Ghaib...",
          translation: "اللهم عالم الغيب والشهادة...",
          repeat: 1
        },
        {
          id: "e14",
          arabic: "أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّاتِ مِنْ شَرِّ مَا خَلَقَ",
          transliteration: "A'udhu bi kalimatillahi-ttammati...",
          translation: "أعوذ بكلمات الله التامات...",
          repeat: 3
        },
        {
          id: "e15",
          arabic: "حَسْبِيَ اللَّهُ لاَ إِلَهَ إلاَّ هُوَ عَلَيْهِ تَوَكَّلْتُ وَهُوَ رَبُّ الْعَرْشِ الْعَظِيمِ",
          transliteration: "HasbiyAllahu la ilaha illa hu...",
          translation: "حسبي الله لا إله إلا هو...",
          repeat: 7
        },
        {
          id: "e16",
          arabic: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ",
          transliteration: "SubhanAllahi wa bihamdihi",
          translation: "سبحان الله وبحمده",
          repeat: 100
        },
        {
          id: "e17",
          arabic: "اللَّهُمَّ صَلِّ وَسَلِّمْ عَلَى نَبِيِّنَا مُحَمَّدٍ",
          transliteration: "Allahumma salli wa sallim...",
          translation: "اللهم صل وسلم على نبينا محمد",
          repeat: 10
        }
      ]
    },
    {
      id: "afterSalah",
      title: "أذكار بعد الصلاة",
      items: [
        {
          id: "as1",
          arabic: "أَسْتَغْفِرُ اللَّهَ (ثَلاثَاً) .. اللَّهُمَّ أَنْتَ السَّلامُ وَمِنْكَ السَّلامُ، تَبَارَكْتَ يَا ذَا الْجَلالِ وَالإِكْرَامِ",
          transliteration: "Astaghfirullah (3 times). Allahumma Antas-Salam...",
          translation: "أستغفر الله، اللهم أنت السلام ومنك السلام...",
          repeat: 1
        },
        {
          id: "as2",
          arabic: "لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ، اللَّهُمَّ لاَ مَانِعَ لِمَا أَعْطَيْتَ، وَلاَ مُعْطِيَ لِمَا مَنَعْتَ، وَلاَ يَنْفَعُ ذَا الْجَدِّ مِنْكَ الْجَدُّ",
          transliteration: "La ilaha illallahu wahdahu la sharika lahu...",
          translation: "لا إله إلا الله وحده لا شريك له... اللهم لا مانع لما أعطيت...",
          repeat: 1
        },
        {
          id: "as3",
          arabic: "لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ. لاَ حَوْلَ وَلاَ قُوَّةَ إِلاَّ بِاللَّهِ، لاَ إِلَهَ إِلاَّ اللَّهُ، وَلاَ نَعْبُدُ إِلاَّ إِيَّاهُ، لَهُ النِّعْمَةُ وَلَهُ الْفَضْلُ وَلَهُ الثَّنَاءُ الْحَسَنُ، لاَ إِلَهَ إِلاَّ اللَّهُ مُخْلِصِينَ لَهُ الدِّينَ وَلَوْ كَرِهَ الْكَافِرُونَ",
          transliteration: "La ilaha illallahu wahdahu la sharika lahu... La hawla wala quwwata...",
          translation: "لا إله إلا الله وحده لا شريك له... لا حول ولا قوة إلا بالله...",
          repeat: 1
        },
        {
          id: "as4",
          arabic: "سُبْحَانَ اللَّهِ (33) ، الْحَمْدُ لِلَّهِ (33) ، اللَّهُ أَكْبَرُ (33) .. ثُمَّ يُتِمُّ المِائَةَ بِقَوْلِ: لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ",
          transliteration: "SubhanAllah (33), Alhamdulillah (33), Allahu Akbar (33)...",
          translation: "التسبيح والتحميد والتكبير بعد الصلاة",
          repeat: 1
        },
        {
          id: "as5",
          arabic: "أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ: (اللَّهُ لاَ إِلَهَ إِلاَّ هُوَ الْحَيُّ الْقَيُّومُ لاَ تَأْخُذُهُ سِنَةٌ وَلاَ نَوْمٌ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الأَرْضِ مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلاَّ بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلاَ يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلاَّ بِمَا شَاءَ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالأَرْضَ وَلاَ يَئُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ)",
          transliteration: "Ayat Al-Kursi",
          translation: "سورة البقرة - 255",
          repeat: 1
        },
        {
          id: "as6",
          arabic: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ: (قُلْ هُوَ اللَّهُ أَحَدٌ...) ، (قُلْ أَعُوذُ بِرَبِّ الْفَلَقِ...) ، (قُلْ أَعُوذُ بِرَبِّ النَّاسِ...)",
          transliteration: "Al-Ikhlas, Al-Falaq, An-Nas",
          translation: "المعوذات بعد كل صلاة (مرة واحدة، وثلاثاً بعد الفجر والمغرب)",
          repeat: 3
        },
        {
          id: "as7",
          arabic: "لاَ إِلَهَ إِلاَّ اللَّهُ وَحْدَهُ لاَ شَرِيكَ لَهُ، لَهُ الْمُلْكُ وَلَهُ الْحَمْدُ يُحْيِي وَيُمِيتُ وَهُوَ عَلَى كُلِّ شَيْءٍ قَدِيرٌ (عشر مرات بعد صلاة المغرب والصبح)",
          transliteration: "La ilaha illallahu wahdahu la sharika lahu yuhyi wa yumitu...",
          translation: "تقال 10 مرات بعد صلاتي الفجر والمغرب",
          repeat: 10
        }
      ]
    },
    {
      id: "beforeSleep",
      title: "أذكار النوم",
      items: [
        {
          id: "bs1",
          arabic: "بِاسْمِكَ رَبِّي وَضَعْتُ جَنْبِي وَبِكَ أَرْفَعُهُ، فَإِنْ أَمْسَكْتَ نَفْسِي فَارْحَمْهَا، وَإِنْ أَرْسَلْتَهَا فَاحْفَظْهَا بِمَا تَحْفَظُ بِهِ عِبَادَكَ الصَّالِحِينَ",
          transliteration: "Bismika Rabbi wada'tu janbi...",
          translation: "باسمك ربي وضعت جنبي وبك أرفعه...",
          repeat: 1
        }
      ]
    },
    {
      id: "tasbih",
      title: "تسابيح",
      items: [
        { id: "t1", arabic: "سُبْحَانَ اللَّهِ", virtue: "من قالها مائة مرة كُتبت له ألف حسنة أو حُطت عنه ألف خطيئة", repeat: 33 },
        { id: "t2", arabic: "الْحَمْدُ لِلَّهِ", virtue: "أفضل الدعاء الحمد لله وتملأ ميزان العبد", repeat: 33 },
        { id: "t3", arabic: "اللَّهُ أَكْبَرُ", virtue: "أحب الكلام إلى الله أربع ومنها الله أكبر", repeat: 33 },
        { id: "t4", arabic: "لاَ إِلَهَ إِلاَّ اللَّهُ", virtue: "أفضل الذكر لا إله إلا الله", repeat: 100 },
        { id: "t5", arabic: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ", virtue: "حطت خطاياه وإن كانت مثل زبد البحر", repeat: 100 },
        { id: "t6", arabic: "سُبْحَانَ اللَّهِ وَبِحَمْدِهِ ، سُبْحَانَ اللَّهِ الْعَظِيمِ", virtue: "كلمتان خفيفتان على اللسان ثقيلتان في الميزان حبيبتان إلى الرحمن", repeat: 1 },
        { id: "t7", arabic: "لاَ حَوْلَ وَلاَ قُوَّةَ إِلاَّ بِاللَّهِ", virtue: "كنز من كنوز الجنة", repeat: 1 },
        { id: "t8", arabic: "أَسْتَغْفِرُ اللَّهَ", virtue: "الاستغفار يفتح الأبواب المغلقة", repeat: 100 },
        { id: "t9", arabic: "اللَّهُمَّ صَلِّ وَسَلِّمْ عَلَى نَبِيِّنَا مُحَمَّدٍ", virtue: "من صلى عليّ واحدة صلى الله عليه بها عشراً", repeat: 10 }
      ]
    },
    {
      id: "ruqyah",
      title: "الرقية الشرعية",
      items: [
        { id: "r1", arabic: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ (1) الْحَمْدُ لِلَّهِ رَبِّ الْعَالَمِينَ (2) الرَّحْمَنِ الرَّحِيمِ (3) مَالِكِ يَوْمِ الدِّينِ (4) إِيَّاكَ نَعْبُدُ وَإِيَّاكَ نَسْتَعِينُ (5) اهْدِنَا الصِّرَاطَ الْمُسْتَقِيمَ (6) صِرَاطَ الَّذِينَ أَنْعَمْتَ عَلَيْهِمْ غَيْرِ الْمَغْضُوبِ عَلَيْهِمْ وَلَا الضَّالِّينَ (7)", transliteration: "Surah Al-Fatiha", translation: "سورة الفاتحة", repeat: 1 },
        { id: "r2", arabic: "(اللَّهُ لاَ إِلَهَ إِلاَّ هُوَ الْحَيُّ الْقَيُّومُ لاَ تَأْخُذُهُ سِنَةٌ وَلاَ نَوْمٌ لَهُ مَا فِي السَّمَاوَاتِ وَمَا فِي الأَرْضِ مَنْ ذَا الَّذِي يَشْفَعُ عِنْدَهُ إِلاَّ بِإِذْنِهِ يَعْلَمُ مَا بَيْنَ أَيْدِيهِمْ وَمَا خَلْفَهُمْ وَلاَ يُحِيطُونَ بِشَيْءٍ مِنْ عِلْمِهِ إِلاَّ بِمَا شَاءَ وَسِعَ كُرْسِيُّهُ السَّمَاوَاتِ وَالأَرْضَ وَلاَ يَئُودُهُ حِفْظُهُمَا وَهُوَ الْعَلِيُّ الْعَظِيمُ)", transliteration: "Ayat Al-Kursi", translation: "آية الكرسي", repeat: 1 },
        { id: "r3", arabic: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ: (قُلْ هُوَ اللَّهُ أَحَدٌ...) ، (قُلْ أَعُوذُ بِرَبِّ الْفَلَق...) ، (قُلْ أَعُوذُ بِرَبِّ النَّاسِ...)", transliteration: "Al-Ikhlas, Al-Falaq, An-Nas", translation: "المعوذات", repeat: 3 },
        { id: "r6", arabic: "آمن الرسول بما أنزل إليه من ربه والمؤمنون كل آمن بالله وملائكته وكتبه ورسله لا نفرق بين أحد من رسله وقالوا سمعنا وأطعنا غفرانك ربنا وإليك المصير (285) لا يكلف الله نفسا إلا وسعها لها ما كسبت وعليها ما اكتسبت ربنا لا تؤاخذنا إن نسينا أو أخطأنا ربنا ولا تحمل علينا إصرا كما حملته على الذين من قبلنا ربنا ولا تحملنا ما لا طاقة لنا به واعف عنا واغفر لنا وارحمنا أنت مولانا فانصرنا على القوم الكافرين (286)", transliteration: "Baqarah 285-286", translation: "خواتيم سورة البقرة", repeat: 1 },
        { id: "r7", arabic: "وَنُنَزِّلُ مِنَ الْقُرْآنِ مَا هُوَ شِفَاءٌ وَرَحْمَةٌ لِّلْمُؤْمِنِينَ (الإسراء 82)", transliteration: "Wa nunazzilu minal Qur'an...", translation: "آية الشفاء", repeat: 7 },
        { id: "r4", arabic: "أَعُوذُ بِكَلِمَاتِ اللَّهِ التَّامَّةِ، مِنْ كُلِّ شَيْطَانٍ وَهَامَّةٍ، وَمِنْ كُلِّ عَيْنٍ لَامَّةٍ", transliteration: "A'udhu bi kalimatillahi-ttammah...", translation: "من أدعية الرقية", repeat: 3 },
        { id: "r5", arabic: "بِسمِ اللَّهِ أَرقِيكَ، مِن كُلِّ شَيءٍ يُؤذِيكَ، مِن شَرِّ كُلِّ نَفسٍ أَو عَيْنِ حَاسِدٍ، اللَّهُ يَشفِيكَ، بِسمِ اللَّهِ أَرقِيكَ", transliteration: "Bismillahi arqika...", translation: "من أدعية الرقية من السنة", repeat: 3 }
      ]
    }
  ],
  en: [
    {
      id: "morning",
      title: "Morning Adhkar",
      items: [
        {
          id: "m1",
          arabic: "اللّهُ لاَ إِلَـهَ إِلاَّ هُوَ الْحَيُّ الْقَيُّومُ...",
          transliteration: "Allahu la ilaha illa huwal hayyul qayyum...",
          translation: "Allah - there is no deity except Him, the Ever-Living, the Sustainer of existence...",
          repeat: 1
        },
        {
          id: "m2",
          arabic: "بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيمِ...",
          transliteration: "Surah Al-Ikhlas",
          translation: "Say, 'He is Allah, [who is] One...'",
          repeat: 3
        }
      ]
    },
    {
      id: "evening",
      title: "Evening Adhkar",
      items: [
        {
          id: "e1",
          arabic: "أَعُوذُ بِاللَّهِ مِنَ الشَّيْطَانِ الرَّجِيمِ...",
          transliteration: "Ayat Al-Kursi",
          translation: "Surah Al-Baqarah, verse 255",
          repeat: 1
        }
      ]
    },
    {
        id: "afterSalah",
        title: "After Prayer",
        items: [
          {
            id: "as1",
            arabic: "أَسْتَغْفِرُ اللَّهَ (ثَلاثَاً)...",
            transliteration: "Astaghfirullah (3 times)...",
            translation: "I ask Allah for forgiveness (three times)...",
            repeat: 3
          }
        ]
    },
    {
        id: "tasbih",
        title: "Tasbih",
        items: [
          { id: "t1", arabic: "سُبْحَانَ اللَّهِ", transliteration: "SubhanAllah", translation: "Glory be to Allah", repeat: 33 },
          { id: "t2", arabic: "الْحَمْدُ لِلَّهِ", transliteration: "Alhamdulillah", translation: "Praise be to Allah", repeat: 33 },
          { id: "t3", arabic: "اللَّهُ أَكْبَرُ", transliteration: "Allahu Akbar", translation: "Allah is the Greatest", repeat: 33 }
        ]
    },
    {
        id: "ruqyah",
        title: "Ruqyah",
        items: [
          { id: "r1", arabic: "Al-Fatiha...", transliteration: "Surah Al-Fatiha", translation: "The Opening", repeat: 1 }
        ]
    }
  ]
};
