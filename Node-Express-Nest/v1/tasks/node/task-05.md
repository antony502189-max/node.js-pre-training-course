---
topic: "NODE JS"
taskNumber: 5
---

# Task 05: Event-Driven ToDo Server with Logging & Analytics

Extend your Task 04 HTTP server by adding an **event-driven layer** using Node's built-in `EventEmitter`. Each CRUD action should emit events that can be logged and tracked. Add new endpoints for analytics and event history.

## Requirements

### Core Functionality

1. **Extend TodoServer**

   - Inherit from `EventEmitter`
   - Keep all CRUD features from Task 04
   - Maintain consistent JSON responses and error handling

2. **Event System**

   - Emit events for key operations
   - Support multiple listeners per event
   - Track analytics and log activity

3. **Events to Implement**
   | Event | Trigger | Data Passed |
   | ----------------- | -------------------------------------- | ------------------------------------ |
   | `todoCreated` | After POST /todos | `{ todo, timestamp, requestInfo }` |
   | `todoUpdated` | After PUT /todos/:id | `{ oldTodo, newTodo, changes }` |
   | `todoDeleted` | After DELETE /todos/:id | `{ todo, timestamp, requestInfo }` |
   | `todoViewed` | After GET /todos/:id | `{ todo, timestamp, requestInfo }` |
   | `todosListed` | After GET /todos | `{ todos, count, filters }` |
   | `todoNotFound` | Any invalid ID access | `{ todoId, operation }` |
   | `validationError` | Invalid JSON or data | `{ errors, data, requestInfo }` |
   | `serverError` | Unexpected exception | `{ error, operation, requestInfo }` |

### Enhanced Endpoints

- **GET `/analytics`** → Return counters (created, updated, deleted, viewed, errors, daily stats)
- **GET `/events?last=n`** → Return last `n` emitted events (default: 10)

### Implementation Notes

- Create a simple **ConsoleLogger** for event output
- Implement **AnalyticsTracker** to count operations and errors
- Keep recent events in memory (max 100) for `/events`
- Event payloads must include `timestamp` and `requestInfo` (method, url, userAgent, ip)

### Expected Responses

#### Analytics Example

```json
{
  "success": true,
  "data": {
    "totalCreated": 12,
    "totalUpdated": 5,
    "totalDeleted": 3,
    "totalViews": 8,
    "errors": 1,
    "dailyStats": {
      "2024-01-01": {
        "created": 2,
        "updated": 1,
        "deleted": 0,
        "views": 3
      }
    }
  }
}
```

Events Example

```json
{
  "success": true,
  "data": [
    {
      "eventType": "todoCreated",
      "timestamp": "2024-01-01T10:00:00.000Z",
      "data": { "todo": { "id": 1, "title": "New Todo" } }
    }
  ]
}
```

Testing Your Implementation
Run the provided tests:

```bash
node task-05-test.js
```

The test suite will check:
Events are emitted for all CRUD actions
Analytics counters update correctly
Recent events are retrievable
Proper error events are fired on invalid input
Manual Testing Examples

```
node task-05.js

curl http://localhost:3000/todos
curl -X POST http://localhost:3000/todos -H "Content-Type: application/json" -d '{"title":"Emit Test"}'
curl http://localhost:3000/analytics
curl http://localhost:3000/events?last=5
```

## Your Tasks

1. **Enhance TodoServer**

- Extend with EventEmitter
- Emit and handle all listed events

2. **Implement Loggers**

- Console logging for each event
- (Optional) File-based logger for persistence

3. **Add Analytics**

- Track counts for created, updated, deleted, viewed, and errors
- Maintain daily stats

4. **Create New Endpoints**

- /analytics for stats
- /events for recent history

## Expected Output Format

```
=== Todo Server with Events Started ===
POST /todos -> 201 Created | emitted: todoCreated
GET /todos/1 -> 200 OK | emitted: todoViewed
PUT /todos/1 -> 200 OK | emitted: todoUpdated
DELETE /todos/1 -> 200 OK | emitted: todoDeleted
GET /todos/999 -> 404 Not Found | emitted: todoNotFound
```

## Document Your Work

- Write your notes into `solutions/task-05.txt` including:
- Description of your event system
- How analytics and logging were implemented
- Instructions to run and test your solution
