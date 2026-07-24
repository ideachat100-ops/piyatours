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

        if (imgbbApiKey === "2154864daa0d336b49f270f13c4936e6") {
            throw new Error("කරුණාකර admin.js ෆයිල් එකට ඔබගේ ImgBB API Key එක ඇතුලත් කරන්න.");
        }

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

    // 1. Render Local Photos first (filtering out deleted ones)
    // INITIAL_PHOTOS and INITIAL_ITEMS are defined in script.js
    if (typeof INITIAL_PHOTOS !== 'undefined' && INITIAL_PHOTOS) {
        INITIAL_PHOTOS.forEach((photo, index) => {
            if (!deletedLocalPhotos.includes(photo)) {
                hasPhotos = true;
                const item = document.createElement('div');
                item.className = 'gallery-item';
                item.innerHTML = `
                    <div style="position:absolute; top:8px; left:8px; background:rgba(0,0,0,0.6); color:white; padding:4px 8px; border-radius:4px; font-size:11px; z-index:10;">Local Photo</div>
                    <img src="${photo}" alt="Local Image" loading="lazy">
                    <div class="gallery-item-info">
                        <p><strong>EN:</strong> ${INITIAL_ITEMS[index]?.label_en || "Local Image"}</p>
                        <p><strong>RU:</strong> ${INITIAL_ITEMS[index]?.label_ru || "Локальное Изображение"}</p>
                    </div>
                    <div class="gallery-item-actions">
                        <button class="btn btn-danger" onclick="deleteLocalPhoto('${photo}')">Hide/Delete</button>
                    </div>
                `;
                adminGalleryGrid.appendChild(item);
            }
        });
    }

    // 2. Render Firebase Photos
    if (galleryData) {
        hasPhotos = true;
        // Convert object to array and sort by timestamp descending
        const photosArray = Object.keys(galleryData).map(key => ({
            id: key,
            ...galleryData[key]
        })).sort((a, b) => b.timestamp - a.timestamp);

        photosArray.forEach(photo => {
            const item = document.createElement('div');
            item.className = 'gallery-item';
            item.innerHTML = `
                <div style="position:absolute; top:8px; left:8px; background:var(--primary); color:white; padding:4px 8px; border-radius:4px; font-size:11px; z-index:10;">Firebase</div>
                <img src="${photo.url}" alt="${photo.label_en}" loading="lazy">
                <div class="gallery-item-info">
                    <p><strong>EN:</strong> ${photo.label_en}</p>
                    <p><strong>RU:</strong> ${photo.label_ru}</p>
                </div>
                <div class="gallery-item-actions">
                    <button class="btn btn-danger" onclick="deletePhoto('${photo.id}', '${photo.url}')">Delete</button>
                </div>
            `;
            adminGalleryGrid.appendChild(item);
        });
    }

    if (!hasPhotos) {
        adminGalleryGrid.innerHTML = '<p>No photos uploaded yet.</p>';
    }
}

// Delete Photo
window.deletePhoto = async (id, url) => {
    if (!confirm("Are you sure you want to delete this photo?")) return;

    try {
        // 1. Delete from Realtime Database
        await db.ref(`gallery/${id}`).remove();

        // 2. Delete from Storage (Extract path from URL)
        const baseUrl = `https://firebasestorage.googleapis.com/v0/b/${firebaseConfig.storageBucket}/o/`;
        if (url.startsWith(baseUrl)) {
            let imagePath = url.replace(baseUrl, "");
            imagePath = imagePath.split("?")[0];
            imagePath = decodeURIComponent(imagePath);
            await storage.ref(imagePath).delete();
        }

    } catch (error) {
        console.error("Error deleting photo:", error);
        alert(`Error deleting photo: ${error.message}`);
    }
};

// Hide/Delete Local Photo
window.deleteLocalPhoto = async (photoUrl) => {
    if (!confirm("Are you sure you want to hide this local photo from the gallery?")) return;

    try {
        // Add to deleted_local array in Realtime Database
        await db.ref('deleted_local').push(photoUrl);
    } catch (error) {
        console.error("Error hiding local photo:", error);
        alert(`Error hiding local photo: ${error.message}`);
    }
};

// Initial load
document.addEventListener('DOMContentLoaded', loadAdminGallery);
