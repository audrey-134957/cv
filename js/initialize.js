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



    $('.skills-table-headings__heading').on('click', function (e) {
        console.log(this.id);
        console.log(e.target);

        $('.bar--french .bar--ahead').removeClass('bar--ahead--100');
        $('.bar--french .bar--ahead').width();
        $('.bar--french .bar--ahead').addClass('bar--ahead--100');

        $('.bar--english .bar--ahead').removeClass('bar--ahead--40');
        $('.bar--english .bar--ahead').width();
        $('.bar--english .bar--ahead').addClass('bar--ahead--40');

        $('.skills-table-headings__heading').each(function (i, obj) {
            if (e.target.id == obj.id) {
                // console.log('ok');
                $(this).addClass('skills-table-headings__heading--active');
                //si l'id du point ciblé est différent du point de l'objet
            } else {
                // console.log('no');
                $(this).removeClass('skills-table-headings__heading--active');
            }

            if (e.target.id == obj.id && e.target.id == 'heading-2') {
                $('.skills-table-headings__info-table-content').hide();
            } else {
                $('.skills-table-headings__info-table-content').show();
            }
        });
    });




    // $('.')
});
