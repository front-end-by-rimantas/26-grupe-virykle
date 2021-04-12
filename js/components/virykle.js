function virykle(selector, holeCount) {
    // input validation

    // logic
    const DOM = document.querySelector(selector);

    // efektyviausias variantas generuoti 2 pasikartojancius tekstus
    // let holesHTML = '';
    // let switchesHTML = '';
    // for (let i = 0; i < holeCount; i++) {
    //     holesHTML += '<div class="hole" data-heating="false"></div>';
    //     switchesHTML += '<div class="switch" data-heating="false"></div>';
    // }

    // neefektyviausias, bet trumpiausias variantas generuoti 2 pasikartojancius tekstus
    const holesHTML = '<div class="hole" data-heating="false"></div>'.repeat(holeCount);
    const switchesHTML = '<div class="switch" data-heating="false"></div>'.repeat(holeCount);

    DOM.innerHTML = `<div class="holes">${holesHTML}</div>
                    <div class="switches">${switchesHTML}</div>`;

    // interakcijos
    const holesDOM = DOM.querySelectorAll('.hole');
    const switchesDOM = DOM.querySelectorAll('.switch');

    for (let i = 0; i < holeCount; i++) {
        const switchDOM = switchesDOM[i];
        const holeDOM = holesDOM[i];
        switchDOM.addEventListener('click', () => {
            const currentPosition = switchDOM.dataset.heating;
            switchDOM.dataset.heating = currentPosition === 'false' ? 'true' : 'false';
            holeDOM.dataset.heating = currentPosition === 'false' ? 'true' : 'false';
        });
    }

    // result return
    return false;
}

export { virykle };