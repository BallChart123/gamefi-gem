# gamefi-gem





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



