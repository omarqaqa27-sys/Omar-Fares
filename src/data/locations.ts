
export interface LocationData {
  country: string;
  countryEn: string;
  cities: { name: string; nameEn: string }[];
}

export const ARABIC_LOCATIONS: LocationData[] = [
  {
    country: "مصر",
    countryEn: "Egypt",
    cities: [
      { name: "القاهرة", nameEn: "Cairo" },
      { name: "الجيزة", nameEn: "Giza" },
      { name: "الإسكندرية", nameEn: "Alexandria" },
      { name: "الدقهلية", nameEn: "Dakahlia" },
      { name: "البحر الأحمر", nameEn: "Red Sea" },
      { name: "البحيرة", nameEn: "Beheira" },
      { name: "الفيوم", nameEn: "Faiyum" },
      { name: "الغربية", nameEn: "Gharbia" },
      { name: "الإسماعيلية", nameEn: "Ismailia" },
      { name: "المنوفية", nameEn: "Monufia" },
      { name: "المنيا", nameEn: "Minya" },
      { name: "القليوبية", nameEn: "Qalyubia" },
      { name: "الوادي الجديد", nameEn: "New Valley" },
      { name: "السويس", nameEn: "Suez" },
      { name: "أسوان", nameEn: "Aswan" },
      { name: "أسيوط", nameEn: "Asyut" },
      { name: "بني سويف", nameEn: "Beni Suef" },
      { name: "بورسعيد", nameEn: "Port Said" },
      { name: "دمياط", nameEn: "Damietta" },
      { name: "الشرقية", nameEn: "Sharqia" },
      { name: "جنوب سيناء", nameEn: "South Sinai" },
      { name: "كفر الشيخ", nameEn: "Kafr el-Sheikh" },
      { name: "مطروح", nameEn: "Matrouh" },
      { name: "الأقصر", nameEn: "Luxor" },
      { name: "قنا", nameEn: "Qena" },
      { name: "شمال سيناء", nameEn: "North Sinai" },
      { name: "سوهاج", nameEn: "Sohag" }
    ]
  },
  {
    country: "السعودية",
    countryEn: "Saudi Arabia",
    cities: [
      { name: "الرياض", nameEn: "Riyadh" },
      { name: "مكة المكرمة", nameEn: "Mecca" },
      { name: "المدينة المنورة", nameEn: "Medina" },
      { name: "القصيم", nameEn: "Al-Qassim" },
      { name: "المنطقة الشرقية", nameEn: "Eastern Province" },
      { name: "عسير", nameEn: "Asir" },
      { name: "تبوك", nameEn: "Tabuk" },
      { name: "حائل", nameEn: "Ha'il" },
      { name: "الحدود الشمالية", nameEn: "Northern Borders" },
      { name: "جازان", nameEn: "Jazan" },
      { name: "نجران", nameEn: "Najran" },
      { name: "الباحة", nameEn: "Al Bahah" },
      { name: "الجوف", nameEn: "Al-Jawf" }
    ]
  },
  {
    country: "الإمارات",
    countryEn: "United Arab Emirates",
    cities: [
      { name: "أبوظبي", nameEn: "Abu Dhabi" },
      { name: "دبي", nameEn: "Dubai" },
      { name: "الشارقة", nameEn: "Sharjah" },
      { name: "عجمان", nameEn: "Ajman" },
      { name: "أم القيوين", nameEn: "Umm Al Quwain" },
      { name: "رأس الخيمة", nameEn: "Ras Al Khaimah" },
      { name: "الفجيرة", nameEn: "Fujairah" }
    ]
  },
  {
    country: "الأردن",
    countryEn: "Jordan",
    cities: [
      { name: "عمّان", nameEn: "Amman" },
      { name: "إربد", nameEn: "Irbid" },
      { name: "الزرقاء", nameEn: "Zarqa" },
      { name: "البلقاء", nameEn: "Balqa" },
      { name: "مادبا", nameEn: "Madaba" },
      { name: "الكرك", nameEn: "Karak" },
      { name: "الطفيلة", nameEn: "Tafilah" },
      { name: "معان", nameEn: "Ma'an" },
      { name: "العقبة", nameEn: "Aqaba" },
      { name: "جرش", nameEn: "Jerash" },
      { name: "عجلون", nameEn: "Ajloun" },
      { name: "المفرق", nameEn: "Mafraq" }
    ]
  },
  {
    country: "المغرب",
    countryEn: "Morocco",
    cities: [
      { name: "الدار البيضاء", nameEn: "Casablanca" },
      { name: "الرباط", nameEn: "Rabat" },
      { name: "مراكش", nameEn: "Marrakech" },
      { name: "فاس", nameEn: "Fez" },
      { name: "مكناس", nameEn: "Meknes" },
      { name: "طنجة", nameEn: "Tangier" },
      { name: "تطوان", nameEn: "Tetouan" },
      { name: "الحسيمة", nameEn: "Al Hoceima" },
      { name: "بني ملال", nameEn: "Beni Mellal" },
      { name: "خنيفرة", nameEn: "Khenifra" },
      { name: "أكادير", nameEn: "Agadir" },
      { name: "العيون", nameEn: "Laayoune" },
      { name: "الداخلة", nameEn: "Dakhla" }
    ]
  },
  {
    country: "العراق",
    countryEn: "Iraq",
    cities: [
      { name: "بغداد", nameEn: "Baghdad" },
      { name: "نينوى", nameEn: "Nineveh" },
      { name: "البصرة", nameEn: "Basra" },
      { name: "الأنبار", nameEn: "Anbar" },
      { name: "كربلاء", nameEn: "Karbala" },
      { name: "النجف", nameEn: "Najaf" },
      { name: "بابل", nameEn: "Babylon" },
      { name: "ديالى", nameEn: "Diyala" },
      { name: "كركوك", nameEn: "Kirkuk" },
      { name: "صلاح الدين", nameEn: "Saladin" },
      { name: "دهوك", nameEn: "Duhok" },
      { name: "أربيل", nameEn: "Erbil" },
      { name: "السليمانية", nameEn: "Sulaymaniyah" },
      { name: "ميسان", nameEn: "Maysan" },
      { name: "المثنى", nameEn: "Muthanna" },
      { name: "القادسية", nameEn: "Al-Qadisiyah" },
      { name: "واسط", nameEn: "Wasit" },
      { name: "ذي قار", nameEn: "Dhi Qar" }
    ]
  },
  {
    country: "سوريا",
    countryEn: "Syria",
    cities: [
      { name: "دمشق", nameEn: "Damascus" },
      { name: "ريف دمشق", nameEn: "Rif Dimashq" },
      { name: "حلب", nameEn: "Aleppo" },
      { name: "حمص", nameEn: "Homs" },
      { name: "حماة", nameEn: "Hama" },
      { name: "اللاذقية", nameEn: "Latakia" },
      { name: "طرطوس", nameEn: "Tartus" },
      { name: "إدلب", nameEn: "Idlib" },
      { name: "درعا", nameEn: "Daraa" },
      { name: "السويداء", nameEn: "Suwayda" },
      { name: "القنيطرة", nameEn: "Quneitra" },
      { name: "دير الزور", nameEn: "Deir ez-Zor" },
      { name: "الرقة", nameEn: "Raqqa" },
      { name: "الحسكة", nameEn: "Hasakah" }
    ]
  },
  {
    country: "لبنان",
    countryEn: "Lebanon",
    cities: [
      { name: "بيروت", nameEn: "Beirut" },
      { name: "جبل لبنان", nameEn: "Mount Lebanon" },
      { name: "الشمال", nameEn: "North Lebanon" },
      { name: "عكار", nameEn: "Akkar" },
      { name: "البقاع", nameEn: "Beqaa" },
      { name: "بعلبك-الهرمل", nameEn: "Baalbek-Hermel" },
      { name: "الجنوب", nameEn: "South Lebanon" },
      { name: "النبطية", nameEn: "Nabatieh" }
    ]
  },
  {
    country: "فلسطين",
    countryEn: "Palestine",
    cities: [
      { name: "القدس", nameEn: "Jerusalem" },
      { name: "رام الله والبيرة", nameEn: "Ramallah" },
      { name: "نابلس", nameEn: "Nablus" },
      { name: "الخليل", nameEn: "Hebron" },
      { name: "جنين", nameEn: "Jenin" },
      { name: "طولكرم", nameEn: "Tulkarm" },
      { name: "قلقيلية", nameEn: "Qalqilya" },
      { name: "سلفيت", nameEn: "Salfit" },
      { name: "طوباس", nameEn: "Tubas" },
      { name: "أريحا", nameEn: "Jericho" },
      { name: "بيت لحم", nameEn: "Bethlehem" },
      { name: "غزة", nameEn: "Gaza City" },
      { name: "شمال غزة", nameEn: "North Gaza" },
      { name: "دير البلح", nameEn: "Deir al-Balah" },
      { name: "خان يونس", nameEn: "Khan Yunis" },
      { name: "رفح", nameEn: "Rafah" }
    ]
  },
  {
    country: "اليمن",
    countryEn: "Yemen",
    cities: [
      { name: "صنعاء", nameEn: "Sana'a" },
      { name: "عدن", nameEn: "Aden" },
      { name: "تعز", nameEn: "Taiz" },
      { name: "الحديدة", nameEn: "Al Hudaydah" },
      { name: "إب", nameEn: "Ibb" },
      { name: "ذمار", nameEn: "Dhamar" },
      { name: "حضرموت", nameEn: "Hadramaut" },
      { name: "المهرة", nameEn: "Al Mahrah" },
      { name: "لحج", nameEn: "Lahij" },
      { name: "أبين", nameEn: "Abyan" },
      { name: "شبوة", nameEn: "Shabwah" },
      { name: "مأرب", nameEn: "Ma'rib" },
      { name: "الجوف", nameEn: "Al Jawf" },
      { name: "صعدة", nameEn: "Sa'dah" },
      { name: "البيضاء", nameEn: "Al Bayda" },
      { name: "عمران", nameEn: "Amran" },
      { name: "حجة", nameEn: "Hajjah" },
      { name: "ريمة", nameEn: "Raymah" },
      { name: "سقطرى", nameEn: "Socotra" }
    ]
  },
  {
    country: "الكويت",
    countryEn: "Kuwait",
    cities: [
      { name: "العاصمة", nameEn: "Kuwait City" },
      { name: "حولي", nameEn: "Hawalli" },
      { name: "الفروانية", nameEn: "Farwaniya" },
      { name: "الأحمدي", nameEn: "Ahmadi" },
      { name: "الجهراء", nameEn: "Jahra" },
      { name: "مبارك الكبير", nameEn: "Mubarak Al-Kabeer" }
    ]
  },
  {
    country: "قطر",
    countryEn: "Qatar",
    cities: [
      { name: "الدوحة", nameEn: "Doha" },
      { name: "الريان", nameEn: "Al Rayyan" },
      { name: "الوكرة", nameEn: "Al Wakrah" },
      { name: "الخور", nameEn: "Al Khor" },
      { name: "الشمال", nameEn: "Madinat ash Shamal" },
      { name: "أم صلال", nameEn: "Umm Salal" },
      { name: "الظعاين", nameEn: "Al Daayen" }
    ]
  },
  {
    country: "البحرين",
    countryEn: "Bahrain",
    cities: [
      { name: "المنامة", nameEn: "Manama" },
      { name: "المحرق", nameEn: "Muharraq" },
      { name: "المحافظة الشمالية", nameEn: "Northern Governorate" },
      { name: "المحافظة الجنوبية", nameEn: "Southern Governorate" }
    ]
  },
  {
    country: "عُمان",
    countryEn: "Oman",
    cities: [
      { name: "مسقط", nameEn: "Muscat" },
      { name: "ظفار", nameEn: "Dhofar" },
      { name: "مسندم", nameEn: "Musandam" },
      { name: "البريمي", nameEn: "Al Buraymi" },
      { name: "الداخلية", nameEn: "Ad Dakhiliyah" },
      { name: "شمال الباطنة", nameEn: "Al Batinah North" },
      { name: "جنوب الباطنة", nameEn: "Al Batinah South" },
      { name: "شمال الشرقية", nameEn: "Ash Sharqiyah North" },
      { name: "جنوب الشرقية", nameEn: "Ash Sharqiyah South" },
      { name: "الظاهرة", nameEn: "Ad Dhahirah" },
      { name: "الوسطى", nameEn: "Al Wusta" }
    ]
  },
  {
    country: "تونس",
    countryEn: "Tunisia",
    cities: [
      { name: "تونس", nameEn: "Tunis" },
      { name: "أريانة", nameEn: "Ariana" },
      { name: "بن عروس", nameEn: "Ben Arous" },
      { name: "منوبة", nameEn: "Manouba" },
      { name: "نابل", nameEn: "Nabeul" },
      { name: "زغوان", nameEn: "Zaghouan" },
      { name: "بنزرت", nameEn: "Bizerte" },
      { name: "باجة", nameEn: "Beja" },
      { name: "جندوبة", nameEn: "Jendouba" },
      { name: "الكاف", nameEn: "El Kef" },
      { name: "سليانة", nameEn: "Siliana" },
      { name: "سوسة", nameEn: "Sousse" },
      { name: "المنستير", nameEn: "Monastir" },
      { name: "المهدية", nameEn: "Mahdia" },
      { name: "صفاقس", nameEn: "Sfax" },
      { name: "القيروان", nameEn: "Kairouan" },
      { name: "القصرين", nameEn: "Kasserine" },
      { name: "سيدي بوزيد", nameEn: "Sidi Bouzid" },
      { name: "قابس", nameEn: "Gabes" },
      { name: "مدنين", nameEn: "Medenine" },
      { name: "تطاوين", nameEn: "Tataouine" },
      { name: "توزر", nameEn: "Tozeur" },
      { name: "قبلي", nameEn: "Kebili" }
    ]
  },
  {
    country: "الجزائر",
    countryEn: "Algeria",
    cities: [
      { name: "الجزائر العاصمة", nameEn: "Algiers" },
      { name: "وهران", nameEn: "Oran" },
      { name: "قسنطينة", nameEn: "Constantine" },
      { name: "أدرار", nameEn: "Adrar" },
      { name: "الشلف", nameEn: "Chlef" },
      { name: "الأغواط", nameEn: "Laghouat" },
      { name: "أم البواقي", nameEn: "Oum El Bouaghi" },
      { name: "باتنة", nameEn: "Batna" },
      { name: "بجاية", nameEn: "Bejaia" },
      { name: "بسكرة", nameEn: "Biskra" },
      { name: "بشار", nameEn: "Bechar" },
      { name: "البليدة", nameEn: "Blida" },
      { name: "البويرة", nameEn: "Bouira" }
    ]
  },
  {
    country: "السودان",
    countryEn: "Sudan",
    cities: [
      { name: "الخرطوم", nameEn: "Khartoum" },
      { name: "أم درمان", nameEn: "Omdurman" },
      { name: "بورتسودان", nameEn: "Port Sudan" },
      { name: "كسلا", nameEn: "Kassala" },
      { name: "الأبيض", nameEn: "El Obeid" },
      { name: "ود مدني", nameEn: "Wad Madani" },
      { name: "القضارف", nameEn: "Gedaref" },
      { name: "كوستي", nameEn: "Kosti" }
    ]
  },
  {
    country: "ليبيا",
    countryEn: "Libya",
    cities: [
      { name: "طرابلس", nameEn: "Tripoli" },
      { name: "بنغازي", nameEn: "Benghazi" },
      { name: "مصراتة", nameEn: "Misrata" },
      { name: "البيضاء", nameEn: "El Bayda" },
      { name: "طبرق", nameEn: "Tobruk" },
      { name: "سبها", nameEn: "Sabha" },
      { name: "زليتن", nameEn: "Zliten" },
      { name: "الزاوية", nameEn: "Zawia" }
    ]
  },
  {
    country: "موريتانيا",
    countryEn: "Mauritania",
    cities: [
      { name: "نواكشوط", nameEn: "Nouakchott" },
      { name: "نواذيبو", nameEn: "Nouadhibou" },
      { name: "روصو", nameEn: "Rosso" },
      { name: "كيفه", nameEn: "Kiffa" },
      { name: "زويرات", nameEn: "Zouerat" },
      { name: "كيهيدي", nameEn: "Kaedi" }
    ]
  },
  {
    country: "الصومال",
    countryEn: "Somalia",
    cities: [
      { name: "مقديشو", nameEn: "Mogadishu" },
      { name: "هرجيسا", nameEn: "Hargeisa" },
      { name: "بوساسو", nameEn: "Bosaso" },
      { name: "غاروي", nameEn: "Garowe" },
      { name: "كيسمايو", nameEn: "Kismayo" },
      { name: "بايدوا", nameEn: "Baidoa" }
    ]
  },
  {
    country: "جيبوتي",
    countryEn: "Djibouti",
    cities: [
      { name: "جيبوتي", nameEn: "Djibouti City" },
      { name: "علي صبيح", nameEn: "Ali Sabieh" },
      { name: "تاجورة", nameEn: "Tadjoura" },
      { name: "دخيل", nameEn: "Dikhil" }
    ]
  },
  {
    country: "جزر القمر",
    countryEn: "Comoros",
    cities: [
      { name: "موروني", nameEn: "Moroni" },
      { name: "موتسامودو", nameEn: "Mutsamudu" },
      { name: "فومبوني", nameEn: "Fomboni" }
    ]
  },
  {
    country: "جنوب السودان",
    countryEn: "South Sudan",
    cities: [
      { name: "جوبا", nameEn: "Juba" },
      { name: "واو", nameEn: "Wau" },
      { name: "ملكال", nameEn: "Malakal" },
      { name: "يامبيو", nameEn: "Yambio" }
    ]
  }
];
