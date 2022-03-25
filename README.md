# gamefi-gem
*  testing is not done yet so if i want to improve using jest to make it all done
* i have problem join query so i can do like this :(

### sequence diagram
##
this diagram showing about gem double entry bookeeping 


``` mermaid 
sequenceDiagram
     User A->>+UserManagement: Verify User Permission
     UserManagement ->>+User B: Verified User Do Trasfer
     User B ->>+GemService :  Transfer Gem From User A To User B
     GemService->>+Database:   Calculate Assets (Debit / Credit)
     GemService->>+Database:  Save Transaction
     GemService->>+User B:  Transaction  User B show + Credit
    GemService->>+User A:  Transaction  User A show - Debit
```


### Data Flow
#
### transaction : catch up log by timestamp & what going on

### user_mangement : table collect information user

### user_transaction : to calcuate transaction between user



``` mermaid
classDiagram
    class transaction{
        +id
        datetime
        timestamp
    }
    class user_transaction {
       +id
        user_id
        created_at
       transaction_id
        transaction_type
        amount
    }
    class user_mangement {
       +id
       username
       email
       firstname
       lastname
       role
       created_at
    }
transaction --o user_transaction
user_mangement --o  transaction

```
# how to up service & dabase
to contributed service & database
```
docker-compose up
```

to stop service & database

```
docker-compose down
```

to migrate database
```
yarn migrate:generate<filename>
```


to up migrate to database
```
yarn migrate:run
```

## API Document
#

**Show User By Id**
----
  Returns json data about a single user.

* **URL**

  /users/:id

* **Method:**

  `GET`
  
*  **URL Params**

   **Required:**
 
   `id=[uuid]`

* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `{ id : 12, name : "Michael Bloom" }`
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "User doesn't exist" }`

  OR

  * **Code:** 401 UNAUTHORIZED <br />
    **Content:** `{ error : "You are unauthorized to make this request." }`

* **Sample Call:**

  ```javascript
    
      url: "/users/1",
      dataType: "json",
      type : "GET",
      success : function(r) {
        console.log(r);
      }
    });
  ```


**Show List User**
----
  Returns json data about  list user.

* **URL**

  /users/

* **Method:**

  `GET`
  
*  **URL Params**

    None 
   
* **Data Params**

  None

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `[{ id : 12, name : "Michael Bloom" }]`
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "User doesn't exist" }`

* **Sample Call:**

  ```javascript
    [{
		"id" : "7c0a559c-97db-45c3-b720-1fa1aa6c9122",
		"username" : "test",
		"email" : "aaa@mail.com",
		"firstname" : "a",
		"lastname" : "b",
		"role" : "admin",
		"created_at" : "2022-03-24T18:12:27.594Z"
	},
	{
		"id" : "6904d5a7-e0d4-42cc-9dbc-9c1f2ad2947e",
		"username" : "test2",
		"email" : "bbb@mail.com",
		"firstname" : "ccc",
		"lastname" : "dddd",
		"role" : "member",
		"created_at" : "2022-03-24T18:16:51.563Z"
	}]

  ```




**Transfer between user**
----
  Returns json data about  list user.

* **URL**

  /v1/transtion/transfer

* **Method:**

  `POST`
  
*  **URL Params**

    None 
   
* **Data Params**

  **Body:**`{user_from : uuid , user_to : uuid , amount : number}` 

* **Success Response:**

  * **Code:** 200 <br />
    **Content:** `[{ id : 12, timestamp : timestamp, user_id : uuid }]`
 
* **Error Response:**

  * **Code:** 404 NOT FOUND <br />
    **Content:** `{ error : "User doesn't exist" }`

* **Sample Call:**

  ```javascript
    {
      "id":"9f6a39ac-ae83-49c5-a145-bc91eb4c1192",
		"user_id" : "7c0a559c-97db-45c3-b720-1fa1aa6c9122",
		"timestamp" : "2022-03-24T18:12:27.594Z"
	},
	

  ```

