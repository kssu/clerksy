/* import modals from './modules/modals';
import forms from './modules/forms'; */

window.addEventListener('DOMContentLoaded', function() {
	'use strict';
    const modals = () => {
        function bindModal(trigger, modal, close) {
            trigger.addEventListener('click', (e) => {
                if (e.target) {
                    e.preventDefault();
                }
                
                modal.style.display = 'block';
                modal.classList.add('animated', 'fadeIn');
                document.body.style.overflow = 'hidden';
            });
                
            close.addEventListener('click', () => {
                modal.style.display = 'none';
                document.body.style.overflow = '';
            });
        }
    
        const callMe = document.querySelector('.easy__btn'),
            modalMe = document.querySelector('.popup'),
            closeMe = document.querySelector('.popup .popup__close'),
            getMe = document.querySelector('.get__btn');
    
        bindModal(callMe, modalMe, closeMe);
        bindModal(getMe, modalMe, closeMe);
    };
    const forms = () => {
        const form = document.querySelectorAll('form'),
            inputs = document.querySelectorAll('input');
    
        const message = {
            loading: 'loading...',
            success: 'successufully',
            failure: 'something is wrong'
        };
    
        const postData = async (url, data) => {
            document.querySelector('.status').textContent = message.loading;
            let res = await fetch(url, {
                method: "POST",
                body: data
            });
    
            return await res.text();
        };
    
        const clearInputs = () => {
            inputs.forEach(item => {
                item.value = '';
            });
        };
    
        form.forEach(item => {
            item.addEventListener('submit', (e) => {
                e.preventDefault();
                let statusMessage = document.createElement('div');
                statusMessage.classList.add('status');
                item.appendChild(statusMessage);
    
                const formData = new FormData(item);
    
                postData('server.php', formData)
                .then(res => {
                    console.log(res);
                    statusMessage.textContent = message.success;
                })
                .catch(() => statusMessage.textContent = message.failure)
                .finally(() => {
                    clearInputs();
                    setTimeout(() => {
                        statusMessage.remove();
                    }, 5000);
                });
            });
        });
    };
    modals();
    forms();
});