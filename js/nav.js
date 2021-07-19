const navigation = document.querySelector('.navigation');

/* nav */
document.querySelector('.n_toggle').onclick = function(){
    this.classList.toggle('nav');
    navigation.classList.toggle('nav');
}

/* use draggable */
$( function() {
    $( ".navigation" ).draggable();
} );