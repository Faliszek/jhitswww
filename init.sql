SET NAMES 'utf8' COLLATE 'utf8_general_ci';

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS images;
DROP TABLE IF EXISTS comments;

CREATE TABLE
IF NOT EXISTS `users` (
  `id` INT (6) AUTO_INCREMENT PRIMARY KEY,
  `email` TEXT,
  `password` TEXT
);



CREATE TABLE
IF NOT EXISTS `images`
(
  `id` INT
(6)
  AUTO_INCREMENT PRIMARY KEY,
`title` TEXT,
`description` TEXT,
`url` TEXT,
`created` INT
);

ALTER TABLE images CONVERT TO CHARACTER SET utf8;

CREATE TABLE
IF NOT EXISTS `comments` (
  `id` INT (6) AUTO_INCREMENT PRIMARY KEY,
  `image_id` INT (6),
  `author` TEXT,
  `text` TEXT,
  `created` BIGINT 
);


ALTER TABLE comments CONVERT TO CHARACTER SET utf8;


INSERT INTO users
  (email, password)
  VALUES (
    "admin@up.krakow.pl",
    MD5("admin")
  );

ALTER TABLE users CONVERT TO CHARACTER SET utf8;


INSERT INTO images
  (title, description, url, created)
VALUES
  ("Park Yosemite", "Park Narodowy Yosemite jest dość wdzięcznym celem wypraw weekendowych dla mieszkańców San Francisco i okolic oraz dla turystów odwiedzających Bay Area. Kilka lat temu pierwszy raz odwiedziłem to miejsce i przyznam, że nie zrobiło na mnie wrażenia, więc - gdy ktoś pytał mnie o zdanie wolałem polecić inne ciekawsze według mnie miejsca. Niedawno podczas odwiedzin moich znajomych zjechaliśmy wszystkie możliwe miejsca i pozostał nam tylko Park Yosemite - postanowiłem pomimo swoich uprzedzeń pojechać na 'łatwy' wypad i zobaczyć ile się zmieniło od ostatniego czasu.", "/img/el-capitan-2-min.jpg", 1527926964),
  ("Arktyka", "Co do Arktyki, chyba nikt nie ma wątpliwości, że to obszar obejmujący daleką północ. Granice Arktyki różnią się nieco w zależności od tego, jaką definicję zastosujemy, czy klimatyczną, czy też ekologiczną, a może geograficzną.
Bez względu na dany podział, obejmuje ona Ocean Arktyczny oraz wyspy na nim się znajdujące, w tym Grenlandię i Islandię. Do Arktyki zalicza się też często najdalej wysunięte na północ fragmenty kontynentów, należące do Rosji, Kanady, Stanów Zjednoczonych, Norwegii, Szwecji i Finlandii.", "/img/floating-ice-min.jpg", 1527926964),
  ("Syberia", "W Tajdze w zimie śnieg dochodzi do 1,5 metra wysokości i więcej. Tam nie ma przerw w mrozach, śnieg jest ciągle zamarznięty i stale go przybywa. Lód na rzece Irtysz ma grubość 2 m i więcej. Ruscy opowiadali, że najgorsza jest sytuacja wówczas, gdy lód z Irtysza w powodzi wydostaje się z koryta rzeki. Jeżeli woda wyjdzie z brzegów a olbrzymie kawały lodu popłyną na ląd, to mogą spowodować straszną katastrofę. Bryły lodu swoją siłą niszczą na swojej drodze wszystko.", "/img/foggy-forest-min.jpg", 1527926964),

  ("Jezioro Loch Ness", "Loch Ness jest największym objętościowo zbiornikiem słodkowodnym na Wyspach Brytyjskich. Jezioro jest długie i wąskie – liczy ok. 38 kilometrów długości i średnio 1,6 kilometra szerokości. Znajduje się 16 metrów powyżej poziomu morza. Wraz z innym jeziorem, Loch Oich, tworzy tzw. Kanał Kaledoński, znajdujący się w obniżeniu tektonicznym zwanym Glen More (Wielka Dolina). Brzegi zbiornika są dosyć strome, opadają na głębokość maksymalnie ok. 230 metrów. Do jeziora wpada wiele górskich strumieni, które nanoszą torf osadzający się na dnie. Nadaje to wodom ciemne, rdzawe zabarwienie, co powoduje że widoczność pod powierzchnią jest bardzo słaba. Loch Ness nie zamarza na zimę, a średnia roczna temperatura wód jeziora wynosi ok. 5,5 °C.", "/img/lake-min.jpg", 1527926964),
  ("Sahara", "Co więcej, zmiany następowały błyskawicznie, czasem nawet w ciągu zaledwie jednego pokolenia. Przynajmniej przez kilka tysięcy lat Sahara była soczyście zielona. Oczywiście nie wyglądała jak tropiki, ale z pewnością całą jej powierzchnię pokrywały sawanny, czyli trawiasto-drzewiaste tereny.
Starożytni Egipcjanie mogli więc uprawiać rolę i hodować zwierzęta, czyli żyć w dostatku. Przyczyną było przesunięcie się strefy oddziaływania mokrego monsunu bardziej na północ niż na to miejsce obecnie.
Na Saharę padało więc tak często, jak obecnie w krajach zachodniej i środkowej Afryki czy też basenu Morza Śródziemnego. Około 5 tysięcy lat temu miał miejsce przełom, który nie zakończył się aż po dziś dzień.
Z niewiadomych przyczyn monsunowe chmury odsunęły się na południe i jeśli docierały nad Saharę, to albo w ogóle nie przynosiły opadów, albo też padało jak na lekarstwo. Skutkiem było pojawienie się pustyni i to w ciągu zaledwie kilkudziesięciu lat.", "/img/lion-min.jpg", 1527926964),
  ("Kolejna wizyta w parku Yosemite", "Ostatnimi czasy mam lekkiego bzika na punkcie parków narodowych i ubzdurałem sobie, że skoro coś zostało ogłoszone parkiem narodowym to musi być piękne i koniecznie chcę to zobaczyć. A może nie ubzdurałem i faktycznie mam trochę racji?
Jako uzasadnienie zasłaniam się faktem, że parki często są tworzone przez prawdziwych pasjonatów natury, czego świetnym przykładem jest Moyenne Island na Seszelach. Naprawdę warto zapoznać się z tą historią. I choć wiem, że nie tylko parki są wyjątkowe, to jednak nie spotkałem jeszcze parku narodowego, w którym by mi się nie spodobało. Być może chodzę w zbyt nieturystyczne miejsca?
", "/img/yosemite-min.jpg", 1527926964);


INSERT INTO comments
  (image_id, author, text, created)
  VALUES('1', 'Anonim', 'Aliquam efficitur aliquet porttitor. Integer congue ligula elit, ullamcorper luctus lacus dapibus id. Sed vehicula,', 1527926964);

