// ========================================
// ハンバーガーメニューの制御
// ========================================
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menuToggle');
    const mainNav = document.getElementById('mainNav');

    if (menuToggle && mainNav) {
        menuToggle.addEventListener('click', function() {
            menuToggle.classList.toggle('active');
            mainNav.classList.toggle('active');
        });

        // ナビゲーションリンクをクリックしたらメニューを閉じる
        const navLinks = mainNav.querySelectorAll('a');
        navLinks.forEach(link => {
            link.addEventListener('click', function() {
                menuToggle.classList.remove('active');
                mainNav.classList.remove('active');
            });
        });
    }

    // ========================================
    // スムーズスクロール
    // ========================================
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');

            // ハッシュのみの場合はスキップ
            if (href === '#') {
                e.preventDefault();
                return;
            }

            const target = document.querySelector(href);
            if (target) {
                e.preventDefault();
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = target.offsetTop - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ========================================
    // お問い合わせフォームの送信処理
    // ========================================
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();

            // フォームのバリデーション
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const message = document.getElementById('message').value.trim();

            if (!name || !email || !message) {
                alert('必須項目を入力してください。');
                return;
            }

            // メールアドレスの簡易バリデーション
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                alert('有効なメールアドレスを入力してください。');
                return;
            }

            // 実際の送信処理（デモ版なので、アラートで完了を表示）
            alert('お問い合わせを受け付けました。\n\nお名前: ' + name + '\nメールアドレス: ' + email + '\n\nご入力いただいた内容を確認の上、担当者よりご連絡いたします。');

            // フォームをリセット
            contactForm.reset();
        });
    }

    // ========================================
    // スクロール時のヘッダー影追加
    // ========================================
    const header = document.querySelector('.header');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.style.boxShadow = '0 2px 15px rgba(0, 0, 0, 0.15)';
        } else {
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        }
    });

    // ========================================
    // カード要素のフェードインアニメーション
    // ========================================
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '0';
                entry.target.style.transform = 'translateY(20px)';
                entry.target.style.transition = 'opacity 0.6s ease, transform 0.6s ease';

                setTimeout(() => {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }, 100);

                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // 観察対象の要素を追加
    const animateElements = document.querySelectorAll('.service-card, .member-card, .company-info');
    animateElements.forEach(element => {
        observer.observe(element);
    });

    // ========================================
    // フォーム入力のリアルタイムバリデーション
    // ========================================
    const emailInput = document.getElementById('email');

    if (emailInput) {
        emailInput.addEventListener('blur', function() {
            const email = this.value.trim();
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (email && !emailRegex.test(email)) {
                this.style.borderColor = '#e74c3c';

                // エラーメッセージを表示（既に存在しない場合）
                if (!this.nextElementSibling || !this.nextElementSibling.classList.contains('error-message')) {
                    const errorMsg = document.createElement('span');
                    errorMsg.className = 'error-message';
                    errorMsg.style.color = '#e74c3c';
                    errorMsg.style.fontSize = '0.85rem';
                    errorMsg.style.marginTop = '5px';
                    errorMsg.style.display = 'block';
                    errorMsg.textContent = '有効なメールアドレスを入力してください';
                    this.parentNode.appendChild(errorMsg);
                }
            } else {
                this.style.borderColor = '#ddd';

                // エラーメッセージを削除
                const errorMsg = this.nextElementSibling;
                if (errorMsg && errorMsg.classList.contains('error-message')) {
                    errorMsg.remove();
                }
            }
        });
    }

    // ========================================
    // ページ読み込み完了後の処理
    // ========================================
    console.log('オクトリンク株式会社 コーポレートサイトが読み込まれました。');
    console.log('レスポンシブデザイン対応済み: スマートフォン、タブレット、デスクトップ');
});
