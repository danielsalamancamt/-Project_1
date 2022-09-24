--Crear tabla
CREATE TABLE CLIENT (
ID NUMBER(10) NOT NULL,
NAME VARCHAR2(4000) NULL,
EMAIL VARCHAR2(45) NULL,
AGE NUMBER(10) NULL,
PRIMARY KEY (ID));

-- GET
SELECT * FROM CLIENT WHERE ID = :id
https://gda7be1c46734d6-ck1a82e5ie6a36o6.adb.ca-toronto-1.oraclecloudapps.com/ords/admin/client/client/:id

-- GET
SELECT * FROM CLIENT

-- POST
BEGIN 
    INSERT INTO CLIENT(ID, NAME, EMAIL, AGE) VALUES(:id, :name, :email, :age);
    :status_code := 201;
END;

-- PUT
BEGIN 
    UPDATE CLIENT SET NAME= :name, EMAIL= :email, AGE= :age WHERE ID=:id;
    :status_code := 201;
END;

-- DELETE
BEGIN 
    DELETE FROM CLIENT WHERE ID=:id;
    :status_code := 204;
END;

https://gda7be1c46734d6-ck1a82e5ie6a36o6.adb.ca-toronto-1.oraclecloudapps.com/ords/admin/client/client



--Crear tabla
CREATE TABLE MESSAGE (
ID NUMBER(10) NOT NULL,
MESSAGETEXT VARCHAR2(4000) NULL,
PRIMARY KEY (ID));

-- GET
SELECT * FROM MESSAGE

-- POST
BEGIN 
    INSERT INTO MESSAGE(ID, MESSAGETEXT) VALUES(:id, :messagetext);
    :status_code := 201;
END;

-- PUT
BEGIN 
    UPDATE MESSAGE SET MESSAGETEXT= :messagetext WHERE ID=:id;
    :status_code := 201;
END;

-- DELETE
BEGIN 
    DELETE FROM MESSAGE WHERE ID=:id;
    :status_code := 204;
END;

https://gda7be1c46734d6-ck1a82e5ie6a36o6.adb.ca-toronto-1.oraclecloudapps.com/ords/admin/message/message

