const modals = () => {
    function bindModal(trigger, modal, close) {
        trigger.addEventListener('click', (e) => {
            if (e.target) {
                e.preventDefault();
            }

            modal.style.display = 'block';
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
        closeMeToo = document.querySelector('.get .get__btn');

    bindModal(callMe, modalMe, closeMe);
    bindModal(callMe, modalMe, closeMeToo);
};
export default modals;