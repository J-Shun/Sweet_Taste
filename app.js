// card change effect
const cards = document.querySelectorAll('.card');
cards.forEach(card => {
    card.addEventListener('click', e => {
        let children = e.target.parentNode.children;
        for (child of children) {
            child.classList.remove('active')
        }
        e.target.classList.add('active');
    })
})

// favorite effect
const regularHearts = document.querySelectorAll('.fa-regular');
regularHearts.forEach(heart => {
    heart.addEventListener('click', e => {
        e.target.classList.toggle('fa-solid');
        e.target.classList.toggle('scale-1');
    })
})

// delete effect
const removes = document.querySelectorAll('.remove-icon');
removes.forEach(remove => {
    remove.addEventListener('click', e => {
        e.target.parentNode.parentNode.remove();
    })
})

// +- effect
const minus = document.querySelectorAll('input[value="-"]');
const plus = document.querySelectorAll('input[value="+"]');

minus.forEach(m => {
    m.addEventListener('click', e => {
        total = e.target.nextElementSibling;
        if (total.value > 1) {
            total.value -= 1;
        }
    })
})

plus.forEach(p => {
    p.addEventListener('click', e => {
        total = e.target.previousElementSibling;
        if (total.value < 9) {
            let item = parseInt(total.value);
            item += 1;
            total.value = item;
        }
    })
})

// same page change
const eInvoice = document.querySelector('.e-invoice');
const paperInvoice = document.querySelector('.paper-invoice');
const deviceArea = document.querySelector('.device-area');
const paperArea = document.querySelector('.paper-area');

paperInvoice.addEventListener('click', e => {
    deviceArea.classList.add('none');
    paperArea.classList.remove('none');
    eInvoice.classList.remove('active');
    paperInvoice.classList.add('active');
})

eInvoice.addEventListener('click', e => {
    paperArea.classList.add('none');
    deviceArea.classList.remove('none');
    eInvoice.classList.add('active');
    paperInvoice.classList.remove('active');
})
