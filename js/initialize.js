$(document).ready(function () {

    //si je clique sur un point
    $('.timeline-circle').on('click', function (e) {
        // console.log(this.id);
        // console.log(e.target);

        // pour chaque point
        $('.timeline-circle').each(function (i, obj) {
            // la clé du tableau
            // console.log(i);
            // la valur de la clé du tableau
            // console.log(obj);

            //si l'id du point ciblé est égal à un point de l'objet
            if (e.target.id == obj.id) {
                // console.log('ok');
                $(this).addClass('timeline-circle--active');
                //si l'id du point ciblé est différent du point de l'objet
            } else {
                // console.log('no');
                $(this).removeClass('timeline-circle--active');
            }
        });
    });

});
