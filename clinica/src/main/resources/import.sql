
INSERT INTO service (name, description) VALUES ('Consulta General', 'Consulta médica general');
INSERT INTO service (name, description) VALUES ('Odontología', 'Servicios dentales');
INSERT INTO service (name, description) VALUES ('Pediatría', 'Atención médica para niños');

INSERT INTO product (name, description, price, service_id) VALUES ('Paracetamol', 'Analgesico', 5.99, 1);
INSERT INTO product (name, description, price, service_id) VALUES ('Ibuprofeno', 'Antiinflamatorio', 7.99, 1);
INSERT INTO product (name, description, price, service_id) VALUES ('Cepillo Dental', 'Cepillo dental', 2.99, 2);
INSERT INTO product (name, description, price, service_id) VALUES ('Pasta Dental', 'Pasta dental', 3.99, 2);
INSERT INTO product (name, description, price, service_id) VALUES ('Jarabe para la Tos', 'Jarabe para tos', 8.99, 3);