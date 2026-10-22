// Initial Pins Data
const initialPins = [
    {
        id: 'pin-1',
        title: 'Arsitektur Modern Minimalis',
        description: 'Desain fasad bangunan dengan konsep geometri bersih dan pencahayaan natural yang menawan.',
        category: 'Arsitektur',
        imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&auto=format&fit=crop&q=80',
        author: 'Elena Rostova',
        authorAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80',
        likes: 142,
        isLiked: false,
        isSaved: false
    },
    {
        id: 'pin-2',
        title: 'Keindahan Alam Pegunungan',
        description: 'Kabut tipis menyelimuti lereng bukit saat matahari terbit di dataran tinggi.',
        category: 'Alam',
        imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop&q=80',
        author: 'Marvin McKinney',
        authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
        likes: 89,
        isLiked: false,
        isSaved: true
    },
    {
        id: 'pin-3',
        title: 'Kopi & Estetika Kerja',
        description: 'Suasana meja kerja minimalis dengan secangkir kopi hangat di pagi hari.',
        category: 'Kuliner',
        imageUrl: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&auto=format&fit=crop&q=80',
        author: 'Sophia Chen',
        authorAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
        likes: 210,
        isLiked: true,
        isSaved: false
    },
    {
        id: 'pin-4',
        title: 'Seni Abstrak Modern',
        description: 'Eksplorasi bentuk geometri dan komposisi warna kontras tinggi.',
        category: 'Desain',
        imageUrl: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=800&auto=format&fit=crop&q=80',
        author: 'Lucas Vance',
        authorAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80',
        likes: 67,
        isLiked: false,
        isSaved: false
    },
    {
        id: 'pin-5',
        title: 'Lampu Neon Kota Malam',
        description: 'Sudut jalanan metropolis yang bercahaya di bawah rintik hujan malam hari.',
        category: 'Fotografi',
        imageUrl: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?w=800&auto=format&fit=crop&q=80',
        author: 'Kenji Sato',
        authorAvatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=100&auto=format&fit=crop&q=80',
        likes: 312,
        isLiked: true,
        isSaved: true
    },
    {
        id: 'pin-6',
        title: 'Hutan Pinus Berkabut',
        description: 'Deretan pohon pinus menjulang tinggi dalam pelukan kabut pagi yang tenang.',
        category: 'Alam',
        imageUrl: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&auto=format&fit=crop&q=80',
        author: 'Emma Watson',
        authorAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=80',
        likes: 198,
        isLiked: false,
        isSaved: false
    },
    {
        id: 'pin-7',
        title: 'Interior Nordic Minimalis',
        description: 'Penataan ruang keluarga dengan furnitur kayu alami dan warna hangat.',
        category: 'Arsitektur',
        imageUrl: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&auto=format&fit=crop&q=80',
        author: 'Oliver Smith',
        authorAvatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&auto=format&fit=crop&q=80',
        likes: 175,
        isLiked: false,
        isSaved: true
    },
    {
        id: 'pin-8',
        title: 'Ramen Autentik Jepang',
        description: 'Semangkuk ramen hangat dengan kuah gurih, mi lembut, dan kuah mi yang menggugah selera.',
        category: 'Kuliner',
        imageUrl: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&auto=format&fit=crop&q=80',
        author: 'Yuki Tanaka',
        authorAvatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80',
        likes: 289,
        isLiked: true,
        isSaved: false
    },
    {
        id: 'pin-9',
        title: 'Setup Kerja Setup Futuristik',
        description: 'Kombinasi lampu RGB halus dengan monitor lengkung untuk produktivitas maksimal.',
        category: 'Desain',
        imageUrl: 'https://images.unsplash.com/photo-1526738549149-8e07eca6c147?w=800&auto=format&fit=crop&q=80',
        author: 'Alex Rivera',
        authorAvatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&auto=format&fit=crop&q=80',
        likes: 420,
        isLiked: false,
        isSaved: true
    },
    {
        id: 'pin-10',
        title: 'Potret Sederhana Elegan',
        description: 'Eksplorasi teknik bayangan dan cahaya alami pada fotografi studio.',
        category: 'Fotografi',
        imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop&q=80',
        author: 'Clara Dubois',
        authorAvatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100&auto=format&fit=crop&q=80',
        likes: 156,
        isLiked: false,
        isSaved: false
    },
    {
        id: 'pin-11',
        title: 'Danau Jernih Pegunungan',
        description: 'Pantulan langit biru murni di atas permukaan air danau yang tenang.',
        category: 'Alam',
        imageUrl: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&auto=format&fit=crop&q=80',
        author: 'Marvin McKinney',
        authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
        likes: 230,
        isLiked: true,
        isSaved: false
    },
    {
        id: 'pin-12',
        title: 'Gedung Pencakar Langit',
        description: 'Sudut pandang bawah dari arsitektur kaca modern yang menjulang tinggi.',
        category: 'Arsitektur',
        imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=80',
        author: 'Elena Rostova',
        authorAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80',
        likes: 184,
        isLiked: false,
        isSaved: false
    },
    {
        id: 'pin-13',
        title: 'Dessert Cake Matcha',
        description: 'Sajian kue matcha lembut berbalut krim putih dan taburan bubuk teh hijau.',
        category: 'Kuliner',
        imageUrl: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&auto=format&fit=crop&q=80',
        author: 'Sophia Chen',
        authorAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
        likes: 305,
        isLiked: false,
        isSaved: true
    },
    {
        id: 'pin-14',
        title: 'Seni Ilustrasi Digital 3D',
        description: 'Karakter 3D dengan tekstur halus dan efek pencahayaan dinamis.',
        category: 'Desain',
        imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80',
        author: 'Lucas Vance',
        authorAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80',
        likes: 388,
        isLiked: true,
        isSaved: true
    },
    {
        id: 'pin-15',
        title: 'Matahari Terbenam di Pantai',
        description: 'Siluet pepohonan kelapa di tepi pantai dengan warna langit jingga keemasan.',
        category: 'Fotografi',
        imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=80',
        author: 'Kenji Sato',
        authorAvatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=100&auto=format&fit=crop&q=80',
        likes: 512,
        isLiked: false,
        isSaved: false
    }
];

// Global State
let pinsData = [...initialPins];
let currentFilter = 'Semua';
let searchQuery = '';
let activePin = null;

const categories = ['Semua', 'Fotografi', 'Arsitektur', 'Alam', 'Desain', 'Kuliner'];

// Editor State
let editorState = {
    sourceUrl: '',
    brightness: 100,
    contrast: 100,
    saturation: 100,
    blur: 0,
    sepia: 0,
    hue: 0,
    rotate: 0,
    flipH: 1,
    flipV: 1,
    overlayText: ''
};

// DOM Elements
const pinsGrid = document.getElementById('pinsGrid');
const emptyState = document.getElementById('emptyState');
const categoryContainer = document.getElementById('categoryContainer');
const searchInput = document.getElementById('searchInput');
const clearSearchBtn = document.getElementById('clearSearch');
const darkModeToggle = document.getElementById('darkModeToggle');
const brandLogo = document.getElementById('brandLogo');
const resetCategoryBtn = document.getElementById('resetCategoryBtn');

// Modal Detail Elements
const pinModal = document.getElementById('pinModal');
const closeModalBtn = document.getElementById('closeModal');
const modalImage = document.getElementById('modalImage');
const modalCategoryTag = document.getElementById('modalCategoryTag');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const modalAuthorName = document.getElementById('modalAuthorName');
const modalAuthorAvatar = document.getElementById('modalAuthorAvatar');
const modalLikeBtn = document.getElementById('modalLikeBtn');
const modalLikeIcon = document.getElementById('modalLikeIcon');
const modalSaveBtn = document.getElementById('modalSaveBtn');
const modalShareBtn = document.getElementById('modalShareBtn');
const downloadBtn = document.getElementById('downloadBtn');

// Photo Editor Elements
const editorModal = document.getElementById('editorModal');
const closeEditorModalBtn = document.getElementById('closeEditorModal');
const editorPreviewImg = document.getElementById('editorPreviewImg');
const editorOverlayTextDisplay = document.getElementById('editorOverlayTextDisplay');
const openHeaderEditorBtn = document.getElementById('openHeaderEditorBtn');
const modalEditBtn = document.getElementById('modalEditBtn');

// Sliders & Controls
const sliderBrightness = document.getElementById('sliderBrightness');
const sliderContrast = document.getElementById('sliderContrast');
const sliderSaturation = document.getElementById('sliderSaturation');
const sliderBlur = document.getElementById('sliderBlur');
const sliderSepia = document.getElementById('sliderSepia');
const sliderHue = document.getElementById('sliderHue');
const editorTextInput = document.getElementById('editorTextInput');

const valBrightness = document.getElementById('valBrightness');
const valContrast = document.getElementById('valContrast');
const valSaturation = document.getElementById('valSaturation');
const valBlur = document.getElementById('valBlur');
const valSepia = document.getElementById('valSepia');
const valHue = document.getElementById('valHue');

// Upload Elements
const uploadModal = document.getElementById('uploadModal');
const openUploadModalBtn = document.getElementById('openUploadModalBtn');
const closeUploadModalBtn = document.getElementById('closeUploadModal');
const uploadForm = document.getElementById('uploadForm');

// Toast Element
const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toastMessage');

// Render Category Chips
function renderCategories() {
    categoryContainer.innerHTML = categories.map(cat => `
        <button onclick="filterCategory('${cat}')" 
            class="px-5 py-2 rounded-full text-xs font-bold whitespace-nowrap transition duration-200 ${
                currentFilter === cat 
                ? 'bg-gray-900 text-white dark:bg-white dark:text-gray-900 shadow-md' 
                : 'bg-gray-100 hover:bg-gray-200 dark:bg-musake-cardDark dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300'
            }">
            ${cat}
        </button>
    `).join('');
}

// Filter Function
window.filterCategory = function(cat) {
    currentFilter = cat;
    renderCategories();
    renderPins();
};

// Render Gallery Masonry Grid
function renderPins() {
    const filteredPins = pinsData.filter(pin => {
        const matchesCategory = currentFilter === 'Semua' || pin.category.toLowerCase() === currentFilter.toLowerCase();
        const matchesSearch = pin.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                              pin.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                              pin.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
                              pin.author.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    if (filteredPins.length === 0) {
        pinsGrid.innerHTML = '';
        emptyState.classList.remove('hidden');
        return;
    }

    emptyState.classList.add('hidden');

    pinsGrid.innerHTML = filteredPins.map(pin => `
        <div class="masonry-item group relative rounded-3xl overflow-hidden bg-white dark:bg-musake-cardDark cursor-pointer transition transform duration-300 hover:-translate-y-1.5 border border-gray-100 dark:border-gray-800/80 shadow-sm hover:shadow-xl hover:shadow-musake-600/10"
             onclick="openModal('${pin.id}')">
            
            <img src="${pin.imageUrl}" alt="${pin.title}" class="w-full h-auto object-cover rounded-3xl group-hover:scale-105 transition duration-500 ease-out" loading="lazy">

            <!-- Hover Overlay -->
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-between pointer-events-none">
                
                <div class="flex justify-between items-center pointer-events-auto">
                    <span class="text-[11px] font-bold text-white bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                        ${pin.category}
                    </span>
                    <div class="flex items-center gap-1.5">
                        <button onclick="event.stopPropagation(); openPhotoEditor('${pin.imageUrl}')" 
                            class="p-2 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full text-white transition text-xs" title="Edit Foto Ini">
                            <i class="fa-solid fa-wand-magic-sparkles"></i>
                        </button>
                        <button onclick="event.stopPropagation(); toggleSave('${pin.id}')" 
                            class="px-4 py-2 rounded-full font-bold text-xs transition transform active:scale-95 shadow ${
                                pin.isSaved 
                                ? 'bg-white text-gray-900' 
                                : 'bg-musake-600 hover:bg-musake-700 text-white'
                            }">
                            ${pin.isSaved ? 'Tersimpan' : 'Simpan'}
                        </button>
                    </div>
                </div>

                <div class="flex justify-between items-end pointer-events-auto">
                    <div>
                        <h4 class="text-white font-bold text-sm line-clamp-1">${pin.title}</h4>
                        <div class="flex items-center gap-2 text-gray-300 text-xs mt-1">
                            <img src="${pin.authorAvatar}" class="w-5 h-5 rounded-full object-cover">
                            <span class="truncate max-w-[100px]">${pin.author}</span>
                        </div>
                    </div>

                    <button onclick="event.stopPropagation(); toggleLike('${pin.id}')" 
                        class="p-2.5 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full text-white transition">
                        <i class="${pin.isLiked ? 'fa-solid text-red-500' : 'fa-regular'} fa-heart text-sm"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Open Detail Pin Modal
window.openModal = function(pinId) {
    activePin = pinsData.find(p => p.id === pinId);
    if (!activePin) return;

    modalImage.src = activePin.imageUrl;
    if (modalCategoryTag) modalCategoryTag.textContent = activePin.category;
    if (modalTitle) modalTitle.textContent = activePin.title;
    if (modalDescription) modalDescription.textContent = activePin.description;
    if (modalAuthorName) modalAuthorName.textContent = activePin.author;
    if (modalAuthorAvatar) modalAuthorAvatar.src = activePin.authorAvatar;
    if (downloadBtn) downloadBtn.href = activePin.imageUrl;

    updateModalButtonsState();
    pinModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
};

function closeModal() {
    pinModal.classList.add('hidden');
    document.body.style.overflow = 'auto';
}

function updateModalButtonsState() {
    if (!activePin) return;
    if (modalLikeIcon) {
        modalLikeIcon.className = activePin.isLiked ? 'fa-solid fa-heart text-red-500 text-xl' : 'fa-regular fa-heart text-xl';
    }
    if (modalSaveBtn) {
        modalSaveBtn.innerHTML = `<span>${activePin.isSaved ? 'Tersimpan' : 'Simpan'}</span>`;
        modalSaveBtn.className = activePin.isSaved 
            ? 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white px-5 py-2 rounded-full font-semibold transition text-sm'
            : 'bg-musake-600 hover:bg-musake-700 text-white px-5 py-2 rounded-full font-semibold transition text-sm shadow-md shadow-musake-600/30';
    }
}

window.toggleSave = function(pinId) {
    const pin = pinsData.find(p => p.id === pinId);
    if (pin) {
        pin.isSaved = !pin.isSaved;
        if (activePin && activePin.id === pinId) updateModalButtonsState();
        renderPins();
        showToast(pin.isSaved ? 'Foto disimpan ke koleksi Anda' : 'Foto dihapus dari simpanan');
    }
};

window.toggleLike = function(pinId) {
    const pin = pinsData.find(p => p.id === pinId);
    if (pin) {
        pin.isLiked = !pin.isLiked;
        pin.likes += pin.isLiked ? 1 : -1;
        if (activePin && activePin.id === pinId) updateModalButtonsState();
        renderPins();
    }
};

// Open Photo Studio Editor
window.openPhotoEditor = function(imageUrl) {
    editorState.sourceUrl = imageUrl || (activePin ? activePin.imageUrl : pinsData[0].imageUrl);
    editorPreviewImg.src = editorState.sourceUrl;
    resetEditorFilters();
    
    if (pinModal && !pinModal.classList.contains('hidden')) {
        closeModal();
    }

    if (editorModal) {
        editorModal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    }
};

// Apply Styles to Editor Preview Image
function applyEditorStyles() {
    if (!editorPreviewImg) return;

    editorPreviewImg.style.filter = `
        brightness(${editorState.brightness}%) 
        contrast(${editorState.contrast}%) 
        saturate(${editorState.saturation}%) 
        blur(${editorState.blur}px) 
        sepia(${editorState.sepia}%) 
        hue-rotate(${editorState.hue}deg)
    `;

    editorPreviewImg.style.transform = `
        rotate(${editorState.rotate}deg) 
        scaleX(${editorState.flipH}) 
        scaleY(${editorState.flipV})
    `;

    if (editorOverlayTextDisplay) {
        if (editorState.overlayText) {
            editorOverlayTextDisplay.textContent = editorState.overlayText;
            editorOverlayTextDisplay.classList.remove('hidden');
        } else {
            editorOverlayTextDisplay.classList.add('hidden');
        }
    }

    if (valBrightness) valBrightness.textContent = `${editorState.brightness}%`;
    if (valContrast) valContrast.textContent = `${editorState.contrast}%`;
    if (valSaturation) valSaturation.textContent = `${editorState.saturation}%`;
    if (valBlur) valBlur.textContent = `${editorState.blur}px`;
    if (valSepia) valSepia.textContent = `${editorState.sepia}%`;
    if (valHue) valHue.textContent = `${editorState.hue}°`;
}

// Preset Filter Logic
function applyPreset(presetName) {
    resetEditorFilters(false);
    switch (presetName) {
        case 'vintage':
            editorState.sepia = 50;
            editorState.brightness = 90;
            editorState.contrast = 110;
            editorState.saturation = 80;
            break;
        case 'cyberpunk':
            editorState.hue = 180;
            editorState.saturation = 180;
            editorState.contrast = 130;
            break;
        case 'bw':
            editorState.saturation = 0;
            editorState.contrast = 140;
            break;
        case 'warm':
            editorState.sepia = 20;
            editorState.brightness = 105;
            editorState.hue = 15;
            break;
        case 'cool':
            editorState.hue = 190;
            editorState.saturation = 120;
            break;
        case 'dramatic':
            editorState.contrast = 160;
            editorState.brightness = 85;
            editorState.saturation = 110;
            break;
        default: // 'original'
            break;
    }
    syncSlidersWithState();
    applyEditorStyles();
}

function syncSlidersWithState() {
    if (sliderBrightness) sliderBrightness.value = editorState.brightness;
    if (sliderContrast) sliderContrast.value = editorState.contrast;
    if (sliderSaturation) sliderSaturation.value = editorState.saturation;
    if (sliderBlur) sliderBlur.value = editorState.blur;
    if (sliderSepia) sliderSepia.value = editorState.sepia;
    if (sliderHue) sliderHue.value = editorState.hue;
}

function resetEditorFilters(resetRotation = true) {
    editorState.brightness = 100;
    editorState.contrast = 100;
    editorState.saturation = 100;
    editorState.blur = 0;
    editorState.sepia = 0;
    editorState.hue = 0;
    
    if (resetRotation) {
        editorState.rotate = 0;
        editorState.flipH = 1;
        editorState.flipV = 1;
        editorState.overlayText = '';
        if (editorTextInput) editorTextInput.value = '';
    }

    syncSlidersWithState();
    applyEditorStyles();
}

// Render Canvas Image for High-Res Export with CORS Safety Fallback
function renderCanvasEditedImage(callback) {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    
    img.crossOrigin = 'anonymous';

    const processImageOnCanvas = () => {
        try {
            const isRotated90 = Math.abs(editorState.rotate % 180) === 90;
            canvas.width = isRotated90 ? img.height : img.width;
            canvas.height = isRotated90 ? img.width : img.height;

            ctx.save();
            ctx.translate(canvas.width / 2, canvas.height / 2);
            ctx.rotate((editorState.rotate * Math.PI) / 180);
            ctx.scale(editorState.flipH, editorState.flipV);

            ctx.filter = `
                brightness(${editorState.brightness}%) 
                contrast(${editorState.contrast}%) 
                saturate(${editorState.saturation}%) 
                blur(${editorState.blur}px) 
                sepia(${editorState.sepia}%) 
                hue-rotate(${editorState.hue}deg)
            `;

            ctx.drawImage(img, -img.width / 2, -img.height / 2);
            ctx.restore();

            if (editorState.overlayText) {
                ctx.save();
                const fontSize = Math.max(24, Math.floor(canvas.width / 20));
                ctx.font = `bold ${fontSize}px Plus Jakarta Sans, sans-serif`;
                ctx.fillStyle = '#ffffff';
                ctx.textAlign = 'center';
                ctx.shadowColor = 'rgba(0, 0, 0, 0.8)';
                ctx.shadowBlur = 10;
                ctx.shadowOffsetY = 4;
                ctx.fillText(editorState.overlayText, canvas.width / 2, canvas.height - (fontSize * 1.5));
                ctx.restore();
            }

            callback(canvas.toDataURL('image/png'));
        } catch (err) {
            console.warn("CORS limitation caught, returning fallback raw URL:", err);
            callback(editorState.sourceUrl);
        }
    };

    img.onload = processImageOnCanvas;
    img.onerror = () => {
        callback(editorState.sourceUrl);
    };

    img.src = editorState.sourceUrl;
}

// Show Toast Message
function showToast(msg) {
    toastMessage.textContent = msg;
    toast.classList.remove('translate-y-20', 'opacity-0');
    toast.classList.add('translate-y-0', 'opacity-100');
    setTimeout(() => {
        toast.classList.remove('translate-y-0', 'opacity-100');
        toast.classList.add('translate-y-20', 'opacity-0');
    }, 3000);
}

// Event Listeners Initialization
function setupEventListeners() {
    // Search & Brand Filter Reset
    brandLogo.addEventListener('click', (e) => {
        e.preventDefault();
        filterCategory('Semua');
    });

    if (resetCategoryBtn) {
        resetCategoryBtn.addEventListener('click', () => filterCategory('Semua'));
    }

    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.trim();
        if (searchQuery.length > 0) {
            clearSearchBtn.classList.remove('hidden');
        } else {
            clearSearchBtn.classList.add('hidden');
        }
        renderPins();
    });

    clearSearchBtn.addEventListener('click', () => {
        searchInput.value = '';
        searchQuery = '';
        clearSearchBtn.classList.add('hidden');
        renderPins();
    });

    // Dark Mode Toggle
    darkModeToggle.addEventListener('click', () => {
        document.documentElement.classList.toggle('dark');
    });

    // Close Pin Detail Modal
    closeModalBtn.addEventListener('click', closeModal);
    pinModal.addEventListener('click', (e) => {
        if (e.target === pinModal) closeModal();
    });

    if (modalLikeBtn) {
        modalLikeBtn.addEventListener('click', () => {
            if (activePin) toggleLike(activePin.id);
        });
    }

    if (modalSaveBtn) {
        modalSaveBtn.addEventListener('click', () => {
            if (activePin) toggleSave(activePin.id);
        });
    }

    if (modalShareBtn) {
        modalShareBtn.addEventListener('click', () => {
            if (activePin) {
                const dummy = document.createElement('input');
                document.body.appendChild(dummy);
                dummy.value = activePin.imageUrl;
                dummy.select();
                document.execCommand('copy');
                document.body.removeChild(dummy);
                showToast('Tautan gambar berhasil disalin!');
            }
        });
    }

    // Photo Studio Triggers
    openHeaderEditorBtn.addEventListener('click', () => {
        openPhotoEditor(pinsData[0].imageUrl);
    });

    if (modalEditBtn) {
        modalEditBtn.addEventListener('click', () => {
            if (activePin) openPhotoEditor(activePin.imageUrl);
        });
    }

    closeEditorModalBtn.addEventListener('click', () => {
        editorModal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    });

    // Preset Filter Buttons Event Delegation
    const presetButtonsContainer = document.getElementById('presetButtonsContainer');
    if (presetButtonsContainer) {
        presetButtonsContainer.addEventListener('click', (e) => {
            const btn = e.target.closest('.preset-btn');
            if (btn && btn.dataset.preset) {
                applyPreset(btn.dataset.preset);
            }
        });
    }

    // Slider Event Handlers
    sliderBrightness.addEventListener('input', (e) => { editorState.brightness = e.target.value; applyEditorStyles(); });
    sliderContrast.addEventListener('input', (e) => { editorState.contrast = e.target.value; applyEditorStyles(); });
    sliderSaturation.addEventListener('input', (e) => { editorState.saturation = e.target.value; applyEditorStyles(); });
    sliderBlur.addEventListener('input', (e) => { editorState.blur = e.target.value; applyEditorStyles(); });
    sliderSepia.addEventListener('input', (e) => { editorState.sepia = e.target.value; applyEditorStyles(); });
    sliderHue.addEventListener('input', (e) => { editorState.hue = e.target.value; applyEditorStyles(); });

    editorTextInput.addEventListener('input', (e) => {
        editorState.overlayText = e.target.value.trim();
        applyEditorStyles();
    });

    // Quick Transform Buttons
    document.getElementById('rotateLeftBtn').addEventListener('click', () => { editorState.rotate -= 90; applyEditorStyles(); });
    document.getElementById('rotateRightBtn').addEventListener('click', () => { editorState.rotate += 90; applyEditorStyles(); });
    document.getElementById('flipHBtn').addEventListener('click', () => { editorState.flipH *= -1; applyEditorStyles(); });
    document.getElementById('flipVBtn').addEventListener('click', () => { editorState.flipV *= -1; applyEditorStyles(); });
    document.getElementById('resetEditorBtn').addEventListener('click', () => { resetEditorFilters(true); });

    // Export Actions
    document.getElementById('downloadEditedImageBtn').addEventListener('click', () => {
        renderCanvasEditedImage((dataUrl) => {
            const link = document.createElement('a');
            link.download = `musake-edited-${Date.now()}.png`;
            link.href = dataUrl;
            link.click();
            showToast('Foto hasil edit berhasil diunduh!');
        });
    });

    document.getElementById('saveEditedToGalleryBtn').addEventListener('click', () => {
        renderCanvasEditedImage((dataUrl) => {
            const editedPin = {
                id: 'm-edited-' + Date.now(),
                title: 'Hasil Edit Studio',
                description: 'Foto disunting menggunakan musake project Photo Studio.',
                category: 'Desain',
                imageUrl: dataUrl,
                author: 'Kreator Musake',
                authorAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80',
                likes: 1,
                isLiked: true,
                isSaved: true
            };

            pinsData.unshift(editedPin);
            renderPins();

            editorModal.classList.add('hidden');
            document.body.style.overflow = 'auto';

            showToast('Karya hasil edit berhasil ditambahkan ke galeri musake project!');
        });
    });

    // Upload Modal
    openUploadModalBtn.addEventListener('click', () => {
        uploadModal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    });

    closeUploadModalBtn.addEventListener('click', () => {
        uploadModal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    });

    uploadForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const newPin = {
            id: 'pin-' + Date.now(),
            title: document.getElementById('uploadTitle').value.trim(),
            description: document.getElementById('uploadDescription').value.trim() || 'Tidak ada deskripsi.',
            category: document.getElementById('uploadCategory').value,
            imageUrl: document.getElementById('uploadUrl').value.trim(),
            author: document.getElementById('uploadAuthor').value.trim() || 'Pengguna Musake',
            authorAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80',
            likes: 0,
            isLiked: false,
            isSaved: false
        };

        pinsData.unshift(newPin);
        renderPins();

        uploadForm.reset();
        uploadModal.classList.add('hidden');
        document.body.style.overflow = 'auto';

        showToast('Karya baru berhasil diunggah ke musake project!');
    });
}

// Initialize Application
window.addEventListener('DOMContentLoaded', () => {
    renderCategories();
    renderPins();
    setupEventListeners();
});// Initial Pins Data
const initialPins = [
    {
        id: 'pin-1',
        title: 'Arsitektur Modern Minimalis',
        description: 'Desain fasad bangunan dengan konsep geometri bersih dan pencahayaan natural yang menawan.',
        category: 'Arsitektur',
        imageUrl: 'https://images.unsplash.com/photo-1513694203232-719a280e022f?w=800&auto=format&fit=crop&q=80',
        author: 'Elena Rostova',
        authorAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80',
        likes: 142,
        isLiked: false,
        isSaved: false
    },
    {
        id: 'pin-2',
        title: 'Keindahan Alam Pegunungan',
        description: 'Kabut tipis menyelimuti lereng bukit saat matahari terbit di dataran tinggi.',
        category: 'Alam',
        imageUrl: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=800&auto=format&fit=crop&q=80',
        author: 'Marvin McKinney',
        authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
        likes: 89,
        isLiked: false,
        isSaved: true
    },
    {
        id: 'pin-3',
        title: 'Kopi & Estetika Kerja',
        description: 'Suasana meja kerja minimalis dengan secangkir kopi hangat di pagi hari.',
        category: 'Kuliner',
        imageUrl: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=800&auto=format&fit=crop&q=80',
        author: 'Sophia Chen',
        authorAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
        likes: 210,
        isLiked: true,
        isSaved: false
    },
    {
        id: 'pin-4',
        title: 'Seni Abstrak Modern',
        description: 'Eksplorasi bentuk geometri dan komposisi warna kontras tinggi.',
        category: 'Desain',
        imageUrl: 'https://images.unsplash.com/photo-1541701494587-cb58502866ab?w=800&auto=format&fit=crop&q=80',
        author: 'Lucas Vance',
        authorAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80',
        likes: 67,
        isLiked: false,
        isSaved: false
    },
    {
        id: 'pin-5',
        title: 'Lampu Neon Kota Malam',
        description: 'Sudut jalanan metropolis yang bercahaya di bawah rintik hujan malam hari.',
        category: 'Fotografi',
        imageUrl: 'https://images.unsplash.com/photo-1514565131-fce0801e5785?w=800&auto=format&fit=crop&q=80',
        author: 'Kenji Sato',
        authorAvatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=100&auto=format&fit=crop&q=80',
        likes: 312,
        isLiked: true,
        isSaved: true
    },
    {
        id: 'pin-6',
        title: 'Hutan Pinus Berkabut',
        description: 'Deretan pohon pinus menjulang tinggi dalam pelukan kabut pagi yang tenang.',
        category: 'Alam',
        imageUrl: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=800&auto=format&fit=crop&q=80',
        author: 'Emma Watson',
        authorAvatar: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&auto=format&fit=crop&q=80',
        likes: 198,
        isLiked: false,
        isSaved: false
    },
    {
        id: 'pin-7',
        title: 'Interior Nordic Minimalis',
        description: 'Penataan ruang keluarga dengan furnitur kayu alami dan warna hangat.',
        category: 'Arsitektur',
        imageUrl: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&auto=format&fit=crop&q=80',
        author: 'Oliver Smith',
        authorAvatar: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&auto=format&fit=crop&q=80',
        likes: 175,
        isLiked: false,
        isSaved: true
    },
    {
        id: 'pin-8',
        title: 'Ramen Autentik Jepang',
        description: 'Semangkuk ramen hangat dengan kuah gurih, mi lembut, dan kuah mi yang menggugah selera.',
        category: 'Kuliner',
        imageUrl: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=800&auto=format&fit=crop&q=80',
        author: 'Yuki Tanaka',
        authorAvatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&auto=format&fit=crop&q=80',
        likes: 289,
        isLiked: true,
        isSaved: false
    },
    {
        id: 'pin-9',
        title: 'Setup Kerja Setup Futuristik',
        description: 'Kombinasi lampu RGB halus dengan monitor lengkung untuk produktivitas maksimal.',
        category: 'Desain',
        imageUrl: 'https://images.unsplash.com/photo-1526738549149-8e07eca6c147?w=800&auto=format&fit=crop&q=80',
        author: 'Alex Rivera',
        authorAvatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&auto=format&fit=crop&q=80',
        likes: 420,
        isLiked: false,
        isSaved: true
    },
    {
        id: 'pin-10',
        title: 'Potret Sederhana Elegan',
        description: 'Eksplorasi teknik bayangan dan cahaya alami pada fotografi studio.',
        category: 'Fotografi',
        imageUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop&q=80',
        author: 'Clara Dubois',
        authorAvatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100&auto=format&fit=crop&q=80',
        likes: 156,
        isLiked: false,
        isSaved: false
    },
    {
        id: 'pin-11',
        title: 'Danau Jernih Pegunungan',
        description: 'Pantulan langit biru murni di atas permukaan air danau yang tenang.',
        category: 'Alam',
        imageUrl: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470?w=800&auto=format&fit=crop&q=80',
        author: 'Marvin McKinney',
        authorAvatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80',
        likes: 230,
        isLiked: true,
        isSaved: false
    },
    {
        id: 'pin-12',
        title: 'Gedung Pencakar Langit',
        description: 'Sudut pandang bawah dari arsitektur kaca modern yang menjulang tinggi.',
        category: 'Arsitektur',
        imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&auto=format&fit=crop&q=80',
        author: 'Elena Rostova',
        authorAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=80',
        likes: 184,
        isLiked: false,
        isSaved: false
    },
    {
        id: 'pin-13',
        title: 'Dessert Cake Matcha',
        description: 'Sajian kue matcha lembut berbalut krim putih dan taburan bubuk teh hijau.',
        category: 'Kuliner',
        imageUrl: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=800&auto=format&fit=crop&q=80',
        author: 'Sophia Chen',
        authorAvatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80',
        likes: 305,
        isLiked: false,
        isSaved: true
    },
    {
        id: 'pin-14',
        title: 'Seni Ilustrasi Digital 3D',
        description: 'Karakter 3D dengan tekstur halus dan efek pencahayaan dinamis.',
        category: 'Desain',
        imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80',
        author: 'Lucas Vance',
        authorAvatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&auto=format&fit=crop&q=80',
        likes: 388,
        isLiked: true,
        isSaved: true
    },
    {
        id: 'pin-15',
        title: 'Matahari Terbenam di Pantai',
        description: 'Siluet pepohonan kelapa di tepi pantai dengan warna langit jingga keemasan.',
        category: 'Fotografi',
        imageUrl: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=800&auto=format&fit=crop&q=80',
        author: 'Kenji Sato',
        authorAvatar: 'https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=100&auto=format&fit=crop&q=80',
        likes: 512,
        isLiked: false,
        isSaved: false
    }
];

// Global State
let pinsData = [...initialPins];
let currentFilter = 'Semua';
let searchQuery = '';
let activePin = null;

const categories = ['Semua', 'Fotografi', 'Arsitektur', 'Alam', 'Desain', 'Kuliner'];

// Editor State
let editorState = {
    sourceUrl: '',
    brightness: 100,
    contrast: 100,
    saturation: 100,
    blur: 0,
    sepia: 0,
    hue: 0,
    rotate: 0,
    flipH: 1,
    flipV: 1,
    overlayText: ''
};

// DOM Elements
const pinsGrid = document.getElementById('pinsGrid');
const emptyState = document.getElementById('emptyState');
const categoryContainer = document.getElementById('categoryContainer');
const searchInput = document.getElementById('searchInput');
const clearSearchBtn = document.getElementById('clearSearch');
const darkModeToggle = document.getElementById('darkModeToggle');
const brandLogo = document.getElementById('brandLogo');
const resetCategoryBtn = document.getElementById('resetCategoryBtn');

// Modal Detail Elements
const pinModal = document.getElementById('pinModal');
const closeModalBtn = document.getElementById('closeModal');
const modalImage = document.getElementById('modalImage');
const modalCategoryTag = document.getElementById('modalCategoryTag');
const modalTitle = document.getElementById('modalTitle');
const modalDescription = document.getElementById('modalDescription');
const modalAuthorName = document.getElementById('modalAuthorName');
const modalAuthorAvatar = document.getElementById('modalAuthorAvatar');
const modalLikeBtn = document.getElementById('modalLikeBtn');
const modalLikeIcon = document.getElementById('modalLikeIcon');
const modalSaveBtn = document.getElementById('modalSaveBtn');
const modalShareBtn = document.getElementById('modalShareBtn');
const downloadBtn = document.getElementById('downloadBtn');

// Photo Editor Elements
const editorModal = document.getElementById('editorModal');
const closeEditorModalBtn = document.getElementById('closeEditorModal');
const editorPreviewImg = document.getElementById('editorPreviewImg');
const editorOverlayTextDisplay = document.getElementById('editorOverlayTextDisplay');
const openHeaderEditorBtn = document.getElementById('openHeaderEditorBtn');
const modalEditBtn = document.getElementById('modalEditBtn');

// Sliders & Controls
const sliderBrightness = document.getElementById('sliderBrightness');
const sliderContrast = document.getElementById('sliderContrast');
const sliderSaturation = document.getElementById('sliderSaturation');
const sliderBlur = document.getElementById('sliderBlur');
const sliderSepia = document.getElementById('sliderSepia');
const sliderHue = document.getElementById('sliderHue');
const editorTextInput = document.getElementById('editorTextInput');

const valBrightness = document.getElementById('valBrightness');
const valContrast = document.getElementById('valContrast');
const valSaturation = document.getElementById('valSaturation');
const valBlur = document.getElementById('valBlur');
const valSepia = document.getElementById('valSepia');
const valHue = document.getElementById('valHue');

// Upload Elements
const uploadModal = document.getElementById('uploadModal');
const openUploadModalBtn = document.getElementById('openUploadModalBtn');
const closeUploadModalBtn = document.getElementById('closeUploadModal');
const uploadForm = document.getElementById('uploadForm');

// Toast Element
const toast = document.getElementById('toast');
const toastMessage = document.getElementById('toastMessage');

// Render Category Chips
function renderCategories() {
    categoryContainer.innerHTML = categories.map(cat => `
        <button onclick="filterCategory('${cat}')" 
            class="px-5 py-2 rounded-full text-xs font-bold whitespace-nowrap transition duration-200 ${
                currentFilter === cat 
                ? 'bg-gray-900 text-white dark:bg-white dark:text-gray-900 shadow-md' 
                : 'bg-gray-100 hover:bg-gray-200 dark:bg-musake-cardDark dark:hover:bg-gray-800 text-gray-700 dark:text-gray-300'
            }">
            ${cat}
        </button>
    `).join('');
}

// Filter Function
window.filterCategory = function(cat) {
    currentFilter = cat;
    renderCategories();
    renderPins();
};

// Render Gallery Masonry Grid
function renderPins() {
    const filteredPins = pinsData.filter(pin => {
        const matchesCategory = currentFilter === 'Semua' || pin.category.toLowerCase() === currentFilter.toLowerCase();
        const matchesSearch = pin.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                              pin.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                              pin.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
                              pin.author.toLowerCase().includes(searchQuery.toLowerCase());
        return matchesCategory && matchesSearch;
    });

    if (filteredPins.length === 0) {
        pinsGrid.innerHTML = '';
        emptyState.classList.remove('hidden');
        return;
    }

    emptyState.classList.add('hidden');

    pinsGrid.innerHTML = filteredPins.map(pin => `
        <div class="masonry-item group relative rounded-3xl overflow-hidden bg-white dark:bg-musake-cardDark cursor-pointer transition transform duration-300 hover:-translate-y-1.5 border border-gray-100 dark:border-gray-800/80 shadow-sm hover:shadow-xl hover:shadow-musake-600/10"
             onclick="openModal('${pin.id}')">
            
            <img src="${pin.imageUrl}" alt="${pin.title}" class="w-full h-auto object-cover rounded-3xl group-hover:scale-105 transition duration-500 ease-out" loading="lazy">

            <!-- Hover Overlay -->
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-4 flex flex-col justify-between pointer-events-none">
                
                <div class="flex justify-between items-center pointer-events-auto">
                    <span class="text-[11px] font-bold text-white bg-black/40 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
                        ${pin.category}
                    </span>
                    <div class="flex items-center gap-1.5">
                        <button onclick="event.stopPropagation(); openPhotoEditor('${pin.imageUrl}')" 
                            class="p-2 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full text-white transition text-xs" title="Edit Foto Ini">
                            <i class="fa-solid fa-wand-magic-sparkles"></i>
                        </button>
                        <button onclick="event.stopPropagation(); toggleSave('${pin.id}')" 
                            class="px-4 py-2 rounded-full font-bold text-xs transition transform active:scale-95 shadow ${
                                pin.isSaved 
                                ? 'bg-white text-gray-900' 
                                : 'bg-musake-600 hover:bg-musake-700 text-white'
                            }">
                            ${pin.isSaved ? 'Tersimpan' : 'Simpan'}
                        </button>
                    </div>
                </div>

                <div class="flex justify-between items-end pointer-events-auto">
                    <div>
                        <h4 class="text-white font-bold text-sm line-clamp-1">${pin.title}</h4>
                        <div class="flex items-center gap-2 text-gray-300 text-xs mt-1">
                            <img src="${pin.authorAvatar}" class="w-5 h-5 rounded-full object-cover">
                            <span class="truncate max-w-[100px]">${pin.author}</span>
                        </div>
                    </div>

                    <button onclick="event.stopPropagation(); toggleLike('${pin.id}')" 
                        class="p-2.5 bg-white/20 hover:bg-white/40 backdrop-blur-md rounded-full text-white transition">
                        <i class="${pin.isLiked ? 'fa-solid text-red-500' : 'fa-regular'} fa-heart text-sm"></i>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// Open Detail Pin Modal
window.openModal = function(pinId) {
    activePin = pinsData.find(p => p.id === pinId);
    if (!activePin) return;

    modalImage.src = activePin.imageUrl;
    if (modalCategoryTag) modalCategoryTag.textContent = activePin.category;
    if (modalTitle) modalTitle.textContent = activePin.title;
    if (modalDescription) modalDescription.textContent = activePin.description;
    if (modalAuthorName) modalAuthorName.textContent = activePin.author;
    if (modalAuthorAvatar) modalAuthorAvatar.src = activePin.authorAvatar;
    if (downloadBtn) downloadBtn.href = activePin.imageUrl;

    updateModalButtonsState();
    pinModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
};

function closeModal() {
    pinModal.classList.add('hidden');
    document.body.style.overflow = 'auto';
}

function updateModalButtonsState() {
    if (!activePin) return;
    if (modalLikeIcon) {
        modalLikeIcon.className = activePin.isLiked ? 'fa-solid fa-heart text-red-500 text-xl' : 'fa-regular fa-heart text-xl';
    }
    if (modalSaveBtn) {
        modalSaveBtn.innerHTML = `<span>${activePin.isSaved ? 'Tersimpan' : 'Simpan'}</span>`;
        modalSaveBtn.className = activePin.isSaved 
            ? 'bg-gray-200 dark:bg-gray-700 text-gray-900 dark:text-white px-5 py-2 rounded-full font-semibold transition text-sm'
            : 'bg-musake-600 hover:bg-musake-700 text-white px-5 py-2 rounded-full font-semibold transition text-sm shadow-md shadow-musake-600/30';
    }
}

window.toggleSave = function(pinId) {
    const pin = pinsData.find(p => p.id === pinId);
    if (pin) {
        pin.isSaved = !pin.isSaved;
        if (activePin && activePin.id === pinId) updateModalButtonsState();
        renderPins();
        showToast(pin.isSaved ? 'Foto disimpan ke koleksi Anda' : 'Foto dihapus dari simpanan');
    }
};

window.toggleLike = function(pinId) {
    const pin = pinsData.find(p => p.id === pinId);
    if (pin) {
        pin.isLiked = !pin.isLiked;
        pin.likes += pin.isLiked ? 1 : -1;
        if (activePin && activePin.id === pinId) updateModalButtonsState();
        renderPins();
    }
};

// Open Photo Studio Editor
window.openPhotoEditor = function(imageUrl) {
    editorState.sourceUrl = imageUrl || (activePin ? activePin.imageUrl : pinsData[0].imageUrl);
    editorPreviewImg.src = editorState.sourceUrl;
    resetEditorFilters();
    
    if (!pinModal.classList.contains('hidden')) {
        closeModal();
    }

    editorModal.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
};

// Apply Styles to Editor Preview Image
function applyEditorStyles() {
    editorPreviewImg.style.filter = `
        brightness(${editorState.brightness}%) 
        contrast(${editorState.contrast}%) 
        saturate(${editorState.saturation}%) 
        blur(${editorState.blur}px) 
        sepia(${editorState.sepia}%) 
        hue-rotate(${editorState.hue}deg)
    `;

    editorPreviewImg.style.transform = `
        rotate(${editorState.rotate}deg) 
        scaleX(${editorState.flipH}) 
        scaleY(${editorState.flipV})
    `;

    if (editorState.overlayText) {
        editorOverlayTextDisplay.textContent = editorState.overlayText;
        editorOverlayTextDisplay.classList.remove('hidden');
    } else {
        editorOverlayTextDisplay.classList.add('hidden');
    }

    valBrightness.textContent = `${editorState.brightness}%`;
    valContrast.textContent = `${editorState.contrast}%`;
    valSaturation.textContent = `${editorState.saturation}%`;
    valBlur.textContent = `${editorState.blur}px`;
    valSepia.textContent = `${editorState.sepia}%`;
    valHue.textContent = `${editorState.hue}°`;
}

// Preset Filter Logic
function applyPreset(presetName) {
    resetEditorFilters(false);
    switch (presetName) {
        case 'vintage':
            editorState.sepia = 50;
            editorState.brightness = 90;
            editorState.contrast = 110;
            editorState.saturation = 80;
            break;
        case 'cyberpunk':
            editorState.hue = 180;
            editorState.saturation = 180;
            editorState.contrast = 130;
            break;
        case 'bw':
            editorState.saturation = 0;
            editorState.contrast = 140;
            break;
        case 'warm':
            editorState.sepia = 20;
            editorState.brightness = 105;
            editorState.hue = 15;
            break;
        case 'cool':
            editorState.hue = 190;
            editorState.saturation = 120;
            break;
        case 'dramatic':
            editorState.contrast = 160;
            editorState.brightness = 85;
            editorState.saturation = 110;
            break;
        default: // 'original'
            break;
    }
    syncSlidersWithState();
    applyEditorStyles();
}

function syncSlidersWithState() {
    sliderBrightness.value = editorState.brightness;
    sliderContrast.value = editorState.contrast;
    sliderSaturation.value = editorState.saturation;
    sliderBlur.value = editorState.blur;
    sliderSepia.value = editorState.sepia;
    sliderHue.value = editorState.hue;
}

function resetEditorFilters(resetRotation = true) {
    editorState.brightness = 100;
    editorState.contrast = 100;
    editorState.saturation = 100;
    editorState.blur = 0;
    editorState.sepia = 0;
    editorState.hue = 0;
    
    if (resetRotation) {
        editorState.rotate = 0;
        editorState.flipH = 1;
        editorState.flipV = 1;
        editorState.overlayText = '';
        editorTextInput.value = '';
    }

    syncSlidersWithState();
    applyEditorStyles();
}

// Render Canvas Image for High-Res Export
function renderCanvasEditedImage(callback) {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const img = new Image();
    img.crossOrigin = 'anonymous';
    
    img.onload = () => {
        const isRotated90 = Math.abs(editorState.rotate % 180) === 90;
        canvas.width = isRotated90 ? img.height : img.width;
        canvas.height = isRotated90 ? img.width : img.height;

        ctx.save();
        ctx.translate(canvas.width / 2, canvas.height / 2);
        ctx.rotate((editorState.rotate * Math.PI) / 180);
        ctx.scale(editorState.flipH, editorState.flipV);

        ctx.filter = `
            brightness(${editorState.brightness}%) 
            contrast(${editorState.contrast}%) 
            saturate(${editorState.saturation}%) 
            blur(${editorState.blur}px) 
            sepia(${editorState.sepia}%) 
            hue-rotate(${editorState.hue}deg)
        `;

        ctx.drawImage(img, -img.width / 2, -img.height / 2);
        ctx.restore();

        if (editorState.overlayText) {
            ctx.save();
            const fontSize = Math.max(24, Math.floor(canvas.width / 20));
            ctx.font = `bold ${fontSize}px Plus Jakarta Sans, sans-serif`;
            ctx.fillStyle = '#ffffff';
            ctx.textAlign = 'center';
            ctx.shadowColor = 'rgba(0, 0, 0, 0.8)';
            ctx.shadowBlur = 10;
            ctx.shadowOffsetY = 4;
            ctx.fillText(editorState.overlayText, canvas.width / 2, canvas.height - (fontSize * 1.5));
            ctx.restore();
        }

        callback(canvas.toDataURL('image/png'));
    };

    img.src = editorState.sourceUrl;
}

// Show Toast Message
function showToast(msg) {
    toastMessage.textContent = msg;
    toast.classList.remove('translate-y-20', 'opacity-0');
    toast.classList.add('translate-y-0', 'opacity-100');
    setTimeout(() => {
        toast.classList.remove('translate-y-0', 'opacity-100');
        toast.classList.add('translate-y-20', 'opacity-0');
    }, 3000);
}

// Event Listeners Initialization
function setupEventListeners() {
    // Search & Brand Filter Reset
    brandLogo.addEventListener('click', (e) => {
        e.preventDefault();
        filterCategory('Semua');
    });

    if (resetCategoryBtn) {
        resetCategoryBtn.addEventListener('click', () => filterCategory('Semua'));
    }

    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value.trim();
        if (searchQuery.length > 0) {
            clearSearchBtn.classList.remove('hidden');
        } else {
            clearSearchBtn.classList.add('hidden');
        }
        renderPins();
    });

    clearSearchBtn.addEventListener('click', () => {
        searchInput.value = '';
        searchQuery = '';
        clearSearchBtn.classList.add('hidden');
        renderPins();
    });

    // Dark Mode Toggle
    darkModeToggle.addEventListener('click', () => {
        document.documentElement.classList.toggle('dark');
    });

    // Close Pin Detail Modal
    closeModalBtn.addEventListener('click', closeModal);
    pinModal.addEventListener('click', (e) => {
        if (e.target === pinModal) closeModal();
    });

    if (modalLikeBtn) {
        modalLikeBtn.addEventListener('click', () => {
            if (activePin) toggleLike(activePin.id);
        });
    }

    if (modalSaveBtn) {
        modalSaveBtn.addEventListener('click', () => {
            if (activePin) toggleSave(activePin.id);
        });
    }

    if (modalShareBtn) {
        modalShareBtn.addEventListener('click', () => {
            if (activePin) {
                const dummy = document.createElement('input');
                document.body.appendChild(dummy);
                dummy.value = activePin.imageUrl;
                dummy.select();
                document.execCommand('copy');
                document.body.removeChild(dummy);
                showToast('Tautan gambar berhasil disalin!');
            }
        });
    }

    // Photo Studio Triggers
    openHeaderEditorBtn.addEventListener('click', () => {
        openPhotoEditor(pinsData[0].imageUrl);
    });

    if (modalEditBtn) {
        modalEditBtn.addEventListener('click', () => {
            if (activePin) openPhotoEditor(activePin.imageUrl);
        });
    }

    closeEditorModalBtn.addEventListener('click', () => {
        editorModal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    });

    // Preset Filter Buttons Event Delegation
    const presetButtonsContainer = document.getElementById('presetButtonsContainer');
    if (presetButtonsContainer) {
        presetButtonsContainer.addEventListener('click', (e) => {
            const btn = e.target.closest('.preset-btn');
            if (btn && btn.dataset.preset) {
                applyPreset(btn.dataset.preset);
            }
        });
    }

    // Slider Event Handlers
    sliderBrightness.addEventListener('input', (e) => { editorState.brightness = e.target.value; applyEditorStyles(); });
    sliderContrast.addEventListener('input', (e) => { editorState.contrast = e.target.value; applyEditorStyles(); });
    sliderSaturation.addEventListener('input', (e) => { editorState.saturation = e.target.value; applyEditorStyles(); });
    sliderBlur.addEventListener('input', (e) => { editorState.blur = e.target.value; applyEditorStyles(); });
    sliderSepia.addEventListener('input', (e) => { editorState.sepia = e.target.value; applyEditorStyles(); });
    sliderHue.addEventListener('input', (e) => { editorState.hue = e.target.value; applyEditorStyles(); });

    editorTextInput.addEventListener('input', (e) => {
        editorState.overlayText = e.target.value.trim();
        applyEditorStyles();
    });

    // Quick Transform Buttons
    document.getElementById('rotateLeftBtn').addEventListener('click', () => { editorState.rotate -= 90; applyEditorStyles(); });
    document.getElementById('rotateRightBtn').addEventListener('click', () => { editorState.rotate += 90; applyEditorStyles(); });
    document.getElementById('flipHBtn').addEventListener('click', () => { editorState.flipH *= -1; applyEditorStyles(); });
    document.getElementById('flipVBtn').addEventListener('click', () => { editorState.flipV *= -1; applyEditorStyles(); });
    document.getElementById('resetEditorBtn').addEventListener('click', () => { resetEditorFilters(true); });

    // Export Actions
    document.getElementById('downloadEditedImageBtn').addEventListener('click', () => {
        renderCanvasEditedImage((dataUrl) => {
            const link = document.createElement('a');
            link.download = `musake-edited-${Date.now()}.png`;
            link.href = dataUrl;
            link.click();
            showToast('Foto hasil edit berhasil diunduh!');
        });
    });

    document.getElementById('saveEditedToGalleryBtn').addEventListener('click', () => {
        renderCanvasEditedImage((dataUrl) => {
            const editedPin = {
                id: 'm-edited-' + Date.now(),
                title: 'Hasil Edit Studio',
                description: 'Foto disunting menggunakan musake project Photo Studio.',
                category: 'Desain',
                imageUrl: dataUrl,
                author: 'Kreator Musake',
                authorAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80',
                likes: 1,
                isLiked: true,
                isSaved: true
            };

            pinsData.unshift(editedPin);
            renderPins();

            editorModal.classList.add('hidden');
            document.body.style.overflow = 'auto';

            showToast('Karya hasil edit berhasil ditambahkan ke galeri musake project!');
        });
    });

    // Upload Modal
    openUploadModalBtn.addEventListener('click', () => {
        uploadModal.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    });

    closeUploadModalBtn.addEventListener('click', () => {
        uploadModal.classList.add('hidden');
        document.body.style.overflow = 'auto';
    });

    uploadForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const newPin = {
            id: 'pin-' + Date.now(),
            title: document.getElementById('uploadTitle').value.trim(),
            description: document.getElementById('uploadDescription').value.trim() || 'Tidak ada deskripsi.',
            category: document.getElementById('uploadCategory').value,
            imageUrl: document.getElementById('uploadUrl').value.trim(),
            author: document.getElementById('uploadAuthor').value.trim() || 'Pengguna Musake',
            authorAvatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&auto=format&fit=crop&q=80',
            likes: 0,
            isLiked: false,
            isSaved: false
        };

        pinsData.unshift(newPin);
        renderPins();

        uploadForm.reset();
        uploadModal.classList.add('hidden');
        document.body.style.overflow = 'auto';

        showToast('Karya baru berhasil diunggah ke musake project!');
    });
}

// Initialize Application
window.addEventListener('DOMContentLoaded', () => {
    renderCategories();
    renderPins();
    setupEventListeners();
});
