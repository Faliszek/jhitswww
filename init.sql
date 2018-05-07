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
  ("El capitan 2", "Suspendisse sed dignissim sapien, sodales egestas lorem. Maecenas dignissim orci quis purus ornare sodales. Etiam accumsan lacus nec risus consequat hendrerit. Ut ullamcorper odio quis ex consequat tincidunt quis sit amet purus. Fusce viverra, risus.", "/img/el-capitan-2-min.jpg", UNIX_TIMESTAMP()),
  ("El capitan", "Maecenas ac pretium mauris. Suspendisse mollis tortor in fringilla rhoncus. Sed vitae ipsum a sapien sagittis pellentesque. Nulla id eros imperdiet, pellentesque orci et, porta leo. Morbi nec lectus ante. Sed sit amet tempor lacus.", "/img/el-capitan-min.jpg", UNIX_TIMESTAMP()),
  ("Elepehant", "Cras et libero id eros tincidunt lobortis. Cras ultrices at massa ut rhoncus. Suspendisse id finibus mi. Suspendisse faucibus finibus interdum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque.", "/img/elephant-min.jpg", UNIX_TIMESTAMP()),
  ("Floating ice", "Aliquam efficitur aliquet porttitor. Integer congue ligula elit, ullamcorper luctus lacus dapibus id. Sed vehicula, elit ac volutpat laoreet, augue lectus rhoncus enim, eget tincidunt ante massa in odio. Aliquam vitae maximus tellus. Maecenas id.", "/img/floating-ic-min.jpg", UNIX_TIMESTAMP()),
  ("Foggy forest", "Aliquam efficitur aliquet porttitor. Integer congue ligula elit, ullamcorper luctus lacus dapibus id. Sed vehicula, elit ac volutpat laoreet, augue lectus rhoncus enim, eget tincidunt ante massa in odio. Aliquam vitae maximus tellus. Maecenas id.", "/img/foggy-forest-img.jpg", UNIX_TIMESTAMP()),
  ("Lake", "Cras et libero id eros tincidunt lobortis. Cras ultrices at massa ut rhoncus. Suspendisse id finibus mi. Suspendisse faucibus finibus interdum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque.", "/img/lake-min.jpg", UNIX_TIMESTAMP()),
  ("Lion", "Aliquam efficitur aliquet porttitor. Integer congue ligula elit, ullamcorper luctus lacus dapibus id. Sed vehicula, elit ac volutpat laoreet, augue lectus rhoncus enim, eget tincidunt ante massa in odio. Aliquam vitae maximus tellus. Maecenas id.", "/img/lion-min.jpg", UNIX_TIMESTAMP()),
  ("Milky way", "LSuspendisse sed dignissim sapien, sodales egestas lorem. Maecenas dignissim orci quis purus ornare sodales. Etiam accumsan lacus nec risus consequat hendrerit. Ut ullamcorper odio quis ex consequat tincidunt quis sit amet purus. Fusce viverra, risus.", "/img/milky-way-min.jpg", UNIX_TIMESTAMP()),
  ("Mountain range", "Cras et libero id eros tincidunt lobortis. Cras ultrices at massa ut rhoncus. Suspendisse id finibus mi. Suspendisse faucibus finibus interdum. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Pellentesque.", "/img/mountain-range-min.jpg", UNIX_TIMESTAMP()),
  ("Sierra", "Aliquam efficitur aliquet porttitor. Integer congue ligula elit, ullamcorper luctus lacus dapibus id. Sed vehicula, elit ac volutpat laoreet, augue lectus rhoncus enim, eget tincidunt ante massa in odio. Aliquam vitae maximus tellus. Maecenas id.", "/img/sierra-min.jpg", UNIX_TIMESTAMP()),
  ("Sierra", "LMaecenas ac pretium mauris. Suspendisse mollis tortor in fringilla rhoncus. Sed vitae ipsum a sapien sagittis pellentesque. Nulla id eros imperdiet, pellentesque orci et, porta leo. Morbi nec lectus ante. Sed sit amet tempor lacus.", "/img/sierra2-min.jpg", UNIX_TIMESTAMP()),
  ("Yosemite", "Maecenas ac pretium mauris. Suspendisse mollis tortor in fringilla rhoncus. Sed vitae ipsum a sapien sagittis pellentesque. Nulla id eros imperdiet, pellentesque orci et, porta leo. Morbi nec lectus ante. Sed sit amet tempor lacus.", "/img/yosemite-min.jpg", UNIX_TIMESTAMP());


INSERT INTO comments
  (image_id, author, text, created)
  VALUES('2', 'Anonim', 'Bardzo ładny obrazek', UNIX_TIMESTAMP());

