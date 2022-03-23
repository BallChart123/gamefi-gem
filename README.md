# gamefi-gem



### sequence diagram

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

``` mermaid

classDiagram
    class transaction{
        +transaction_id
        book
        +journal_id
        debit
        credit
        account_id
        timestamp
        datetime


    }
    class user {
        +account_id
        firstname
        lastname
        
    }
    class balance {
        +account_id
        +transaction_id
        +balance
        created_at
        book

    }
    class journal{
        +journal_id
        book
        datetime
        transaction

    }
    class book {
        +id
        name
    }
   
  journal --* transaction
  book --* balance
  book --* journal
  balance --* transaction
  user --* book
```
