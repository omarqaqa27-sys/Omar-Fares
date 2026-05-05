/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect, useCallback, useMemo, useRef } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Droplets, 
  BookOpen, 
  Play, 
  Home, 
  Languages, 
  ChevronRight, 
  ChevronLeft, 
  CheckCircle2, 
  Volume2,
  MapPin,
  Pause,
  X,
  RotateCcw,
  Clock,
  Bell,
  BellOff,
  Music,
  Brain,
  Trophy,
  Baby,
  Zap,
  Settings2,
  Sparkles,
  Medal,
  ChevronUp,
  Heart,
  Volume1,
  VolumeX,
  Gauge,
  Sun,
  Moon,
  Share2,
  Copy,
  Check,
  Info,
  Hash
} from 'lucide-react';
import { TRANSLATIONS, Language, PILLAR_IMAGES, WUDU_IMAGES, CAPITALS, FATIHA_AUDIO_URL, SALAH_AUDIO, DUAS_DATA } from './constants';
import { ARABIC_LOCATIONS, type LocationData } from './data/locations';

// --- Components ---

const ApiKeyOnboarding = ({ onSave, lang }: { onSave: (key: string) => void, lang: string }) => {
  const [key, setKey] = useState('');

  const steps = [
    {
      title: lang === 'ar' ? 'المعلومة 1' : 'Info 1',
      text: lang === 'ar' ? 'قم بإنشاء مفتاح العلم من الأعلى' : 'Create the science key from the top',
      img: 'https://files.catbox.moe/0oatbv.jpg'
    },
    {
      title: lang === 'ar' ? 'المعلومة 2' : 'Info 2',
      text: lang === 'ar' ? 'اكتب الاسم واضغط إنشاء المفتاح' : 'Write the name and press Create Key',
      img: 'https://files.catbox.moe/081dat.jpg'
    },
    {
      title: lang === 'ar' ? 'المعلومة 3' : 'Info 3',
      text: lang === 'ar' ? 'قم بنسخ المفتاح وضعه في مكان مفتاح العلم' : 'Copy the key and place it in the science key box',
      img: 'https://files.catbox.moe/7a9q5y.jpg'
    }
  ];

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="fixed inset-0 z-[200] bg-white dark:bg-slate-900 overflow-y-auto px-4 py-12 md:py-20"
    >
      {/* Decorative Background Elements */}
      <div className="fixed inset-0 -z-10 bg-gradient-to-br from-[#022c22] via-white to-white dark:from-[#022c22] dark:via-slate-900 dark:to-slate-900 opacity-20"></div>
      <div className="fixed inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-[#022c22] blur-[120px] rounded-full opacity-10"></div>
        <div className="absolute bottom-[20%] right-[5%] w-[30%] h-[30%] bg-[#1FAA59] blur-[100px] rounded-full opacity-5"></div>
      </div>

      <div className="max-w-4xl mx-auto w-full flex flex-col gap-10 md:gap-14 relative z-10">
        <div className="text-center space-y-6">
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-20 h-20 bg-[#1FAA59]/10 rounded-3xl flex items-center justify-center mx-auto"
          >
            <Sparkles size={40} className="text-[#1FAA59]" />
          </motion.div>
          <div className="space-y-4">
            <h2 className="text-4xl md:text-6xl font-black text-slate-900 dark:text-white leading-tight">
              {lang === 'ar' ? 'مرحبا بك يا أخي ❤️' : 'Welcome, Brother ❤️'}
            </h2>
            <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 font-bold max-w-2xl mx-auto leading-relaxed">
              {lang === 'ar' 
                ? 'لضمان أفضل تجربة لك في التعلم يجب إنشاء مفتاح خاص بك، ونسخه ثم وضعه هنا' 
                : 'To ensure the best learning experience, you must create your own private key, copy it, and place it here.'}
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              className="bg-slate-50 dark:bg-white/5 rounded-[2.5rem] p-8 border border-slate-200 dark:border-white/10 flex flex-col shadow-sm"
            >
              <div className="mb-6 overflow-hidden rounded-2xl aspect-[4/3] border border-slate-200 dark:border-white/10 bg-slate-200 dark:bg-slate-800">
                <img src={s.img} alt={s.title} className="w-full h-full object-contain bg-slate-100 dark:bg-slate-800" referrerPolicy="no-referrer" />
              </div>
              <h4 className="font-black text-[#1FAA59] text-lg mb-2">{s.title}</h4>
              <p className="text-base text-slate-600 dark:text-slate-300 font-bold leading-relaxed">{s.text}</p>
            </motion.div>
          ))}
        </div>

        <div className="flex flex-col items-center gap-8 pb-12">
          <Button 
            className="w-full md:w-auto px-16 h-20 text-xl bg-blue-600 hover:bg-blue-700 text-white shadow-2xl rounded-3xl"
            onClick={() => window.open('https://aistudio.google.com/app/apikey', '_blank')}
          >
            <Play size={24} fill="currentColor" />
            {lang === 'ar' ? 'إنشاء مفتاح العلم' : 'Create Science Key'}
          </Button>

          <div className="w-full max-w-xl space-y-6">
            <div className="relative">
              <input 
                type="text"
                placeholder={lang === 'ar' ? 'الصق مفتاح العلم هنا...' : 'Paste your Science Key here...'}
                value={key}
                onChange={(e) => setKey(e.target.value)}
                className="w-full h-20 bg-slate-100 dark:bg-slate-800 border-2 border-slate-200 dark:border-white/10 rounded-[1.5rem] px-8 text-lg font-bold text-center focus:border-[#1FAA59] outline-none transition-all shadow-inner"
              />
            </div>
            <Button 
              className="w-full h-20 text-xl bg-[#1FAA59] shadow-2xl shadow-[#1FAA59]/30 rounded-[1.5rem]"
              disabled={key.length < 20}
              onClick={() => onSave(key)}
            >
              <CheckCircle2 size={28} />
              {lang === 'ar' ? 'حفظ والبدء' : 'Save & Start'}
            </Button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const Button = ({ children, onClick, variant = 'primary', className = '', disabled = false }: any) => {
  const variants: any = {
    primary: 'bg-[#1FAA59] text-white hover:bg-[#178544] shadow-lg shadow-[#1FAA59]/20 hover:scale-[1.02] active:scale-[0.98]',
    secondary: 'bg-[#FFD166] text-[#0D1B2A] hover:bg-[#E6B800] shadow-lg shadow-[#FFD166]/10 hover:scale-[1.02] active:scale-[0.98]',
    outline: 'border-2 border-[#1FAA59] text-[#1FAA59] hover:bg-[#1FAA59]/5 hover:scale-[1.02] active:scale-[0.98]',
    ghost: 'text-slate-600 dark:text-slate-400 hover:bg-slate-100 dark:hover:bg-white/5 active:scale-[0.98]'
  };

  return (
    <motion.button 
      whileTap={{ scale: 0.98 }}
      disabled={disabled}
      onClick={onClick}
      className={`px-6 py-3 rounded-2xl font-bold transition-all disabled:opacity-50 flex items-center justify-center gap-2 ${variants[variant]} ${className}`}
    >
      {children}
    </motion.button>
  );
};

const Card = ({ children, className = '', hover = true }: any) => (
  <div className={`glass-card rounded-[2.5rem] p-8 transition-all duration-300 ${hover ? 'hover:shadow-2xl hover:shadow-[#1FAA59]/5 hover:-translate-y-1' : ''} ${className}`}>
    {children}
  </div>
);

const Badge = ({ children, className = '' }: any) => (
  <div className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest bg-[#1FAA59]/10 text-[#1FAA59] border border-[#1FAA59]/20 ${className}`}>
    {children}
  </div>
);

// --- Main App ---

export default function App() {
  const [lang, setLang] = useState<Language>('ar');
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const saved = localStorage.getItem('noor_theme');
    return saved === 'dark';
  });
  const [activeSection, setActiveSection] = useState<'home' | 'wudu' | 'salah' | 'train' | 'times' | 'fard' | 'sunnah' | 'duas'>('home');
  const [wuduStep, setWuduStep] = useState(0);
  const [salahStep, setSalahStep] = useState(0);
  const [selectedPrayer, setSelectedPrayer] = useState<string | null>(null);
  const [showAdhkarSuggestion, setShowAdhkarSuggestion] = useState(true);
  const [selectedRakats, setSelectedRakats] = useState<number>(2);
  const [customRakats, setCustomRakats] = useState<string>("");
  const [showRakatSelector, setShowRakatSelector] = useState(false);
  const [showPostSalahSuggestion, setShowPostSalahSuggestion] = useState(false);

  const startTraining = (prayerId: string) => {
    setSelectedPrayer(prayerId);
    if (prayerId === 'duha' || prayerId === 'witr') {
      setSelectedRakats(prayerId === 'duha' ? 2 : 3);
      setShowRakatSelector(true);
    } else {
      setActiveSection('train');
    }
  };
  const [selectedDuaCategory, setSelectedDuaCategory] = useState('morning');
  const [currentDuaIndex, setCurrentDuaIndex] = useState(0);
  const [duaCounts, setDuaCounts] = useState<Record<string, number>>({});
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [isAuthReady, setIsAuthReady] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [fontScale, setFontScale] = useState(() => {
    const saved = localStorage.getItem('noor_font_scale');
    return saved ? parseFloat(saved) : 1.0;
  });
  const [isVibrateEnabled, setIsVibrateEnabled] = useState(() => {
    const saved = localStorage.getItem('noor_vibrate');
    return saved === 'true' || saved === null;
  });

  const vibrate = (pattern: number | number[] = 50) => {
    if (isVibrateEnabled && window.navigator && window.navigator.vibrate) {
      window.navigator.vibrate(pattern);
    }
  };

  const [userLocation, setUserLocation] = useState<{
    country: string;
    city: string;
    countryEn: string;
    cityEn: string;
  } | null>(() => {
    const saved = localStorage.getItem('noor_location');
    return saved ? JSON.parse(saved) : null;
  });
  const [showLocationPicker, setShowLocationPicker] = useState(false);
  const [tempCountry, setTempCountry] = useState<LocationData | null>(null);

  // Audio State
  const [isFatihaPlaying, setIsFatihaPlaying] = useState(false);
  const [fatihaProgress, setFatihaProgress] = useState(0);
  const [playingAudio, setPlayingAudio] = useState<string | null>(null);
  const currentAudioRef = useRef<HTMLAudioElement | null>(null);
  const [showTrainerSuggestion, setShowTrainerSuggestion] = useState(true);
  const [geminiApiKey, setGeminiApiKey] = useState(() => localStorage.getItem('gemini_api_key') || '');
  const [showApiKeyOnboarding, setShowApiKeyOnboarding] = useState(() => !localStorage.getItem('gemini_api_key'));
  const fatihaAudioRef = useRef<HTMLAudioElement | null>(null);

  // Prayer Times State
  const [prayerTimes, setPrayerTimes] = useState<any>(null);
  const [reminders, setReminders] = useState<Record<string, boolean>>(() => {
    const saved = localStorage.getItem('noor_reminders');
    return saved ? JSON.parse(saved) : {};
  });
  const [prayerCompleted, setPrayerCompleted] = useState<Record<string, boolean>>(() => {
    const saved = localStorage.getItem('noor_prayer_completed');
    if (saved) {
      const data = JSON.parse(saved);
      if (data.date === new Date().toDateString()) {
        return data.prayers;
      }
    }
    return {};
  });
  const [customMessage, setCustomMessage] = useState(() => {
    return localStorage.getItem('noor_reminder_message') || '';
  });

  const saveApiKey = (key: string) => {
    localStorage.setItem('gemini_api_key', key);
    setGeminiApiKey(key);
    setShowApiKeyOnboarding(false);
  };

  const playSalahAudio = (type: string) => {
    const url = SALAH_AUDIO[type];
    if (url) {
      if (currentAudioRef.current) {
        currentAudioRef.current.pause();
        currentAudioRef.current.src = '';
      }
      
      setPlayingAudio(type);
      const audio = new Audio(url);
      currentAudioRef.current = audio;
      
      audio.onended = () => {
        setPlayingAudio(null);
        currentAudioRef.current = null;
      };
      
      audio.onerror = () => {
        console.error("Audio Load Error:", type, url);
        setPlayingAudio(null);
        currentAudioRef.current = null;
      };

      const playPromise = audio.play();
      if (playPromise !== undefined) {
        playPromise
          .then(() => {
            console.log("Audio playing successfully:", type);
          })
          .catch(err => {
            // Ignore interruption errors
            if (err.name !== 'AbortError') {
              console.error("Audio play error:", err);
            }
            setPlayingAudio(null);
            currentAudioRef.current = null;
          });
      }
    }
  };

  // Removed automatic audio playback as per user request
  useEffect(() => {
    // Stop any current audio when step changes, but don't auto-play
    if (currentAudioRef.current) {
      currentAudioRef.current.pause();
      currentAudioRef.current.src = '';
      currentAudioRef.current = null;
      setPlayingAudio(null);
    }
  }, [salahStep, activeSection, selectedPrayer]);

  const t = TRANSLATIONS[lang];

  const trainerSteps = useMemo(() => {
    if (!selectedPrayer || !t) return [];
    
    // Find prayer info to get rakats
    const allPrayers = [
      ...t.fard.items,
      ...t.sunnah.items,
      { id: 'sunrise', rakats: 2 }
    ];
    const prayer = allPrayers.find((p: any) => p.id === selectedPrayer);
    
    // Choose correct number of rakats: 
    // 1. Use user-selected rakats for duha/witr
    // 2. Otherwise parse from prayer data
    let numRakats = 2;
    if ((selectedPrayer === 'duha' || selectedPrayer === 'witr') && selectedRakats) {
      numRakats = selectedRakats;
    } else {
      const numRakatsStr = prayer ? String(prayer.rakats) : "2";
      const numRakatsMatch = numRakatsStr.match(/\d+/);
      numRakats = numRakatsMatch ? parseInt(numRakatsMatch[0]) : 2;
    }
    
    const items = t.pillars.items;
    const findItem = (id: string) => items.find((i: any) => i.id === id);

    const steps: any[] = [];
    
    // Niyah is once at start
    const niyah = findItem('niyah');
    if (niyah) steps.push({ ...niyah, rakat: 1 });

    for (let r = 1; r <= numRakats; r++) {
      // Takbir only at the beginning of the 1st rakat
      if (r === 1) {
        const takbir = findItem('takbir');
        if (takbir) steps.push({ ...takbir, rakat: 1 });
      }
      
      // Core Rakat Sequence (The "Repeat" part)
      ['fatiha', 'ruku', 'rising', 'sujud1', 'sitting', 'sujud2'].forEach(id => {
        const item = findItem(id);
        if (item) steps.push({ ...item, rakat: r });
      });

      // Tashahhud Logic
      // For multi-rakat prayers, typically a middle tashahhud at Rakat 2 if total > 2
      if (r === 2 && numRakats > 2) {
        const tash = findItem('tashahhud');
        if (tash) steps.push({ ...tash, rakat: r, isMiddle: true });
      } else if (r === numRakats) {
        // Final Tashahhud at the very end
        const tash = findItem('tashahhud');
        if (tash) steps.push({ ...tash, rakat: r, isFinal: true });
      }

      // Transition to next rakat or end with Salam
      if (r < numRakats) {
        const standing = findItem('standing');
        if (standing) steps.push({ ...standing, rakat: r + 1 });
      } else {
        const salam = findItem('salam');
        if (salam) steps.push({ ...salam, rakat: r });
      }
    }

    return steps;
  }, [selectedPrayer, t, selectedRakats]);
  
  const togglePrayerComplete = (prayer: string) => {
    setPrayerCompleted(prev => {
      const next = { ...prev, [prayer]: !prev[prayer] };
      localStorage.setItem('noor_prayer_completed', JSON.stringify({
        date: new Date().toDateString(),
        prayers: next
      }));
      return next;
    });
  };



  useEffect(() => {
    setCurrentDuaIndex(0);
    if (activeSection !== 'duas') {
      setDuaCounts({});
    }
    if (activeSection !== 'train') {
      setShowTrainerSuggestion(true);
    }
  }, [activeSection, selectedDuaCategory]);

  const getCurrentPrayer = useCallback(() => {
    if (!prayerTimes || prayerTimes === 'error') return null;
    const now = new Date();
    const currentTime = now.getHours() * 60 + now.getMinutes();

    const prayers = [
      { id: 'fajr', key: 'Fajr' },
      { id: 'dhuhr', key: 'Dhuhr' },
      { id: 'asr', key: 'Asr' },
      { id: 'maghrib', key: 'Maghrib' },
      { id: 'isha', key: 'Isha' }
    ];
    
    let suggested = prayers[0];
    for (let i = 0; i < prayers.length; i++) {
       const timeStr = prayerTimes[prayers[i].key];
       if (!timeStr) continue;
       const [h, m] = timeStr.split(':').map(Number);
       const pTime = h * 60 + m;
       
       if (currentTime < pTime + 45) {
          suggested = prayers[i];
          break;
       }
    }
    
    const ishaTimeStr = prayerTimes['Isha'];
    if (ishaTimeStr) {
       const [ih, im] = ishaTimeStr.split(':').map(Number);
       if (currentTime > ih * 60 + im + 45) {
          suggested = prayers[0];
       }
    }

    return suggested.id;
  }, [prayerTimes]);

  const suggestedAdhkar = useMemo(() => {
    const hour = new Date().getHours();
    if (hour >= 4 && hour < 11) return 'morning';
    if (hour >= 15 && hour < 21) return 'evening';
    return null;
  }, []);



  const toggleFatiha = () => {
    if (!fatihaAudioRef.current) return;
    if (isFatihaPlaying) {
      fatihaAudioRef.current.pause();
    } else {
      // Stop other audios if playing
      if (currentAudioRef.current) {
        currentAudioRef.current.pause();
        currentAudioRef.current.src = '';
        currentAudioRef.current = null;
      }
      fatihaAudioRef.current.play();
    }
    setIsFatihaPlaying(!isFatihaPlaying);
  };

  const onTimeUpdate = () => {
    if (!fatihaAudioRef.current) return;
    const progress = (fatihaAudioRef.current.currentTime / fatihaAudioRef.current.duration) * 100;
    setFatihaProgress(progress || 0);
  };

  // Prayer Times Logic
  const getPrayerTimes = useCallback(async () => {
    const location = userLocation || CAPITALS[lang];
    const city = userLocation ? userLocation.cityEn : location.city;
    const country = userLocation ? userLocation.countryEn : location.country;
    
    if (!city || !country) return;

    try {
      const response = await fetch(`https://api.aladhan.com/v1/timingsByCity?city=${encodeURIComponent(city)}&country=${encodeURIComponent(country)}&method=2`);
      if (!response.ok) throw new Error('Network response was not ok');
      const data = await response.json();
      if (data.code === 200) {
        setPrayerTimes(data.data.timings);
      } else {
        throw new Error(data.data || 'Failed to fetch prayer times');
      }
    } catch (error) {
      console.error("Prayer times fetch error:", error);
      setPrayerTimes('error');
    }
  }, [lang, userLocation]);

  const toggleReminder = async (prayer: string) => {
    if (Notification.permission === 'default') {
      await Notification.requestPermission();
    }
    
    setReminders(prev => {
      const next = { ...prev, [prayer]: !prev[prayer] };
      localStorage.setItem('noor_reminders', JSON.stringify(next));
      return next;
    });
  };

  useEffect(() => {
    getPrayerTimes();
  }, [getPrayerTimes]);

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add('dark');
      localStorage.setItem('noor_theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('noor_theme', 'light');
    }
  }, [isDarkMode]);

  useEffect(() => {
    const root = window.document.documentElement;
    root.style.setProperty('--app-font-size', `${16 * fontScale}px`);
    localStorage.setItem('noor_font_scale', fontScale.toString());
  }, [fontScale]);

  useEffect(() => {
    localStorage.setItem('noor_vibrate', isVibrateEnabled.toString());
  }, [isVibrateEnabled]);

  const toggleTheme = () => setIsDarkMode(!isDarkMode);

  useEffect(() => {
    if (selectedPrayer && t) {
      setSalahStep(0);
    }
  }, [selectedPrayer, t]);

  const renderRakatSelector = () => (
    <AnimatePresence>
      {showRakatSelector && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm"
            onClick={() => setShowRakatSelector(false)}
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="relative w-full max-w-md bg-white dark:bg-slate-900 rounded-[2.5rem] p-8 shadow-2xl border border-slate-200 dark:border-white/10"
          >
            <div className="text-center space-y-4 mb-8">
              <div className="w-16 h-16 rounded-2xl bg-[#1FAA59]/10 text-[#1FAA59] flex items-center justify-center mx-auto">
                <Hash size={32} />
              </div>
              <h2 className="text-2xl font-black text-slate-900 dark:text-white">
                {lang === 'ar' ? 'اختر عدد الركعات' : 'Select Number of Rakats'}
              </h2>
              <p className="text-slate-500 dark:text-slate-400 font-medium">
                {selectedPrayer === 'duha' 
                  ? (lang === 'ar' ? 'صلاة الضحى (2-8 ركعات)' : 'Duha Prayer (2-8 Rakats)')
                  : (lang === 'ar' ? 'صلاة الوتر' : 'Witr Prayer')}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {selectedPrayer === 'duha' ? (
                [2, 4, 6, 8].map(n => (
                  <Button 
                    key={n}
                    variant={selectedRakats === n ? 'primary' : 'outline'}
                    className={`h-20 text-xl font-black rounded-2xl ${selectedRakats === n ? 'bg-[#1FAA59] border-[#1FAA59]' : ''}`}
                    onClick={() => { vibrate(30); setSelectedRakats(n); }}
                  >
                    {n}
                  </Button>
                ))
              ) : (
                <>
                  {[1, 3].map(n => (
                    <Button 
                      key={n}
                      variant={(selectedRakats === n && customRakats === "") ? 'primary' : 'outline'}
                      className={`h-20 text-xl font-black rounded-2xl ${(selectedRakats === n && customRakats === "") ? 'bg-[#1FAA59] border-[#1FAA59]' : ''}`}
                      onClick={() => { vibrate(30); setSelectedRakats(n); setCustomRakats(""); }}
                    >
                      {n}
                    </Button>
                  ))}
                  <div className="col-span-2 relative">
                    <input 
                      type="number"
                      placeholder={lang === 'ar' ? 'عدد آخر...' : 'Other number...'}
                      value={customRakats}
                      onChange={(e) => {
                        setCustomRakats(e.target.value);
                        const val = parseInt(e.target.value);
                        if (!isNaN(val)) setSelectedRakats(val);
                      }}
                      className="w-full h-16 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl px-6 font-bold text-center focus:ring-2 focus:ring-[#1FAA59] outline-none transition-all placeholder:text-slate-400"
                    />
                  </div>
                </>
              )}
            </div>

            <div className="mt-8 flex gap-4">
              <Button 
                variant="ghost" 
                className="flex-1 h-14"
                onClick={() => setShowRakatSelector(false)}
              >
                {t.nav.cancel || (lang === 'ar' ? 'إلغاء' : 'Cancel')}
              </Button>
              <Button 
                className="flex-1 h-14 bg-[#1FAA59]"
                disabled={selectedRakats < 1}
                onClick={() => {
                  vibrate(40);
                  setShowRakatSelector(false);
                  setActiveSection('train');
                }}
              >
                {t.trainer.start || (lang === 'ar' ? 'ابدأ' : 'Start')}
              </Button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );

  const renderHome = () => (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="space-y-16"
    >
      {showAdhkarSuggestion && suggestedAdhkar && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative overflow-hidden rounded-[2.5rem] p-8 bg-gradient-to-br from-[#1FAA59] to-[#1FAA59]/80 text-white shadow-xl shadow-[#1FAA59]/20"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full translate-x-1/2 -translate-y-1/2"></div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center shrink-0">
                <Sun size={32} className={suggestedAdhkar === 'morning' ? "text-yellow-200" : "text-orange-200"} />
              </div>
              <div>
                <h3 className="text-2xl font-black mb-1">
                  {suggestedAdhkar === 'morning' 
                    ? (lang === 'ar' ? 'حان وقت أذكار الصباح' : 'Time for Morning Adhkar')
                    : (lang === 'ar' ? 'حان وقت أذكار المساء' : 'Time for Evening Adhkar')}
                </h3>
                <p className="text-white/80 font-medium">
                  {lang === 'ar' 
                    ? 'قال تعالى: "وَسَبِّحْ بِحَمْدِ رَبِّكَ قَبْلَ طُلُوعِ الشَّمْسِ وَقَبْلَ غُرُوبِهَا"'
                    : 'Remember Allah in the morning and evening.'}
                </p>
              </div>
            </div>
            <div className="flex gap-4 shrink-0">
              <Button 
                variant="ghost" 
                className="text-white hover:bg-white/10"
                onClick={() => setShowAdhkarSuggestion(false)}
              >
                {lang === 'ar' ? 'تجاهل' : 'Dismiss'}
              </Button>
              <Button 
                className="bg-white text-[#146c3a] hover:bg-white/90 px-10 font-black text-lg shadow-lg"
                onClick={() => {
                  setSelectedDuaCategory(suggestedAdhkar);
                  setActiveSection('duas');
                  setShowAdhkarSuggestion(false);
                }}
              >
                {lang === 'ar' ? 'ابدأ الآن' : 'Start Now'}
              </Button>
            </div>
          </div>
        </motion.div>
      )}

      {showPostSalahSuggestion && (
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative overflow-hidden rounded-[2.5rem] p-8 bg-gradient-to-br from-[#FFD166] to-[#FFD166]/80 text-[#1A1A1A] shadow-xl shadow-[#FFD166]/20"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-black/5 rounded-full translate-x-1/2 -translate-y-1/2"></div>
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 relative z-10">
            <div className="flex items-center gap-6">
              <div className="w-16 h-16 bg-black/10 rounded-2xl flex items-center justify-center shrink-0">
                <Heart size={32} className="text-[#1A1A1A]" />
              </div>
              <div>
                <h3 className="text-2xl font-black mb-1">
                  {lang === 'ar' ? 'مبارك عليك فريضة الله' : 'Congratulations on your prayer'}
                </h3>
                <p className="text-[#1A1A1A]/70 font-medium">
                  {lang === 'ar' 
                    ? 'هل تود قراءة أذكار ما بعد الصلاة الآن؟' 
                    : 'Would you like to read the after-prayer Adhkar now?'}
                </p>
              </div>
            </div>
            <div className="flex gap-4 shrink-0">
              <Button 
                variant="ghost" 
                className="text-[#1A1A1A] hover:bg-black/5"
                onClick={() => setShowPostSalahSuggestion(false)}
              >
                {lang === 'ar' ? 'لاحقاً' : 'Later'}
              </Button>
              <Button 
                className="bg-[#1FAA59] text-white hover:bg-[#1faa59]/90 px-10 font-black text-lg shadow-lg"
                onClick={() => {
                  setSelectedDuaCategory('afterSalah');
                  setActiveSection('duas');
                  setShowPostSalahSuggestion(false);
                }}
              >
                {lang === 'ar' ? 'ابدأ الأذكار' : 'Start Adhkar'}
              </Button>
            </div>
          </div>
        </motion.div>
      )}

      {/* Hero Section */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
        <section className="md:col-span-12 relative overflow-hidden rounded-[3rem] p-8 md:p-20 transition-all duration-700 bg-white/40 dark:bg-slate-900/40 backdrop-blur-3xl border border-white/20 dark:border-white/10 group">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#1FAA59]/10 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2 group-hover:scale-110 transition-transform duration-1000"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-500/10 blur-[80px] rounded-full -translate-x-1/2 translate-y-1/2 group-hover:scale-110 transition-transform duration-1000"></div>
          
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <div className="space-y-8 flex flex-col items-center">
              <Badge className="w-fit">{lang === 'ar' ? 'تطبيق نور التعليمي' : 'Noor Learning App'}</Badge>
              <h1 className="text-h1 text-slate-900 dark:text-white tracking-tight">
                {lang === 'ar' ? (
                  <>تعلم الصلاة <span className="text-[#1FAA59]">ببساطة</span> وإتقان</>
                ) : (
                  <>Learn Prayer <span className="text-[#1FAA59]">Simply</span> & Perfectly</>
                )}
              </h1>
              <p className="text-h3 text-slate-600 dark:text-slate-400 max-w-2xl">
                {t.intro}
              </p>
              <div className="flex flex-wrap gap-5 justify-center">
                <Button onClick={() => setActiveSection('train')} className="px-10 h-14 text-lg">
                  <Play fill="currentColor" size={20} />
                  {t.trainer.title}
                </Button>
                <Button onClick={() => setActiveSection('wudu')} variant="outline" className="px-10 h-14 text-lg">
                  <Droplets size={20} />
                  {t.nav.wudu}
                </Button>
                <Button onClick={() => setActiveSection('duas')} variant="ghost" className="px-10 h-14 text-lg border border-white/10">
                  <Heart size={20} className="text-red-500" />
                  {t.nav.duas}
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Prayer Times Strip */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="md:col-span-12 flex flex-wrap gap-4 justify-between items-center bg-white/30 dark:bg-white/5 backdrop-blur-xl p-6 rounded-[2rem] border border-white/10"
        >
          <div className="flex items-center gap-4">
             <div className="w-12 h-12 rounded-2xl bg-[#1FAA59]/10 text-[#1FAA59] flex items-center justify-center">
                <Clock size={24} />
             </div>
             <div>
                <span className="block text-[10px] font-black uppercase text-slate-400 tracking-widest">{lang === 'ar' ? 'الصلاة القادمة' : 'Next Prayer'}</span>
                <span className="text-xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">
                   {prayerTimes && prayerTimes !== 'error' ? (
                     (() => {
                        const now = new Date();
                        const currentTime = now.getHours() * 60 + now.getMinutes();
                        const prayersList = [
                          { key: 'Fajr', label: t.prayerTimes.fajr },
                          { key: 'Dhuhr', label: t.prayerTimes.dhuhr },
                          { key: 'Asr', label: t.prayerTimes.asr },
                          { key: 'Maghrib', label: t.prayerTimes.maghrib },
                          { key: 'Isha', label: t.prayerTimes.isha }
                        ];
                        let next = prayersList[0];
                        for (let p of prayersList) {
                           const [h, m] = prayerTimes[p.key].split(':').map(Number);
                           if (currentTime < h * 60 + m) {
                             next = p;
                             break;
                           }
                        }
                        return `${next.label} - ${prayerTimes[next.key]}`;
                     })()
                   ) : (lang === 'ar' ? 'جاري التحميل...' : 'Loading...')}
                </span>
             </div>
          </div>
          <Button variant="ghost" onClick={() => setActiveSection('times')} className="h-12 !px-6 bg-white/5 border border-white/5">
             {lang === 'ar' ? 'عرض الكل' : 'View All'}
             <ChevronRight className={lang === 'ar' ? 'rotate-180' : ''} size={18} />
          </Button>
        </motion.div>
      </div>

      {/* Main Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {[
          { id: 'times', icon: Clock, label: t.nav.times, color: 'text-blue-500', desc: lang === 'ar' ? 'مواقيت الصلاة بدقة لموقعك' : 'Accurate prayer times for your location' },
          { id: 'wudu', icon: Droplets, label: t.nav.wudu, color: 'text-cyan-500', desc: lang === 'ar' ? 'تعلم الوضوء خطوة بخطوة' : 'Learn Wudu step-by-step' },
          { id: 'fard', icon: BookOpen, label: t.nav.fard, color: 'text-green-500', desc: lang === 'ar' ? 'شرح الصلوات المفروضة' : 'Obligatory prayers explained' },
          { id: 'sunnah', icon: Play, label: t.nav.sunnah, color: 'text-yellow-500', desc: lang === 'ar' ? 'تعرف على الصلوات المسنونة' : 'Explore Sunnah prayers' },
          { id: 'salah', icon: CheckCircle2, label: t.nav.pillars, color: 'text-purple-500', desc: lang === 'ar' ? 'أركان الصلاة وسننها' : 'Pillars and traditions of Salah' },
          { id: 'duas', icon: Heart, label: t.nav.duas, color: 'text-red-500', desc: lang === 'ar' ? 'أذكار الصباح والمساء' : 'Morning and evening Adhkar' },
          { id: 'train', icon: Brain, label: t.nav.train, color: 'text-orange-500', desc: lang === 'ar' ? 'مدرب الصلاة الذكي' : 'Interactive prayer trainer' },
        ].map((item, index) => (
          <motion.button
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.02, y: -5 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => setActiveSection(item.id as any)}
            className="group relative p-10 rounded-[2.5rem] glass-card text-left transition-all hover:bg-white dark:hover:bg-slate-800/80 hover:shadow-2xl hover:shadow-[#1FAA59]/5 overflow-hidden"
          >
            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#1FAA59]/0 to-[#1FAA59]/5 rounded-full translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-700`}></div>
            
            <div className={`w-16 h-16 rounded-2xl bg-slate-50 dark:bg-white/5 flex items-center justify-center mb-8 transition-all group-hover:scale-110 group-hover:rotate-3 ${item.color}`}>
              <item.icon size={32} />
            </div>
            <h3 className="text-h3 text-slate-900 dark:text-white mb-3 group-hover:text-[#1FAA59] transition-colors">{item.label}</h3>
            <p className="text-body transition-colors">
              {item.desc}
            </p>
          </motion.button>
        ))}
      </div>
    </motion.div>
  );

  const renderWudu = () => {
    const step = t.wudu.steps[wuduStep];
    return (
      <motion.div 
        key={wuduStep}
        initial={{ opacity: 0, x: lang === 'ar' ? -20 : 20 }}
        animate={{ opacity: 1, x: 0 }}
        className="max-w-2xl mx-auto"
      >
        <Card className="overflow-hidden !p-0">
          <div className="relative h-80">
            <img 
              src={WUDU_IMAGES[wuduStep]} 
              alt={step.title} 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
            <div className="absolute bottom-8 left-8 right-8">
               <Badge className="mb-3 w-fit bg-white/20 text-white border-white/30 backdrop-blur-md">
                 {lang === 'ar' ? `الخطوة ${wuduStep + 1}` : `Step ${wuduStep + 1}`}
               </Badge>
               <h2 className="text-h2 text-white mb-2">{step.title}</h2>
               <div className="flex gap-1.5">
                  {t.wudu.steps.map((_, i) => (
                    <div key={i} className={`h-1.5 flex-1 rounded-full transition-all duration-500 ${i <= wuduStep ? 'bg-[#1FAA59]' : 'bg-white/20'}`}></div>
                  ))}
               </div>
            </div>
          </div>
          
          <div className="p-8 space-y-6">
            <p className="text-h3 text-slate-600 dark:text-slate-400">{step.desc}</p>

            <div className="flex gap-4 pt-4">
              <motion.div whileTap={{ scale: 0.9 }}>
                <Button 
                  variant="ghost" 
                  className="w-14 h-14 rounded-2xl border border-slate-200 dark:border-white/10"
                  onClick={() => {
                    vibrate(30);
                    setWuduStep(Math.max(0, wuduStep - 1));
                  }}
                  disabled={wuduStep === 0}
                >
                  <ChevronLeft className={lang === 'ar' ? 'rotate-180' : ''} size={24} />
                </Button>
              </motion.div>
              <motion.div className="flex-1" whileTap={{ scale: 0.98 }}>
                <Button className="w-full h-14 text-lg" onClick={() => {
                  vibrate(40);
                  if (wuduStep < t.wudu.steps.length - 1) {
                    setWuduStep(wuduStep + 1);
                  } else {
                    setActiveSection('home');
                  }
                }}>
                  {wuduStep < t.wudu.steps.length - 1 ? t.trainer.next : t.wudu.doneBtn}
                  <ChevronRight className={lang === 'ar' ? 'rotate-180' : ''} size={20} />
                </Button>
              </motion.div>
            </div>
          </div>
        </Card>
      </motion.div>
    );
  };

  const renderSalah = () => {
    if (!t || !t.pillars || !t.pillars.items) return null;
    const pillar = t.pillars.items[salahStep];

    return (
      <div className="flex flex-col lg:flex-row gap-8">
        <div className="lg:w-1/3 space-y-3 max-h-[70vh] overflow-y-auto pr-2 custom-scrollbar">
          {t.pillars.items.map((p: any, i: number) => (
            <button
              key={p.id}
              onClick={() => setSalahStep(i)}
              className={`group w-full text-left p-6 rounded-[2rem] transition-all duration-300 border ${
                i === salahStep 
                ? 'bg-[#1FAA59] text-white shadow-xl shadow-[#1FAA59]/20 border-[#1FAA59]' 
                : 'bg-white/20 dark:bg-slate-900/20 text-slate-700 dark:text-white/80 border-white/10 hover:bg-white/40 dark:hover:bg-slate-800/40 backdrop-blur-md'
              }`}
            >
              <div className="flex items-center gap-4">
                <span className={`w-10 h-10 rounded-xl flex items-center justify-center text-sm font-bold transition-colors ${
                  i === salahStep ? 'bg-white/20' : 'bg-[#1FAA59]/10 text-[#1FAA59]'
                }`}>
                  {i + 1}
                </span>
                <span className="font-bold text-lg">{p.title}</span>
              </div>
            </button>
          ))}
        </div>

        <div className="lg:w-2/3 space-y-6">
          <div className="bg-[#1FAA59]/10 border border-[#1FAA59]/20 p-5 rounded-[2rem] flex items-start gap-4 backdrop-blur-sm">
            <div className="w-10 h-10 rounded-xl bg-[#1FAA59] flex items-center justify-center shrink-0 shadow-lg shadow-[#1FAA59]/20">
              <Info size={22} className="text-white" />
            </div>
            <p className="text-slate-700 dark:text-white/80 leading-relaxed font-bold">
              {t.pillars.pillarNote}
            </p>
          </div>

          <Card className="space-y-6">
            <img 
              src={PILLAR_IMAGES[pillar.id]} 
              alt={pillar.title} 
              className="w-full h-64 object-cover rounded-xl"
              referrerPolicy="no-referrer"
            />
            
            <div className="space-y-4">
              <h2 className="text-h2 text-slate-900 dark:text-white">{pillar.title}</h2>
              
              <div className="flex flex-wrap gap-4">
                {pillar.id !== 'niyah' && pillar.id !== 'fatiha' && pillar.id !== 'salam' && (
                  <Button 
                    onClick={() => playSalahAudio(pillar.id === 'rising' ? 'rising' : 'takbir')} 
                    variant={playingAudio === (pillar.id === 'rising' ? 'rising' : 'takbir') ? 'primary' : 'secondary'}
                    className="flex-1 min-w-[200px]"
                  >
                    <Volume2 size={20} className={playingAudio === (pillar.id === 'rising' ? 'rising' : 'takbir') ? 'animate-pulse' : ''} />
                    {pillar.id === 'rising' ? (lang === 'ar' ? 'سمع الله لمن حمده' : 'Sami Allahu...') : (lang === 'ar' ? 'الله أكبر' : 'Allahu Akbar')}
                  </Button>
                )}
                
                {pillar.text && pillar.id !== 'takbir' && pillar.id !== 'standing' && pillar.id !== 'rising' && (
                  <div className="w-full space-y-4">
                    <p className="text-religious bg-white/5 p-6 rounded-2xl border border-[#1FAA59]/10">
                      {pillar.text}
                    </p>
                    <Button 
                      onClick={() => {
                        const audioMap: Record<string, string> = { 
                          ruku: 'ruku', 
                          sujud1: 'sujud', 
                          sujud2: 'sujud', 
                          tashahhud: pillar.isMiddle ? 'tashahhud_middle' : 'tashahhud', 
                          salam: 'salam' 
                        };
                        if (audioMap[pillar.id]) playSalahAudio(audioMap[pillar.id]);
                      }}
                      variant={(playingAudio === 'tashahhud' || playingAudio === 'tashahhud_middle' || playingAudio === pillar.id || (pillar.id.includes('sujud') && playingAudio === 'sujud')) ? 'primary' : 'outline'}
                      className="w-full"
                    >
                      <Volume2 size={20} className={(playingAudio === pillar.id || (pillar.id.includes('sujud') && playingAudio === 'sujud')) ? 'animate-pulse' : ''} />
                      {lang === 'ar' ? 'استمع للنطق' : 'Listen to Recitation'}
                    </Button>
                  </div>
                )}

                {pillar.id === 'tashahhud' && (
                  <Button 
                    onClick={() => playSalahAudio(pillar.id)}
                    variant={playingAudio === pillar.id ? 'primary' : 'secondary'}
                    className="w-full"
                  >
                    <Volume2 size={24} className={playingAudio === pillar.id ? 'animate-pulse' : ''} />
                    {lang === 'ar' ? 'التشهد كاملاً' : 'Full Tashahhud'}
                  </Button>
                )}
              </div>

              {pillar.id === 'fatiha' && (
                <div className="p-8 bg-slate-50/50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-[2rem] space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                       <div className="w-12 h-12 bg-[#1FAA59]/20 rounded-xl flex items-center justify-center text-[#1FAA59]">
                          <Music size={24} />
                       </div>
                       <div>
                          <span className="font-bold text-slate-900 dark:text-white block">سورة الفاتحة</span>
                          <span className="text-xs text-slate-500 uppercase font-bold tracking-widest">Audio Recitation</span>
                       </div>
                    </div>
                    <Button onClick={toggleFatiha} variant="secondary" className="w-14 h-14 !rounded-2xl">
                       {isFatihaPlaying ? <Pause size={24} /> : <Play size={24} />}
                    </Button>
                  </div>
                  <div className="relative h-2 bg-slate-200 dark:bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                      initial={false}
                      animate={{ width: `${fatihaProgress}%` }}
                      className="absolute inset-y-0 left-0 bg-gradient-to-r from-[#1FAA59] to-[#146c3a] shadow-[0_0_10px_rgba(31,170,89,0.5)]" 
                    />
                  </div>
                </div>
              )}

              {pillar.text && (
                <div className="p-8 bg-gradient-to-br from-[#1FAA59]/5 to-transparent border border-[#1FAA59]/10 rounded-[2rem]">
                  <p className="text-3xl font-bold text-[#1FAA59] text-center italic" dir="rtl">{pillar.text}</p>
                </div>
              )}
            </div>
          </Card>
        </div>
      </div>
    );
  };

  const renderTrainer = () => {
    if (!t || !t.trainer) return null;
    if (!selectedPrayer) {
      const suggestedId = getCurrentPrayer();
      const prayers = [
        ...t.fard.items.map((p: any) => ({ ...p, category: t.fard.title, accent: 'bg-[#1FAA59]/10 text-[#1FAA59]' })),
        ...t.sunnah.items.map((p: any) => ({ ...p, category: t.sunnah.title, accent: 'bg-[#FFC107]/10 text-[#FFC107]' }))
      ];

      const suggestedPrayer = prayers.find(p => p.id === suggestedId);

      if (showTrainerSuggestion && suggestedPrayer) {
        return (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="max-w-xl mx-auto"
          >
            <Card className="p-12 text-center space-y-8 relative overflow-hidden bg-gradient-to-br from-white to-[#1FAA59]/5 dark:from-slate-900 dark:to-[#1FAA59]/10">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#1FAA59]/10 rounded-full translate-x-1/2 -translate-y-1/2"></div>
              
              <div className="w-24 h-24 bg-[#1FAA59] rounded-full flex items-center justify-center mx-auto shadow-xl shadow-[#1FAA59]/30 text-white mb-4">
                 <Clock size={40} />
              </div>
              
              <div className="space-y-4">
                <Badge className="bg-[#1FAA59]/10 text-[#1FAA59] border-[#1FAA59]/20 uppercase tracking-widest mx-auto">
                   {lang === 'ar' ? 'صلاة مقترحة' : 'Suggested Prayer'}
                </Badge>
                <h2 className="text-4xl font-black text-slate-900 dark:text-white">
                   {lang === 'ar' ? `هل تود التدريب على صلاة ${suggestedPrayer.title}؟` : `Would you like to practice ${suggestedPrayer.title}?`}
                </h2>
                <p className="text-slate-500 dark:text-slate-400">
                   {lang === 'ar' ? 'بناءً على الوقت الحالي في موقعك.' : 'Based on your local current time.'}
                </p>
              </div>

              <div className="flex flex-col gap-4 pt-4">
                <Button 
                  size="lg" 
                  className="h-16 text-xl rounded-2xl shadow-xl shadow-[#1FAA59]/20" 
                  onClick={() => {
                    startTraining(suggestedId);
                    setShowTrainerSuggestion(false);
                  }}
                >
                  <Play fill="currentColor" className="mr-2" />
                  {lang === 'ar' ? 'نعم، ابدأ الآن' : 'Yes, start now'}
                </Button>
                <Button 
                  variant="ghost" 
                  className="h-14 text-slate-500 hover:text-slate-900 dark:hover:text-white"
                  onClick={() => setShowTrainerSuggestion(false)}
                >
                  {lang === 'ar' ? 'لا، عرض كل الصلوات' : 'No, show all prayers'}
                </Button>
              </div>
            </Card>
          </motion.div>
        );
      }

      return (
        <div className="space-y-12">
          <div className="text-center space-y-3">
             <Badge className="mx-auto block w-fit">{t.trainer.title}</Badge>
            <h2 className="text-4xl font-black text-slate-900 dark:text-white">{t.trainer.selectPrayer}</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {prayers.map((p, idx) => (
              <motion.button
                key={p.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                onClick={() => startTraining(p.id)}
                className="group p-8 rounded-[2.5rem] glass-card text-left transition-all hover:bg-white dark:hover:bg-slate-800 hover:shadow-2xl hover:-translate-y-1 border-white/10"
              >
                <div className="flex justify-between items-start mb-6">
                   <div className={`px-4 py-1.5 rounded-full text-[10px] font-black uppercase tracking-widest ${p.accent}`}>
                      {p.category}
                   </div>
                   <div className="w-12 h-12 bg-slate-50 dark:bg-white/5 rounded-2xl flex items-center justify-center text-[#1FAA59] group-hover:scale-110 transition-transform">
                      <Play fill="currentColor" size={24} />
                   </div>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">{p.title}</h3>
                <p className="text-slate-500 font-bold">{p.rakats} {t.trainer.rakats}</p>
              </motion.button>
            ))}
          </div>
        </div>
      );
    }

    const currentPillar = trainerSteps[salahStep] || trainerSteps[0] || t.pillars.items[0];
    const pillar = currentPillar;
    const currentRakat = pillar.rakat || 1;

    return (
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="max-w-2xl mx-auto text-center space-y-8"
      >
        <div className="flex items-center justify-between">
          <Button variant="ghost" onClick={() => setSelectedPrayer(null)}>
            <ChevronLeft size={20} />
            {t.trainer.selectPrayer}
          </Button>
          <div className="flex flex-col items-center">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">{t.trainer.title}</h2>
            <div className="flex items-center gap-2">
              <span className="text-xs text-[#1FAA59] font-bold uppercase tracking-widest">
                {t.trainer.prayers[selectedPrayer as keyof typeof t.trainer.prayers]}
              </span>
              <span className="text-[10px] bg-[#1FAA59]/20 text-[#1FAA59] px-2 py-0.5 rounded-full font-bold">
                {lang === 'ar' ? 'الركعة' : 'Rakat'} {currentRakat}
              </span>
            </div>
          </div>
          <div className="w-24"></div>
        </div>

        <Card className="relative overflow-hidden">
          <div className="absolute top-4 right-4 z-10 flex gap-2">
            <div className="px-4 py-2 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-white text-xs font-bold">
               {pillar.isMiddle ? (lang === 'ar' ? 'التشهد الأوسط' : 'Middle Tashahhud') : 
                pillar.isFinal ? (lang === 'ar' ? 'التشهد الأخير' : 'Final Tashahhud') : 
                ''}
            </div>
            <div className="px-4 py-2 rounded-full bg-black/50 backdrop-blur-md border border-white/10 text-[#1FAA59] font-bold">
              {salahStep + 1} / {trainerSteps.length}
            </div>
          </div>
          
          <img 
            src={PILLAR_IMAGES[pillar.id]} 
            alt={pillar.title} 
            className="w-full h-80 object-cover rounded-2xl mb-8"
            referrerPolicy="no-referrer"
          />

          <div className="space-y-6">
            <div className="flex flex-col items-center gap-1">
              <h3 className="text-3xl font-black text-slate-900 dark:text-white">{pillar.title}</h3>
              {pillar.rakat && (
                <span className="text-[#1FAA59] font-bold text-sm">
                  {lang === 'ar' ? `الركعة ${pillar.rakat}` : `Rakat ${pillar.rakat}`}
                </span>
              )}
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {/* Primary Movement Audio (Takbir/Rising) */}
              {pillar.id !== 'niyah' && pillar.id !== 'fatiha' && pillar.id !== 'salam' && (
                <Button 
                  variant={playingAudio === (pillar.id === 'rising' ? 'rising' : 'takbir') ? 'primary' : 'outline'}
                  className={`w-full flex flex-col items-center gap-2 py-6 h-auto transition-all ${
                    playingAudio === (pillar.id === 'rising' ? 'rising' : 'takbir')
                      ? 'bg-[#FFD166] border-[#FFD166] text-black scale-105 shadow-lg'
                      : 'border-[#FFD166]/30 hover:border-[#FFD166] hover:bg-[#FFD166]/5 text-[#FFD166]'
                  }`}
                  onClick={() => playSalahAudio(pillar.id === 'rising' ? 'rising' : 'takbir')}
                >
                  <Volume2 size={24} className={playingAudio === (pillar.id === 'rising' ? 'rising' : 'takbir') ? 'animate-pulse' : ''} />
                  <div className="text-center">
                    <span className={`block text-lg font-bold ${playingAudio === (pillar.id === 'rising' ? 'rising' : 'takbir') ? 'text-black' : 'text-[#FFD166]'}`}>
                      {pillar.id === 'rising' ? (lang === 'ar' ? 'سمع الله لمن حمده' : 'Sami Allahu...') : (lang === 'ar' ? 'الله أكبر' : 'Allahu Akbar')}
                    </span>
                    <span className={`text-xs ${playingAudio === (pillar.id === 'rising' ? 'rising' : 'takbir') ? 'text-black/60' : 'text-[#E0E1DD]/50'}`}>
                      {pillar.id === 'rising' ? (lang === 'ar' ? 'ذكر' : 'Dhikr') : (lang === 'ar' ? 'تكبير' : 'Takbir')}
                    </span>
                  </div>
                </Button>
              )}

              {/* Pillar Specific Dhikr */}
              {pillar.text && pillar.id !== 'takbir' && pillar.id !== 'standing' && pillar.id !== 'rising' && pillar.id !== 'tashahhud' && (
                <Button 
                  variant={(
                    playingAudio === pillar.id || 
                    (pillar.id.includes('sujud') && playingAudio === 'sujud')
                  ) ? 'primary' : 'outline'}
                  className={`w-full flex flex-col items-center gap-2 py-6 h-auto transition-all ${
                    (playingAudio === pillar.id || 
                     (pillar.id.includes('sujud') && playingAudio === 'sujud'))
                      ? 'bg-[#1FAA59] border-[#1FAA59] text-white scale-105 shadow-lg'
                      : 'border-[#1FAA59]/30 hover:border-[#1FAA59] hover:bg-[#1FAA59]/5 text-[#1FAA59]'
                  }`}
                  onClick={() => {
                    const audioMap: Record<string, string> = {
                      ruku: 'ruku',
                      sujud1: 'sujud',
                      sujud2: 'sujud',
                      salam: 'salam'
                    };

                    if (audioMap[pillar.id]) {
                      playSalahAudio(audioMap[pillar.id]);
                    }
                  }}
                >
                  <Volume2 size={24} className={(
                    playingAudio === pillar.id || 
                    (pillar.id.includes('sujud') && playingAudio === 'sujud')
                  ) ? 'animate-pulse' : ''} />
                  <div className="text-center">
                    <span className={`block text-lg font-bold truncate max-w-[150px] ${
                      (playingAudio === pillar.id || 
                       (pillar.id.includes('sujud') && playingAudio === 'sujud')) ? 'text-white' : 'text-[#1FAA59]'
                    }`} dir="rtl">{pillar.text}</span>
                    <span className={`text-xs ${
                      (playingAudio === pillar.id || 
                       (pillar.id.includes('sujud') && playingAudio === 'sujud')) ? 'text-white/60' : 'text-[#E0E1DD]/50'
                    }`}>Dhikr</span>
                  </div>
                </Button>
              )}

              {/* Tashahhud Specific (Full Button width if no primary) */}
              {pillar.id === 'tashahhud' && (
                <Button 
                  variant={(playingAudio === 'tashahhud' || playingAudio === 'tashahhud_middle') ? 'primary' : 'outline'}
                  className={`col-span-full flex flex-col items-center gap-2 py-8 h-auto transition-all ${
                    (playingAudio === 'tashahhud' || playingAudio === 'tashahhud_middle')
                      ? 'bg-[#1FAA59] border-[#1FAA59] text-white scale-105 shadow-xl'
                      : 'border-[#1FAA59]/30 hover:border-[#1FAA59] hover:bg-[#1FAA59]/5 text-[#1FAA59]'
                  }`}
                  onClick={() => playSalahAudio(pillar.isMiddle ? 'tashahhud_middle' : 'tashahhud')}
                >
                  <Volume2 size={32} className={(playingAudio === 'tashahhud' || playingAudio === 'tashahhud_middle') ? 'animate-pulse' : ''} />
                  <div className="text-center">
                    <span className="block text-xl font-bold truncate max-w-[250px]" dir="rtl">{pillar.text}</span>
                    <span className="text-sm opacity-60">
                      {pillar.isMiddle ? (lang === 'ar' ? 'صوت التشهد الأوسط' : 'Middle Tashahhud Audio') : (lang === 'ar' ? 'صوت التشهد الأخير' : 'Final Tashahhud Audio')}
                    </span>
                  </div>
                </Button>
              )}

              {/* Fatiha Player in Trainer */}
              {pillar.id === 'fatiha' && (
                <div className="col-span-full p-4 bg-[#1FAA59]/10 rounded-2xl border border-[#1FAA59]/20 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-[#1FAA59] flex items-center justify-center text-white">
                      <Music size={20} />
                    </div>
                    <div className="text-left">
                      <span className="block text-xs font-bold text-[#1FAA59] tracking-widest uppercase">Al-Fatiha</span>
                      <span className="block text-[10px] text-[#1FAA59]/60">{lang === 'ar' ? 'تلاوة' : 'Recitation'}</span>
                    </div>
                  </div>
                  <button 
                    onClick={() => { vibrate(20); toggleFatiha(); }}
                    className="w-10 h-10 rounded-full bg-[#1FAA59] text-white flex items-center justify-center shadow-lg hover:scale-105 transition-transform"
                  >
                    {isFatihaPlaying ? <Pause size={20} /> : <Play size={20} fill="currentColor" />}
                  </button>
                </div>
              )}
            </div>

            {/* Progress Bar in Trainer */}
            <div className="pt-4">
               <div className="flex justify-between text-[10px] font-black uppercase text-[#1FAA59] mb-2 tracking-widest">
                  <span>{lang === 'ar' ? 'التقدم' : 'Progress'}</span>
                  <span>{Math.round(((salahStep + 1) / trainerSteps.length) * 100)}%</span>
               </div>
               <div className="h-2 w-full bg-[#1FAA59]/10 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    animate={{ width: `${((salahStep + 1) / trainerSteps.length) * 100}%` }}
                    className="h-full bg-[#1FAA59]"
                  />
               </div>
            </div>

            <div className="flex gap-4 pt-4">
              <Button 
                variant="ghost" 
                className="flex-1"
                onClick={() => setSalahStep(Math.max(0, salahStep - 1))}
                disabled={salahStep === 0}
              >
                {t.trainer.prev}
              </Button>
              
              {salahStep < trainerSteps.length - 1 ? (
                <Button className="flex-1" onClick={() => { vibrate(40); setSalahStep(salahStep + 1); }}>
                  {t.trainer.next}
                  <ChevronRight size={20} />
                </Button>
              ) : (
                <Button className="flex-1" variant="secondary" onClick={() => {
                  vibrate([50, 50, 50]);
                  const isFard = TRANSLATIONS[lang].fard.items.some((p: any) => p.id === selectedPrayer);
                  togglePrayerComplete(selectedPrayer);
                  setActiveSection('home');
                  setSelectedPrayer(null);
                  if (isFard) {
                    setShowPostSalahSuggestion(true);
                  }
                }}>
                  {t.trainer.finish}
                  <CheckCircle2 size={20} />
                </Button>
              )}
            </div>
          </div>
        </Card>
      </motion.div>
    );
  };

  const renderDuas = () => {
    const localeData = DUAS_DATA[lang] || DUAS_DATA['ar'];
    const currentCat = localeData.find((c: any) => c.id === selectedDuaCategory) || localeData[0];
    const dua = currentCat.items[currentDuaIndex];

    const copyToClipboard = (text: string, id: string) => {
      navigator.clipboard.writeText(text);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    };

    const handleDuaCount = (duaId: string, repeat: number) => {
      const current = duaCounts[duaId] ?? repeat;
      if (current > 0) {
        vibrate(30);
        setDuaCounts(prev => ({ ...prev, [duaId]: current - 1 }));
      } else {
        vibrate([30, 30, 30]);
      }
    };

    const resetCounts = () => {
      setDuaCounts({});
      setCurrentDuaIndex(0);
    };

    const nextDua = () => {
      if (currentDuaIndex < currentCat.items.length - 1) {
        setCurrentDuaIndex(currentDuaIndex + 1);
      }
    };

    const prevDua = () => {
      if (currentDuaIndex > 0) {
        setCurrentDuaIndex(currentDuaIndex - 1);
      }
    };

    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="max-w-6xl mx-auto space-y-12">
        <div className="text-center space-y-3 px-6">
          <Badge className="mx-auto block w-fit">{t.duas.title}</Badge>
          <h2 className="text-h2 text-slate-900 dark:text-white uppercase tracking-tighter">
            {lang === 'ar' ? 'الأدعية والأذكار' : 'Duas & Adhkar'}
          </h2>
          <div className="flex items-center justify-center gap-4">
            <p className="text-body font-medium">
              {lang === 'ar' ? 'حصن نفسك بذكر الله في كل وقت' : 'Fortify yourself with the remembrance of Allah'}
            </p>
            <Button variant="ghost" onClick={resetCounts} className="w-10 h-10 !p-0">
               <RotateCcw size={18} />
            </Button>
          </div>
          
          {/* Progress Indicator */}
          <div className="pt-4 max-w-xs mx-auto">
            <div className="flex justify-between text-[10px] font-black uppercase tracking-widest text-[#1FAA59] mb-1">
               <span>{lang === 'ar' ? 'الإنجاز' : 'Progress'}</span>
               <span>{currentCat.items.filter((d: any) => (duaCounts[d.id] ?? d.repeat ?? 1) === 0).length} / {currentCat.items.length}</span>
            </div>
            <div className="h-1.5 w-full bg-[#1FAA59]/10 rounded-full overflow-hidden">
               <motion.div 
                 initial={{ width: 0 }}
                 animate={{ width: `${(currentCat.items.filter((d: any) => (duaCounts[d.id] ?? d.repeat ?? 1) === 0).length / currentCat.items.length) * 100}%` }}
                 className="h-full bg-[#1FAA59]"
               />
            </div>
          </div>
        </div>

        {/* Categories Tabs */}
        <div className="flex gap-4 overflow-x-auto pb-4 justify-start md:justify-center no-scrollbar px-6">
          {localeData.map((cat: any) => (
            <button
              key={cat.id}
              onClick={() => setSelectedDuaCategory(cat.id)}
              className={`px-8 py-4 rounded-full font-black whitespace-nowrap transition-all border-2 text-sm ${
                selectedDuaCategory === cat.id 
                ? 'bg-[#1FAA59] text-white border-[#1FAA59] shadow-xl shadow-[#1FAA59]/30 scale-105' 
                : 'bg-white dark:bg-white/5 text-slate-500 dark:text-slate-400 border-transparent hover:bg-slate-50 dark:hover:bg-white/10'
              }`}
            >
              {cat.title}
            </button>
          ))}
        </div>

        {/* Single Dua View with Navigation */}
        <div className="relative px-6">
          <AnimatePresence mode="wait">
            {dua ? (
              <motion.div
                key={`${selectedDuaCategory}-${currentDuaIndex}`}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3, ease: 'easeOut' }}
                className="max-w-4xl mx-auto"
              >
                <Card 
                  className={`relative overflow-hidden group border-white/10 flex flex-col transition-all duration-500 min-h-[500px] ${
                    (duaCounts[dua.id] ?? dua.repeat ?? 1) === 0 ? 'opacity-80' : 'hover:border-[#1FAA59]/30'
                  }`}
                  onClick={() => (duaCounts[dua.id] ?? dua.repeat ?? 1) > 0 && handleDuaCount(dua.id, dua.repeat ?? 1)}
                >
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#1FAA59]/5 blur-[80px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
                  
                  <div className="flex flex-col gap-6 items-start relative z-10 p-2 flex-grow h-full">
                    <div className="flex-grow space-y-8 w-full">
                      <div className="flex justify-between items-center">
                        <div className="flex items-center gap-3">
                          <Badge className={(duaCounts[dua.id] ?? dua.repeat ?? 1) === 0 ? 'bg-slate-100 dark:bg-white/5 text-slate-400' : ''}>
                            {currentDuaIndex + 1} / {currentCat.items.length}
                          </Badge>
                          {(duaCounts[dua.id] ?? dua.repeat ?? 1) === 0 && <CheckCircle2 className="text-[#1FAA59]" size={24} />}
                        </div>
                        <div className="flex gap-2">
                            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                              <Button
                                variant="ghost"
                                onClick={(e: any) => { e.stopPropagation(); copyToClipboard(dua.arabic, dua.id); }}
                                className={`w-12 h-12 !p-0 !rounded-2xl border transition-all duration-300 ${
                                  copiedId === dua.id 
                                  ? 'bg-[#1FAA59] border-[#1FAA59] text-white' 
                                  : 'bg-white dark:bg-white/5 border-white/10 text-[#1FAA59]'
                                }`}
                              >
                                {copiedId === dua.id ? <Check size={20} /> : <Copy size={20} />}
                              </Button>
                            </motion.div>
                            <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                              <Button
                                variant="ghost"
                                onClick={(e: any) => { e.stopPropagation(); }}
                                className="w-12 h-12 !p-0 !rounded-2xl bg-white dark:bg-white/5 border border-white/10 text-orange-500"
                              >
                                <Volume2 size={20} />
                              </Button>
                            </motion.div>
                        </div>
                      </div>

                      {dua.arabic && (
                        <div className="relative min-h-[160px] flex items-center justify-center py-4">
                          <p 
                            className="text-religious selection:bg-[#1FAA59]/30 break-words w-full"
                            style={{ fontSize: `${2.25 * fontScale}rem`, lineHeight: 1.4 }}
                          >
                            {dua.arabic}
                          </p>
                        </div>
                      )}
                      
                      {dua.virtue && (
                        <div className="space-y-3 pt-8 border-t border-slate-100 dark:border-white/5">
                          <div className="flex items-center gap-2">
                            <Info size={16} className="text-[#1FAA59]" />
                            <span className="text-[10px] uppercase font-black tracking-widest text-[#1FAA59]">{lang === 'ar' ? 'فضل الذكر' : 'Virtue'}</span>
                          </div>
                          <p className="text-slate-600 dark:text-slate-400 font-medium leading-relaxed text-sm md:text-base italic">
                            {dua.virtue}
                          </p>
                        </div>
                      )}
                    </div>

                    <div className="flex flex-row gap-6 items-center justify-center w-full pt-8 mt-auto border-t border-slate-50 dark:border-white/5">
                      <div className="flex items-center gap-4">
                        <motion.div 
                          animate={(duaCounts[dua.id] ?? dua.repeat ?? 1) === 0 ? { scale: [1, 1.1, 1], rotate: [0, 5, -5, 0] } : { scale: [1, 1.2, 1] }}
                          whileTap={{ scale: 0.9 }}
                          key={duaCounts[dua.id] ?? dua.repeat ?? 1}
                          className={`w-24 h-24 rounded-full flex flex-col items-center justify-center border-4 transition-all duration-300 cursor-pointer ${
                            (duaCounts[dua.id] ?? dua.repeat ?? 1) === 0 
                            ? 'bg-white dark:bg-white/5 border-[#1FAA59]' 
                            : 'bg-[#1FAA59] border-[#1FAA59] shadow-[0_20px_40px_-10px_rgba(31,170,89,0.4)]'
                          }`}
                        >
                          <span className={`text-4xl font-black ${(duaCounts[dua.id] ?? dua.repeat ?? 1) === 0 ? 'text-[#1FAA59]' : 'text-white'}`}>
                            {(duaCounts[dua.id] ?? dua.repeat ?? 1) === 0 ? <Check size={32} strokeWidth={4} /> : (duaCounts[dua.id] ?? dua.repeat ?? 1)}
                          </span>
                        </motion.div>
                        <div className="flex flex-col">
                          <span className="text-xs font-black text-[#1FAA59] uppercase tracking-widest">{t.duas.count}</span>
                          <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Total: {dua.repeat ?? 1}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 h-2 bg-slate-100 dark:bg-white/5">
                    <motion.div 
                      initial={false}
                      animate={{ width: `${((duaCounts[dua.id] ?? dua.repeat ?? 1) / (dua.repeat ?? 1)) * 100}%` }}
                      className={`h-full transition-colors ${(duaCounts[dua.id] ?? dua.repeat ?? 1) === 0 ? 'bg-slate-300' : 'bg-[#1FAA59]'}`}
                    />
                  </div>
                </Card>
              </motion.div>
            ) : (
              <div className="text-center p-20 glass-card rounded-[3rem]">
                <Sparkles className="mx-auto text-[#1FAA59]/20 mb-4" size={48} />
                <p className="text-slate-500 font-bold">{lang === 'ar' ? 'انتظرونا.. سيتم إضافة المزيد قريباً' : 'Stay tuned.. more content coming soon'}</p>
              </div>
            )}
          </AnimatePresence>

          {/* Navigation Arrows */}
          {dua && (
            <div className="flex justify-between items-center mt-8 max-w-4xl mx-auto">
              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button 
                  variant="outline" 
                  onClick={prevDua}
                  disabled={currentDuaIndex === 0}
                  className="w-16 h-16 !p-0 !rounded-full"
                >
                  <ChevronLeft className={lang === 'ar' ? 'rotate-180' : ''} size={32} />
                </Button>
              </motion.div>
              
              <div className="flex gap-2">
                {currentCat.items.length <= 15 ? (
                  currentCat.items.map((_: any, i: number) => (
                    <motion.button
                      key={i}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.8 }}
                      onClick={() => setCurrentDuaIndex(i)}
                      className={`w-2.5 h-2.5 rounded-full transition-all ${
                        i === currentDuaIndex ? 'bg-[#1FAA59] w-6' : 'bg-slate-300 dark:bg-white/20 hover:bg-[#1FAA59]/50'
                      }`}
                    />
                  ))
                ) : (
                  <span className="text-sm font-black text-slate-400 uppercase tracking-widest">
                    {currentDuaIndex + 1} / {currentCat.items.length}
                  </span>
                )}
              </div>

              <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }}>
                <Button 
                  variant="primary" 
                  onClick={nextDua}
                  disabled={currentDuaIndex === currentCat.items.length - 1}
                  className="w-16 h-16 !p-0 !rounded-full shadow-[#1FAA59]/40"
                >
                  <ChevronRight className={lang === 'ar' ? 'rotate-180' : ''} size={32} />
                </Button>
              </motion.div>
            </div>
          )}
        </div>
      </motion.div>
    );
  };

  const renderFard = () => (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-5xl mx-auto space-y-12">
      <div className="text-center space-y-3">
        <Badge className="mx-auto block w-fit">{lang === 'ar' ? 'الصلوات المفروضة' : 'Obligatory Prayers'}</Badge>
        <h2 className="text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">{t.fard.title}</h2>
        <p className="text-lg text-slate-500 font-medium">{t.fard.selectPrayer}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {t.fard.items.map((item: any, idx: number) => (
          <motion.div 
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Card className="h-full flex flex-col group relative overflow-hidden border-white/10 hover:bg-white dark:hover:bg-slate-800 transition-all duration-500">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#1FAA59]/5 rounded-full translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-700"></div>
              
              <div className="flex justify-between items-start mb-8 relative z-10">
                <div className="space-y-1">
                  <h3 className="text-3xl font-black text-slate-900 dark:text-white group-hover:text-[#1FAA59] transition-colors">{item.title}</h3>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#1FAA59] shadow-[0_0_8px_rgba(31,170,89,1)]"></span>
                    <span className="text-[#1FAA59] font-black text-sm uppercase tracking-widest">{item.rakats} {t.fard.rakats}</span>
                  </div>
                </div>
                <div className="w-16 h-16 rounded-[2rem] bg-slate-50 dark:bg-white/5 flex items-center justify-center group-hover:rotate-6 transition-all ring-1 ring-inset ring-white/10">
                  <BookOpen size={28} className="text-[#1FAA59]" />
                </div>
              </div>
              <p className="text-slate-500 dark:text-slate-400 mb-10 leading-relaxed text-lg flex-grow">{item.desc}</p>
              <Button onClick={() => startTraining(item.id)} className="w-full h-14 group-hover:shadow-[#1FAA59]/30 transition-all">
                <Play fill="currentColor" size={20} />
                {lang === 'ar' ? 'ابدأ التعلم الآن' : 'Start Learning Now'}
              </Button>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );

  const renderSunnah = () => (
    <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-5xl mx-auto space-y-12">
      <div className="text-center space-y-3">
        <Badge className="mx-auto block w-fit bg-[#FFD166]/10 text-[#FFD166] border-[#FFD166]/20">Recommended</Badge>
        <h2 className="text-5xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">{t.sunnah.title}</h2>
        <p className="text-lg text-slate-500 font-medium">{t.sunnah.selectPrayer}</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {t.sunnah.items.map((item: any, idx: number) => (
          <motion.div 
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Card className="h-full flex flex-col group relative overflow-hidden border-dashed border-[#FFD166]/30 hover:border-[#FFD166] hover:bg-white dark:hover:bg-slate-800 transition-all duration-500">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFD166]/5 rounded-full translate-x-1/2 -translate-y-1/2 group-hover:scale-150 transition-transform duration-700"></div>
              
              <div className="flex justify-between items-start mb-8 relative z-10">
                <div className="space-y-1">
                  <h3 className="text-3xl font-black text-[#FFD166]">{item.title}</h3>
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-[#FFD166] shadow-[0_0_8px_rgba(255,209,102,1)]"></span>
                    <span className="text-[#FFD166] font-black text-sm uppercase tracking-widest">{item.rakats} {t.sunnah.rakats}</span>
                  </div>
                </div>
                <div className="w-16 h-16 rounded-[2rem] bg-[#FFD166]/5 flex items-center justify-center group-hover:rotate-6 transition-all ring-1 ring-inset ring-[#FFD166]/10">
                  <Sparkles size={28} className="text-[#FFD166]" />
                </div>
              </div>
              <p className="text-slate-500 dark:text-slate-400 mb-10 leading-relaxed text-lg flex-grow">{item.desc}</p>
              
              <Button variant="secondary" onClick={() => startTraining(item.id)} className="w-full h-14 group-hover:shadow-[#FFD166]/30 transition-all">
                <Play fill="currentColor" size={20} />
                {lang === 'ar' ? 'ابدأ التدريب' : 'Start Training'}
              </Button>
            </Card>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );

  const renderPrayerTimes = () => {
    const prayerKeys: any[] = ['Fajr', 'Sunrise', 'Dhuhr', 'Asr', 'Maghrib', 'Isha'];
    
    const formatTime = (time: string) => {
      if (!time) return '';
      const cleanTime = time.split(' ')[0];
      const [hours, minutes] = cleanTime.split(':').map(Number);
      const isPM = hours >= 12;
      const h = hours % 12 || 12;
      const m = minutes.toString().padStart(2, '0');
      const ampm = lang === 'ar' ? (isPM ? 'م' : 'ص') : (isPM ? 'PM' : 'AM');
      return `${h}:${m} ${ampm}`;
    };

    return (
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl mx-auto"
      >
        <Card className="p-10 !rounded-[3rem] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#1FAA59]/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2"></div>
          
          <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-8">
            <div className="flex items-center gap-6">
              <div className="w-20 h-20 rounded-[2rem] bg-gradient-to-br from-[#1FAA59] to-[#146c3a] text-white flex items-center justify-center shadow-2xl shadow-[#1FAA59]/20">
                <Clock size={40} strokeWidth={2.5} />
              </div>
              <div className="space-y-1">
                <h2 className="text-4xl font-black text-slate-900 dark:text-white">{t.prayerTimes.title}</h2>
                <div className="flex items-center gap-2 text-slate-500 font-bold">
                  <MapPin size={16} />
                  <span>{t.prayerTimes.locationDesc(userLocation ? userLocation.city : CAPITALS[lang].city)}</span>
                  <button onClick={() => setShowLocationPicker(true)} className="text-[#1FAA59] hover:underline mx-2 tracking-tight">({lang === 'ar' ? 'تغيير' : 'Change'})</button>
                </div>
              </div>
            </div>
            <Button variant="ghost" onClick={getPrayerTimes} className="w-14 h-14 !rounded-2xl border border-slate-200 dark:border-white/10">
              <RotateCcw size={24} className={!prayerTimes ? 'animate-spin' : ''} />
            </Button>
          </div>

          <div className="grid grid-cols-1 gap-4">
            {prayerTimes === 'error' ? (
              <div className="py-24 flex flex-col items-center gap-6">
                <div className="w-20 h-20 rounded-full bg-red-500/10 flex items-center justify-center text-red-500">
                  <X size={40} />
                </div>
                <div className="text-center space-y-2">
                  <p className="font-black text-xl text-slate-900 dark:text-white">
                    {lang === 'ar' ? 'فشل تحميل المواقيت' : 'Failed to load times'}
                  </p>
                  <p className="text-sm text-slate-500">
                    {lang === 'ar' ? 'يرجى التحقق من اتصالك بالإنترنت أو محاولة تغيير الموقع' : 'Please check your connection or try changing location'}
                  </p>
                </div>
                <Button onClick={() => { setPrayerTimes(null); getPrayerTimes(); }} variant="outline">
                   {lang === 'ar' ? 'إعادة المحاولة' : 'Retry'}
                </Button>
              </div>
            ) : prayerTimes ? (
              prayerKeys.map((key, idx) => (
                <motion.div 
                  key={key}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="group flex flex-col sm:flex-row items-center justify-between p-8 rounded-[2.5rem] bg-slate-50/50 dark:bg-white/5 border border-slate-200 dark:border-white/5 hover:border-[#1FAA59]/30 transition-all cursor-pointer relative overflow-hidden"
                >
                  <div className="absolute inset-y-0 left-0 w-1 bg-[#1FAA59] scale-y-0 group-hover:scale-y-100 transition-transform origin-top duration-500"></div>
                  
                  <div className="flex items-center gap-3 md:gap-8 mb-4 sm:mb-0">
                    <motion.button
                      whileTap={{ scale: 0.8 }}
                      onClick={() => togglePrayerComplete(key)}
                      className={`w-12 h-12 rounded-2xl flex items-center justify-center border-2 transition-all duration-300 ${
                        prayerCompleted[key] 
                        ? 'bg-[#1FAA59] border-[#1FAA59] text-white shadow-lg shadow-[#1FAA59]/30' 
                        : 'border-slate-200 dark:border-white/10 text-transparent hover:border-[#1FAA59]/50'
                      }`}
                    >
                      <Check size={24} strokeWidth={4} />
                    </motion.button>
                    <div>
                      <div className="text-xs font-black text-slate-400 dark:text-slate-500 uppercase tracking-[0.2em]">
                        {t.trainer.prayers[key.toLowerCase() as keyof typeof t.trainer.prayers]}
                      </div>
                      <div className="text-4xl font-black text-slate-900 dark:text-white font-mono tracking-tighter">
                        {formatTime(prayerTimes[key])}
                      </div>
                    </div>
                  </div>
                  
                  {key !== 'Sunrise' && (
                    <button
                      onClick={() => toggleReminder(key)}
                      className={`flex items-center gap-3 px-8 py-4 rounded-2xl text-xs font-black uppercase tracking-widest transition-all ${
                        reminders[key] 
                          ? 'bg-[#1FAA59] text-white shadow-xl shadow-[#1FAA59]/20' 
                          : 'bg-white dark:bg-slate-800 text-slate-400 dark:text-slate-500 border border-slate-200 dark:border-transparent hover:border-[#1FAA59]/30'
                      }`}
                    >
                      {reminders[key] ? <Bell size={18} /> : <BellOff size={18} />}
                      <span>{t.prayerTimes.reminder}</span>
                    </button>
                  )}
                </motion.div>
              ))
            ) : (
              <div className="py-24 flex flex-col items-center gap-6 opacity-50">
                <div className="w-16 h-16 border-4 border-[#1FAA59] border-t-transparent rounded-full animate-spin"></div>
                <p className="font-black text-xl tracking-tighter">{t.prayerTimes.loading}</p>
              </div>
            )}
          </div>

          <div className="mt-12 pt-12 border-t border-slate-200 dark:border-white/10 space-y-6">
            <h3 className="text-xs font-black text-slate-400 dark:text-slate-600 uppercase tracking-[0.3em]">
              {t.prayerTimes.notificationMsg}
            </h3>
            <div className="relative">
              <input 
                type="text"
                value={customMessage}
                onChange={(e) => {
                  setCustomMessage(e.target.value);
                  localStorage.setItem('noor_reminder_message', e.target.value);
                }}
                placeholder={t.prayerTimes.notificationBody('...')}
                className="w-full h-16 bg-slate-50/50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl px-8 text-slate-900 dark:text-white font-bold focus:outline-none focus:ring-4 focus:ring-[#1FAA59]/10 transition-all"
              />
              <Badge className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none hidden sm:block">Custom</Badge>
            </div>
          </div>
        </Card>
      </motion.div>
    );
  };


  const renderLocationPicker = () => {
    if (!showLocationPicker) return null;

    const handleSelectCountry = (country: LocationData) => {
      setTempCountry(country);
    };

    const handleSelectCity = (city: { name: string; nameEn: string }) => {
      if (!tempCountry) return;
      const newLoc = {
        country: tempCountry.country,
        city: city.name,
        countryEn: tempCountry.countryEn,
        cityEn: city.nameEn,
      };
      setUserLocation(newLoc);
      localStorage.setItem('noor_location', JSON.stringify(newLoc));
      setShowLocationPicker(false);
      setTempCountry(null);
    };

    return (
      <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
        <motion.div 
           initial={{ opacity: 0 }}
           animate={{ opacity: 1 }}
           className="absolute inset-0 bg-slate-900/60 dark:bg-black/80 backdrop-blur-md"
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          className="relative w-full max-w-2xl glass-card !rounded-[3rem] p-10 md:p-14 overflow-hidden border-white/20"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#1FAA59]/10 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
          
          <div className="flex justify-between items-start mb-12 relative z-10">
            <div className="space-y-2">
              <Badge>{lang === 'ar' ? 'إعدادات الموقع' : 'Location Settings'}</Badge>
              <h2 className="text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tighter">
                {tempCountry ? (lang === 'ar' ? `اختر المدينة (${tempCountry.country})` : `Select City (${tempCountry.countryEn})`) : (lang === 'ar' ? 'اختر دولتك' : 'Select Country')}
              </h2>
            </div>
            {userLocation && (
              <button 
                onClick={() => { setShowLocationPicker(false); setTempCountry(null); }} 
                className="w-12 h-12 rounded-full border border-white/10 flex items-center justify-center text-slate-400 hover:text-white transition-colors"
              >
                <X size={24} />
              </button>
            )}
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 max-h-[50vh] overflow-y-auto pr-4 custom-scrollbar relative z-10">
            {tempCountry ? (
              tempCountry.cities.map((city: any) => (
                <button
                  key={city.nameEn}
                  onClick={() => handleSelectCity(city)}
                  className="p-6 rounded-[2rem] bg-white/5 border border-white/10 text-center transition-all hover:bg-[#1FAA59] hover:text-white hover:shadow-xl hover:shadow-[#1FAA59]/20 font-bold group"
                >
                   <MapPin className="mx-auto mb-3 opacity-30 group-hover:opacity-100 transition-opacity" size={24} />
                  <span className="block">{lang === 'ar' ? city.name : city.nameEn}</span>
                </button>
              ))
            ) : (
              ARABIC_LOCATIONS.map((country) => (
                <button
                  key={country.countryEn}
                  onClick={() => handleSelectCountry(country)}
                  className="p-6 rounded-[2rem] bg-white/5 border border-white/10 transition-all hover:bg-white/10 hover:border-[#1FAA59]/50 font-bold group text-center"
                >
                   <Languages className="mx-auto mb-3 text-[#1FAA59]/40 group-hover:text-[#1FAA59] transition-colors" size={24} strokeWidth={3} />
                  <span className="block text-slate-900 dark:text-white">{lang === 'ar' ? country.country : country.countryEn}</span>
                </button>
              ))
            )}
          </div>

          {tempCountry && (
            <div className="mt-8 relative z-10">
              <Button variant="ghost" onClick={() => setTempCountry(null)} className="w-full h-14 !rounded-2xl border border-white/5">
                <ChevronLeft className={lang === 'ar' ? 'rotate-180' : ''} />
                {lang === 'ar' ? 'الرجوع لاختيار الدولة' : 'Back to Country Selection'}
              </Button>
            </div>
          )}
        </motion.div>
      </div>
    );
  };

  return (
    <div className={`min-h-screen mesh-gradient transition-colors duration-500 ${lang === 'ar' ? 'font-arabic' : ''}`} dir={lang === 'ar' ? 'rtl' : 'ltr'}>
      <AnimatePresence>
        {showApiKeyOnboarding && <ApiKeyOnboarding onSave={saveApiKey} lang={lang} />}
      </AnimatePresence>
      {renderRakatSelector()}
      {renderLocationPicker()}
      
      {/* Mesh Elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], x: [0, 50, 0], y: [0, 30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -top-[20%] -left-[10%] w-[60%] h-[60%] bg-[#1FAA59]/10 blur-[150px] rounded-full"
        />
        <motion.div 
          animate={{ scale: [1, 1.1, 1], x: [0, -40, 0], y: [0, 60, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-[20%] -right-[10%] w-[60%] h-[60%] bg-blue-600/10 blur-[150px] rounded-full"
        />
      </div>

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-[100] h-20 md:h-24 flex items-center glass border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 md:px-8 w-full flex justify-between items-center">
          {/* Left: Brand Identity */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 md:gap-5 cursor-pointer group" 
            onClick={() => setActiveSection('home')}
          >
            <div className="w-10 h-10 md:w-14 md:h-14 rounded-2xl bg-gradient-to-br from-[#1FAA59] to-[#128C45] flex items-center justify-center shadow-xl shadow-[#1FAA59]/20 transform group-hover:rotate-6 transition-transform">
              <Sparkles className="text-white" size={24} />
            </div>
            <div className="flex flex-col">
              <h1 className="text-h3 font-black text-slate-900 dark:text-white tracking-widest uppercase leading-none group-hover:text-[#1FAA59] transition-colors">{t.nav.logo}</h1>
              <span className="text-subtext font-bold text-[#1FAA59] tracking-[0.2em] md:tracking-[0.3em] uppercase mt-1 opacity-60">Islamic App</span>
            </div>
          </motion.div>

          {/* Right: System Actions */}
          <div className="flex items-center gap-2 md:gap-4">
            {/* Language Selector (Moved Left) */}
            <div className="relative">
              <motion.div whileTap={{ scale: 0.9 }}>
                <Button
                  onClick={() => setIsLangOpen(!isLangOpen)}
                  className={`w-10 h-10 md:w-14 md:h-12 !p-0 !rounded-2xl transition-all shadow-lg flex items-center justify-center ${
                    isLangOpen ? 'bg-slate-900 text-white' : 'bg-[#1FAA59] text-white shadow-[#1FAA59]/20'
                  }`}
                >
                  <Languages size={20} />
                </Button>
              </motion.div>

              <AnimatePresence>
                {isLangOpen && (
                  <>
                    <div 
                      className="fixed inset-0 z-[100]" 
                      onClick={() => setIsLangOpen(false)} 
                    />
                    
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className="dropdown-menu"
                    >
                      <div className="dropdown-header">
                        <div className="flex items-center gap-2">
                          <Languages size={18} className="text-[#1FAA59]" />
                          <span className="text-xs font-black text-slate-400 uppercase tracking-widest">{lang === 'ar' ? 'اللغة' : 'Language'}</span>
                        </div>
                      </div>

                      <div className="dropdown-content">
                        {/* Compact language grid */}
                        <div className="grid grid-cols-1 gap-1">
                          {(['ar', 'en', 'fr', 'es', 'ur', 'id', 'tr', 'de', 'ru', 'bn'] as Language[]).map((l) => (
                            <motion.button
                              key={l}
                              whileHover={{ x: 4 }}
                              whileTap={{ scale: 0.98 }}
                              onClick={() => { setLang(l); setIsLangOpen(false); }}
                              className={`flex items-center justify-between px-4 py-3 rounded-2xl transition-all group/lang ${
                                lang === l 
                                ? 'bg-[#1FAA59]/10 text-[#1FAA59] font-bold' 
                                : 'hover:bg-slate-100 dark:hover:bg-white/5 text-slate-600 dark:text-slate-400'
                              }`}
                            >
                              <div className="flex items-center gap-3">
                                <span className="text-[10px] font-black uppercase w-6">{l}</span>
                                <span className="text-sm truncate">
                                  {l === 'ar' && 'Arabic'}
                                  {l === 'en' && 'English'}
                                  {l === 'fr' && 'French'}
                                  {l === 'es' && 'Spanish'}
                                  {l === 'ur' && 'Urdu'}
                                  {l === 'id' && 'Indonesian'}
                                  {l === 'tr' && 'Turkish'}
                                  {l === 'de' && 'German'}
                                  {l === 'ru' && 'Russian'}
                                  {l === 'bn' && 'Bengali'}
                                </span>
                              </div>
                              <span className="font-arabic text-sm opacity-60">
                                {l === 'ar' && 'العربية'}
                                {l === 'en' && 'English'}
                                {l === 'fr' && 'Français'}
                                {l === 'es' && 'Español'}
                                {l === 'ur' && 'اردو'}
                                {l === 'id' && 'Indonesia'}
                                {l === 'tr' && 'Türkçe'}
                                {l === 'de' && 'Deutsch'}
                                {l === 'ru' && 'Pусский'}
                                {l === 'bn' && 'বাংলা'}
                              </span>
                            </motion.button>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>

            {/* Settings Toggle */}
            <div className="relative">
              <motion.div whileTap={{ scale: 0.9 }}>
                <Button
                  variant={isSettingsOpen ? 'primary' : 'ghost'}
                  onClick={() => {
                    setIsSettingsOpen(!isSettingsOpen);
                    setIsLangOpen(false);
                  }}
                  className={`w-10 h-10 md:w-14 md:h-12 !p-0 !rounded-2xl transition-all shadow-lg flex items-center justify-center ${
                    isSettingsOpen ? 'bg-slate-900 text-white' : 'bg-white/40 dark:bg-white/5 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-white/10'
                  }`}
                >
                  <Settings2 size={24} className={isSettingsOpen ? 'animate-spin-slow' : ''} />
                </Button>
              </motion.div>

              <AnimatePresence>
                {isSettingsOpen && (
                  <>
                    <div 
                      className="fixed inset-0 z-[100]" 
                      onClick={() => setIsSettingsOpen(false)} 
                    />
                    <motion.div
                      initial={{ opacity: 0, y: 10, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 10, scale: 0.95 }}
                      className="dropdown-menu"
                    >
                      <div className="dropdown-header">
                        <div className="flex items-center gap-2">
                          <Settings2 size={18} className="text-indigo-500" />
                          <span className="text-xs font-black text-slate-400 uppercase tracking-widest">{t.settings.title}</span>
                        </div>
                      </div>

                      <div className="dropdown-content">
                        <div className="space-y-6">
                          {/* Font Size Section */}
                          <div className="space-y-3">
                            <div className="flex items-center justify-between px-2">
                              <span className="font-bold text-xs text-slate-500 uppercase tracking-tight">{t.settings.fontSize}</span>
                              <Badge variant="outline" className="text-[10px] px-2 border-[#1FAA59]/10 text-[#1FAA59] bg-[#1FAA59]/5">{Math.round(fontScale * 100)}%</Badge>
                            </div>

                            <div className="grid grid-cols-2 gap-2">
                              {[
                                { value: 0.85, label: t.settings.fontScale.small, desc: 'A' },
                                { value: 1.0, label: t.settings.fontScale.medium, desc: 'AA' },
                                { value: 1.2, label: t.settings.fontScale.large, desc: 'AAA' },
                                { value: 1.4, label: t.settings.fontScale.extraLarge, desc: 'AAAA' }
                              ].map((option) => (
                                <button
                                  key={option.value}
                                  onClick={() => setFontScale(option.value)}
                                  className={`px-3 py-4 rounded-2xl text-left transition-all border-2 flex flex-col gap-1 ${
                                    Math.abs(fontScale - option.value) < 0.01
                                    ? 'bg-[#1FAA59] text-white border-[#1FAA59] shadow-lg shadow-[#1FAA59]/10'
                                    : 'bg-slate-50 dark:bg-white/5 text-slate-600 dark:text-slate-300 border-transparent hover:border-slate-200 dark:hover:border-white/10'
                                  }`}
                                >
                                  <span className="text-[11px] font-black opacity-60 uppercase tracking-widest">{option.desc}</span>
                                  <span className="text-[10px] font-bold">{option.label}</span>
                                </button>
                              ))}
                            </div>
                          </div>

                          {/* Theme Section */}
                          <div className="space-y-6 pt-4 border-t border-slate-100 dark:border-white/5">
                            {/* Vibration Toggle */}
                            <Button 
                              variant="ghost" 
                              onClick={() => setIsVibrateEnabled(!isVibrateEnabled)}
                              className="w-full justify-between px-4 h-14 rounded-2xl bg-slate-50 dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 transition-all border border-transparent"
                            >
                              <div className="flex items-center gap-3">
                                <div className={`w-8 h-8 rounded-xl flex items-center justify-center transition-colors ${isVibrateEnabled ? 'bg-orange-500/10 text-orange-400' : 'bg-slate-500/10 text-slate-500'}`}>
                                  <Zap size={18} />
                                </div>
                                <span className="text-sm font-bold">{lang === 'ar' ? 'الاهتزاز عند النقر' : 'Vibrate on Tap'}</span>
                              </div>
                              <div className={`w-10 h-6 rounded-full relative transition-colors ${isVibrateEnabled ? 'bg-[#1FAA59]' : 'bg-slate-300 dark:bg-white/20'}`}>
                                <motion.div 
                                  animate={{ x: isVibrateEnabled ? 18 : 3 }}
                                  className="absolute top-1.5 left-0 w-3 h-3 bg-white rounded-full shadow-md"
                                />
                              </div>
                            </Button>

                            <Button 
                              variant="ghost" 
                              onClick={toggleTheme}
                              className="w-full justify-between px-4 h-14 rounded-2xl bg-slate-50 dark:bg-white/5 hover:bg-slate-100 dark:hover:bg-white/10 transition-all border border-transparent"
                            >
                              <div className="flex items-center gap-3">
                                <div className={`w-8 h-8 rounded-xl flex items-center justify-center transition-colors ${isDarkMode ? 'bg-indigo-500/10 text-indigo-400' : 'bg-orange-500/10 text-orange-500'}`}>
                                  {isDarkMode ? <Moon size={18} /> : <Sun size={18} />}
                                </div>
                                <span className="text-sm font-bold">{lang === 'ar' ? 'الوضع الليلي' : 'Dark Mode'}</span>
                              </div>
                              <div className={`w-10 h-6 rounded-full relative transition-colors ${isDarkMode ? 'bg-[#1FAA59]' : 'bg-slate-300 dark:bg-white/20'}`}>
                                <motion.div 
                                  animate={{ x: isDarkMode ? 18 : 3 }}
                                  className="absolute top-1.5 left-0 w-3 h-3 bg-white rounded-full shadow-md"
                                />
                              </div>
                            </Button>

                            {/* API Key Management */}
                            <div className="pt-4 border-t border-slate-100 dark:border-white/5 space-y-3">
                              <span className="font-bold text-xs text-slate-500 uppercase tracking-tight px-2">
                                {lang === 'ar' ? 'مفتاح العلم (Gemini API)' : 'Science Key (Gemini API)'}
                              </span>
                              <div className="relative">
                                <input 
                                  type="password"
                                  value={geminiApiKey}
                                  onChange={(e) => {
                                    setGeminiApiKey(e.target.value);
                                    localStorage.setItem('gemini_api_key', e.target.value);
                                  }}
                                  className="w-full h-12 bg-slate-50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl px-4 text-xs font-mono outline-none focus:border-[#1FAA59] transition-all"
                                  placeholder="Past API Key..."
                                />
                                <div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-2">
                                  <motion.button 
                                    whileTap={{ scale: 0.9 }}
                                    onClick={() => window.open('https://aistudio.google.com/app/apikey', '_blank')}
                                    className="p-2 text-[#1FAA59] hover:bg-[#1FAA59]/10 rounded-lg transition-colors"
                                  >
                                    <Share2 size={14} />
                                  </motion.button>
                                </div>
                              </div>
                              <p className="text-[10px] text-slate-400 font-medium leading-normal px-2">
                                {lang === 'ar' 
                                  ? 'هذا المفتاح ضروري لتشغيل ميزات الذكاء الاصطناعي في التطبيق.' 
                                  : 'This key is essential for powering AI features in the app.'}
                              </p>
                              <Button 
                                variant="outline" 
                                className="w-full h-10 text-xs !rounded-xl"
                                onClick={() => setShowApiKeyOnboarding(true)}
                              >
                                {lang === 'ar' ? 'عرض خطوات الحصول على المفتاح' : 'View steps to get key'}
                              </Button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>

            {/* Theme Toggle (Moved Right) */}
            <motion.div whileTap={{ scale: 0.9 }}>
              <Button
                variant="ghost"
                onClick={toggleTheme}
                className="w-10 h-10 md:w-12 md:h-12 !p-0 !rounded-2xl border border-slate-200 dark:border-white/10 hover:bg-slate-100 dark:hover:bg-white/5 transition-all shadow-sm flex items-center justify-center overflow-hidden"
              >
                <AnimatePresence mode="wait">
                  {isDarkMode ? (
                    <motion.div
                      key="moon"
                      initial={{ y: 20, rotate: 45, opacity: 0 }}
                      animate={{ y: 0, rotate: 0, opacity: 1 }}
                      exit={{ y: -20, rotate: -45, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Moon size={20} className="text-blue-400 fill-blue-400/10" />
                    </motion.div>
                  ) : (
                    <motion.div
                      key="sun"
                      initial={{ y: 20, rotate: 45, opacity: 0 }}
                      animate={{ y: 0, rotate: 0, opacity: 1 }}
                      exit={{ y: -20, rotate: -45, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Sun size={20} className="text-orange-500 fill-orange-500/10" />
                    </motion.div>
                  )}
                </AnimatePresence>
              </Button>
            </motion.div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="pt-28 pb-24 px-6 max-w-7xl mx-auto relative z-10">
        <AnimatePresence mode="wait">
          {activeSection === 'home' && renderHome()}
          {activeSection === 'wudu' && renderWudu()}
          {activeSection === 'salah' && renderSalah()}
          {activeSection === 'train' && renderTrainer()}
          {activeSection === 'times' && renderPrayerTimes()}
          {activeSection === 'duas' && renderDuas()}
          {activeSection === 'fard' && renderFard()}
          {activeSection === 'sunnah' && renderSunnah()}
        </AnimatePresence>
      </main>

      {/* Bottom Navigation (Mobile) */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 glass border-t-0 md:hidden pb-safe">
        <div className="flex justify-around items-center h-24">
          {[
            { id: 'home', icon: Home, label: t.nav.home },
            { id: 'times', icon: Clock, label: t.nav.times },
            { id: 'duas', icon: Heart, label: t.nav.duas },
            { id: 'train', icon: Brain, label: lang === 'ar' ? 'تدريب' : 'Train' },
            { id: 'wudu', icon: Droplets, label: t.nav.wudu },
          ].map((item) => (
            <motion.button
              key={item.id}
              whileTap={{ scale: 0.9 }}
              onClick={() => setActiveSection(item.id as any)}
              className={`flex flex-col items-center gap-2 transition-all px-6 relative ${
                activeSection === item.id ? 'text-[#1FAA59]' : 'text-slate-400 dark:text-slate-500'
              }`}
            >
              {activeSection === item.id && (
                <motion.div 
                  layoutId="activeNav"
                  className="absolute -top-1 w-12 h-1 bg-[#1FAA59] rounded-full shadow-[0_0_15px_rgba(31,170,89,0.5)]"
                />
              )}
              <item.icon size={26} strokeWidth={activeSection === item.id ? 2.5 : 2} />
              <span className="text-[10px] font-black uppercase tracking-widest">{item.label}</span>
            </motion.button>
          ))}
        </div>
      </nav>

      {/* Global Audio for Fatiha */}
      <audio 
        ref={fatihaAudioRef} 
        src={FATIHA_AUDIO_URL} 
        onEnded={() => { setIsFatihaPlaying(false); setFatihaProgress(0); }}
        onTimeUpdate={onTimeUpdate}
        className="hidden"
        onError={(e) => {
          const audio = e.currentTarget;
          console.error("Fatiha Audio error:", audio.error?.message);
          setIsFatihaPlaying(false);
        }}
      />

    </div>
  );
}
