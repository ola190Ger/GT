var arrLang={
    'en':{
        'serv' : 'Services',
        'price' : 'Prices',
        'portfolio' : 'Portfolio',
        'cont' : 'Contact us',
        'lng' : 'Ru',
        'Subjm' : 'Subject message ',
        'l1' : 'Influenced by the desire to do what is best for clients',
        'l2' : 'Web technology shaped to your needs',
        'l3' : 'Developers who are ready to take care of your project and bring it to life',
        'os' : 'Our services',
        'ossub' : 'Personalized, client-oriented approach. Custom software development. Fast and quality delivery. Just what you expect.',
        'wd' : 'Design',
        'wdsub' : 'Individual plans that fit your business. Research and prototyping.',
        'lm' : 'learn more',
        'wdev' : 'Development',
        'wdevsub' : 'Solutions that suit best your fields of action. From landing pages to online stores.',
        'ot' : 'Other',
        'otsub' : 'Desktop software, bots and lots more. Anything you would like to implement into practice.',
        'op' : 'Our portfolio',
        'opsub' : 'A few words about our works',
        'cp' : 'Liked our works?',
        'cpsub' : 'Liked our design or uor works? You have an idea? Learn more about the possibility of implementing it. Write us',
        'linked' : 'Find us on LinledIn',
        'mailus' : 'Email us',
        'name' : 'Name',
        'sm' : 'Send message',
        'email' : 'E-mail address',
        'mailreq' : 'Input correct e-mail address',
        'text' : 'Write your message here',
        'pp' : '© 2020 Privacy policy'

    },
    'ru':{
        'serv' : 'Сервисы',
        'price' : 'Цены',
        'portfolio' : 'Портфолио',
        'cont' : 'Свяжитесь с нами',
        'lng' : 'En',
        'Subjm' : 'Тема письма',
        'l1' : 'Вдохновленные желанием создать наилучшее для клиента',
        'l2' : 'Веб технологии сформированы по Вашему запросу',
        'l3' : 'Разработчики которые готовы воплотить в жизнь ваш проект',
        'os' : 'Наши сервисы',
        'ossub' : 'Индивидуальный подход к каждому клиенту. Быстрое и качественное выполнение. Именно то, что вы ожидаете.',
        'wd' : 'Дизайн',
        'wdsub' : 'Индивидуальные макеты которые подойдут Вашему бизнесу. Разработка прототипов.',
        'lm' : 'Узнать больше',
        'wdev' : 'Разработка',
        'wdevsub' : 'Решения, которые будут работать в Вашей сфере деятельности. От лендингов до онлайн магазинов.',
        'ot' : 'Other',
        'otsub' : 'Десктопные приложения, боты и многое другое. От идеи до реализаци.',
        'op' : 'Наши работы',
        'opsub' : 'Пара слов о наших работах',
        'cp' : 'Понравились наши работы?',
        'cpsub' : 'Понравились наш дизайн или наши работы? У вас есть идея? Узнайте больше о возможности реализовать ее. Напишите нам.',
        'linked' : 'Мы на LinledIn',
        'mailus' : 'Напишите нам',
        'name' : 'Имя',
        'email' : 'E-mail адрес',
        'mailreq' : 'Введите правильный e-mail адрес',
        'text' : 'Напишите здесь ваше сообщение',
        'pp' : '© 2020 Политика конфиденциальности',
        'sm' : 'Отправить сообщение'
        
    },
};

$(function(){
    $('#language').click(function(){
    
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