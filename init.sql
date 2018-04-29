CREATE TABLE
IF NOT EXISTS `images`
(
  `id` INT
(6)
  AUTO_INCREMENT PRIMARY KEY,
`title` TEXT,
`description` TEXT,
`url` TEXT,
`created` TIMESTAMP
);
INSERT INTO images
  (title, description, url, created)
VALUES
  ("Earth and moon", "Lorem ipsum", "/img/earth-and-moon-min.jpg", NOW()),
  ("El capitan 2", "Lorem ipsum", "/img/el-capitan-2-min.jpg", NOW()),
  ("El capitan", "Lorem ipsum", "/img/el-capitan-min.jpg", NOW()),
  ("Elepehant", "Lorem ipsum", "/img/elephant-min.jpg", NOW()),
  ("Floating ice", "Lorem ipsum", "/img/floating-ic-min.jpg", NOW()),
  ("Foggy forest", "Lorem ipsum", "/img/foggy-forest-img.jpg", NOW()),
  ("Lake", "Lorem ipsum", "/img/lake-min.jpg", NOW()),
  ("Lion", "Lorem ipsum", "/img/lion-min.jpg", NOW()),
  ("Milky way", "Lorem ipsum", "/img/milky-way-min.jpg", NOW()),
  ("Mountain range", "Lorem ipsum", "/img/mountain-range-min.jpg", NOW()),
  ("Sierra", "Lorem ipsum", "/img/sierra-min.jpg", NOW()),
  ("Sierra", "Lorem ipsum", "/img/sierra2-min.jpg", NOW()),
  ("Yosemite", "Lorem ipsum", "/img/yosemite-min.jpg", NOW());

