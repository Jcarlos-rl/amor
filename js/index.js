document.addEventListener('DOMContentLoaded', function() {
    
    const btns_si = document.getElementsByClassName('btn_si'),
        truck_modal = document.querySelector('#staticBackdrop'),
        modal = new bootstrap.Modal(truck_modal, {
            backdrop: 'static'
        }),
        truck_modalPass = document.querySelector('#staticBackdropPass'),
        modalPass = new bootstrap.Modal(truck_modalPass, {
            backdrop: 'static'
        }),
        truck_modalLoad = document.querySelector('#staticBackdropLoad'),
        modalLoad = new bootstrap.Modal(truck_modalLoad, {
            backdrop: 'static'
        }),
        truck_modalInitial = document.querySelector('#staticBackdropInital'),
        modalInitial = new bootstrap.Modal(truck_modalInitial, {
            backdrop: 'static'
        }),
        verify_pass = document.getElementById('verify_pass'),
        input_date = document.getElementById('input_date'),
        error_input_date = document.getElementById('error_input_date'),
        errors_array = [
            'Es enserio amor? <span class="ec ec-upside-down-face"></span>',
            'Te pasas niko, te pasas <span class="ec ec-persevere"></span>',
            'Como que ya lo estoy dudando, me duele <span class="ec ec-pensive"></span>',
            'Ni porque me dijiste que no lo ibas a olvidar <span class="ec ec-sleepy"></span>'
        ];
    
    modalInitial.show();

    for(let i = 0; i<btns_si.length; i++){
        btns_si[i].addEventListener('click',()=>{
            modal.hide();
            modalPass.show();
        })
    }

    verify_pass.addEventListener('click', ()=>{
        verify_pass.disabled = true;
        error_input_date.style.display = 'none';
        if(input_date.value === ''){
            error_input_date.style.display = 'block';
            error_input_date.innerHTML = 'Amor, selecciona una fecha por favor <span class="ec ec-roll-eyes"></span>';
            verify_pass.disabled = false;
        }else{
            if(input_date.value === '2022-07-12'){
                setTimeout(()=>{
                    modalPass.hide();
                    modalLoad.show();
                    setTimeout(()=>{
                        verify_pass.disabled = false;
                        window.location.href = 'history.html';
                    }, 3000);
                }, 1000);
            }else{
                const rand = Math.floor(Math.random()*errors_array.length);
                error_input_date.style.display = 'block';
                error_input_date.innerHTML = errors_array[rand];
                verify_pass.disabled = false;
            }
        }
    })


})