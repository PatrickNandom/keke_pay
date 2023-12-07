let currentCard = 0;

    function openPopup() {
        document.getElementById('popupContainer').style.height = '100%';
    }

    function closePopup() {
        document.getElementById('popupContainer').style.height = '0';
    }

    function nextCard() {
        const cards = document.querySelectorAll('.card');
        cards[currentCard].classList.remove('active');
        currentCard = (currentCard + 1) % cards.length;
        cards[currentCard].classList.add('active');
    }

    function prevCard() {
        const cards = document.querySelectorAll('.card');
        cards[currentCard].classList.remove('active');
        currentCard = (currentCard - 1 + cards.length) % cards.length;
        cards[currentCard].classList.add('active');
    }

    
    document.addEventListener('DOMContentLoaded', function () {
        const inputFields = document.querySelectorAll('.input-container input');
        let verificationCode = '';

        function appendDigit(digit) {
            if (verificationCode.length < 4) {
                verificationCode += digit;
                updateVerificationCodeDisplay();
            }
        }

        function eraseDigit() {
            if (verificationCode.length > 0) {
                verificationCode = verificationCode.slice(0, -1);
                updateVerificationCodeDisplay();
            }
        }

        function updateVerificationCodeDisplay() {
            for (let i = 0; i < inputFields.length; i++) {
                inputFields[i].value = verificationCode[i] || '';
            }
        }

        // Attach click event listeners to keypad buttons
        document.getElementById('keypad').addEventListener('click', function (event) {
            if (event.target.tagName === 'BUTTON') {
                const digit = event.target.textContent.trim();
                if (digit === 'Erase') {
                    eraseDigit();
                } else {
                    appendDigit(digit);
                }
            }
        });
    });

