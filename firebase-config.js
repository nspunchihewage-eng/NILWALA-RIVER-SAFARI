const firebaseConfig = {
    apiKey: "AIzaSyBfnHVVW0sb9wMXPb5yhvc_gP43Se-xi6M",
    authDomain: "nilwala-safari-admin.firebaseapp.com",
    projectId: "nilwala-safari-admin",
    storageBucket: "nilwala-safari-admin.firebasestorage.app",
    messagingSenderId: "237687231473",
    appId: "1:237687231473:web:5d842be9d7e490be1b6a50",
    measurementId: "G-5NFJVT2EK3"
};

// Initialize Firebase using compat SDK
firebase.initializeApp(firebaseConfig);

var auth = null;
if (typeof firebase.auth === 'function') {
    auth = firebase.auth();
}

var db = null;
if (typeof firebase.firestore === 'function') {
    db = firebase.firestore();
}

// Make them available on window explicitly too
window.auth = auth;
window.db = db;
