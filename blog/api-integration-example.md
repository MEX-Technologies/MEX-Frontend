# Real-Time API Integration Examples

This post demonstrates how to integrate real-time APIs with charts and data tables.

## Basic API Chart

Fetch data from an API and display it in a chart:

```chart
{
  "type": "line",
  "api": {
    "url": "https://jsonplaceholder.typicode.com/posts",
    "method": "GET",
    "dataPath": "",
    "transform": "function(data) { return data.slice(0, 10).map((post, i) => ({ name: `Post ${i+1}`, value: post.id })); }"
  },
  "config": {
    "height": 350,
    "xAxis": "name",
    "series": [
      { "dataKey": "value", "name": "Post ID" }
    ]
  }
}
```

## API Data Table

Display API data in a table:

```table
{
  "api": {
    "url": "https://jsonplaceholder.typicode.com/users",
    "method": "GET",
    "dataPath": ""
  },
  "config": {
    "headers": ["id", "name", "email", "phone"],
    "showIndex": true
  }
}
```

## Auto-Refresh Chart

Chart that automatically refreshes every 30 seconds:

```chart
{
  "type": "bar",
  "api": {
    "url": "https://api.example.com/metrics",
    "method": "GET",
    "refreshInterval": 30000
  },
  "config": {
    "height": 350,
    "xAxis": "name",
    "series": [
      { "dataKey": "value", "name": "Metrics" }
    ]
  }
}
```

## API with Authentication

Using API with authentication headers:

```chart
{
  "type": "line",
  "api": {
    "url": "https://api.example.com/data",
    "method": "GET",
    "headers": {
      "Authorization": "Bearer YOUR_TOKEN_HERE",
      "X-API-Key": "YOUR_API_KEY"
    },
    "dataPath": "data.values"
  },
  "config": {
    "height": 350,
    "xAxis": "timestamp",
    "series": [
      { "dataKey": "value", "name": "Real-Time Data" }
    ]
  }
}
```

## POST Request Example

Using POST method with request body:

```table
{
  "api": {
    "url": "https://api.example.com/search",
    "method": "POST",
    "headers": {
      "Content-Type": "application/json"
    },
    "body": {
      "query": "example",
      "limit": 10
    },
    "dataPath": "results"
  },
  "config": {
    "headers": ["id", "title", "description"],
    "showIndex": false
  }
}
```

## Data Transformation

Transform API response data:

```chart
{
  "type": "pie",
  "api": {
    "url": "https://api.example.com/stats",
    "method": "GET",
    "dataPath": "categories",
    "transform": "function(data) { return data.map(cat => ({ name: cat.name, value: cat.count })); }"
  },
  "config": {
    "height": 400,
    "showLabels": true,
    "valueKey": "value"
  }
}
```

## Notes

- API endpoints must support CORS for browser requests
- Use `dataPath` to extract nested data from API responses
- `refreshInterval` is in milliseconds (1000 = 1 second)
- Transform functions receive the extracted data as parameter
- Always handle errors gracefully in production

