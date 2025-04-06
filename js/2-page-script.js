let bookmark_1 = document.querySelector(".bookmark-1")
let bookmark_2 = document.querySelector(".bookmark-2")
let bookmark_3 = document.querySelector(".bookmark-3")
let bookmark_4 = document.querySelector(".bookmark-4")
let bookmark_5 = document.querySelector(".bookmark-5")
let bookmark_6 = document.querySelector(".bookmark-6")

let btn_1 = document.getElementById("1")
btn_1.addEventListener("click", () => {
    location.href = "../index.html"
})

let btn_4 = document.getElementById("4")
btn_4.addEventListener("click", () => {
    location.href = "../page/4-page.html"
})

let btn_3 = document.getElementById("3")
btn_3.addEventListener("click", () => {
    location.href = "../page/3-page.html"
})

let btn_5 = document.getElementById("5")
btn_5.addEventListener("click", () => {
    location.href = "../page/5-page.html"
})

bookmark_2.addEventListener("click", function(){
    document.getElementById("text").textContent = "Один из самых опасных видов травли в интернете. При нем ребенку постоянно присылают личные сообщения: угрожают, оскорбляют, высмеивают, ведут с ним психологические игры – например, задают вопросы и подлавливают на «неправильных» или «глупых» ответах. Одноклассники могут делать это в качестве «наказания», ради веселья или просто потому, что ученик им не нравится. Эта форма кибербуллинга особенно опасна тем, что у нее обычно нет внешних свидетелей. Если ребенок, столкнувшийся с домогательствами, не сообщает о них, ситуация может продолжаться долго, а агрессор имеет над ней полный контроль. Когда сообщения приходят постоянно, у ребенка нет времени сделать передышку. Такой прессинг может напугать ребенка и сделать неуверенным в себе."
    bookmark_1.style.backgroundColor = "#a4c3b2"
    bookmark_2.style.backgroundColor = "#6b9080"
    bookmark_3.style.backgroundColor = "#a4c3b2"
    bookmark_4.style.backgroundColor = "#a4c3b2"
    bookmark_5.style.backgroundColor = "#a4c3b2"
    bookmark_6.style.backgroundColor = "#a4c3b2"
    
})
bookmark_3.addEventListener("click", function(){
    document.getElementById("text").textContent = "Аутингом называют публикацию личной информации человека без его согласия. Причем к травле относится именно целенаправленная публикация такой информации с целью его унизить или шантажировать. Сюда же относятся и угрозы распространить личную информацию, передать ее учителям, полиции, использовать для создания клеветнических публикаций. Главный способ предотвратить аутинг – выкладывать минимум личной информации в общедоступное поле. Не публиковать в соцсетях номер телефона, не вывешивать адрес, не открывать свой аккаунт для незнакомых людей, не давать читать свои личные переписки третьим лицам. И, как и в случае с другими видами буллинга, нужна четкая позиция: угрозы аутингом – это травля. О ней нужно обязательно сообщать – родителям, психологу, на анонимный телефон помощи."
    bookmark_1.style.backgroundColor = "#a4c3b2"
    bookmark_2.style.backgroundColor = "#a4c3b2"
    bookmark_3.style.backgroundColor = "#6b9080"
    bookmark_4.style.backgroundColor = "#a4c3b2"
    bookmark_5.style.backgroundColor = "#a4c3b2"
    bookmark_6.style.backgroundColor = "#a4c3b2"
})
    
bookmark_4.addEventListener("click", function(){
    document.getElementById("text").textContent = "В отличие от аутинга, диссинг – это распространение информации, которая может опорочить человека. В оффлайне диссинг обычно существует в форме сплетен и слухов. При травле в соцсетях к нему добавляется создание «фотожаб», оскорбительных мемов, сфабрикованных текстов сообщений, скриншотов с недостоверной информацией. Чтобы запугать жертву, буллеры часто преувеличивают «компрометирующий» характер информации – например, пугают жертву, что за нахождение в определенных группах или выражение определенных взглядов ее исключат, «посадят», у ее родственников будут проблемы. "
    bookmark_1.style.backgroundColor = "#a4c3b2"
    bookmark_2.style.backgroundColor = "#a4c3b2"
    bookmark_3.style.backgroundColor = "#a4c3b2"
    bookmark_4.style.backgroundColor = "#6b9080"
    bookmark_5.style.backgroundColor = "#a4c3b2"
    bookmark_6.style.backgroundColor = "#a4c3b2"

})

bookmark_5.addEventListener("click", function(){
    document.getElementById("text").textContent = "В этом случае обидчик, получив доступ к аккаунту, меняет его данные (в том числе пароль и коды доступа, что делает невозможным его вернуть) и публикует нежелательный контент от имени владельца. Обычно цель буллера в том, чтобы выставить жертву в смешном, глупом виде. Но чем старше, тем опаснее могут быть эти действия – вплоть до написания агрессивных комментариев и сообщений от лица владельца, аутинга и размещения запрещенного контента. Фрейпинг – один из самых болезненных приемов кибербуллинга, он наносит ребенку огромное унижение. Учителю следует привлечь привлечь родителей к обучению ребенка навыкам цифровой безопасности (создание надежного пароля, использование двухфакторной идентификации, осторожность при посещении сайтов, которые требуют коды и пароли). Объясните классу, что резкое, необычное изменение данных аккаунта одноклассника может говорить о перехвате аккаунта."
    bookmark_1.style.backgroundColor = "#a4c3b2"
    bookmark_2.style.backgroundColor = "#a4c3b2"
    bookmark_3.style.backgroundColor = "#a4c3b2"
    bookmark_4.style.backgroundColor = "#a4c3b2"
    bookmark_5.style.backgroundColor = "#6b9080"
    bookmark_6.style.backgroundColor = "#a4c3b2"
})

bookmark_6.addEventListener("click", function(){
    document.getElementById("text").textContent = "Этот способ похож на фрейпинг и тоже связан с манипуляциями с аккаунтом. Только на этот раз агрессор не угоняет его, а создает новый, полностью идентичный оригинальному профилю жертвы. Там могут быть все доступные фотографии, тот же текст – или слегка измененный. С помощью «фейка» агрессор может троллить других, устраивать провокации или пытаться выставить владельца оригинального профиля на посмешище.В отличие фрейпинга, этот вид буллинга в интернете не требует сложных манипуляций – для этого достаточно иметь минимум доступной информации. Сложность борьбы с кетфишингом в том, что его не всегда можно вовремя отследить. Агрессор за подложным профилем может никак не контактировать с владельцем оригинала, а «окучивать» его знакомых или оставлять следы в группах, в которых он состоит."
    bookmark_1.style.backgroundColor = "#a4c3b2"
    bookmark_2.style.backgroundColor = "#a4c3b2"
    bookmark_3.style.backgroundColor = "#a4c3b2"
    bookmark_4.style.backgroundColor = "#a4c3b2"
    bookmark_5.style.backgroundColor = "#a4c3b2"
    bookmark_6.style.backgroundColor = "#6b9080"
})

bookmark_1.addEventListener("click", function(){
    document.getElementById("text").textContent = "Эта форма кибербуллинга проявляется в том, что жертву исключают из всех кругов общения в интернете. Группы, чаты, паблики – любая площадка, где происходит общение класса. При этом изгнание может быть (и часто бывает) молчаливым: человеку об этом даже не сообщают. Изгнание может быть и неявным – в этом случае сообщения жертвы просто игнорируются. Исключенного не допускают к играм, встречам и другим активностям."
    bookmark_1.style.backgroundColor = "#6b9080"
    bookmark_2.style.backgroundColor = "#a4c3b2"
    bookmark_3.style.backgroundColor = "#a4c3b2"
    bookmark_4.style.backgroundColor = "#a4c3b2"
    bookmark_5.style.backgroundColor = "#a4c3b2"
    bookmark_6.style.backgroundColor = "#a4c3b2"
    
})