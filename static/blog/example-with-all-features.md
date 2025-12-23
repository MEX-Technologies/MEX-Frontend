# Example Blog Post with All Features

This post demonstrates all the features of the enhanced markdown renderer.

## Charts

### Line Chart

```chart
{
  "type": "line",
  "data": [
    { "name": "Jan", "sales": 4000, "revenue": 2400 },
    { "name": "Feb", "sales": 3000, "revenue": 1398 },
    { "name": "Mar", "sales": 2000, "revenue": 9800 },
    { "name": "Apr", "sales": 2780, "revenue": 3908 },
    { "name": "May", "sales": 1890, "revenue": 4800 }
  ],
  "config": {
    "height": 400,
    "series": [
      { "dataKey": "sales", "name": "Sales", "color": "#FF6B35" },
      { "dataKey": "revenue", "name": "Revenue", "color": "#000000" }
    ]
  }
}
```

### Bar Chart

```chart
{
  "type": "bar",
  "data": [
    { "name": "Q1", "value": 400 },
    { "name": "Q2", "value": 300 },
    { "name": "Q3", "value": 200 },
    { "name": "Q4", "value": 278 }
  ],
  "config": {
    "series": [
      { "dataKey": "value", "name": "Quarterly Sales" }
    ]
  }
}
```

## Flow Diagrams

Here's a payment flow diagram:

```flow
{
  "nodes": [
    { "id": "1", "data": { "label": "User Initiates Payment" }, "position": { "x": 100, "y": 100 } },
    { "id": "2", "data": { "label": "Validate Transaction" }, "position": { "x": 300, "y": 100 } },
    { "id": "3", "data": { "label": "Process on Blockchain" }, "position": { "x": 500, "y": 100 } },
    { "id": "4", "data": { "label": "Confirm Receipt" }, "position": { "x": 700, "y": 100 } }
  ],
  "edges": [
    { "id": "e1-2", "source": "1", "target": "2" },
    { "id": "e2-3", "source": "2", "target": "3" },
    { "id": "e3-4", "source": "3", "target": "4" }
  ],
  "config": {
    "height": 300,
    "showMinimap": true
  }
}
```

## CSV Data Tables

```csv
Name,Age,Country,Amount
John,30,USA,1000
Jane,25,Canada,1500
Bob,35,Mexico,800
Alice,28,USA,1200
```

## JSON Data Tables

```table
{
  "data": [
    { "Payment Method": "USDC", "Users": 45000, "Volume": "$2.5B" },
    { "Payment Method": "USDT", "Users": 35000, "Volume": "$1.8B" },
    { "Payment Method": "Cards", "Users": 20000, "Volume": "$1.2B" }
  ],
  "config": {
    "headers": ["Payment Method", "Users", "Volume"],
    "showIndex": false
  }
}
```

## Regular Markdown Tables

| Feature | Traditional Banking | Blockchain Banking |
|---------|-------------------|-------------------|
| Speed | 3-5 days | Minutes |
| Cost | 5-10% | <1% |
| Availability | Business hours | 24/7 |
| Access | Bank account required | Internet only |

## Conclusion

All these features work together to create rich, interactive blog posts!

