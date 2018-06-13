CREATE TABLE users(
  id VARCHAR(50) NOT NULL,
  first_name VARCHAR(50) NULL,
  last_name VARCHAR(50) NULL,
  email TEXT NOT NULL,
  password TEXT NOT NULL,
  role VARCHAR(15) NOT NULL,
  active boolean NOT NULL DEFAULT TRUE,
  created TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  modified TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT users_pk PRIMARY KEY(id),
  UNIQUE(email)
);