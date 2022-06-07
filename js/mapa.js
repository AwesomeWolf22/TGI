//O Script só vai começar quando a página carregar
window.onload = function() {

    var map;
    var numero = 0;

    //Inicia o map
    function initialize() {
        // Objeto mapa
        var mapProp = {
            center: new google.maps.LatLng(-23.536760568558524, -46.50277513201632),
            scrollWheel:false, //Tira a funcionalidade do Scroll para zoom
            zoom:10,
            mapTypeId:google.maps.MapTypeId.ROADMAP //Tipo do Mapa

        }

        map = new google.maps.Map(document.getElementById("mapa"),mapProp);

    }

    //Função para adicionar um marcador no mapa
    function addMarker(lat, long, icon, content, address) {
        var latLng = {'lat':lat, 'lng':long};

        var marker = new google.maps.Marker({
            position:latLng,
            map:map,
            icon:icon
        });

        var infoWindow = new google.maps.InfoWindow({
            content:'<h3 style="font-weight: normal;">' + content + '</h3>' + "<p>" + address + "</p>",
            maxWidth:200,
            pixelOffset: new google.maps.Size(0,20)
        });

        google.maps.event.addListener(marker,'click',function(){
            infoWindow.open(map,marker);
        });
        
        //Variavel de controle para sabermos o número de hemocentros adicionados
        numero ++;

    }

    

    initialize();

    
    addMarker(-23.55438567234741, -46.463969553392744,'',"Banco de Sangue do Hospital Santa Marcelina", "Vila Carmosina, São Paulo - SP, 08270-010");
    addMarker(-23.499803617309325, -46.47232641102809,'',"Colsan Sociedade Beneficente de Coleta de Sangue", "Alameda Rodrigo de Brum, 1989 - Ermelino Matarazzo, São Paulo - SP, 03807-230");
    addMarker(-23.5778890487708, -46.64788329816332,'',"Banco de Sangue de São Paulo", "Rua Tomás Carvalhal, 711 - Paraíso, São Paulo - SP, 04006-000"); 
    addMarker(-23.590045652400182, -46.672883958109566,'',"Banco Sangue Paulista", "R. Dr. Alceu de Campos Rodrigues, 46 - 14° Andar - Vila Nova Conceição, São Paulo - SP, 04544-000");
    addMarker(-23.5700917239031, -46.64191003518137,'',"Hospital Beneficência Portuguesa de São Paulo - Banco de Sangue", "R. Maestro Cardim, 1041 - Bela Vista, São Paulo - SP, 01323-130");
    addMarker(-23.600102234818728, -46.71623294383217,'',"Banco de Sangue - Unidade Einstein Morumbi", "Av. Albert Einstein, 627 - Bloco E - 3º andar - Morumbi, São Paulo - SP, 05652-900");
    addMarker(-23.59779181497523, -46.65480547488257,'',"Banco De Sangue Do Hospital Do Servidor Publico Estadual", "Rua Pedro de Toledo, 1800 - Vila Clementino, São Paulo - SP, 04039-000");
    addMarker(-23.54385347756127, -46.64998803093275,'',"Hemocentro da Santa Casa de São Paulo", "R. Marquês de Itu, 579 - Vila Buarque, São Paulo - SP, 01223-001");
    addMarker(-23.499799862714372, -46.472326902098395,'',"Banco De Sangue Ermelino Matarazo", "R. Gildo Lao, 21-28 - Vila Paranagua, São Paulo - SP");
    addMarker(-23.532698837011736, -46.566538042296195,'',"Colsan Sociedade Beneficente de Coleta de Sangue", "Av. Celso Garcia, 4815 - Parque São Jorge, São Paulo - SP, 03063-000");
    addMarker(-23.655965799040082, -46.705530621081905,'',"Banco de Sangue Paulista", "R. Iguatinga, 382/386 - Santo Amaro, São Paulo - SP, 04744-040");
    addMarker(-23.5574930367618, -46.668489341903616,'',"Fundação Pró-Sangue Hemocentro de São Paulo", "Av. Dr. Enéas Carvalho de Aguiar, 155 - 1° andar - Cerqueira César, São Paulo - SP, 05403-000");
    addMarker(-23.56857690920956, -46.64328603334474,'',"Instituto HOC de Hemoterapia", "R. João Julião, 331 - Bela Vista, São Paulo - SP, 01323-020");
    addMarker(-23.569534280962337, -46.65055962843475,'',"CTA/SP", "Av. Brigadeiro Luís Antônio, 2533 - 4° andar - Jardim Paulista, São Paulo - SP, 01401-000");
    addMarker(-23.595476200513012, -46.64453719282801,'',"Hemocentro HSP Unifesp", "R. Dr. Diogo de Faria, 824 - Vila Clementino, São Paulo - SP, 04037-002");
    addMarker(-23.48453749850723, -46.63034238008888,'',"Fundação Pró-Sangue Hemocentro de São Paulo", "R. Voluntários da Pátria, 4227 - Mandaqui, São Paulo - SP, 02401-400");
    addMarker(-23.584822486396085, -46.65077566248947,'',"Pró-Sangue Dante Pazzanese", "Av. Dr. Dante Pazzanese, 500 - Vila Mariana, São Paulo - SP, 04012-180");
    addMarker(-23.548905390769708, -46.55827392970752,'',"Cryopraxisis Criobiologia", "R. Francisco Marengo, 1312 - Tatuapé, São Paulo - SP, 03313-001");
    addMarker(-23.566777928677286, -46.639247415591655,'',"Colsan Sociedade Beneficente Coleta Sangue", "R. Castro Alves, 60 - 4º andar - Liberdade, São Paulo - SP, 01532-001");
    addMarker(-23.698888168568295, -46.55541488906392,'',"Colsan Hemocentro Regional de São Bernardo do Campo", "R. Pedro Jacobucci, 440 - Vila Euclides, São Bernardo do Campo - SP, 09725-750");
    addMarker(-23.467784688765356, -46.52484184315405,'',"Hemocentro São Lucas - Guarulhos", "R. Santo Antônio, 95 - Centro, Guarulhos - SP, 07110-110");
    addMarker(-23.585348721178484, -46.651333346621286,'',"Banco de Sangue do Pró-Sangue Dante Pazzanese", "Av. Dr. Dante Pazzanese, 500 - Vila Mariana, São Paulo - SP, 04012-180");
    addMarker(-23.492120141428327, -46.38883857452224,'',"OSS Santa Marcelina – Itaim Paulista", "Avenida Marechal Tito, 6035 - Jardim Jaragua (Itaim Paulista), São Paulo - SP, 08115-100");

    //Escreve o número de hemocentros na tela
    hemocentros.innerHTML = numero;

}