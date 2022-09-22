--Crear tabla
"CREATE TABLE ADMIN.LIBRARY 
    ( 
     ID          NUMBER , 
     TARGET      VARCHAR2 (20) , 
     CAPACITY    NUMBER , 
     CATEGORY_ID NUMBER , 
     NAME        VARCHAR2 (400) 
    ) 
    LOGGING"

-- GET
SELECT * FROM LIBRARY

-- POST
BEGIN 
    INSERT INTO LIBRARY(ID,TARGET,CAPACITY,CATEGORY_ID, NAME)VALUES(:id,:target,:capacity,:category_id,:name);
    :status_code := 201;
END;

-- PUT
BEGIN 
    UPDATE LIBRARY SET TARGET=:target,CAPACITY=:capacity, CATEGORY_ID=:category_id, NAME=:name where ID=:id;
    :status_code := 201;
END;

-- DELETE
BEGIN 
    DELETE FROM LIBRARY WHERE ID=:id;
    :status_code := 204;
END;

Link:
https://gda7be1c46734d6-ck1a82e5ie6a36o6.adb.ca-toronto-1.oraclecloudapps.com/ords/admin/library/library