# gamefi-gem
## this is link api document for user by case

**Show User**
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
