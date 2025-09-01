
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db = firebase.firestore();

const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const googleSigninBtn = document.getElementById('google-signin-btn');
const signupLink = document.getElementById('signup-link');
const loginLink = document.getElementById('login-link');
const loginCard = document.querySelector('.card');
const signupCard = document.getElementById('signup-card');

// Toggle between login and signup views
signupLink.addEventListener('click', (e) => {
    e.preventDefault();
    loginCard.style.display = 'none';
    signupCard.style.display = 'block';
});

loginLink.addEventListener('click', (e) => {
    e.preventDefault();
    signupCard.style.display = 'none';
    loginCard.style.display = 'block';
});

// Email/Password Login
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    auth.signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            window.location.href = 'index.html';
        })
        .catch((error) => {
            alert(error.message);
        });
});

// Google Sign-In
googleSigninBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider)
        .then((result) => {
            const user = result.user;
            // Check if user is new, and if so, save their info to Firestore
            if (result.additionalUserInfo.isNewUser) {
                db.collection('users').doc(user.uid).set({
                    email: user.email,
                    displayName: user.displayName,
                    provider: 'google',
                    createdAt: firebase.firestore.FieldValue.serverTimestamp()
                });
            }
            window.location.href = 'index.html';
        }).catch((error) => {
            alert(error.message);
        });
});

// Email/Password Sign-up with KYC
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const fullName = document.getElementById('full-name').value;
    const dob = document.getElementById('dob').value;

    // **KYC Placeholder**
    // In a real application, you would integrate a KYC service here.
    // For this example, we'll just check if the fields are filled.
    if (!fullName || !dob) {
        alert('Please fill out all fields for KYC verification.');
        return;
    }

    auth.createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            // Save user info to Firestore
            db.collection('users').doc(user.uid).set({
                email: user.email,
                fullName: fullName,
                dateOfBirth: dob,
                kycVerified: false, // Set to true after successful KYC verification
                createdAt: firebase.firestore.FieldValue.serverTimestamp()
            })
            .then(() => {
                window.location.href = 'index.html';
            })
            .catch((error) => {
                alert(error.message);
            });
        })
        .catch((error) => {
            alert(error.message);
        });
});
