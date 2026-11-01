(function(react) {
  "use strict";
  const useAppStore = window.useAppStore;
  const TRANSLATIONS = {
    en: {
      noMediaPlaying: "No media playing",
      playSomething: "Play something in Spotify, YouTube, or any media player",
      unknownArtist: "Unknown Artist",
      detectedYouTubeTabs: "Detected YouTube Tabs",
      pasteVideoUrl: "Paste a video URL:",
      openBtn: "Open",
      cancelBtn: "Cancel",
      pipVideo: "PIP Video",
      closePip: "Close PIP",
      videoDetected: "Video detected — open in PiP",
      openPipTooltip: "Open video in Picture-in-Picture",
      close: "Close",
      previous: "Previous",
      next: "Next",
      play: "Play",
      pause: "Pause",
      pictureInPicture: "Picture in picture",
      statePlaying: "Playing",
      statePaused: "Paused",
      pipActiveNote: "Video is open in a floating window"
    },
    tr: {
      noMediaPlaying: "Medya oynatılmıyor",
      playSomething: "Spotify, YouTube veya herhangi bir oynatıcıdan bir şeyler açın",
      unknownArtist: "Bilinmeyen Sanatçı",
      detectedYouTubeTabs: "Algılanan YouTube Sekmeleri",
      pasteVideoUrl: "Bir video URL'si yapıştırın:",
      openBtn: "Aç",
      cancelBtn: "İptal",
      pipVideo: "PIP Video",
      closePip: "PIP Kapat",
      videoDetected: "Video algılandı — PiP'te aç",
      openPipTooltip: "Videoyu Resim-İçinde-Resim modunda aç",
      close: "Kapat",
      previous: "Önceki",
      next: "Sonraki",
      play: "Oynat",
      pause: "Duraklat",
      pictureInPicture: "Resim içinde resim",
      statePlaying: "Çalıyor",
      statePaused: "Duraklatıldı",
      pipActiveNote: "Video yüzen pencerede açık"
    },
    de: {
      noMediaPlaying: "Keine Medienwiedergabe",
      playSomething: "Spielen Sie etwas in Spotify, YouTube oder einem Mediaplayer ab",
      unknownArtist: "Unbekannter Künstler",
      detectedYouTubeTabs: "Erkannte YouTube-Tabs",
      pasteVideoUrl: "Fügen Sie eine Video-URL ein:",
      openBtn: "Öffnen",
      cancelBtn: "Abbrechen",
      pipVideo: "PIP Video",
      closePip: "PIP schließen",
      videoDetected: "Video erkannt — in PiP öffnen",
      openPipTooltip: "Video in Bild-in-Bild öffnen",
      close: "Schließen",
      previous: "Zurück",
      next: "Weiter",
      play: "Wiedergabe",
      pause: "Pause",
      pictureInPicture: "Bild-in-Bild",
      statePlaying: "Wiedergabe",
      statePaused: "Pausiert",
      pipActiveNote: "Video ist in einem schwebenden Fenster geöffnet"
    },
    ar: {
      noMediaPlaying: "لا يوجد وسائط قيد التشغيل",
      playSomething: "قم بتشغيل شيء من Spotify أو YouTube أو أي مشغل",
      unknownArtist: "فنان غير معروف",
      detectedYouTubeTabs: "علامات تبويب YouTube المكتشفة",
      pasteVideoUrl: "ألصق رابط فيديو:",
      openBtn: "فتح",
      cancelBtn: "إلغاء",
      pipVideo: "فيديو PIP",
      closePip: "إغلاق PIP",
      videoDetected: "تم اكتشاف فيديو — فتح في PiP",
      openPipTooltip: "فتح الفيديو في وضع صورة داخل صورة",
      close: "إغلاق",
      previous: "السابق",
      next: "التالي",
      play: "تشغيل",
      pause: "إيقاف مؤقت",
      pictureInPicture: "صورة داخل صورة",
      statePlaying: "قيد التشغيل",
      statePaused: "متوقف مؤقتًا",
      pipActiveNote: "الفيديو مفتوح في نافذة عائمة"
    },
    zh: {
      noMediaPlaying: "没有播放媒体",
      playSomething: "在 Spotify、YouTube 或任何媒体播放器中播放内容",
      unknownArtist: "未知艺术家",
      detectedYouTubeTabs: "检测到的 YouTube 标签页",
      pasteVideoUrl: "粘贴视频 URL：",
      openBtn: "打开",
      cancelBtn: "取消",
      pipVideo: "画中画视频",
      closePip: "关闭画中画",
      videoDetected: "检测到视频 — 在画中画中打开",
      openPipTooltip: "在画中画中打开视频",
      close: "关闭",
      previous: "上一首",
      next: "下一首",
      play: "播放",
      pause: "暂停",
      pictureInPicture: "画中画",
      statePlaying: "正在播放",
      statePaused: "已暂停",
      pipActiveNote: "视频已在悬浮窗口中打开"
    },
    fr: {
      noMediaPlaying: "Aucun média en cours",
      playSomething: "Lisez quelque chose sur Spotify, YouTube ou tout autre lecteur",
      unknownArtist: "Artiste inconnu",
      detectedYouTubeTabs: "Onglets YouTube détectés",
      pasteVideoUrl: "Collez une URL de vidéo :",
      openBtn: "Ouvrir",
      cancelBtn: "Annuler",
      pipVideo: "Vidéo PIP",
      closePip: "Fermer PIP",
      videoDetected: "Vidéo détectée — ouvrir en PiP",
      openPipTooltip: "Ouvrir la vidéo en mode Image dans l'image",
      close: "Fermer",
      previous: "Précédent",
      next: "Suivant",
      play: "Lecture",
      pause: "Pause",
      pictureInPicture: "Image dans l'image",
      statePlaying: "En lecture",
      statePaused: "En pause",
      pipActiveNote: "La vidéo est ouverte dans une fenêtre flottante"
    },
    hi: {
      noMediaPlaying: "कोई मीडिया नहीं चल रहा है",
      playSomething: "Spotify, YouTube या किसी मीडिया प्लेयर में कुछ चलाएं",
      unknownArtist: "अज्ञात कलाकार",
      detectedYouTubeTabs: "पता लगाए गए YouTube टैब",
      pasteVideoUrl: "वीडियो URL पेस्ट करें:",
      openBtn: "खोलें",
      cancelBtn: "रद्द करें",
      pipVideo: "पीआईपी वीडियो",
      closePip: "पीआईपी बंद करें",
      videoDetected: "वीडियो का पता चला - PiP में खोलें",
      openPipTooltip: "पिक्चर-इन-पिक्चर में वीडियो खोलें",
      close: "बंद करें",
      previous: "पिछला",
      next: "अगला",
      play: "चलाएं",
      pause: "रोकें",
      pictureInPicture: "पिक्चर-इन-पिक्चर",
      statePlaying: "चल रहा है",
      statePaused: "रुका हुआ",
      pipActiveNote: "वीडियो फ़्लोटिंग विंडो में खुला है"
    },
    es: {
      noMediaPlaying: "No se reproduce multimedia",
      playSomething: "Reproduce algo en Spotify, YouTube o cualquier reproductor",
      unknownArtist: "Artista desconocido",
      detectedYouTubeTabs: "Pestañas de YouTube detectadas",
      pasteVideoUrl: "Pega una URL de video:",
      openBtn: "Abrir",
      cancelBtn: "Cancelar",
      pipVideo: "Video PIP",
      closePip: "Cerrar PIP",
      videoDetected: "Video detectado — abrir en PiP",
      openPipTooltip: "Abrir video en Picture-in-Picture",
      close: "Cerrar",
      previous: "Anterior",
      next: "Siguiente",
      play: "Reproducir",
      pause: "Pausa",
      pictureInPicture: "Imagen en imagen",
      statePlaying: "Reproduciendo",
      statePaused: "En pausa",
      pipActiveNote: "El video está abierto en una ventana flotante"
    },
    ja: {
      noMediaPlaying: "メディアが再生されていません",
      playSomething: "Spotify、YouTube、またはメディアプレーヤーで何かを再生",
      unknownArtist: "不明なアーティスト",
      detectedYouTubeTabs: "検出された YouTube タブ",
      pasteVideoUrl: "動画のURLを貼り付け：",
      openBtn: "開く",
      cancelBtn: "キャンセル",
      pipVideo: "PIPビデオ",
      closePip: "PIPを閉じる",
      videoDetected: "動画を検出しました — PiPで開く",
      openPipTooltip: "ピクチャーインピクチャーで動画を開く",
      close: "閉じる",
      previous: "前へ",
      next: "次へ",
      play: "再生",
      pause: "一時停止",
      pictureInPicture: "ピクチャーインピクチャー",
      statePlaying: "再生中",
      statePaused: "一時停止中",
      pipActiveNote: "動画をフローティングウィンドウで開いています"
    },
    ru: {
      noMediaPlaying: "Нет воспроизводимого медиа",
      playSomething: "Включите что-нибудь в Spotify, YouTube или другом плеере",
      unknownArtist: "Неизвестный исполнитель",
      detectedYouTubeTabs: "Обнаруженные вкладки YouTube",
      pasteVideoUrl: "Вставьте URL видео:",
      openBtn: "Открыть",
      cancelBtn: "Отмена",
      pipVideo: "PIP Видео",
      closePip: "Закрыть PIP",
      videoDetected: "Видео обнаружено — открыть в PiP",
      openPipTooltip: "Открыть видео в режиме 'Картинка в картинке'",
      close: "Закрыть",
      previous: "Назад",
      next: "Далее",
      play: "Воспроизвести",
      pause: "Пауза",
      pictureInPicture: "Картинка в картинке",
      statePlaying: "Играет",
      statePaused: "Пауза",
      pipActiveNote: "Видео открыто в плавающем окне"
    }
  };
  const ICON_FONT = "'Material Symbols Rounded', 'Material Symbols Outlined'";
  const iconStyle = (size, fill = 0) => ({
    fontFamily: ICON_FONT,
    fontSize: size,
    fontVariationSettings: `'FILL' ${fill}, 'wght' 400`,
    lineHeight: 1
  });
  const BAR_ID = "koplayer-plugin-panel";
  const LEVEL_COUNT = 5;
  const BAR_TEXT = {
    en: { playing: "KoPlayer — playing: {title}", paused: "KoPlayer — paused: {title}", idle: "KoPlayer — nothing playing" },
    tr: { playing: "KoPlayer — çalıyor: {title}", paused: "KoPlayer — duraklatıldı: {title}", idle: "KoPlayer — çalan yok" },
    de: { playing: "KoPlayer — spielt: {title}", paused: "KoPlayer — pausiert: {title}", idle: "KoPlayer — keine Wiedergabe" },
    fr: { playing: "KoPlayer — lecture : {title}", paused: "KoPlayer — en pause : {title}", idle: "KoPlayer — rien en lecture" },
    es: { playing: "KoPlayer — reproduciendo: {title}", paused: "KoPlayer — en pausa: {title}", idle: "KoPlayer — nada en reproducción" },
    zh: { playing: "KoPlayer — 正在播放：{title}", paused: "KoPlayer — 已暂停：{title}", idle: "KoPlayer — 没有播放内容" },
    ja: { playing: "KoPlayer — 再生中：{title}", paused: "KoPlayer — 一時停止中：{title}", idle: "KoPlayer — 再生なし" },
    ru: { playing: "KoPlayer — играет: {title}", paused: "KoPlayer — пауза: {title}", idle: "KoPlayer — ничего не играет" },
    ar: { playing: "KoPlayer — قيد التشغيل: {title}", paused: "KoPlayer — متوقف مؤقتًا: {title}", idle: "KoPlayer — لا شيء قيد التشغيل" },
    hi: { playing: "KoPlayer — चल रहा है: {title}", paused: "KoPlayer — रुका हुआ: {title}", idle: "KoPlayer — कुछ नहीं चल रहा" }
  };
  (function setupBarTile() {
    const ext = window.KoBarExtensions;
    if (typeof ext?.setBarItemState !== "function") return;
    const store = window.useAppStore;
    if (!store?.getState || !store?.subscribe) return;
    let visible = true;
    let timer = null;
    let tick = 0;
    const seedOf = (s) => {
      let h = 7;
      for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) % 9973;
      return h;
    };
    const buildLevels = (playing, title) => {
      if (!playing) return new Array(LEVEL_COUNT).fill(0.15);
      const seed = seedOf(title || "");
      const out = [];
      for (let i = 0; i < LEVEL_COUNT; i++) {
        const v = 0.5 + 0.35 * Math.sin(tick * 0.9 + i * 1.7 + seed) + 0.1 * Math.sin(tick * 2.3 + i * 0.6);
        out.push(Math.max(0.1, Math.min(1, v)));
      }
      return out;
    };
    const push = () => {
      try {
        const s = store.getState();
        const media = s.currentMedia;
        const title = media && media.title ? String(media.title) : "";
        const playing = !!(media && title && media.isPlaying);
        const dict = BAR_TEXT[s.language] || BAR_TEXT.en;
        const label = (title ? playing ? dict.playing : dict.paused : dict.idle).replace("{title}", title);
        ext.setBarItemState(BAR_ID, {
          label,
          levels: buildLevels(playing, title),
          playing,
          icon: playing ? "pause" : "play_arrow"
        });
      } catch (e) {
      }
    };
    const stopTimer = () => {
      if (timer) {
        clearInterval(timer);
        timer = null;
      }
    };
    const sync = () => {
      const media = store.getState().currentMedia;
      const playing = !!(media && media.title && media.isPlaying);
      if (visible && playing) {
        if (!timer) timer = setInterval(() => {
          tick += 1;
          push();
        }, 250);
      } else {
        stopTimer();
      }
      push();
    };
    let lastKey = "";
    store.subscribe((s) => {
      const m = s.currentMedia;
      const key = `${m && m.title}|${m && m.isPlaying}|${s.language}`;
      if (key === lastKey) return;
      lastKey = key;
      sync();
    });
    if (typeof ext.onBarItemChange === "function") {
      ext.onBarItemChange(BAR_ID, (info) => {
        visible = !info || info.visible !== false;
        sync();
      });
    } else {
      sync();
    }
  })();
  const SOURCE_NAMES = { chrome: "Chrome", msedge: "Edge", brave: "Brave", firefox: "Firefox", opera: "Opera", vivaldi: "Vivaldi", spotify: "Spotify" };
  function sourceLabel(app) {
    const a = String(app || "").toLowerCase();
    const known = Object.keys(SOURCE_NAMES).find((k) => a.includes(k));
    if (known) return SOURCE_NAMES[known];
    const base = a.replace(/\.exe$/, "").split(/[\\/!]/).pop();
    return base ? base.charAt(0).toUpperCase() + base.slice(1) : "";
  }
  function urlShortLabel(url) {
    try {
      const u = new URL(url);
      const host = u.hostname.replace(/^www\./, "");
      if (host.includes("youtube") || host === "youtu.be") return `YouTube: ${u.searchParams.get("v") || u.pathname.slice(1)}`;
      if (host.includes("youtu.be")) return `YouTube: ${u.pathname.slice(1)}`;
      return `${host}${u.pathname.length > 1 ? u.pathname.slice(0, 24) : ""}`;
    } catch {
      return url.slice(0, 36);
    }
  }
  const DetectedTabItem = ({ url, onPick }) => {
    const [title, setTitle] = react.useState(null);
    const [thumbnail, setThumbnail] = react.useState(null);
    react.useEffect(() => {
      let isMounted = true;
      let videoId = null;
      try {
        const u = new URL(url);
        videoId = u.searchParams.get("v") || (u.hostname.includes("youtu.be") ? u.pathname.slice(1) : null);
        if (videoId && isMounted) {
          setThumbnail(`https://i.ytimg.com/vi/${videoId}/default.jpg`);
        }
      } catch {
      }
      const fetchMeta = async () => {
        try {
          const oembedUrl = `https://www.youtube.com/oembed?url=${encodeURIComponent(url)}&format=json`;
          const res = await fetch(oembedUrl);
          if (!res.ok) throw new Error("oEmbed failed");
          const data = await res.json();
          if (isMounted) {
            setTitle(data.title);
            if (data.thumbnail_url) setThumbnail(data.thumbnail_url);
          }
        } catch (e) {
        }
      };
      fetchMeta();
      return () => {
        isMounted = false;
      };
    }, [url]);
    return /* @__PURE__ */ window.React.createElement(
      "button",
      {
        onClick: () => onPick(url),
        className: "w-full flex items-center text-left",
        style: { gap: 12, minHeight: 48, padding: "4px 8px 4px 4px", flexShrink: 0, border: 0, borderRadius: 16, cursor: "pointer", background: "var(--kb-bg-tile, var(--theme-surface, #242833))", color: "var(--kb-fg-1, #fff)" }
      },
      thumbnail ? /* @__PURE__ */ window.React.createElement("div", { className: "overflow-hidden shrink-0 relative flex items-center justify-center", style: { width: 56, height: 40, borderRadius: 12, background: "var(--kb-bg-inset, rgba(0,0,0,.25))" } }, /* @__PURE__ */ window.React.createElement("img", { src: thumbnail, alt: "", className: "w-full h-full object-cover" }), /* @__PURE__ */ window.React.createElement("div", { className: "absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity" }, /* @__PURE__ */ window.React.createElement("span", { className: "material-symbols-outlined", style: { ...iconStyle(16, 1), color: "#fff" } }, "play_arrow"))) : /* @__PURE__ */ window.React.createElement("span", { className: "material-symbols-outlined shrink-0 text-center", style: { width: 40, fontSize: 24, color: "var(--kb-accent-text, var(--kb-accent, #7c9cff))" } }, "play_circle"),
      /* @__PURE__ */ window.React.createElement("span", { className: "truncate", style: { fontSize: 13, color: "var(--kb-fg-1, #fff)" }, title: title || urlShortLabel(url) }, title || urlShortLabel(url))
    );
  };
  const KoPlayerPopup = ({ onClose, anchorRect }) => {
    const edgePosition = useAppStore((state) => state.edgePosition);
    useAppStore((state) => state.design);
    useAppStore((state) => state.glassOpacity);
    const currentMedia = useAppStore((state) => state.currentMedia);
    const screenBounds = useAppStore((state) => state.screenBounds);
    const isSmartPositioning = useAppStore((state) => state.isPopupSmartPositioning);
    useAppStore((state) => state.isMac);
    const currentLang = useAppStore((state) => state.language) || "en";
    const t = (key) => {
      const langDict = TRANSLATIONS[currentLang] || TRANSLATIONS["en"];
      return langDict[key] || key;
    };
    const popupRef = react.useRef(null);
    const titleRef = react.useRef(null);
    const artistRef = react.useRef(null);
    const [titleOverflows, setTitleOverflows] = react.useState(false);
    const [artistOverflows, setArtistOverflows] = react.useState(false);
    const [pipActive, setPipActive] = react.useState(false);
    const [pipPhase, setPipPhase] = react.useState("idle");
    const [detectedUrls, setDetectedUrls] = react.useState([]);
    const [manualUrl, setManualUrl] = react.useState("");
    const activeVideoUrls = useAppStore((state) => state.activeVideoUrls);
    const currentMediaSourceApp = useAppStore((state) => state.currentMediaSourceApp);
    const BROWSER_IDS = ["chrome", "msedge", "brave", "firefox", "opera", "vivaldi"];
    const isBrowserSource = BROWSER_IDS.some((b) => currentMediaSourceApp.includes(b));
    const filterValidUrls = (urls) => urls.filter((u) => {
      try {
        const parsed = new URL(u);
        const host = parsed.hostname.toLowerCase();
        if (host === "youtube.com" || host.endsWith(".youtube.com")) {
          return parsed.searchParams.has("v");
        }
        if (host === "youtu.be" || host.endsWith(".youtu.be")) {
          return true;
        }
        return true;
      } catch {
        return false;
      }
    });
    const validActiveUrls = filterValidUrls(activeVideoUrls);
    const hasPreCachedVideo = isBrowserSource && validActiveUrls.length > 0;
    react.useEffect(() => {
      if (titleRef.current) setTitleOverflows(titleRef.current.scrollWidth > titleRef.current.clientWidth);
      if (artistRef.current) setArtistOverflows(artistRef.current.scrollWidth > artistRef.current.clientWidth);
    }, [currentMedia?.title, currentMedia?.artist]);
    react.useEffect(() => {
      const unsub = window.api?.onPipClosed?.(() => {
        setPipActive(false);
        setPipPhase("idle");
      });
      return () => unsub?.();
    }, []);
    const sidebarPosition = useAppStore((state) => state.sidebarPosition);
    const orientation = useAppStore((state) => state.orientation);
    const getPopupStyle = () => {
      if (!anchorRect) return { display: "none" };
      const popupHeight = 480;
      const popupWidth = 320;
      const screenHeight = screenBounds?.height ?? 800;
      const screenWidth = screenBounds?.width ?? 1200;
      const offsetTop = sidebarPosition ? sidebarPosition.y : 0;
      const offsetLeft = sidebarPosition ? sidebarPosition.x : 0;
      const style = {
        position: "absolute",
        zIndex: 99999,
        willChange: "transform, opacity",
        transitionProperty: "opacity, transform, filter"
      };
      const screenXInViewport = (screenBounds?.x ?? 0) - window.screenX;
      const screenYInViewport = (screenBounds?.y ?? 0) - window.screenY;
      if (orientation === "horizontal") {
        let adjustedLeft = anchorRect.left - offsetLeft + anchorRect.width / 2 - popupWidth / 2;
        const maxLeft = screenXInViewport + (screenWidth - offsetLeft) - popupWidth - 20;
        const minLeft = screenXInViewport - offsetLeft + 20;
        if (adjustedLeft < minLeft) adjustedLeft = minLeft;
        if (adjustedLeft > maxLeft) adjustedLeft = maxLeft;
        if (!isSmartPositioning) {
          style.left = "50%";
          style.transform = "translateX(-50%)";
        } else {
          style.left = adjustedLeft;
        }
        if (edgePosition === "top") {
          style.top = "100%";
          style.marginTop = "12px";
        } else {
          style.bottom = "100%";
          style.marginBottom = "12px";
        }
      } else {
        let adjustedTop = anchorRect.top - offsetTop - 20 + anchorRect.height / 2 - popupHeight / 2;
        const maxTop = screenYInViewport + (screenHeight - offsetTop) - popupHeight - 20;
        const minTop = screenYInViewport - offsetTop + 20;
        if (adjustedTop < minTop) adjustedTop = minTop;
        if (adjustedTop > maxTop) adjustedTop = maxTop;
        if (!isSmartPositioning) {
          style.top = "50%";
          style.transform = "translateY(-50%)";
        } else {
          style.top = adjustedTop;
        }
        if (edgePosition === "left") {
          style.left = "100%";
          style.marginLeft = "12px";
        } else {
          style.right = "100%";
          style.marginRight = "12px";
        }
      }
      return style;
    };
    const isSmartRef = react.useRef(isSmartPositioning);
    react.useEffect(() => {
      isSmartRef.current = isSmartPositioning;
    }, [isSmartPositioning]);
    react.useEffect(() => {
      const onDrag = (e) => {
        if (!popupRef.current || !anchorRect || !isSmartRef.current) return;
        const newX = e.detail.x;
        const newY = e.detail.y;
        const popupHeight = 480;
        const popupWidth = 320;
        const screenXInViewport = (screenBounds?.x ?? 0) - window.screenX;
        const screenYInViewport = (screenBounds?.y ?? 0) - window.screenY;
        if (orientation === "horizontal") {
          const screenWidth = screenBounds?.width ?? 1200;
          let adjustedLeft = anchorRect.left - newX + anchorRect.width / 2 - popupWidth / 2;
          const maxLeft = screenXInViewport + (screenWidth - newX) - popupWidth - 20;
          const minLeft = screenXInViewport - newX + 20;
          if (adjustedLeft < minLeft) adjustedLeft = minLeft;
          if (adjustedLeft > maxLeft) adjustedLeft = maxLeft;
          popupRef.current.style.left = `${adjustedLeft}px`;
        } else {
          const screenHeight = screenBounds?.height ?? 800;
          let adjustedTop = anchorRect.top - newY - 20 + anchorRect.height / 2 - popupHeight / 2;
          const maxTop = screenYInViewport + (screenHeight - newY) - popupHeight - 20;
          const minTop = screenYInViewport - newY + 20;
          if (adjustedTop < minTop) adjustedTop = minTop;
          if (adjustedTop > maxTop) adjustedTop = maxTop;
          popupRef.current.style.top = `${adjustedTop}px`;
        }
      };
      document.addEventListener("kobar-drag", onDrag);
      return () => document.removeEventListener("kobar-drag", onDrag);
    }, [anchorRect, screenBounds, orientation]);
    const handleCommand = (cmd) => {
      window.api?.sendMediaCommand?.(cmd);
    };
    const handlePipClick = react.useCallback(async () => {
      if (pipActive) {
        window.api?.closePip?.();
        setPipActive(false);
        setPipPhase("idle");
        return;
      }
      if (hasPreCachedVideo) {
        setDetectedUrls(validActiveUrls);
        setPipPhase("manual");
        return;
      }
      setPipPhase("detecting");
      setDetectedUrls([]);
      const urls = await window.api?.getActiveVideoUrls?.().catch(() => []) ?? [];
      setDetectedUrls(filterValidUrls(urls));
      setPipPhase("manual");
    }, [pipActive, currentMedia?.title, currentMedia?.albumArt, hasPreCachedVideo, validActiveUrls]);
    const handlePickUrl = (url) => {
      if (currentMedia?.isPlaying) {
        window.api?.sendMediaCommand?.("pause");
      }
      window.api?.openPip?.(url, currentMedia?.title || t("pipVideo"));
      setPipActive(true);
      setPipPhase("idle");
    };
    const handleManualOpen = () => {
      const url = manualUrl.trim();
      if (!url) return;
      if (currentMedia?.isPlaying) {
        window.api?.sendMediaCommand?.("pause");
      }
      window.api?.openPip?.(url, currentMedia?.title || t("pipVideo"));
      setPipActive(true);
      setPipPhase("idle");
      setManualUrl("");
    };
    const hasMedia = currentMedia && currentMedia.title;
    const T_SHELL = "var(--kb-bg-shell, var(--theme-bg-dark, #161922))";
    const T_SURFACE = "var(--kb-bg-surface, var(--theme-bg-base, #1d212b))";
    const T_INSET = "var(--kb-bg-inset, rgba(0,0,0,.25))";
    const T_CONTAINER = "var(--kb-bg-container, rgba(255,255,255,.1))";
    const T_ON_CONTAINER = "var(--kb-on-container, #fff)";
    const T_ACCENT = "var(--kb-accent, var(--theme-accent, #7c9cff))";
    const T_ACCENT_TEXT = "var(--kb-accent-text, var(--kb-accent, #7c9cff))";
    const T_ON_ACCENT = "var(--kb-on-accent, #fff)";
    const T_FG1 = "var(--kb-fg-1, #fff)";
    const T_FG2 = "var(--kb-fg-2, #aab)";
    const circleBtn = { background: T_CONTAINER, color: T_ON_CONTAINER, width: 48, height: 48, borderRadius: 24, border: 0, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" };
    const smallCircle = { background: T_CONTAINER, color: T_ON_CONTAINER, width: 36, height: 36, borderRadius: 18, border: 0, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" };
    const tonalPill = { height: 36, padding: "0 16px", borderRadius: 18, border: 0, fontSize: 13, fontWeight: 600, cursor: "pointer", background: T_CONTAINER, color: T_ON_CONTAINER, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 };
    const card = { background: T_SURFACE, borderRadius: 24, padding: 16 };
    react.useEffect(() => {
      const onKey = (e) => {
        if (e.key === "Escape") onClose();
      };
      document.addEventListener("keydown", onKey);
      return () => document.removeEventListener("keydown", onKey);
    }, [onClose]);
    const pipTitle = pipActive ? t("closePip") : hasPreCachedVideo ? t("videoDetected") : t("openPipTooltip");
    const sourceName = sourceLabel(currentMediaSourceApp);
    const subtitle = hasMedia ? [currentMedia.isPlaying ? t("statePlaying") : t("statePaused"), sourceName].filter(Boolean).join(" · ") : t("noMediaPlaying");
    const marquee = (ref, overflows, text, size, color, weight, display) => /* @__PURE__ */ window.React.createElement(
      "div",
      {
        ref,
        title: text || "",
        style: {
          width: "100%",
          minWidth: 0,
          overflow: "hidden",
          textOverflow: "ellipsis",
          overflowWrap: "anywhere",
          fontFamily: display ? "var(--kb-font-display, inherit)" : void 0,
          fontSize: size,
          lineHeight: size <= 14 ? "20px" : "22px",
          fontWeight: weight,
          color,
          ...display ? { display: "-webkit-box", WebkitBoxOrient: "vertical", WebkitLineClamp: 2 } : { whiteSpace: "nowrap" }
        }
      },
      text
    );
    return /* @__PURE__ */ window.React.createElement(
      "div",
      {
        ref: popupRef,
        className: "kop-panel pointer-events-auto flex flex-col",
        style: {
          ...getPopupStyle(),
          boxSizing: "border-box",
          width: 320,
          padding: 20,
          gap: 16,
          borderRadius: 32,
          background: T_SHELL,
          border: "1px solid var(--kb-stroke-subtle, var(--theme-border))",
          boxShadow: "var(--kb-shadow-e3, 0 12px 32px rgba(0,0,0,.45))",
          color: T_FG1,
          overflow: "hidden"
        }
      },
      /* @__PURE__ */ window.React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 12 } }, /* @__PURE__ */ window.React.createElement("div", { style: { background: T_CONTAINER, width: 44, height: 44, borderRadius: 16, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 } }, /* @__PURE__ */ window.React.createElement("span", { className: "material-symbols-outlined", style: { ...iconStyle(24, 1), color: T_ACCENT_TEXT } }, "music_note")), /* @__PURE__ */ window.React.createElement("div", { style: { flex: 1, minWidth: 0 } }, /* @__PURE__ */ window.React.createElement("h3", { style: { margin: 0, fontSize: 19, lineHeight: "24px", fontWeight: 600, fontFamily: "var(--kb-font-display, inherit)" } }, "KoPlayer"), /* @__PURE__ */ window.React.createElement("div", { className: "truncate", style: { fontSize: 12, lineHeight: "16px", color: T_FG2 } }, subtitle)), /* @__PURE__ */ window.React.createElement("button", { type: "button", onClick: onClose, "aria-label": t("close"), title: t("close"), className: "no-drag-region", style: smallCircle }, /* @__PURE__ */ window.React.createElement("span", { className: "material-symbols-outlined", style: iconStyle(20) }, "close"))),
      /* @__PURE__ */ window.React.createElement("div", { className: "no-drag-region", style: card }, hasMedia ? /* @__PURE__ */ window.React.createElement(window.React.Fragment, null, /* @__PURE__ */ window.React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 16 } }, /* @__PURE__ */ window.React.createElement("div", { style: { width: 96, height: 96, borderRadius: 16, overflow: "hidden", background: T_INSET, flexShrink: 0 } }, currentMedia.albumArt ? /* @__PURE__ */ window.React.createElement("img", { src: currentMedia.albumArt, alt: "", style: { width: "100%", height: "100%", objectFit: "cover", display: "block" }, draggable: false }) : /* @__PURE__ */ window.React.createElement("div", { style: { width: "100%", height: "100%", background: T_CONTAINER, display: "flex", alignItems: "center", justifyContent: "center" } }, /* @__PURE__ */ window.React.createElement("span", { className: "material-symbols-outlined", style: { ...iconStyle(40, 1), color: T_ACCENT_TEXT } }, "album"))), /* @__PURE__ */ window.React.createElement("div", { style: { flex: 1, minWidth: 0, display: "flex", flexDirection: "column", gap: 4 } }, marquee(titleRef, titleOverflows, currentMedia.title, 17, T_FG1, 600, true), marquee(artistRef, artistOverflows, artistOverflows ? currentMedia.artist : currentMedia.artist || t("unknownArtist"), 13, T_FG2, 400, false))), /* @__PURE__ */ window.React.createElement("div", { style: { display: "flex", alignItems: "center", justifyContent: "center", gap: 16, marginTop: 16 } }, /* @__PURE__ */ window.React.createElement("button", { type: "button", "aria-label": t("previous"), title: t("previous"), onClick: () => handleCommand("prev"), className: "no-drag-region", style: circleBtn }, /* @__PURE__ */ window.React.createElement("span", { className: "material-symbols-outlined", style: iconStyle(24, 1) }, "skip_previous")), /* @__PURE__ */ window.React.createElement(
        "button",
        {
          type: "button",
          "aria-label": currentMedia.isPlaying ? t("pause") : t("play"),
          title: currentMedia.isPlaying ? t("pause") : t("play"),
          onClick: () => handleCommand(currentMedia.isPlaying ? "pause" : "play"),
          className: "no-drag-region",
          style: { width: 72, height: 56, borderRadius: 28, border: 0, background: T_ACCENT, color: T_ON_ACCENT, display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }
        },
        /* @__PURE__ */ window.React.createElement("span", { className: "material-symbols-outlined", style: iconStyle(32, 1) }, currentMedia.isPlaying ? "pause" : "play_arrow")
      ), /* @__PURE__ */ window.React.createElement("button", { type: "button", "aria-label": t("next"), title: t("next"), onClick: () => handleCommand("next"), className: "no-drag-region", style: circleBtn }, /* @__PURE__ */ window.React.createElement("span", { className: "material-symbols-outlined", style: iconStyle(24, 1) }, "skip_next")))) : /* @__PURE__ */ window.React.createElement("div", { style: { display: "flex", flexDirection: "column", alignItems: "center", padding: "16px 8px", textAlign: "center" } }, /* @__PURE__ */ window.React.createElement("div", { style: { width: 64, height: 64, borderRadius: 24, background: T_CONTAINER, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16 } }, /* @__PURE__ */ window.React.createElement("span", { className: "material-symbols-outlined", style: { ...iconStyle(32), color: T_ACCENT_TEXT } }, "music_off")), /* @__PURE__ */ window.React.createElement("div", { style: { fontFamily: "var(--kb-font-display, inherit)", fontSize: 17, fontWeight: 600 } }, t("noMediaPlaying")), /* @__PURE__ */ window.React.createElement("div", { style: { fontSize: 13, lineHeight: "20px", color: T_FG2, marginTop: 4 } }, t("playSomething")))),
      /* @__PURE__ */ window.React.createElement("div", { className: "no-drag-region", style: card }, /* @__PURE__ */ window.React.createElement("div", { style: { display: "flex", alignItems: "center", gap: 12 } }, /* @__PURE__ */ window.React.createElement("div", { style: { width: 40, height: 40, borderRadius: 14, background: pipActive ? T_ACCENT : T_CONTAINER, color: pipActive ? T_ON_ACCENT : T_ACCENT_TEXT, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 } }, /* @__PURE__ */ window.React.createElement("span", { className: "material-symbols-outlined", style: iconStyle(22, pipActive ? 1 : 0) }, pipActive ? "pip_exit" : "pip")), /* @__PURE__ */ window.React.createElement("div", { style: { flex: 1, minWidth: 0 } }, /* @__PURE__ */ window.React.createElement("div", { style: { fontSize: 15, lineHeight: "20px", fontWeight: 600 } }, t("pictureInPicture")), /* @__PURE__ */ window.React.createElement("div", { style: { fontSize: 12, lineHeight: "16px", color: T_FG2 } }, pipActive ? t("pipActiveNote") : hasPreCachedVideo ? t("videoDetected") : t("openPipTooltip"))), /* @__PURE__ */ window.React.createElement("button", { type: "button", onClick: handlePipClick, title: pipTitle, "aria-label": pipTitle, className: "no-drag-region", style: { ...tonalPill, minWidth: 64 } }, pipPhase === "detecting" ? /* @__PURE__ */ window.React.createElement("div", { style: { width: 16, height: 16, borderRadius: "50%", border: "2px solid var(--kb-stroke-control, rgba(255,255,255,.25))", borderTopColor: T_ACCENT, animation: "koplayer-spin 0.7s linear infinite" } }) : pipActive ? t("closePip") : t("openBtn"))), (pipPhase === "manual" || pipPhase === "pick") && /* @__PURE__ */ window.React.createElement("div", { style: { marginTop: 16, paddingTop: 16, borderTop: "1px solid var(--kb-stroke-subtle, rgba(255,255,255,.12))" } }, detectedUrls.length > 0 && /* @__PURE__ */ window.React.createElement("div", { style: { marginBottom: 16 } }, /* @__PURE__ */ window.React.createElement("span", { style: { fontSize: 12, lineHeight: "16px", color: T_FG2, display: "block", marginBottom: 8 } }, t("detectedYouTubeTabs")), /* @__PURE__ */ window.React.createElement("div", { style: { maxHeight: 136, overflowY: "auto", display: "flex", flexDirection: "column", gap: 4 }, className: "custom-scrollbar" }, detectedUrls.map((url, i) => /* @__PURE__ */ window.React.createElement(DetectedTabItem, { key: i, url, onPick: handlePickUrl })))), /* @__PURE__ */ window.React.createElement("label", { style: { fontSize: 12, lineHeight: "16px", color: T_FG2, display: "block", marginBottom: 8 }, htmlFor: "koplayer-url" }, t("pasteVideoUrl")), /* @__PURE__ */ window.React.createElement("div", { style: { display: "flex", gap: 8 } }, /* @__PURE__ */ window.React.createElement(
        "input",
        {
          id: "koplayer-url",
          type: "text",
          value: manualUrl,
          onChange: (e) => setManualUrl(e.target.value),
          onKeyDown: (e) => e.key === "Enter" && handleManualOpen(),
          placeholder: "https://youtube.com/watch?v=…",
          style: { flex: 1, minWidth: 0, height: 40, borderRadius: 16, padding: "0 12px", fontSize: 13, background: T_INSET, border: 0, color: T_FG1, userSelect: "text", WebkitUserSelect: "text" },
          autoFocus: true
        }
      ), /* @__PURE__ */ window.React.createElement(
        "button",
        {
          type: "button",
          onClick: handleManualOpen,
          disabled: !manualUrl.trim(),
          style: { ...tonalPill, height: 40, borderRadius: 20, opacity: manualUrl.trim() ? 1 : 0.4, cursor: manualUrl.trim() ? "pointer" : "default" }
        },
        t("openBtn")
      )), /* @__PURE__ */ window.React.createElement(
        "button",
        {
          type: "button",
          onClick: () => setPipPhase("idle"),
          style: { marginTop: 8, width: "100%", height: 36, border: 0, borderRadius: 18, background: "transparent", color: T_FG2, fontSize: 13, fontWeight: 600, cursor: "pointer" }
        },
        t("cancelBtn")
      ))),
      /* @__PURE__ */ window.React.createElement("style", null, `
                .koplayer-marquee { display:inline-block; animation:koplayer-scroll 12s linear infinite; }
                @keyframes koplayer-scroll { 0%{transform:translateX(0%)} 100%{transform:translateX(-50%)} }
                @keyframes koplayer-spin { to{transform:rotate(360deg)} }
                .kop-panel button:focus-visible, .kop-panel input:focus-visible { outline: 2px solid var(--kb-accent, #7c9cff); outline-offset: 2px; }
                @media (prefers-reduced-motion: reduce) { .koplayer-marquee { animation: none; } }
            `)
    );
  };
  if (window.KoBarExtensions && window.KoBarExtensions.registerSidebarButton) {
    window.KoBarExtensions.registerSidebarButton({
      id: "koplayer-plugin-panel",
      icon: "music_note",
      label: "KoPlayer",
      tile: { template: "level", sensitive: true, live: true, pinnable: true },
      onClick: (e, anchorRect) => {
        const store = window.useAppStore.getState();
        if (store.activeExtensionPanelId === "koplayer-plugin-panel") {
          window.useAppStore.setState({ activeExtensionPanelId: null, activeExtensionAnchorRect: null });
        } else {
          store.closeAllUtilityPopups();
          window.useAppStore.setState({
            activeExtensionPanelId: "koplayer-plugin-panel",
            activeExtensionAnchorRect: anchorRect
          });
        }
      }
    });
  }
  if (window.KoBarExtensions && window.KoBarExtensions.registerPanel) {
    window.KoBarExtensions.registerPanel("koplayer-plugin-panel", {
      id: "koplayer-plugin-panel",
      render: (props) => /* @__PURE__ */ window.React.createElement(KoPlayerPopup, { ...props })
    });
  }
})(window.React);
