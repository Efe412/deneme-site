// Gerçek film verileri
const contentData = {
    popular: [
        {
            id: 1,
            title: "Spider-Man: No Way Home",
            category: "aksiyon",
            rating: "8.4",
            year: "2021",
            image: "https://image.tmdb.org/t/p/w500/1g0dhYtq4irTY1GPXvft6k4YLjm.jpg",
            duration: "148 dk",
            videoUrl: "/movies/spiderman-no-way-home.mp4",
            isLocal: true
        },
        {
            id: 2,
            title: "Top Gun: Maverick",
            category: "aksiyon",
            rating: "8.3",
            year: "2022",
            image: "https://image.tmdb.org/t/p/w500/62HCnUTziyWcpDaBO2i1DX17ljH.jpg",
            duration: "130 dk",
            videoUrl: "/movies/top-gun-maverick.mp4",
            isLocal: true
        },
        {
            id: 3,
            title: "The Batman",
            category: "aksiyon",
            rating: "7.8",
            year: "2022",
            image: "https://image.tmdb.org/t/p/w500/b0PlSFdDwbyK0cf5RxwDpaOJQvQ.jpg",
            duration: "176 dk",
            videoUrl: "/movies/the-batman.mp4",
            isLocal: true
        },
        {
            id: 4,
            title: "Dune",
            category: "drama",
            rating: "8.0",
            year: "2021",
            image: "https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg",
            duration: "155 dk",
            videoUrl: "/movies/dune.mp4",
            isLocal: true
        },
        {
            id: 5,
            title: "Joker",
            category: "drama",
            rating: "8.4",
            year: "2019",
            image: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
            duration: "122 dk",
            videoUrl: "/movies/joker.mp4",
            isLocal: true
        },
        {
            id: 6,
            title: "Inception",
            category: "aksiyon",
            rating: "8.8",
            year: "2010",
            image: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg",
            duration: "148 dk",
            videoUrl: "/movies/inception.mp4",
            isLocal: true
        }
    ],
    new: [
        {
            id: 7,
            title: "Black Panther: Wakanda Forever",
            category: "aksiyon",
            rating: "6.7",
            year: "2022",
            image: "https://image.tmdb.org/t/p/w500/sv1xJUazXeYqALzczSZ3O6nkH75.jpg",
            duration: "161 dk",
            videoUrl: "/movies/black-panther-wakanda-forever.mp4",
            isLocal: true
        },
        {
            id: 8,
            title: "Avatar: The Way of Water",
            category: "aksiyon",
            rating: "7.6",
            year: "2022",
            image: "https://image.tmdb.org/t/p/w500/t6HIqrRAclMCA60NsSmeqe9RmNV.jpg",
            duration: "192 dk",
            videoUrl: "/movies/avatar-the-way-of-water.mp4",
            isLocal: true
        },
        {
            id: 9,
            title: "Doctor Strange in the Multiverse of Madness",
            category: "aksiyon",
            rating: "6.9",
            year: "2022",
            image: "https://image.tmdb.org/t/p/w500/9Gtg2DzBhmYamXBS1hKAhiwbBKS.jpg",
            duration: "126 dk",
            videoUrl: "/movies/doctor-strange-multiverse-madness.mp4",
            isLocal: true
        },
        {
            id: 10,
            title: "Minions: The Rise of Gru",
            category: "animasyon",
            rating: "6.5",
            year: "2022",
            image: "https://image.tmdb.org/t/p/w500/wKiOkZTN9lUUUNZLmtnwubZYONg.jpg",
            duration: "87 dk",
            videoUrl: "/movies/minions-rise-of-gru.mp4",
            isLocal: true
        },
        {
            id: 11,
            title: "Scream",
            category: "korku",
            rating: "6.3",
            year: "2022",
            image: "https://image.tmdb.org/t/p/w500/1m3W6cpgwuIyjtg5nSnPx7yFkXW.jpg",
            duration: "114 dk",
            videoUrl: "/movies/scream.mp4",
            isLocal: true
        },
        {
            id: 12,
            title: "The Northman",
            category: "drama",
            rating: "7.0",
            year: "2022",
            image: "https://image.tmdb.org/t/p/w500/zhLKlUaF1SEpO58ppHIAyENkwgw.jpg",
            duration: "137 dk",
            videoUrl: "/movies/the-northman.mp4",
            isLocal: true
        }
    ],
    actionMovies: [
        {
            id: 13,
            title: "Hızlı ve Öfkeli 7",
            category: "aksiyon",
            rating: "7.1",
            year: "2015",
            image: "https://image.kanald.com.tr/i/kanald/100/1200x0/5da5a790ae784910f8c79f46.jpg",
            duration: "137 dk",
            videoUrl: "https://vidoza.net/embed/ae5i7z0e7ql6.html",
            isLocal: true
        },
        {
            id: 14,
            title: "John Wick: Chapter 4",
            category: "aksiyon",
            rating: "7.7",
            year: "2023",
            image: "https://image.tmdb.org/t/p/w500/vZloFAK7NmvMGKE7VkF5UHaz0I.jpg",
            duration: "169 dk",
            videoUrl: "/movies/john-wick-chapter-4.mp4",
            isLocal: true
        },
        
        {
            id: 16,
            title: "Transformers: Rise of the Beasts",
            category: "aksiyon",
            rating: "6.0",
            year: "2023",
            image: "https://image.tmdb.org/t/p/w500/gPbM0MK8CP8A174rmUwGsADNYKD.jpg",
            duration: "127 dk",
            videoUrl: "/movies/transformers-rise-of-beasts.mp4",
            isLocal: true
        }
    ],
    horrorMovies: [
        
        {
            id: 18,
            title: "M3GAN",
            category: "korku",
            rating: "6.3",
            year: "2023",
            image: "https://image.tmdb.org/t/p/w500/d9nBoowhjiiYc4FBNtQkPY7c11H.jpg",
            duration: "102 dk",
            videoUrl: "/movies/m3gan.mp4",
            isLocal: true
        },
        
        {
            id: 20,
            title: "Insidious: The Red Door",
            category: "korku",
            rating: "5.5",
            year: "2023",
            image: "https://image.tmdb.org/t/p/w500/d07phJqCx6z5wILDYqkyraOrDPi.jpg",
            duration: "107 dk",
            videoUrl: "https://www.youtube.com/embed/HuEOOOFtS8g"
        }
    ],
    romantic: [
        {
            id: 21,
            title: "The Notebook",
            category: "romantik",
            rating: "7.8",
            year: "2004",
            image: "https://image.tmdb.org/t/p/w500/qom1SZSENdmHFNZBXbtJAU0WTlC.jpg",
            duration: "123 dk",
            videoUrl: "https://www.youtube.com/embed/FC6biTjEyZw"
        },
        {
            id: 22,
            title: "Titanic",
            category: "romantik",
            rating: "7.9",
            year: "1997",
            image: "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg",
            duration: "194 dk",
            videoUrl: "https://www.youtube.com/embed/2e-eXJ6HgkQ"
        }
    ],
    series: [
        {
            id: 23,
            title: "Stranger Things",
            category: "dizi",
            rating: "8.7",
            year: "2016",
            image: "https://image.tmdb.org/t/p/w500/49WJfeN0moxb9IPfGn8AIqMGskD.jpg",
            duration: "50 dk/bölüm",
            videoUrl: "https://www.youtube.com/embed/b9EkMc79ZSU"
        },
        {
            id: 24,
            title: "The Witcher",
            category: "dizi",
            rating: "8.2",
            year: "2019",
            image: "https://image.tmdb.org/t/p/w500/7vjaCdMw15FEbXyLQTVa04URsPm.jpg",
            duration: "60 dk/bölüm",
            videoUrl: "https://www.youtube.com/embed/ndl1W4ltcmg"
        },
        {
            id: 25,
            title: "Money Heist",
            category: "dizi",
            rating: "8.3",
            year: "2017",
            image: "https://image.tmdb.org/t/p/w500/reEMJA1uzscCbkpeRJeTT2bjqUp.jpg",
            duration: "70 dk/bölüm",
            videoUrl: "https://www.youtube.com/embed/_InqQJRqGW4"
        },
        {
            id: 26,
            title: "Wednesday",
            category: "dizi",
            rating: "8.1",
            year: "2022",
            image: "https://image.tmdb.org/t/p/w500/9PFonBhy4cQy7Jz20NpMygczOkv.jpg",
            duration: "45 dk/bölüm",
            videoUrl: "https://www.youtube.com/embed/Di310WS8zLk"
        }
    ],
    all: []
};

// Hero carousel verileri
const heroSlides = [
    {
        title: "A Working Man",
        year: "2025",
        rating: "5.7",
        duration: "420 dk",
        subtitle: "Dublaj & Altyazılı",
        image: "https://image.tmdb.org/t/p/original/yDHYTfA3R0jFYba16jBB1ef8oIt.jpg",
        videoUrl: "https://www.youtube.com/embed/sample1"
    },
    {
        title: "Spider-Man: No Way Home",
        year: "2021",
        rating: "8.4",
        duration: "148 dk",
        subtitle: "Dublaj & Altyazılı",
        image: "https://image.tmdb.org/t/p/original/14QbnygCuTO0vl7CAFmPf1fgZfV.jpg",
        videoUrl: "https://www.youtube.com/embed/JfVOs4VSpmA"
    },
    {
        title: "Top Gun: Maverick",
        year: "2022",
        rating: "8.3",
        duration: "130 dk",
        subtitle: "Dublaj & Altyazılı",
        image: "https://image.tmdb.org/t/p/original/odJ4hx6g6vBt4lBWKFD1tI8WS4x.jpg",
        videoUrl: "https://www.youtube.com/embed/qSqVVswa420"
    }
];

// Tüm içerikleri birleştir
contentData.all = [...contentData.popular, ...contentData.new, ...contentData.actionMovies, ...contentData.horrorMovies, ...contentData.romantic, ...contentData.series];

let currentSlide = 0;

// Sayfa yüklendikinde
document.addEventListener('DOMContentLoaded', function() {
    showFaceID();
});

// Face ID ekranını göster
function showFaceID() {
    const faceIDModal = document.createElement('div');
    faceIDModal.className = 'face-id-modal';
    faceIDModal.innerHTML = `
        <div class="face-id-container">
            <div class="face-id-scanner">
                <div class="scanner-circle">
                    <div class="scanner-inner">
                        <span class="face-icon">👤</span>
                    </div>
                    <div class="scanner-ring"></div>
                </div>
            </div>
            <h2>Face ID ile Giriş</h2>
            <p>Yüzünüzü tarayıcının önüne getirin</p>
            <div class="scanning-text">Taranıyor...</div>
        </div>
    `;

    document.body.appendChild(faceIDModal);

    // 3 saniye sonra onay
    setTimeout(() => {
        // Başarı sesi çal (beep sesi simülasyonu)
        playSuccessSound();

        // Başarı animasyonu
        const scannerCircle = faceIDModal.querySelector('.scanner-circle');
        const scanningText = faceIDModal.querySelector('.scanning-text');

        scannerCircle.classList.add('success');
        scanningText.textContent = '✓ Kimlik Doğrulandı';
        scanningText.style.color = '#4CAF50';

        // 1 saniye sonra Face ID ekranını kaldır ve ana sayfaya geç
        setTimeout(() => {
            faceIDModal.remove();
            initializeApp();
        }, 1000);
    }, 3000);
}

// Başarı sesi çal
function playSuccessSound() {
    // Web Audio API ile beep sesi oluştur
    if (typeof(AudioContext) !== "undefined" || typeof(webkitAudioContext) !== "undefined") {
        const audioContext = new (window.AudioContext || window.webkitAudioContext)();
        const oscillator = audioContext.createOscillator();
        const gainNode = audioContext.createGain();

        oscillator.connect(gainNode);
        gainNode.connect(audioContext.destination);

        oscillator.frequency.setValueAtTime(800, audioContext.currentTime);
        oscillator.type = 'sine';

        gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
        gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);

        oscillator.start(audioContext.currentTime);
        oscillator.stop(audioContext.currentTime + 0.3);
    }
}

// İsim yağmuru efekti - Normal Efe yazısı düz düz
function startNameRain() {
    const rainContainer = document.createElement('div');
    rainContainer.id = 'name-rain';
    rainContainer.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        pointer-events: none;
        z-index: 9999;
        overflow: hidden;
    `;
    document.body.appendChild(rainContainer);

    const name = 'Efe Yiğit Alemdar';
    let rainInterval;

    // 10 saniye boyunca isim yağdır
    const rainDuration = 10000;
    const startTime = Date.now();

    rainInterval = setInterval(() => {
        if (Date.now() - startTime >= rainDuration) {
            clearInterval(rainInterval);
            setTimeout(() => {
                rainContainer.remove();
            }, 3000);
            return;
        }

        // Karılık efekti için rastgele pozisyonlar
        for(let i = 0; i < 3; i++) {
            const nameElement = document.createElement('div');
            nameElement.textContent = name;
            nameElement.style.cssText = `
                position: absolute;
                top: -50px;
                left: ${Math.random() * 100}%;
                font-size: ${Math.random() * 25 + 12}px;
                font-weight: bold;
                animation: straight-fall ${3 + Math.random() * 2}s linear forwards;
                text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
            `;

            rainContainer.appendChild(nameElement);

            // Her milisaniyede renk değiştir
            let colorChangeInterval = setInterval(() => {
                nameElement.style.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
            }, 1);

            // Elementi temizle
            setTimeout(() => {
                clearInterval(colorChangeInterval);
                nameElement.remove();
            }, 5000);
        }
    }, 150);
}

// Mobile menu butonu ekle
function addMobileMenuButton() {
    const menuButton = document.createElement('button');
    menuButton.innerHTML = '☰';
    menuButton.className = 'mobile-menu-btn';
    menuButton.onclick = toggleSidebar;
    document.querySelector('.header-left').appendChild(menuButton);
}

// Uygulamayı başlat
function initializeApp() {
    loadAllContent();
    startHeroCarousel();
    initializeScrollEffects();
    addMobileMenuButton();
    addSidebarToggle();
    startNameRain(); // Face ID sonrası isim yağmuru
}

// Tüm içerikleri yükle
function loadAllContent() {
    loadPopularContent();
    loadNewContent();
    loadActionContent();
    loadHorrorContent();
}

// Hero carousel'ı başlat
function startHeroCarousel() {
    setInterval(() => {
        nextSlide();
    }, 5000);
}

// Scroll efektleri
function initializeScrollEffects() {
    window.addEventListener('scroll', () => {
        const header = document.querySelector('.main-header');
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
}

// Hero carousel fonksiyonları
function nextSlide() {
    currentSlide = (currentSlide + 1) % heroSlides.length;
    updateHeroSlide();
}

function previousSlide() {
    currentSlide = (currentSlide - 1 + heroSlides.length) % heroSlides.length;
    updateHeroSlide();
}

function updateHeroSlide() {
    const slide = heroSlides[currentSlide];
    const heroSlide = document.querySelector('.hero-slide');

    heroSlide.innerHTML = `
        <img src="${slide.image}" alt="${slide.title}">
        <div class="hero-overlay">
            <div class="hero-content">
                <h1>${slide.title}</h1>
                <div class="hero-info">
                    <span class="year">${slide.year}</span>
                    <span class="rating">⭐ ${slide.rating}</span>
                    <span class="duration">${slide.duration}</span>
                </div>
                <p>${slide.subtitle}</p>
                <div class="hero-buttons">
                    <button class="play-btn" onclick="playMovie('${slide.title}', '${slide.videoUrl}')">▶ İzle</button>
                    <button class="info-btn" onclick="showMovieInfo('${slide.title}')">ℹ Bilgi</button>
                </div>
            </div>
        </div>
    `;
}

// İçerik yükleme fonksiyonları
function loadPopularContent() {
    const container = document.getElementById('popularContent');
    container.innerHTML = '';

    contentData.popular.forEach(item => {
        const contentElement = createContentElement(item);
        container.appendChild(contentElement);
    });
}

function loadNewContent() {
    const container = document.getElementById('newContent');
    container.innerHTML = '';

    contentData.new.forEach(item => {
        const contentElement = createContentElement(item);
        container.appendChild(contentElement);
    });
}

function loadActionContent() {
    const container = document.getElementById('actionContent');
    container.innerHTML = '';

    contentData.actionMovies.forEach(item => {
        const contentElement = createContentElement(item);
        container.appendChild(contentElement);
    });
}

function loadHorrorContent() {
    const container = document.getElementById('horrorContent');
    container.innerHTML = '';

    contentData.horrorMovies.forEach(item => {
        const contentElement = createContentElement(item);
        container.appendChild(contentElement);
    });
}

// İçerik elementi oluştur
function createContentElement(item) {
    const div = document.createElement('div');
    div.className = 'content-item';
    div.innerHTML = `
        <img src="${item.image}" alt="${item.title}" loading="lazy">
        <div class="content-item-info">
            <h3>${item.title}</h3>
            <div class="year">${item.year}</div>
            <div class="rating">⭐ ${item.rating}</div>
            <span class="category-tag">${getCategoryName(item.category)}</span>
        </div>
        <div class="hover-info">
            <div class="hover-content">
                <h4>${item.title}</h4>
                <p>⭐ ${item.rating} • ${item.year} • ${item.duration}</p>
                <p class="genre">${getCategoryName(item.category)}</p>
                <div class="hover-buttons">
                    <button class="mini-play-btn" onclick="playMovie('${item.title}', '${item.videoUrl}')">▶ İzle</button>
                    <button class="mini-info-btn" onclick="showMovieInfo('${item.title}')">ℹ Bilgi</button>
                </div>
            </div>
        </div>
    `;

    div.addEventListener('click', () => {
        playMovie(item.title, item.videoUrl, item.isLocal);
    });

    return div;
}

// Film oynat
function playMovie(title, videoUrl, isLocal = false) {
    console.log('Playing movie:', title, 'URL:', videoUrl, 'isLocal:', isLocal);
    
    if (!videoUrl) {
        alert(`"${title}" için video URL'si bulunamadı!`);
        return;
    }

    // Existing modal varsa kaldır
    const existingModal = document.querySelector('.video-modal');
    if (existingModal) {
        existingModal.remove();
    }

    // Video player modal oluştur
    const modal = document.createElement('div');
    modal.className = 'video-modal';
    
    let videoElement;
    if (isLocal || videoUrl.includes('/movies/')) {
        // Object Storage dosyaları için tam URL
        const fullVideoUrl = videoUrl.startsWith('/movies/') ? 
            `https://objectstorage.replit.com/replit-objstore-4480334d-843c-4739-9db9-87f1bff5236a${videoUrl}` : 
            videoUrl;
            
        videoElement = `
            <div style="width: 100%; height: 100%; background: #000; display: flex; align-items: center; justify-content: center; position: relative;">
                <video 
                    controls 
                    autoplay 
                    preload="auto" 
                    style="width: 100%; height: 100%; object-fit: contain; max-width: 100%; max-height: 100%;"
                    onloadstart="console.log('Video loading started')"
                    oncanplay="console.log('Video can play'); this.parentElement.querySelector('.loading-message').style.display='none';"
                    onerror="console.error('Video error!'); this.style.display='none'; this.parentElement.querySelector('.error-message').style.display='block';"
                    onloadeddata="console.log('Video data loaded')"
                >
                    <source src="${fullVideoUrl}" type="video/mp4">
                    Tarayıcınız bu video formatını desteklemiyor.
                </video>
                
                <div class="loading-message" style="position: absolute; color: white; text-align: center; font-size: 18px;">
                    🎬 Video yükleniyor...<br>
                    <div style="margin-top: 10px; font-size: 14px; color: #999;">Lütfen bekleyin</div>
                </div>
                
                <div class="error-message" style="display: none; position: absolute; color: white; text-align: center; padding: 20px; background: rgba(0,0,0,0.8); border-radius: 10px;">
                    ❌ <strong>Video yüklenemedi!</strong><br><br>
                    <div style="font-size: 14px; color: #ccc; margin: 10px 0;">
                        Dosya: <code>${videoUrl.split('/').pop()}</code><br>
                        URL: <code>${fullVideoUrl}</code>
                    </div>
                    <button onclick="closeVideoModal()" style="padding: 10px 20px; background: #e50914; color: white; border: none; border-radius: 5px; cursor: pointer; margin-top: 10px;">Kapat</button>
                </div>
            </div>
        `;
    } else {
        // YouTube videoları için iframe
        videoElement = `
            <iframe 
                src="${videoUrl}?autoplay=1&rel=0&controls=1&modestbranding=1" 
                frameborder="0" 
                allowfullscreen 
                style="width: 100%; height: 100%; border: none;"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
        `;
    }
    
    modal.innerHTML = `
        <div class="video-modal-overlay" onclick="closeVideoModal()"></div>
        <div class="video-modal-content">
            <div class="video-modal-header">
                <h3>🎬 ${title}</h3>
                <button class="close-modal" onclick="closeVideoModal()">&times;</button>
            </div>
            <div class="video-container">
                ${videoElement}
            </div>
        </div>
    `;
    
    // Modal'ı sayfaya ekle
    document.body.appendChild(modal);
    document.body.style.overflow = 'hidden';

    // ESC tuşuyla kapat
    document.addEventListener('keydown', function escHandler(e) {
        if (e.key === 'Escape') {
            closeVideoModal();
            document.removeEventListener('keydown', escHandler);
        }
    });
}

// Video modal kapat
function closeVideoModal() {
    const modal = document.querySelector('.video-modal');
    if (modal) {
        modal.remove();
        document.body.style.overflow = 'auto';
    }
}

// Film bilgilerini göster - sadece bilgi
function showMovieInfo(title) {
    const movie = contentData.all.find(item => item.title === title) || heroSlides.find(slide => slide.title === title);
    if (movie) {
        // Detaylı film bilgi modal'ı oluştur
        const modal = document.createElement('div');
        modal.className = 'info-modal';
        modal.innerHTML = `
            <div class="info-modal-content">
                <div class="info-modal-header">
                    <h2>${movie.title} - Bilgiler</h2>
                    <button class="close-info-modal" onclick="closeInfoModal()">&times;</button>
                </div>
                <div class="info-modal-body">
                    <div class="movie-poster">
                        <img src="${movie.image || movie.image}" alt="${movie.title}">
                    </div>
                    <div class="movie-details">
                        <div class="detail-row">
                            <span class="detail-label">🎬 Film Adı:</span>
                            <span class="detail-value">${movie.title}</span>
                        </div>
                        <div class="detail-row">
                            <span class="detail-label">📅 Çıkış Yılı:</span>
                            <span class="detail-value">${movie.year}</span>
                        </div>
                        <div class="detail-row">
                            <span class="detail-label">⭐ IMDb Puanı:</span>
                            <span class="detail-value">${movie.rating}/10</span>
                        </div>
                        <div class="detail-row">
                            <span class="detail-label">⏱️ Film Süresi:</span>
                            <span class="detail-value">${movie.duration || 'Bilinmiyor'}</span>
                        </div>
                        <div class="detail-row">
                            <span class="detail-label">🎭 Kategori/Tür:</span>
                            <span class="detail-value">${movie.category ? getCategoryName(movie.category) : 'Film'}</span>
                        </div>
                        <div class="detail-row">
                            <span class="detail-label">🗣️ Dil Seçenekleri:</span>
                            <span class="detail-value">Türkçe Dublaj & Altyazılı</span>
                        </div>
                        <div class="detail-row">
                            <span class="detail-label">📱 Video Kalitesi:</span>
                            <span class="detail-value">1080p Full HD</span>
                        </div>
                        <div class="detail-row">
                            <span class="detail-label">📊 Durum:</span>
                            <span class="detail-value">İzlemeye Hazır</span>
                        </div>
                        <div class="info-note">
                            <p><strong>Not:</strong> Bu sadece film bilgi sayfasıdır. Film izlemek için ana sayfadan film kartlarına tıklayın.</p>
                        </div>
                    </div>
                </div>
            </div>
        `;
        document.body.appendChild(modal);
        document.body.style.overflow = 'hidden';
    }
}

// Bilgi modal'ını kapat
function closeInfoModal() {
    const modal = document.querySelector('.info-modal');
    if (modal) {
        modal.remove();
        document.body.style.overflow = 'auto';
    }
}

// Kategori adını al
function getCategoryName(category) {
    const categories = {
        'aksiyon': 'Aksiyon',
        'komedi': 'Komedi',
        'korku': 'Korku',
        'drama': 'Drama',
        'romantik': 'Romantik',
        'gerilim': 'Gerilim',
        'animasyon': 'Animasyon',
        'dizi': 'Dizi'
    };
    return categories[category] || category;
}

// Kategoriye göre filtrele
function filterByCategory(category) {
    // Aktif kategoriyi işaretle
    document.querySelectorAll('.category-list a').forEach(link => {
        link.classList.remove('active');
    });
    event.target.classList.add('active');

    // Kategori bölümünü göster
    document.getElementById('categorySection').style.display = 'block';

    loadCategoryContent(category);

    // Başlığı güncelle
    const title = category === 'all' ? 'Tüm Filmler' : getCategoryName(category) + ' Filmleri';
    document.getElementById('categoryDisplayTitle').textContent = title;

    // Kategori bölümüne scroll
    document.getElementById('categorySection').scrollIntoView({ behavior: 'smooth' });
}

// Kategori içeriklerini yükle
function loadCategoryContent(category) {
    const container = document.getElementById('categoryContent');
    container.innerHTML = '';

    let filteredContent = contentData.all;
    if(category !== 'all') {
        filteredContent = contentData.all.filter(item => item.category === category);
    }

    if(filteredContent.length === 0) {
        container.innerHTML = '<p style="color: #999; text-align: center; padding: 50px; grid-column: 1/-1;">Bu kategoride henüz film bulunmuyor.</p>';
        return;
    }

    filteredContent.forEach(item => {
        const contentElement = createContentElement(item);
        container.appendChild(contentElement);
    });
}

// Dile göre filtrele
function filterByLanguage(language) {
    alert(`${language.toUpperCase()} dili için filmler yakında eklenecek!`);
}

// Arama fonksiyonu
function searchContent() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase().trim();

    if(searchTerm === '') {
        document.getElementById('categorySection').style.display = 'none';
        return;
    }

    const searchResults = contentData.all.filter(item => 
        item.title.toLowerCase().includes(searchTerm) ||
        getCategoryName(item.category).toLowerCase().includes(searchTerm)
    );

    // Kategori bölümünü göster
    document.getElementById('categorySection').style.display = 'block';

    const container = document.getElementById('categoryContent');
    container.innerHTML = '';

    if(searchResults.length === 0) {
        container.innerHTML = `<p style="color: #999; text-align: center; padding: 50px; grid-column: 1/-1;">"${searchTerm}" için sonuç bulunamadı.</p>`;
        document.getElementById('categoryDisplayTitle').textContent = 'Arama Sonuçları';
        return;
    }

    searchResults.forEach(item => {
        const contentElement = createContentElement(item);
        container.appendChild(contentElement);
    });

    document.getElementById('categoryDisplayTitle').textContent = `"${searchTerm}" için ${searchResults.length} sonuç`;

    // Sonuçlara scroll
    document.getElementById('categorySection').scrollIntoView({ behavior: 'smooth' });
}

// Navigasyon// Navigasyon fonksiyonları
function showHome() {
    document.getElementById('categorySection').style.display = 'none';
    document.getElementById('searchInput').value = '';

    // Kategori seçimini sıfırla
    document.querySelectorAll('.category-list a').forEach(link => {
        link.classList.remove('active');
    });

    // En üste scroll
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Nav aktif durumunu güncelle
    updateNavActive('home');
}

function showMovies() {
    // Rastgele kategori seç (aksiyon, korku, drama, romantik)
    const movieCategories = ['aksiyon', 'korku', 'drama', 'romantik'];
    const randomCategory = movieCategories[Math.floor(Math.random() * movieCategories.length)];

    document.getElementById('categorySection').style.display = 'block';
    loadCategoryContent(randomCategory);
    document.getElementById('categoryDisplayTitle').textContent = getCategoryName(randomCategory) + ' Filmleri';
    document.getElementById('categorySection').scrollIntoView({ behavior: 'smooth' });
    updateNavActive('movies');
}

function showSeries() {
    document.getElementById('categorySection').style.display = 'block';
    const container = document.getElementById('categoryContent');
    container.innerHTML = '';

    // Dizi kategorisini yükle
    contentData.series.forEach(item => {
        const contentElement = createContentElement(item);
        container.appendChild(contentElement);
    });

    document.getElementById('categoryDisplayTitle').textContent = 'Diziler';
    document.getElementById('categorySection').scrollIntoView({ behavior: 'smooth' });
    updateNavActive('series');
}

function showCategories() {
    alert('Kategoriler sol menüden seçilebilir! 👈');
}

let profileColorInterval;

function showProfile() {
    // Pinterest tarzı profil alanı oluştur
    const profileArea = document.createElement('div');
    profileArea.className = 'pinterest-profile-area';
    profileArea.innerHTML = `
        <div class="pinterest-overlay" onclick="closePinterestProfile()"></div>
        <div class="pinterest-profile-content">
            <div class="pinterest-close-btn" onclick="closePinterestProfile()">×</div>
            <div class="pinterest-profile-grid">
                <div class="profile-card main-card">
                    <div class="profile-avatar">
                        <img src="attached_assets/image_1749611040558.png" alt="Profile">
                    </div>
                    <h2 class="profile-name" id="pinterestProfileName">Efe Yiğit Alemdar</h2>
                    <p class="profile-role">Site Geliştiricisi & Kurucu</p>
                </div>

                <div class="profile-card stats-card">
                    <h3>📊 İstatistikler</h3>
                    <div class="stat-row">
                        <span>🎬 Toplam Film:</span>
                        <span>1000+</span>
                    </div>
                    <div class="stat-row">
                        <span>📺 Toplam Dizi:</span>
                        <span>500+</span>
                    </div>
                    <div class="stat-row">
                        <span>⭐ Ortalama Puan:</span>
                        <span>8.5/10</span>
                    </div>
                </div>

                <div class="profile-card info-card">
                    <h3>ℹ️ Hakkında</h3>
                    <p>Film ve dizi tutkunları için özel olarak tasarlanmış bu platformun yaratıcısı.</p>
                </div>

                <div class="profile-card skills-card">
                    <h3>🛠️ Yetenekler</h3>
                    <div class="skill-tags">
                        <span class="skill-tag">JavaScript</span>
                        <span class="skill-tag">HTML/CSS</span>
                        <span class="skill-tag">Film Analizi</span>
                        <span class="skill-tag">UI/UX Design</span>
                    </div>
                </div>

                <div class="profile-card contact-card">
                    <h3>📞 İletişim</h3>
                    <div class="contact-info">
                        <div>💌 Film önerileri için yazın</div>
                        <div>🎯 Her zaman yeni projeler</div>
                    </div>
                </div>

                <div class="profile-card achievement-card">
                    <h3>🏆 Başarılar</h3>
                    <div class="achievement-list">
                        <div>🥇 En İyi Film Platformu 2024</div>
                        <div>🎖️ Kullanıcı Dostu Tasarım</div>
                        <div>🌟 1M+ İzlenme</div>
                    </div>
                </div>
            </div>
        </div>
    `;

    document.body.appendChild(profileArea);
    document.body.style.overflow = 'hidden';

    // Renk değiştirme efektini başlat
    const profileName = document.getElementById('pinterestProfileName');
    profileColorInterval = setInterval(() => {
        profileName.style.color = `hsl(${Math.random() * 360}, 100%, 50%)`;
        profileName.style.textShadow = `0 0 20px hsl(${Math.random() * 360}, 100%, 50%)`;
    }, 1);
}

function closePinterestProfile() {
    const profileArea = document.querySelector('.pinterest-profile-area');
    if (profileArea) {
        profileArea.remove();
        document.body.style.overflow = 'auto';
        // Renk değiştirme efektini durdur
        if (profileColorInterval) {
            clearInterval(profileColorInterval);
            profileColorInterval = null;
        }
    }
}

function closeProfileModal() {
    const modal = document.querySelector('.profile-modal');
    if (modal) {
        modal.remove();
        document.body.style.overflow = 'auto';
        // Renk değiştirme efektini durdur
        if (profileColorInterval) {
            clearInterval(profileColorInterval);
            profileColorInterval = null;
        }
    }
}

// Navigasyon aktif durumunu güncelle
function updateNavActive(activeNav) {
    document.querySelectorAll('.header-left nav a').forEach(link => {
        link.classList.remove('nav-active');
    });

    document.querySelectorAll('.bottom-nav .nav-item').forEach(item => {
        item.classList.remove('active');
    });

    // Desktop nav
    if (activeNav === 'home') {
        document.querySelector('.header-left nav a[onclick="showHome()"]').classList.add('nav-active');
    } else if (activeNav === 'movies') {
        document.querySelector('.header-left nav a[onclick="showMovies()"]').classList.add('nav-active');
    } else if (activeNav === 'series') {
        document.querySelector('.header-left nav a[onclick="showSeries()"]').classList.add('nav-active');
    }
}

// Enter tuşu ile arama ve otomatik arama
document.addEventListener('keypress', function(e) {
    if(e.key === 'Enter') {
        const activeElement = document.activeElement;
        if(activeElement.id === 'searchInput') {
            searchContent();
        }
    }
});

// Otomatik arama - input değiştiğinde
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', function() {
            searchContent();
        });
    }
});

// Sidebar toggle fonksiyonu
function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const mainContent = document.querySelector('.main-content');

    sidebar.classList.toggle('collapsed');
    mainContent.classList.toggle('sidebar-collapsed');

    // Mobile için
    if (window.innerWidth <= 768) {
        sidebar.classList.toggle('open');
    }
}

// Sidebar toggle butonu ekle
function addSidebarToggle() {
    const toggleBtn = document.createElement('button');
    toggleBtn.innerHTML = '☰';
    toggleBtn.className = 'sidebar-toggle-btn';
    toggleBtn.onclick = toggleSidebar;
    document.querySelector('.header-left').appendChild(toggleBtn);
}

// Lazy loading için intersection observer
const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.remove('loading');
            observer.unobserve(img);
        }
    });
});

// Tema değiştirme fonksiyonu
function toggleTheme() {
    document.body.classList.toggle('light-theme');
    const isLight = document.body.classList.contains('light-theme');
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
}

// Sayfa yüklendiğinde tema ayarını kontrol et
function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'light') {
        document.body.classList.add('light-theme');
    }
}

// Başlangıçta hero slide'ı güncelle ve tema yükle
updateHeroSlide();
loadTheme();