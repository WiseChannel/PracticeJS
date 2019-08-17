

const HTTP = {};

//Объект XMLHttpRequest никогда не стандартизировался, и процесс его создания в Internet Explorer отличается от такового в других платформах. (К счастью, прикладной интерфейс для работы с объектом XMLHttpRequest после его создания одинаков для всех платформ.)

const request = new XMLHttpRequest();

let request = new ActiveXObject("Msxml2.XMLHTTP");

// Попробуем использовать следующие функции, создающие объект XMLHttpRequest. HTTP._factories = [
    function() { return new XMLHttpRequest()};
    function() { return new ActiveXObject("Msxml2.XMLHTTP")};
     function() { return new ActiveXObject("Microsoft.XMLHTTP")}; 
    
    // Когда будет обнаружена работоспособная функция, она будет сохранена здесь. HTTP._factory = null;
          // Создает и возвращает новый объект XMLHttpRequest.
        //
    // При первом обращении к функции опробываются все функции из списка, пока
    // не будет найдена та, что вернет непустое значение и не возбудит исключение.
    // После того как будет обнаружена работоспособная функция, ссылка на нее // запоминается для последующего использования.
    //
    HTTP.newRequest = function() {
    if (HTTP._factory != null) return HTTP._factory();
            for(var i = 0; i < HTTP._factories.length; i++) {
                try {
                    var factory = HTTP._factories[i];
                    var request = factory();
                    if (request != null) {
                        HTTP._factory = factory;
                        return request;
                    }
    }
    catch(e) {
    continue; }
    }
    // Если попав сюда, сценарию не удалось обнаружить подходящую функцию для создания // объекта, необходимо возбудить исключение в этом и всех последующих вызовах. HTTP._factory = function() {
    throw new Error("Объект XMLHttpRequest не поддерживается"); }
            HTTP._factory(); // Возбудить исключение
        }



request.setRequestHeader("User􏰀Agent", "XMLHttpRequest"); request.setRequestHeader("Accept􏰀Language", "en"); request.setRequestHeader("If􏰀Modified􏰀Since", lastRequestTime.toString());