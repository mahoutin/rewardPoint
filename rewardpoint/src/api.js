export default function() {
    // simulates data coming from a database.
    return Promise.resolve(
      [
          {
            custid: 1,
            name: "Nancy",
            amt: 170,
            transactionDt: "05-01-2019"
          },
          {
            custid: 1,
            name: "Nancy",
            amt: 85,
            transactionDt: "05-21-2019"
          },
          {
            custid: 1,
            name: "Nancy",
            amt: 86,
            transactionDt: "05-21-2019"
          },
          {
            custid: 1,
            name: "Nancy",
            amt: 4,
            transactionDt: "06-01-2019"
          },
          {
            custid: 1,
            name: "Nancy",
            amt: 200,
            transactionDt: "06-21-2019"
          },
          {
            custid: 1,
            name: "Nancy",
            amt: 120,
            transactionDt: "07-01-2019"
          },
          {
            custid: 1,
            name: "Nancy",
            amt: 2,
            transactionDt: "07-04-2019"
          },
          {
            custid: 1,
            name: "Nancy",
            amt: 89,
            transactionDt: "07-03-2019"
          },
          {
            custid: 1,
            name: "Nancy",
            amt: 634,
            transactionDt: "07-21-2019"
          },
          {
            custid: 2,
            name: "Bill",
            amt: 72,
            transactionDt: "05-01-2019"
          },
          {
            custid: 2,
            name: "Bill",
            amt: 134,
            transactionDt: "05-21-2019"
          },
          {
            custid: 2,
            name: "Bill",
            amt: 12,
            transactionDt: "06-01-2019"
          },
          {
            custid: 2,
            name: "Bill",
            amt: 72,
            transactionDt: "06-21-2019"
          },
          {
            custid: 2,
            name: "Bill",
            amt: 220,
            transactionDt: "07-01-2019"
          },
          {
            custid: 2,
            name: "Bill",
            amt: 234,
            transactionDt: "07-21-2019"
          },
          {
            custid: 3,
            name: "Laurence",
            amt: 120,
            transactionDt: "06-21-2019"
          }
      ]
    );
  };