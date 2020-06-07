CREATE TABLE `flights`  (
  `flight_id` varchar(36) NOT NULL,
  `flight_no` varchar(10) NOT NULL,
  `flight_date` datetime(0) NULL,

  PRIMARY KEY (`flight_id`),

  FOREIGN KEY(`flight_no`)
        REFERENCES seat_maps(`flight_no`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
