CREATE TABLE canvas_pixels (
    x INT NOT NULL,
    y INT NOT NULL,
    color VARCHAR(7) NOT NULL, -- To store HEX color codes
    PRIMARY KEY (x, y) -- Ensures unique pixels per coordinate
);
