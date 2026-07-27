// admin.js

// TODO: Replace with your complete Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA9JKYUuW9stYqHK0Nw-9nEJ2GfaAOxP08",
    authDomain: "piyayours-580f2.firebaseapp.com",
    databaseURL: "https://piyayours-580f2-default-rtdb.firebaseio.com",
    projectId: "piyayours-580f2",
    storageBucket: "piyayours-580f2.firebasestorage.app",
    messagingSenderId: "342336494553",
    appId: "1:342336494553:web:ca67e24983b74db1db97c8",
    measurementId: "G-SSCPZRDR3T"
};

// Initialize Firebase
if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const db = firebase.database();
const storage = firebase.storage();

// DOM Elements
const uploadForm = document.getElementById('uploadForm');
const photoFileInput = document.getElementById('photoFile');
const labelEnInput = document.getElementById('labelEn');
const labelRuInput = document.getElementById('labelRu');
const uploadBtn = document.getElementById('uploadBtn');
const uploadStatus = document.getElementById('uploadStatus');
const imagePreview = document.getElementById('imagePreview');
const adminGalleryGrid = document.getElementById('adminGalleryGrid');
const loadingPhotos = document.getElementById('loadingPhotos');

// Image Preview
photoFileInput.addEventListener('change', function (e) {
    const file = e.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            imagePreview.innerHTML = `<img src="${e.target.result}" alt="Preview">`;
        }
        reader.readAsDataURL(file);
    } else {
        imagePreview.innerHTML = 'No image selected';
    }
});

// Upload Photo
uploadForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const file = photoFileInput.files[0];
    if (!file) return;

    if (firebaseConfig.apiKey === "YOUR_API_KEY_HERE") {
        showStatus("Error: Firebase is not fully configured. Please update admin.js with your API Key.", "error");
        return;
    }

    try {
        uploadBtn.disabled = true;
        uploadBtn.textContent = 'Uploading...';
        showStatus('', '');

        // Create a unique file name
        const timestamp = new Date().getTime();
        const fileName = `gallery/${timestamp}_${file.name}`;

        // 1. Upload to ImgBB
        const imgbbApiKey = "2154864daa0d336b49f270f13c4936e6"; // මෙතැනට ඔයාගේ ImgBB API Key එක දාන්න (අකුරු 32ක කේතය පමණක් දාන්න)



        const formData = new FormData();
        formData.append("image", file);

        const response = await fetch(`https://api.imgbb.com/1/upload?key=${imgbbApiKey}`, {
            method: "POST",
            body: formData
        });

        const data = await response.json();
        if (!data.success) {
            throw new Error(data.error?.message || "ImgBB වෙත Upload කිරීම අසාර්ථක විය");
        }

        // 2. Get the download URL
        const downloadURL = data.data.url;

        // 3. Save metadata to Realtime Database
        const newPhotoData = {
            url: downloadURL,
            label_en: labelEnInput.value || "Gallery Image",
            label_ru: labelRuInput.value || "Галерея Изображение",
            timestamp: timestamp
        };

        await db.ref('gallery').push(newPhotoData);

        // Success
        showStatus('Photo uploaded successfully!', 'success');
        uploadForm.reset();
        imagePreview.innerHTML = '';

    } catch (error) {
        console.error("Upload error:", error);
        showStatus(`Error uploading photo: ${error.message}`, 'error');
    } finally {
        uploadBtn.disabled = false;
        uploadBtn.textContent = 'Upload Photo';
    }
});

function showStatus(message, type) {
    uploadStatus.textContent = message;
    uploadStatus.className = 'status-msg';
    if (type === 'success') uploadStatus.classList.add('status-success');
    if (type === 'error') uploadStatus.classList.add('status-error');

    if (type === 'success') {
        setTimeout(() => {
            uploadStatus.textContent = '';
        }, 5000);
    }
}

// Fetch and display photos
function loadAdminGallery() {
    // Listen for both deleted local photos and gallery photos
    db.ref('deleted_local').on('value', (delSnapshot) => {
        const deletedData = delSnapshot.val() || {};
        const deletedLocalPhotos = Object.values(deletedData);

        db.ref('gallery').once('value').then((snapshot) => {
            renderAdminGrid(snapshot.val(), deletedLocalPhotos);
        }).catch(err => {
            loadingPhotos.style.display = 'block';
            loadingPhotos.style.color = 'red';
            loadingPhotos.textContent = `Error loading gallery: ${err.message}. Check Firebase Database Rules.`;
        });
    }, (error) => {
        loadingPhotos.style.display = 'block';
        loadingPhotos.style.color = 'red';
        loadingPhotos.textContent = `Error loading deleted_local: ${error.message}. Check Firebase Database Rules.`;
    });

    db.ref('gallery').on('value', (snapshot) => {
        db.ref('deleted_local').once('value').then((delSnapshot) => {
            const deletedData = delSnapshot.val() || {};
            const deletedLocalPhotos = Object.values(deletedData);
            renderAdminGrid(snapshot.val(), deletedLocalPhotos);
        }).catch(err => {
            console.error("Error reading deleted_local", err);
        });
    }, (error) => {
        loadingPhotos.style.display = 'block';
        loadingPhotos.style.color = 'red';
        loadingPhotos.textContent = `Error loading gallery: ${error.message}. Check Firebase Database Rules.`;
    });
}

function renderAdminGrid(galleryData, deletedLocalPhotos) {
    loadingPhotos.style.display = 'none';
    adminGalleryGrid.innerHTML = '';

    let hasPhotos = false;

    // 1. Render Local Photos first (safe fallback if INITIAL_PHOTOS not defined)
    try {
        const localPhotos = (typeof GALLERY_PHOTOS !== 'undefined' && GALLERY_PHOTOS) ? GALLERY_PHOTOS : [];
        const localItems  = (typeof GALLERY_ITEMS  !== 'undefined' && GALLERY_ITEMS)  ? GALLERY_ITEMS  : [];

        localPhotos.forEach((photo, index) => {
            if (!deletedLocalPhotos.includes(photo)) {
                hasPhotos = true;
                const label_en = localItems[index]?.label_en || 'Local Photo';
                const label_ru = localItems[index]?.label_ru || 'Местное фото';
                const item = document.createElement('div');
                item.className = 'gallery-item';
                item.innerHTML = `
                    <div style="position:absolute; top:8px; left:8px; background:rgba(0,0,0,0.65); color:white; padding:4px 8px; border-radius:4px; font-size:11px; z-index:10;">Local Photo</div>
                    <img src="${photo}" alt="Local Image" loading="lazy">
                    <div class="gallery-item-info">
                        <p><strong>EN:</strong> ${label_en}</p>
                        <p><strong>RU:</strong> ${label_ru}</p>
                    </div>
                    <div class="gallery-item-actions">
                        <button class="btn btn-danger" onclick="deleteLocalPhoto('${photo}')">🙈 Hide</button>
                    </div>
                `;
                adminGalleryGrid.appendChild(item);
            }
        });
    } catch (e) {
        console.warn('Local photos could not be rendered:', e.message);
    }

    // 2. Render Uploaded (ImgBB) Photos from Firebase DB
    if (galleryData) {
        const photosArray = Object.keys(galleryData).map(key => ({
            id: key,
            ...galleryData[key]
        })).sort((a, b) => b.timestamp - a.timestamp);

        photosArray.forEach(photo => {
            hasPhotos = true;
            const item = document.createElement('div');
            item.className = 'gallery-item';
            item.innerHTML = `
                <div style="position:absolute; top:8px; left:8px; background:#e67e22; color:white; padding:4px 8px; border-radius:4px; font-size:11px; z-index:10;">Uploaded</div>
                <img src="${photo.url}" alt="${photo.label_en}" loading="lazy">
                <div class="gallery-item-info">
                    <p><strong>EN:</strong> ${photo.label_en}</p>
                    <p><strong>RU:</strong> ${photo.label_ru}</p>
                </div>
                <div class="gallery-item-actions">
                    <button class="btn btn-danger" onclick="deletePhoto('${photo.id}')">🗑️ Delete</button>
                </div>
            `;
            adminGalleryGrid.appendChild(item);
        });
    }

    if (!hasPhotos) {
        adminGalleryGrid.innerHTML = '<p>No photos yet.</p>';
    }
}

// Delete Uploaded Photo (ImgBB URL stored in Firebase DB)
window.deletePhoto = async (id) => {
    if (!confirm("මේ ෆොටෝ එක delete කරන්නද? (Gallery page එකෙන් ඉවත් වෙනවා)")) return;

    try {
        // Remove from Realtime Database only (ImgBB image stays but won't show in gallery)
        await db.ref(`gallery/${id}`).remove();
        // Success — the 'on value' listener will auto re-render the grid
    } catch (error) {
        console.error("Error deleting photo:", error);
        alert(`Error deleting photo: ${error.message}`);
    }
};

// Hide Local Photo from gallery (marks it in Firebase DB)
window.deleteLocalPhoto = async (photoUrl) => {
    if (!confirm("මේ local ෆොටෝ එක Gallery page එකෙන් hide කරන්නද?")) return;

    try {
        // Add to deleted_local list in Realtime Database
        await db.ref('deleted_local').push(photoUrl);
        // Success — the 'on value' listener will auto re-render the grid
    } catch (error) {
        console.error("Error hiding local photo:", error);
        alert(`Error hiding local photo: ${error.message}`);
    }
};

// Load and display reviews in Admin Panel
function loadAdminReviews() {
    const loadingReviews = document.getElementById('loadingReviews');
    const adminReviewsList = document.getElementById('adminReviewsList');
    if (!adminReviewsList) return;

    db.ref('reviews').on('value', (snapshot) => {
        loadingReviews.style.display = 'none';
        adminReviewsList.innerHTML = '';

        const data = snapshot.val();
        if (!data) {
            adminReviewsList.innerHTML = '<div class="reviews-empty-state">No reviews submitted yet.</div>';
            return;
        }

        const reviewsArray = Object.keys(data).map(key => ({
            id: key,
            ...data[key]
        })).sort((a, b) => (b.timestamp || 0) - (a.timestamp || 0)); // Newest first

        reviewsArray.forEach(review => {
            const card = document.createElement('div');
            card.className = 'admin-review-card';
            
            const rating = review.rating || 5;
            let starsHtml = '';
            for (let i = 1; i <= 5; i++) {
                starsHtml += i <= rating ? '★' : '☆';
            }
            
            const tourTaken = review.tour ? ` | Tour: ${review.tour}` : '';
            const reviewLang = review.lang ? ` | Lang: ${review.lang.toUpperCase()}` : '';

            card.innerHTML = `
                <div class="admin-review-header">
                    <div class="admin-review-meta">
                        <span class="admin-review-name">${review.name}</span>
                        <span class="admin-review-email">${review.email}</span>
                        <div class="admin-review-info">${review.date || ''}${tourTaken}${reviewLang}</div>
                        <div class="admin-review-stars">${starsHtml}</div>
                    </div>
                </div>
                <div class="admin-review-text">"${review.text}"</div>
                <div class="admin-review-actions">
                    <button class="btn btn-danger" onclick="deleteReview('${review.id}')">🗑️ Delete</button>
                </div>
            `;
            adminReviewsList.appendChild(card);
        });
    }, (error) => {
        loadingReviews.style.display = 'block';
        loadingReviews.style.color = 'red';
        loadingReviews.textContent = `Error loading reviews: ${error.message}`;
    });
}

// Delete/Reject Review
window.deleteReview = async (id) => {
    if (!confirm("Are you sure you want to delete this review?")) return;
    try {
        await db.ref(`reviews/${id}`).remove();
    } catch (error) {
        console.error("Error deleting review:", error);
        alert(`Error deleting review: ${error.message}`);
    }
};

// Initial load
document.addEventListener('DOMContentLoaded', () => {
    loadAdminGallery();
    loadAdminReviews();
});
