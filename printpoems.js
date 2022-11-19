var tw = {
    /* [УСТАНОВКА] */
    container: "twrapIn", // ID контейнера пишущей машинки
    text: [ // Блок текста для отображения
        "Наша Аня громко плачет,",				
        "Уронила в воду мячик!",
        "Тише Анечка не плачь,",
        "Дельфин твой достанет мяч!",
        " ",
        " "

    ],
    delay: 150, // Задержка между каждым символом
    blockDelay: 1000, // Задержка между каждым блоком текста

    /* [МЕХАНИКА] */
    timer: null, // для удержания таймера
    pointer: 0, // Текущая позиция текста
    block: 0, // Текущий блок текста
    draw: function() {
        // tw.draw() : typewriter effect

        // Пишем следующий символ
        tw.pointer++;
        tw.container.innerHTML = tw.text[tw.block].substring(0, tw.pointer);
        if (tw.pointer < tw.text[tw.block].length) {
            tw.timer = setTimeout(tw.draw, tw.delay);
        }

        // Конец блока-печати и переход к слудующему
        else {
            tw.block++;
            if (tw.text[tw.block] == undefined) {
                tw.block = 0;
            }
            tw.timer = setTimeout(tw.reset, tw.blockDelay);
        }
    },

    reset: function() {
        // tw.reset : следующий блок текста

        tw.pointer = 0;
        tw.container.innerHTML = "";
        tw.timer = setTimeout(tw.draw, tw.delay);
    }
};

window.addEventListener("load", function() {
    tw.container = document.getElementById(tw.container);
    tw.draw();
});