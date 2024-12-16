You are building an API for a dashboard.

The dashboard needs to show two leaderboard-style tables.

Dashboard1:

Dashboard2:



The first table is: top 10 government agencies by transaction amounts spent:

| Rank | Agency      | Total Spent |
| ---- | ----------- | ----------- |
| 1    | Defense     | $1T         |
| 2    | Health      | $100B       |
| ...  | ...         | ...         |
| 10   | Agriculture | $1B         |


The second table is: top 10 companis by transaction amounts received

| Rank | Company          | Total  Received |
| ---- | ---------------- | --------------- |
| 1    | Lockheed Martin  | $10B            |
| 2    | General Electric | $1B             |
| ...  | ...              | ...             |
| 10   | CSC              | $100M           |


You have three CSV files to load the data from:

* Agencies (10,000 records)
* Companies (500,000 records)
* Transactions (10,000,000 records)


Data schema:
* Agencies: agency_id INTEGER/PK, parent_agency_id INTEGER, agency_name STRING, total_spent FLOAT
* Companies: company_id INTEGER/PK, parent_company_id INTEGER, company_name STRING, total_received FLOAT
* Transactions: transaction_id INTEGER/PK, agency_id INTEGER, company_id INTEGER, transacted_on DATETIME, amount 

FLOAT

Other details:
* There are approximately 1000 new transactions added every day
* The table should display the latest updated totals shortly after new transactions are received

Kashish Gupta and Charles Chandler