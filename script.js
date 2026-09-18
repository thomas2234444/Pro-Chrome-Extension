document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('shortcuts-container');
    const btnTopSites = document.getElementById('btn-top-sites');
    const btnCustom = document.getElementById('btn-custom');
    
    // عناصر شاشة الإضافة (Popup)
    const modal = document.getElementById('add-modal');
    const nameInput = document.getElementById('shortcut-name');
    const urlInput = document.getElementById('shortcut-url');
    const cancelBtn = document.getElementById('cancel-btn');
    const saveBtn = document.getElementById('save-btn');
    
    // تشغيل شريط البحث
    const searchForm = document.getElementById('search-form');
    const searchInput = document.getElementById('search-input');
    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const query = searchInput.value.trim();
        if (query) {
            window.location.href = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
        }
    });

    // قائمة المواقع الافتراضية لو دي أول مرة تفتح الإضافة
    const defaultShortcuts = [
        { title: "ChatGPT", url: "https://chatgpt.com" },
        { title: "GitHub", url: "https://github.com" },
        { title: "SIS", url: "https://sis.eelu.edu.eg" }
    ];
    let myCustomShortcuts = [];

    // جلب الإعدادات والمواقع المحفوظة (Default هو My Shortcuts)
    chrome.storage.local.get(['shortcutMode', 'customShortcuts'], (result) => {
        const mode = result.shortcutMode || 'custom'; // custom هو الافتراضي
        myCustomShortcuts = result.customShortcuts || defaultShortcuts;

        if (mode === 'custom') {
            loadCustomShortcuts();
        } else {
            loadTopSites();
        }
    });

    // إنشاء العنصر HTML للاختصار
    function createShortcutElement(title, url, index, isCustom) {
        const a = document.createElement('a');
        a.href = url;
        a.className = 'shortcut-item';
        
        const iconUrl = `chrome-extension://${chrome.runtime.id}/_favicon/?pageUrl=${encodeURIComponent(url)}&size=32`;
        
        let innerHTML = `
            <div class="icon-wrapper">
                <img src="${iconUrl}" alt="" onerror="this.style.display='none'">
            </div>
            <span class="title">${title}</span>
        `;

        // إضافة زر الحذف فقط في قائمة "مواقعي"
        if (isCustom) {
            innerHTML += `<div class="delete-btn" data-index="${index}">×</div>`;
        }
        
        a.innerHTML = innerHTML;

        // تفعيل زر الحذف
        if (isCustom) {
            const deleteBtn = a.querySelector('.delete-btn');
            deleteBtn.addEventListener('click', (e) => {
                e.preventDefault(); // عشان الماوس ميروحش للموقع
                myCustomShortcuts.splice(index, 1);
                chrome.storage.local.set({ customShortcuts: myCustomShortcuts }, () => {
                    loadCustomShortcuts();
                });
            });
        }
        return a;
    }

    function loadTopSites() {
        container.innerHTML = '';
        chrome.topSites.get((sites) => {
            sites.slice(0, 12).forEach(site => {
                container.appendChild(createShortcutElement(site.title, site.url, null, false));
            });
        });
        btnTopSites.classList.add('active');
        btnCustom.classList.remove('active');
        chrome.storage.local.set({ shortcutMode: 'topSites' });
    }

    function loadCustomShortcuts() {
        container.innerHTML = '';
        myCustomShortcuts.forEach((site, index) => {
            container.appendChild(createShortcutElement(site.title, site.url, index, true));
        });

        // إضافة زر "Add Shortcut" في النهاية
        const addBtn = document.createElement('div');
        addBtn.className = 'shortcut-item add-shortcut-btn';
        addBtn.innerHTML = `
            <div class="icon-wrapper">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>
            </div>
            <span class="title">Add shortcut</span>
        `;
        addBtn.addEventListener('click', () => {
            nameInput.value = '';
            urlInput.value = '';
            modal.style.display = 'flex';
            nameInput.focus();
        });
        container.appendChild(addBtn);

        btnCustom.classList.add('active');
        btnTopSites.classList.remove('active');
        chrome.storage.local.set({ shortcutMode: 'custom' });
    }

    // إغلاق الشاشة
    cancelBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // حفظ الموقع الجديد
    saveBtn.addEventListener('click', () => {
        const title = nameInput.value.trim();
        let url = urlInput.value.trim();

        if (title && url) {
            // إضافة https:// لو المستخدم نسيها
            if (!url.startsWith('http://') && !url.startsWith('https://')) {
                url = 'https://' + url;
            }
            
            myCustomShortcuts.push({ title, url });
            chrome.storage.local.set({ customShortcuts: myCustomShortcuts }, () => {
                loadCustomShortcuts();
                modal.style.display = 'none';
            });
        }
    });

    // أحداث أزرار التبديل
    btnTopSites.addEventListener('click', loadTopSites);
    btnCustom.addEventListener('click', loadCustomShortcuts);
});