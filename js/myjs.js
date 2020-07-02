var arrLang={
    'en':{
        'serv' : 'Services',
        'price' : 'Prices',
        'portfolio' : 'Portfolio',
        'cont' : 'Contact us',
        'lng' : 'Ru',
        'Subjm' : 'Subject message '

    },
    'ru':{
        'serv' : 'Сервисы',
        'price' : 'Цены',
        'portfolio' : 'Портфолио',
        'cont' : 'Свяжитесь с нами',
        'lng' : 'En',
        'Subjm' : 'Тема письма'
        
    },
};

$(function(){
    $('.lang').click(function(){
    
    var lang =document.getElementById('language').getAttribute('data-name');

    if($(this).attr('data-name')=='en'){
        // const at =document.getElementById('language').getAttribute('data-name');
        document.getElementById('language').innerHTML= lang;
        document.getElementById('language').setAttribute('data-name', 'ru');
        // setAttribute('data-name', 'ru');
        // document.getElementById('language')[0].setAttribute('data-name', 'ru');
    }else{
        // const at =document.getElementById('language').getAttribute('data-name');
        document.getElementById('language').innerHTML= lang;
        document.getElementById('language').setAttribute('data-name', 'en');
        // document.getElementById('language')[0].setAttribute('data-name', 'en');
    };

        $('.lang').each(function(index, element){
            $(this).text(arrLang[lang][$(this).attr('key')]);
        });


    })
});