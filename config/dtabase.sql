CREATE DATABASE TiendaDB;
USE TiendaDB;

CREATE TABLE Categorias (
    Id INT PRIMARY KEY AUTO_INCREMENT,
    Nombre VARCHAR(100) NOT NULL
);

CREATE TABLE Subcategorias (
    Id INT PRIMARY KEY AUTO_INCREMENT,
    Nombre VARCHAR(100) NOT NULL,
    CategoriaId INT NOT NULL,
    FOREIGN KEY (CategoriaId) REFERENCES Categorias(Id)
);

CREATE TABLE Productos (
    Id INT PRIMARY KEY AUTO_INCREMENT,
    Nombre VARCHAR(100) NOT NULL,
    Precio DECIMAL(10,2) NOT NULL,
    Stock INT NOT NULL,
    SubcategoriaId INT NOT NULL,
    FechaIngreso DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (SubcategoriaId) REFERENCES Subcategorias(Id)
);

INSERT INTO Categorias (Nombre) VALUES 
('Electrónica'), ('Hogar'), ('Deportes');

INSERT INTO Subcategorias (Nombre, CategoriaId) VALUES 
('Celulares', 1),
('Computadoras', 1),
('Cocina', 2),
('Limpieza', 2),
('Fitness', 3),
('Ciclismo', 3);

INSERT INTO Productos (Nombre, Precio, Stock, SubcategoriaId) VALUES 
('iPhone 14', 999.99, 10, 1),
('Laptop Dell', 799.50, 5, 2),
('Licuadora Oster', 69.90, 20, 3),
('Detergente Ariel', 5.25, 100, 4),
('Bicicleta Ruta', 450.00, 7, 6),
('Mancuernas 10kg', 35.00, 15, 5);
