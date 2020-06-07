CREATE TABLE `seat_maps` (
  `flight_no` varchar(10) NOT NULL,
  `seat_map` json NOT NULL,
  `origin_code` varchar(10) NOT NULL,
  `destination_code` varchar(10) NOT NULL,
  PRIMARY KEY (`flight_no`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
