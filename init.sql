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
`created` BIGINT
);

CREATE TABLE
IF NOT EXISTS `comments` (
  `id` INT (6) AUTO_INCREMENT PRIMARY KEY,
  `image_id` INT (6),
  `author` TEXT,
  `text` TEXT,
  `created` BIGINT
);


INSERT INTO users
  (email, password)
  VALUES (
    "admin@up.krakow.pl",
    MD5("admin")
  );

INSERT INTO images
  (title, description, url, created)
VALUES
  ("Earth and moon", "Lorem ipsum", "/img/earth-and-moon-min.jpg", ROUND(UNIX_TIMESTAMP(CURTIME(4)) * 1000)),
  ("El capitan 2", "Lorem ipsum", "/img/el-capitan-2-min.jpg", ROUND(UNIX_TIMESTAMP(CURTIME(4)) * 1000)),
  ("El capitan", "Lorem ipsum", "/img/el-capitan-min.jpg", ROUND(UNIX_TIMESTAMP(CURTIME(4)) * 1000)),
  ("Elepehant", "Lorem ipsum", "/img/elephant-min.jpg", ROUND(UNIX_TIMESTAMP(CURTIME(4)) * 1000)),
  ("Floating ice", "Lorem ipsum", "/img/floating-ic-min.jpg", ROUND(UNIX_TIMESTAMP(CURTIME(4)) * 1000)),
  ("Foggy forest", "Lorem ipsum", "/img/foggy-forest-img.jpg", ROUND(UNIX_TIMESTAMP(CURTIME(4)) * 1000)),
  ("Lake", "Lorem ipsum", "/img/lake-min.jpg", ROUND(UNIX_TIMESTAMP(CURTIME(4)) * 1000)),
  ("Lion", "Lorem ipsum", "/img/lion-min.jpg", ROUND(UNIX_TIMESTAMP(CURTIME(4)) * 1000)),
  ("Milky way", "Lorem ipsum", "/img/milky-way-min.jpg", ROUND(UNIX_TIMESTAMP(CURTIME(4)) * 1000)),
  ("Mountain range", "Lorem ipsum", "/img/mountain-range-min.jpg", ROUND(UNIX_TIMESTAMP(CURTIME(4)) * 1000)),
  ("Sierra", "Lorem ipsum", "/img/sierra-min.jpg", ROUND(UNIX_TIMESTAMP(CURTIME(4)) * 1000)),
  ("Sierra", "Lorem ipsum", "/img/sierra2-min.jpg", ROUND(UNIX_TIMESTAMP(CURTIME(4)) * 1000)),
  ("Yosemite", "Lorem ipsum", "/img/yosemite-min.jpg", ROUND(UNIX_TIMESTAMP(CURTIME(4)) * 1000));


INSERT INTO comments
  (image_id, author, text, created)
  VALUES('2', 'Anonim', 'Bardzo ładny obrazek', ROUND(UNIX_TIMESTAMP(CURTIME(4)) * 1000));

