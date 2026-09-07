// Cart functionality
        let cartItems = 0;

        function addToCart() {
            cartItems++;
            document.getElementById('cartCount').textContent = cartItems;

            // Animation effect
            const cartCount = document.getElementById('cartCount');
            cartCount.style.transform = 'scale(1.5)';
            cartCount.style.transition = 'transform 0.2s';
            setTimeout(() => {
                cartCount.style.transform = 'scale(1)';
            }, 200);
        }

        // Login functionality
        document.getElementById('loginBtn').addEventListener('click', function() {
            const email = document.getElementById('emailInput').value.trim();
            if (email) {
                alert('Bienvenido ' + email);
            } else {
                alert('Por favor ingresa tu email');
            }
        });

        // Banner image hover effect
        const bannerImgContainer = document.getElementById('bannerImgContainer');
        const bannerImg = document.getElementById('bannerImg');
        const originalImg = 'https://image.qwenlm.ai/public_source/da36695e-bb4e-46da-9722-754d62b12479/15152ff36-51b9-4fc9-bd16-2717193082a9.png';
        const hoverImg = 'https://image.qwenlm.ai/public_source/da36695e-bb4e-46da-9722-754d62b12479/1b0973cf9-a12c-4b4c-a816-685e37ea0659.png';

        bannerImgContainer.addEventListener('mouseenter', function() {
            bannerImg.style.opacity = '0';
            setTimeout(() => {
                bannerImg.src = hoverImg;
                bannerImg.style.opacity = '1';
            }, 300);
        });

        bannerImgContainer.addEventListener('mouseleave', function() {
            bannerImg.style.opacity = '0';
            setTimeout(() => {
                bannerImg.src = originalImg;
                bannerImg.style.opacity = '1';
            }, 300);
        });
// Cart functionality
        let cartItems = 0;

        function addToCart() {
            cartItems++;
            document.getElementById('cartCount').textContent = cartItems;

            // Animation effect
            const cartCount = document.getElementById('cartCount');
            cartCount.style.transform = 'scale(1.5)';
            cartCount.style.transition = 'transform 0.2s';
            setTimeout(() => {
                cartCount.style.transform = 'scale(1)';
            }, 200);
        }

        // Login functionality
        document.getElementById('loginBtn').addEventListener('click', function() {
            const email = document.getElementById('emailInput').value.trim();
            if (email) {
                alert('Bienvenido ' + email);
            } else {
                alert('Por favor ingresa tu email');
            }
        });

        // Banner image hover effect
        const bannerImgContainer = document.getElementById('bannerImgContainer');
        const bannerImg = document.getElementById('bannerImg');
        const originalImg = 'https://image.qwenlm.ai/public_source/da36695e-bb4e-46da-9722-754d62b12479/15152ff36-51b9-4fc9-bd16-2717193082a9.png';
        const hoverImg = 'https://image.qwenlm.ai/public_source/da36695e-bb4e-46da-9722-754d62b12479/1b0973cf9-a12c-4b4c-a816-685e37ea0659.png';

        bannerImgContainer.addEventListener('mouseenter', function() {
            bannerImg.style.opacity = '0';
            setTimeout(() => {
                bannerImg.src = hoverImg;
                bannerImg.style.opacity = '1';
            }, 300);
        });

        bannerImgContainer.addEventListener('mouseleave', function() {
            bannerImg.style.opacity = '0';
            setTimeout(() => {
                bannerImg.src = originalImg;
                bannerImg.style.opacity = '1';
            }, 300);
        });
