function moverScroll() {
    let intervalo;
    let validarScroll = false;
    let valorScroll = 0;

    $('body').on('mouseenter', () => {
        $('.drag-scroll-content').attr('id', 'scroll-cliente');
        setTimeout(() => {
            let scrollCliente = document.getElementById("scroll-cliente");
            if(valorScroll === 0){
                intervalo = setInterval(() => {
                    scrollCliente.scrollTop = valorScroll;
                    if (!validarScroll) {
                        valorScroll++
                    } else {
                        valorScroll--;
                    }
                    console.log(valorScroll);
                    if (valorScroll === 950) {
                        validarScroll = true;
                    }
                    if (valorScroll === 0) {
                        validarScroll = false;
                    }
                }, 50);
            }
        }, 10);
    })
}